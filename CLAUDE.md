# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

A SvelteKit + Firebase app for editing and browsing liturgical texts of the
Coptic Orthodox Church, stored as a tree of nodes (Library → Collection →
Book → Part → Chapter → Section → Paragraph → Clause). Each node's content is
a `MultilingualText` with a `value` per language.

## Seed data ("initializer") architecture

Seed content lives under `src/lib/utilities/initializer/`. The pattern:

- `constructors.ts` provides `makeMultilingualTextWithId(...)` /
  `makeMultilingualTextWithIdWithoutGreek(...)` to build a `MultilingualText`
  from positional `(id, langId, value, ...)` tuples, and `registerNode<Basenode>({...})`
  wraps a `Basenode` literal. Both **auto-register** the object into
  `registry.ts`'s `pendingTexts` / `pendingNodes` arrays — you don't need to
  wire anything into `initializer.ts` manually. `initializer.ts` simply
  imports every seed file for its side effects and iterates the two pending
  arrays, calling `createOrReplace` on each.
- IDs are fixed, pre-generated UUIDv4s (uppercase), not runtime-generated —
  this keeps `createOrReplace` idempotent across app restarts. Generate new
  ones with `python -c "import uuid; print(str(uuid.uuid4()).upper())"`.
- A node's `users: id[]` field is **not** a Firebase user list — it holds the
  id(s) of the node's parent(s) in the tree (see `generator/nodes.ts`, which
  passes the parent's own id down as `users` when creating children). Set it
  to `[parentNode.id]`.
- Parent → child links go through the parent's `children: id[][]` (each
  entry is one slot, itself an array of alternative/sibling ids at that
  position). When a child is defined in the same file as its parent, just
  reference the child's exported const directly. When parent and child live
  in different files and each needs the other's id (parent needs child's id
  for `children`, child needs parent's id for `users`), importing both ways
  creates a circular import that crashes (TDZ). Resolve it by having only
  one file import the other's export; the other side references the known
  id as a literal UUID string with a one-line comment naming which constant
  it belongs to.
- When a **new top-level Part file** needs to become a sibling under a Book
  that already has other Part-file siblings (e.g. `part-the-*.ts` files
  under `bookTheLiturgyAccordingToBasil`), don't have the new Part file
  append itself to the parent's `children` (e.g. via
  `book.children = [...book.children, [newPart.id]]`). That relies on
  `initializer.ts`'s import order, which gets silently reordered
  alphabetically by the formatter/linter and will drop siblings whose
  side-effect import now runs later. Instead, follow the pattern already
  used for `part-the-reception-of-a-hierarch.ts`: the new Part file only
  defines its own text/node (`users: [book.id]`, nothing else); the file
  that "owns" the Book's `children` (currently
  `sections-the-liturgy-according-to-basil.ts`) explicitly imports every
  sibling Part's exported const and lists them all in one reassignment.
  This is order-independent because ES module imports guarantee the
  imported module finishes evaluating first, regardless of
  `initializer.ts`'s own import order.
- **Never duplicate a repeating node or MultilingualText.** When content or
  structure (a node, a text, a whole subtree) recurs in more than one place
  in the tree, don't create a second copy of the object — reference the
  existing exported const from wherever it's needed, and move the shared
  object's definition into `src/lib/utilities/initializer/shared/` (see
  `shared/clauses-someone-says.ts` and `shared/section-the-call-to-prayer.ts`
  for the pattern) so every parent can import and reuse the same underlying
  node/text.
  **Before creating any new node or text, check whether it already exists**:
  grep `src/lib/utilities/initializer/` for its title (e.g. the English or
  German value) and its likely const name (e.g. `WashingOfTheHands`). If a
  match exists elsewhere, reuse it (moving it into `shared/` if it isn't
  there yet) instead of creating a new one.
  **Match on the content, not on the label:** also grep for the distinctive
  phrase or incipit (Coptic and/or English). The same liturgical text must be
  reused even if the requested title frames it differently (e.g. "Das Lied
  Wir beten dich an, o Christus" is the existing
  `sectionTheResponseOfThePeopleWeWorshipYouOChrist`). Conversely, an
  identical title does **not** guarantee identical content ("Das Gebet für
  die Opfergaben" in the Catholic Epistle chapter is a different prayer from
  the litany of the same German name, أوشية القرابين, under "Die Bittgebete").
  So when a match is found only by title and the liturgical context differs,
  ask briefly before moving it to `shared/`.
