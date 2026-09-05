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

## MultilingualText conventions

Each `MultilingualText.texts` record uses these language keys: `ancient_greek`,
`coptic`, `arabic`, `english`, `german`. Omit `ancient_greek` (via
`makeMultilingualTextWithIdWithoutGreek`) only when explicitly asked to
provide a text with no Greek original.

- **Arabic must always be fully vocalized** (tashkeel: fatha, damma, kasra,
  sukun, shadda, case endings) — never leave Arabic `value` fields
  unvocalized, even in a first draft.
- The "Ancient Greek" field is really **Koine/ecclesiastical Greek**, not
  Attic — vocabulary like λειτουργία (church service), ὀρθόδοξος, ἐκκλησία
  (church), or patristic names (Βασίλειος, Γρηγόριος, Κύριλλος) has no
  Classical-era meaning. Grammar should still be correct.
- German and Arabic titles vary between definite and indefinite article
  depending on the specific title (e.g. "Ein Aspasmos Adam..." vs "Die
  Anaphora") — match whichever the requester specifies; don't assume one
  over the other.

## Coptic (Bohairic) orthography

- Capitalize **only the first word of a sentence/title**, not every word
  (unlike German) and not systematically per word (unlike English title
  case). A word mid-sentence stays lowercase even if it's a proper name's
  epithet, e.g. `ⲡⲉϥⲕⲉϣⲫⲏⲣ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲟⲥ`.
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
- The same mark also appears on a **vowel** that must form its own
  syllable rather than merging with a neighbour: (a) hiatus after a
  vowel-final article, e.g. `Ⲡⲓⲁ̀ⲛⲁⲅⲛⲱⲥⲧⲏⲥ` (ⲡⲓ + ⲁ, so the article's
  final vowel and the noun's initial vowel don't read as one sound), and
  (b) one-vowel grammatical particles like the preposition/converter
  `ⲉ-`, e.g. `ⲉ̀ⲃⲟⲗ`, `ⲉ̀ϩⲣⲏⲓ`, `ⲉ̀ⲡⲓϣ̀ⲗⲏⲗ` — the same "short syllable
  standing on its own" logic as the consonant cases above, just on a
  vowel instead of a consonant.
- **ⲛ̀ + noun** ("X who/that is a Y") only makes sense when the head noun
  can literally *be* the second noun (e.g. a person who is a minister:
  `ⲡⲉϥⲕⲉϣⲫⲏⲣ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲟⲥ`, "his fellow who is a minister"). For an
  inanimate head noun taking on a *quality* ("liturgical library"), use the
  adjective form instead (`ⲗⲓⲧⲟⲩⲣⲅⲓⲕⲟⲛ`, not the noun `ⲗⲓⲧⲟⲩⲣⲅⲟⲥ`).
- **ⲕⲉ-** ("other/another") already carries its own indefiniteness; don't
  additionally prefix the indefinite article `Ⲟⲩ` (`ⲕⲉϣ̀ⲗⲏⲗ`, not
  `ⲟⲩⲕⲉϣ̀ⲗⲏⲗ`) — that double-marks indefiniteness. (`Ⲟⲩ` **is** used, and
  needed, on the *first* item that isn't marked with ⲕⲉ-, e.g.
  `ⲟⲩⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ` for "an Aspasmos Adam" before "a second Aspasmos
  Adam" etc.)
- Word choice for "prayer" depends on register — this project's convention:
  - **ϣⲗⲏⲗ** — the standard word for a formal/liturgical "Prayer" used as a
    heading (e.g. section titled "A Prayer of ...").
  - **ⲉⲩⲭⲏ** (Greek loanword) — used for the Litany-type prayers under
    "Die Bittgebete"/"The Litanies" (mirrors Arabic أوشية and Greek Εὐχή,
    see below) and for "another prayer" constructions.
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
- متنيح ("departed/at rest", from نياح "repose") is the standard Coptic-
  Arabic euphemism for a deceased cleric.
- خميس العهد / سبت النور are the established Coptic-Arabic names for Maundy
  Thursday / Holy Saturday ("Saturday of Light" — referencing the Holy
  Fire), not literal translations of the German/English names.
- كلمات التأسيس is the standard term for "Words of Institution" (not
  «صلوات التأسيس», "prayers").