- **Definition order matches `children` order:** within a file, define the
  children (text + node) in the same order as they appear in the parent's
  `children` array where possible. When the order in `children` changes,
  move the definitions accordingly (unless dependencies between the
  constants prevent it).
- **Variable names follow the English title** in PascalCase, prefixed with
  `text` / `part` / `chapter` / `section` / … depending on the object, e.g.
  "The Call to Attention" → `textTheCallToAttention` /
  `sectionTheCallToAttention`. Only when two objects share the same title,
  append a distinguishing suffix (e.g. `textTheAnaphoraSection` next to the
  chapter's `textTheAnaphora`).
- **Marking a text as "To Check":** the "To Check" status id is
  `4ACF926E-370D-4D90-B642-530FA1A81E24`. To mark a node (e.g. a chapter or
  section) as "To Check", set this id as the `status` of every language
  entry of the node's `MultilingualText`, right after the text's definition:

  ```ts
  textTheFaith.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
  textTheFaith.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
  textTheFaith.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
  textTheFaith.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
  textTheFaith.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
  ```

  (Skip `ancient_greek` for texts built with
  `makeMultilingualTextWithIdWithoutGreek`.) The constructors set the default
  status `FAC8DA02-072C-45A1-A1C9-2435D797A3B5` on every language entry. A
  "To Check" line can also target a single language. It is an intentional
  marker, not a bug: don't remove it or set it back to the default unless the
  user says the check is done.

## MultilingualText conventions

Each `MultilingualText.texts` record uses these language keys: `ancient_greek`,
`coptic`, `arabic`, `english`, `german`. Omit `ancient_greek` (via
`makeMultilingualTextWithIdWithoutGreek`) only when explicitly asked to
provide a text with no Greek original.

- **Arabic must always be fully vocalized** (tashkeel: fatha, damma, kasra,
  sukun, shadda, case endings) — never leave Arabic `value` fields
  unvocalized, even in a first draft. If the vocalization of a transliterated
  proper name is uncertain (e.g. Greek-derived names), tell the user it is a
  best-effort approximation.
- The "Ancient Greek" field is really **Koine/ecclesiastical Greek**, not
  Attic — vocabulary like λειτουργία (church service), ὀρθόδοξος, ἐκκλησία
  (church), or patristic names (Βασίλειος, Γρηγόριος, Κύριλλος) has no
  Classical-era meaning. Grammar should still be correct.
- German and Arabic titles vary between definite and indefinite article
  depending on the specific title (e.g. "Ein Aspasmos Adam..." vs "Die
  Anaphora") — match whichever the requester specifies; don't assume one
  over the other.
- **No Oxford/serial comma** in English titles listing three or more items
  (e.g. "Patriarch, Metropolitan or Bishop", not "..., or Bishop").

## Coptic (Bohairic) orthography

- **Vocabulary source:** the vocabulary of the **Bohairic Bible** and the
  Bohairic liturgical books (e.g. the Euchologion) is authoritative for
  Coptic translations. Back new terms with a Bible verse or a passage from
  the liturgical books where possible (e.g. `ⲓⲁ` "to wash" from
  `Ϯⲛⲁⲓⲁ ⲧⲟⲧ`, Psalm 25:6); if no attestation is known, tell the user
  explicitly instead of presenting the word as certain. Before settling on
  wording for a title, look for a verse on the same theme and prefer its
  vocabulary over phrasing constructed from dictionary parts (e.g.
  `ⲉⲣⲇⲟⲕⲓⲙⲁⲍⲓⲛ` for "Die Selbstprüfung vor dem Dienst", from
  `ⲙⲁⲣⲉϥⲉⲣⲇⲟⲕⲓⲙⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ`, 1 Corinthians 11:28). This
  matters most for content with a clear biblical parallel, less for purely
  structural titles.
- **"Introduction"/"Einleitung"** is always `Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ...`.
- Capitalize **only the first word of a sentence/title**, not every word
  (unlike German) and not systematically per word (unlike English title
  case). A word mid-sentence stays lowercase even if it's a proper name's
  epithet, e.g. `ⲡⲉϥⲕⲉϣⲫⲏⲣ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲟⲥ`.
- **Exception — quoted incipits:** when a title quotes the opening words of
  a hymn or response, introduce the quote with `ϫⲉ` and capitalize the
  first word of the quote, e.g. `Ⲡⲓϫⲱ ϫⲉ Ⲭⲣⲓⲥⲧⲟⲥ ⲁⲛⲉⲥⲧⲏ`,
  `Ⲡⲓϫⲱ ϫⲉ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ`, `Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ϫⲉ Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ …`.
- **Jenkim** (ϫⲉⲛⲕⲓⲙ, combining grave accent U+0300, rendered as a small
  stroke over the letter): required on (a) the native one-consonant
  grammatical morphemes ⲛ̀, ⲧ̀, ⲣ̀, ⲙ̀ when they stand before another
  consonant with no vowel of their own (e.g. `ⲛ̀ⲧⲉ`, `ⲛ̀ⲣⲉⲙⲛ̀ⲭⲏⲙⲓ`), including
  the masculine article ⲡⲓ when it contracts to ⲡ̀ before a
  consonant-initial word (e.g. `Ⲡ̀ϭⲟⲓⲥ`, "the Lord", from ⲡⲓ + ϭⲟⲓⲥ), and
  (b) the first letter of a Greek loanword that starts with a consonant
  cluster Coptic doesn't like word-initially, e.g. `ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ`,
  `ⲡ̀ⲣⲉⲥⲃⲓⲁ`, `ϣ̀ⲗⲏⲗ`. Not needed on ordinary polysyllabic words/loanwords
  that already carry their own vowels (e.g. `ⲗⲓⲧⲟⲩⲣⲅⲓⲕⲟⲛ`).
- The same mark appears on a **vowel only when that single vowel forms an
  entire syllable by itself**, i.e. it is followed by a consonant + vowel
  (or stands alone): e.g. `ⲉ̀ⲃⲟⲗ` (ⲉ-ⲃⲟⲗ), `ⲉ̀ϩ̀ⲣⲏⲓ`, `ⲉ̀ⲡⲓϣ̀ⲗⲏⲗ`,
  `ⲡⲓϣⲁⲉ̀ⲛⲉϩ` (ϣⲁ-ⲉ-ⲛⲉϩ), `Ⲡⲓⲁ̀ⲛⲁⲅⲛⲱⲥⲧⲏⲥ` (ⲁ-ⲛⲁⲅ-…), the vocative `ⲱ̀`.
  **No jenkim** when the vowel belongs to a closed syllable with a following
  consonant, e.g. `ⲛⲓⲁⲅⲅⲉⲗⲟⲥ` (ⲁⲅ-ⲅⲉ-ⲗⲟⲥ), `ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ`, `ⲡⲓⲉⲣⲫⲉⲓ`
  (ⲉⲣ-ⲫⲉⲓ) — not `ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ`.
- **Greek text in Coptic script:** Greek sentences and Greek partial
  sentences (e.g. the Trisagion, `Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ`) get **no jenkim at all**,
  even though some modern liturgical books add them. As soon as a Greek word
  is integrated into a Coptic sentence in any way (Coptic article, e.g.
  `ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ`, which already counts as adapted; Coptic
  conjugation such as `ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ`, declension and so on), the Coptic jenkim
  rules above apply to it in full. Unadapted single Greek words inside a
  Coptic sentence are still an open decision (see below).
- **ⲛ̀ → ⲙ̀ before labials:** the one-consonant particle ⲛ̀ (genitive,
  object marker, etc.) assimilates to **ⲙ̀** before ⲡ, ⲙ, ⲫ, ⲯ, and it is
  always written attached to the following word, never as a separate word
  (`ⲙ̀ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ`, `ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ`, `ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ`, `ⲙ̀Ⲡⲁⲱⲛⲓ` — not
  `ⲛ̀ ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ`).
- **ⲛ̀ + noun** ("X who/that is a Y") only makes sense when the head noun
  can literally *be* the second noun (e.g. a person who is a minister:
  `ⲡⲉϥⲕⲉϣⲫⲏⲣ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲟⲥ`, "his fellow who is a minister"). For an
  inanimate head noun taking on a *quality* ("liturgical library"), use the
  adjective form instead (`ⲗⲓⲧⲟⲩⲣⲅⲓⲕⲟⲛ`, not the noun `ⲗⲓⲧⲟⲩⲣⲅⲟⲥ`).
- **ⲕⲉ-** ("other/another") is not itself an article. Grammatically it
  normally takes one (`ⲟⲩⲕⲉ-` "another", `ⲡⲓⲕⲉ-` "the other"), but
  **headings** in liturgical books conventionally use it bare — so at the
  **start of a title** write `Ⲕⲉϣ̀ⲗⲏⲗ`, `Ⲕⲉⲉⲩⲭⲏ`, `Ⲕⲉⲯⲁⲗⲙⲟⲥ` (no `Ⲟⲩ`);
  **inside a phrase** (e.g. after a preposition) use the full form, e.g.
  `ϧⲉⲛ ⲟⲩⲕⲉⲧⲁϩⲟ`. (`Ⲟⲩ` is also used on the *first* item of a numbered
  series that isn't marked with ⲕⲉ-, e.g. `ⲟⲩⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ`.) This is
  still to be verified against the books — see open decisions.
- Word choice for "prayer" depends on register — this project's convention:
  - **ϣⲗⲏⲗ** — the standard word for a formal/liturgical "Prayer" used as a
    heading (e.g. section titled "A Prayer of ...").
  - **ⲉⲩⲭⲏ** (Greek loanword) — used for the Litany-type prayers under
    "Die Bittgebete"/"The Litanies" (mirrors Arabic أوشية and Greek Εὐχή,
    see below) and for "another prayer" constructions. It takes the
    feminine article (`Ϯⲉⲩⲭⲏ`, not `Ⲡⲓⲉⲩⲭⲏ`), and its English rendering
    is always **"The Litany ..."**, never "The Prayer ..." — even when the
    German title says "Das Gebet ...".
  - **ⲧⲱⲃϩ** — "entreaty/petition", a different nuance from ϣⲗⲏⲗ; not the
    default choice for a titled "Prayer" heading.
  - **ϣⲁⲓ** = "feast/festival" (e.g. `ⲡⲓϣⲁⲓ ⲛ̀ⲧⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ`, "the Feast of
    the Nativity"). `ⲛⲁⲧϣⲁⲓ` = "without a feast" = **non-festal/ordinary**
    (days that are not a feast day) — this is the phrase used for "the
    ordinary days" (ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ), not a word meaning "measure/value".
  - Ordinal numbers ("second", "third", ...) prefix with **ⲙⲁϩ-** + the
    cardinal number (e.g. `ⲙⲁϩⲥ̀ⲛⲟⲩϯ` second, `ⲙⲁϩϣⲟⲙⲧ` third, `ⲙⲁϩϥⲧⲟⲟⲩ`
    fourth, `ⲙⲁϩϯⲟⲩ` fifth, `ⲙⲁϩⲥⲟⲟⲩ` sixth, `ⲙⲁϩϣⲁϣϥ` seventh, `ⲙⲁϩϣⲙⲏⲛ`
    eighth); "first" is the irregular/suppletive **ϣⲟⲣⲡ**, not
    ⲙⲁϩ+one.
- **Never abbreviate words** (e.g. no nomina-sacra contractions like
  `ⲡ̅ⲛ̅ⲁ̅` for "spirit" — spell it out in full as `ⲡⲛⲉⲩⲙⲁ`). Numbers are the
  only exception, where the traditional numeral-letter notation (e.g.
  `ⲣ̅ⲛ̅` for "150", Greek `ια΄`, digits) is fine in titles; in running/body
  text (paragraphs, clauses) add the number spelled out in parentheses right
  after the numeral. This applies to **all five languages**, not
  just Coptic: no "St." for "Saint", no "Hl." for "Heilige", no shortened
  book names like "Ps."/"Mt." etc. It also applies to code comments next to
  the data and to **chat replies** (no "z. B.", "bzw.", "usw.", "ggf.",
  "Jes 66,7"; write "zum Beispiel", "beziehungsweise", "und so weiter",
  "gegebenenfalls", "Jesaja 66,7"). If an abbreviation shows up in the user's
  request, existing data or a supplied source, expand it and tell the user
  what was expanded.

## Arabic liturgical terminology

- **أوشية / أواشي** (Oshia/Awashi) — the correct term for a Coptic
  liturgical *litany*, borrowed from Greek εὐχή via Coptic pronunciation
  (parallel to Coptic `ⲉⲩⲭⲏ` and Greek `Εὐχή`/`Εὐχαί`). Use this, not the
  generic صلاة ("prayer") or طلبة, for anything under "The Litanies"
  (أوشية السلام, أوشية عن الراقدين, etc.) — even when the German/English
  title just says "Gebet"/"Prayer".
- Litany titles in this project use **لـ** ("for") per this project's
  preference (an explicit override — idiomatic Coptic-Arabic convention
  more commonly uses **عن**, "concerning/about", e.g. real titles like
  «أوشية عن الراقدين»).
- Dates in Arabic titles use **numerals** (e.g. `١١ بُؤُونَةَ`), not spelled-
  out ordinal words (e.g. not «الحادي عشر مِن بؤونة»).
- **قانون** (Qanun) — the correct Coptic-Arabic liturgical term for a
  concluding/canon-type hymn (e.g. "قانون الختام", the concluding hymn for
  the ordinary-days season), from Greek κανών. Use this rather than the
  generic لحن ("melody/hymn") or ترتيلة ("chant") for this specific kind of
  hymn.
- **قربان** (Qorban) — the standard Coptic-Arabic term for the blessed/
  offered bread (the eulogia distributed after the Liturgy, as well as the
  Eucharistic bread generally). Prefer this over a literal الخبز المبارك
  ("the blessed bread").
- متنيح ("departed/at rest", from نياح "repose") is the standard Coptic-
  Arabic euphemism for a deceased cleric.
- خميس العهد / سبت النور are the established Coptic-Arabic names for Maundy
  Thursday / Holy Saturday ("Saturday of Light" — referencing the Holy
  Fire), not literal translations of the German/English names.
- كلمات التأسيس is the standard term for "Words of Institution" (not
  «صلوات التأسيس», "prayers").

## Working with the user

- **Flag errors in the user's own text.** Before using a supplied German title
  or text verbatim (as a `german` value or as the basis for a variable name),
  scan it for spelling and grammar mistakes and point them out. Don't silently
  correct them or silently carry them through. Correct and mention obvious
  typos; otherwise ask whether to correct or keep the text as given.

## Open decisions

Terminology questions the user has postponed. Remind the user briefly when
working on the affected sections, and remove an item once it is resolved.

1. **Pauline Epistle in Coptic:** keep `ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ` or switch to the
   lectionary short name `Ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ` ("the Apostle"), parallel to
   `Ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ` / `Ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ`.
2. **Jenkim on unadapted single Greek words in a Coptic sentence:** Greek
   sentences get none, adapted Greek words follow the Coptic rules (see
   "Greek text in Coptic script" above). Open: a single Greek word inside a
   Coptic sentence that carries no Coptic adaptation, for example the adverb
   in `Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ` or particles such as ⲇⲉ, ⲅⲁⲣ, ⲁⲗⲗⲁ. If the rule
   changes, all affected words must change consistently.
3. **ⲕⲉ- with or without Ⲟⲩ:** currently bare at the start of headings and
   `ⲟⲩⲕⲉ-` inside a phrase (see above). Still to be researched, including the
   unusual jenkim in `Ⲕⲉⲉ̀ⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲟⲙⲟⲗⲟⲅⲓⲁ` (`ⲉⲣⲟⲩⲱ` elsewhere has none).
