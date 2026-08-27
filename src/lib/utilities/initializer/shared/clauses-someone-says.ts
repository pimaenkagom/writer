import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';

function makeClause(id: string, textId: string): Basenode {
	return {
		id: id,
		users: [],
		type: NodeType.Clause,
		value: textId,
		valueType: ContentType.MultilingualText,
		children: []
	};
}

export const textThePatriarchSays = await makeMultilingualTextWithId(
	'144CFF67-EE6D-405E-B19C-105C4FDB6023',
	'42078B4B-899D-436D-82BD-5B4A77DB0B29',
	'Ὁ πατριάρχης λέγει·',
	'894F8CC1-8842-4BF0-BC8B-DB66B8E097EA',
	'Ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'6373EB33-D714-4EC8-B347-8A13B7719C14',
	'يَقُولُ الْبَطْرِيَرْكُ:',
	'03ADB583-7B62-475F-9E74-BBB326B6998D',
	'The patriarch says:',
	'2D166FD1-DD42-4A8C-B0FD-C41808885157',
	'Der Patriarch sagt:'
);

export const clauseThePatriarchSays = makeClause(
	'A7CA9509-AC5C-4F0E-8F1C-B079A99ED968',
	textThePatriarchSays.id
);

export const textTheMetropolitanSays = await makeMultilingualTextWithId(
	'307DA1D0-F950-4E2E-92B6-54FB83935A11',
	'72265E46-4557-41EE-8C28-9E283FAFC616',
	'Ὁ μητροπολίτης λέγει·',
	'D79F9AEE-470E-4C76-8C46-0F6D967403EE',
	'Ⲡⲓⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'AFA95B7E-A2CD-4FA9-AA04-3A5BD772DF57',
	'يَقُولُ الْمُطْرَانُ:',
	'550E6D5D-F339-48AC-A4AD-6716DB2F8DA6',
	'The metropolitan says:',
	'FC1C16A7-EC9E-4413-AE28-7B7905816C37',
	'Der Metropolit sagt:'
);

export const clauseTheMetropolitanSays = makeClause(
	'9CE3F887-5A32-4356-99FD-56063A227038',
	textTheMetropolitanSays.id
);

export const textTheBishopSays = await makeMultilingualTextWithId(
	'BDEC39BD-16B6-426C-AA5E-D5BC179326E2',
	'6495DFA1-16C8-4714-BCE3-E71150650238',
	'Ὁ ἐπίσκοπος λέγει·',
	'3FD144AA-9506-47A3-B616-786D12A53CC8',
	'Ⲡⲓⲉⲡⲓⲥⲕⲟⲡⲟⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'1D63FC4A-5762-4711-A18E-30FB74D67B49',
	'يَقُولُ الْأُسْقُفُ:',
	'40459229-E7EB-4F37-8946-210B08330A5E',
	'The bishop says:',
	'AA2A9F5B-4658-4696-B0C4-CAA6EE11040C',
	'Der Bischof sagt:'
);

export const clauseTheBishopSays = makeClause(
	'86396CDE-F149-4912-A2EE-5A238B9FF61E',
	textTheBishopSays.id
);

export const textTheHegumenSays = await makeMultilingualTextWithId(
	'DDC0D07B-7AD7-4824-9714-C98DAC614C01',
	'3E089268-BE66-45CE-B00E-A888F95E4292',
	'Ὁ ἡγούμενος λέγει·',
	'218A83C0-8083-4472-A0B1-B93A2ECCAA34',
	'Ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'1ACE6AB9-283A-4C31-A53F-7554474FB4B3',
	'يَقُولُ الْقُمْصُ:',
	'72B3AC95-BA1B-458F-850C-77D40159CFA1',
	'The hegumen says:',
	'0598E081-ACEF-4817-8034-3FBAE21E6856',
	'Der Hegumen sagt:'
);

export const clauseTheHegumenSays = makeClause(
	'6194C31D-4A96-4449-8C0C-C49C11742D49',
	textTheHegumenSays.id
);

export const textThePresbyterSays = await makeMultilingualTextWithId(
	'2D4E8330-FE7E-4B95-A539-71EB0F369BA1',
	'F8B56D6F-3575-4012-9819-DE66C80D004E',
	'Ὁ πρεσβύτερος λέγει·',
	'BC58CCC9-E952-4ABB-87DD-2EA9E222E877',
	'Ⲡⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'24A3B987-5BCA-437D-94A3-6F4E243186E7',
	'يَقُولُ الْقَسُّ:',
	'C646AF79-9268-4D01-A1DA-68D5F06FA198',
	'The presbyter says:',
	'277101E1-B8F8-4150-B0CA-7EE3DDF7BCDC',
	'Der Presbyter sagt:'
);

export const clauseThePresbyterSays = makeClause(
	'128C7F83-24E6-40CA-B941-1EE3E0FACCBB',
	textThePresbyterSays.id
);

export const textTheHighestPriestlyOrderPresentSays = await makeMultilingualTextWithId(
	'385048B9-5656-4B34-8D32-F1C32890371E',
	'0F468E05-8C9F-4DAB-B0FF-4F70CCF6E695',
	'Ὁ ἀνώτατος παρὼν ἱερεὺς λέγει·',
	'930EA073-15EB-41F6-8CC4-240EF48F3C3C',
	'Ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲏⲃ ⲉⲧⲭⲏ ϧⲉⲛ ⲡⲓⲙⲁ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'8113D535-BD1F-4C62-B54D-0A5656E3AEAD',
	'يَقُولُ أَعْلَى رُتْبَةٍ كَهَنُوتِيَّةٍ حَاضِرَةٍ:',
	'A556EBBA-DA53-4F9D-82C0-B01747D7863D',
	'The highest priestly order present says:',
	'5823236F-5E25-4A28-80B7-7F2687A1E4BD',
	'Die höchste anwesende priesterliche Stufe sagt:'
);

export const clauseTheHighestPriestlyOrderPresentSays = makeClause(
	'0EA44442-8BFF-4FB0-B5E2-1C795F5EF69D',
	textTheHighestPriestlyOrderPresentSays.id
);

export const textThePriestSays = await makeMultilingualTextWithId(
	'6A24F844-685C-49FE-90DF-117DD8DD613F',
	'2E87A77B-5D24-4E23-A9FF-DEE4F715993F',
	'Ὁ ἱερεὺς λέγει·',
	'54E4CEB5-5DB5-4466-BD83-A404AA3E8FF6',
	'Ⲡⲓⲟⲩⲏⲃ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'BAE42F60-2733-44F3-B63A-A773152475C4',
	'يَقُولُ الْكَاهِنُ:',
	'F2F23919-2E75-4CA6-8A72-15028B435A3B',
	'The priest says:',
	'0DA3DFF5-4F3A-4BB4-B2A1-E17500CE2881',
	'Der Priester sagt:'
);

export const clauseThePriestSays = makeClause(
	'0FA2B6EA-822A-42A1-9463-89775B4AB4BC',
	textThePriestSays.id
);

export const textTheArchdeaconSays = await makeMultilingualTextWithId(
	'E1A9BF33-57D8-4DB1-804E-82423AB83A23',
	'05A5C6FD-59B1-4594-A652-B2B2D36E3A75',
	'Ὁ ἀρχιδιάκονος λέγει·',
	'42139157-BCBF-4B91-81B4-3B86F1207EE6',
	'Ⲡⲓⲁⲣⲭⲓⲇⲓⲁⲕⲱⲛ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'2211D732-82C3-4E84-AF2D-D43BA5FAA4C1',
	'يَقُولُ رَئِيسُ الشَّمَامِسَةِ:',
	'5F07A89C-245F-4411-8EA5-0905ADA2B543',
	'The archdeacon says:',
	'8A51662E-F147-40FB-9BA9-64CB8C14BCDA',
	'Der Erzdiakon sagt:'
);

export const clauseTheArchdeaconSays = makeClause(
	'3EADA996-8C29-4A57-A2CD-F45DB775E555',
	textTheArchdeaconSays.id
);

export const textTheDeaconSays = await makeMultilingualTextWithId(
	'DCD078AE-7F05-49B6-A47C-2B40BD9ED0B8',
	'D97E6642-A4F1-4884-BC46-21E32A37FC5A',
	'Ὁ διάκονος λέγει·',
	'CAC8E6D3-3E13-48E1-B396-F192B2B30CA3',
	'Ⲡⲓⲇⲓⲁⲕⲱⲛ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'49EBFA4F-6F76-4A81-BDD3-B052CBDBD544',
	'يَقُولُ اَلشَّمَّاسُ:',
	'AAC6CBA6-AF6E-4D80-BD7D-3DEC9A07D90B',
	'The deacon says:',
	'971D8C91-B743-4D33-A172-03EEC50B90D2',
	'Der Diakon sagt:'
);

export const clauseTheDeaconSays = makeClause(
	'B102111C-CF64-441F-B2BB-911DCD269599',
	textTheDeaconSays.id
);

export const textTheHypodeaconSays = await makeMultilingualTextWithId(
	'221FAFFE-1F15-4032-B0DF-65D3804CD6DF',
	'6A7A3E10-DEFF-4757-A083-66E4B7DA959D',
	'Ὁ Ὑποδιάκονος λέγει·',
	'86F9E693-C2D1-475E-96D6-7DC7D4656503',
	'Ⲡⲓϩⲩⲡⲟⲇⲓⲁⲕⲱⲛ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'7E4ECD71-1897-476A-B585-87A612182C7C',
	':يَقُولُ مُسَاعِدُ الشَّمَّاسِ',
	'3D7E5247-C5A3-48A4-8512-D0F08086640D',
	'The hypodiakon says:',
	'9169041E-4E0E-4FDE-9EE0-1AED42E23ACD',
	'Der Hypodiakon sagt:'
);

export const clauseTheHypodeaconSays = makeClause(
	'C3405490-1820-48B6-8DDE-48074CEC9BF0',
	textTheHypodeaconSays.id
);

export const textTheAnagnostistSays = await makeMultilingualTextWithId(
	'0D6CF655-AF5A-4C05-9122-6ADFD24CB6BC',
	'98CDD3C1-A8A2-4538-8DB4-1FDAFC8F658F',
	'Ὁ ἀναγνώστης λέγει·',
	'0F756B43-300E-4A0A-A305-C81B30C35185',
	'Ⲡⲓⲁ̀ⲛⲁⲅⲛⲱⲥⲧⲏⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'E2E1B259-2D65-4D9B-A420-A81C9B32A290',
	'يَقُولُ الْقَارِئُ:',
	'15983B23-DB14-494E-9E9B-D02293998A30',
	'The reader says:',
	'AFFB8C7A-FB00-4AB3-9BFD-4B3BD4A2EE3C',
	'Der Anagnostist sagt:'
);

export const clauseTheAnagnostistSays = makeClause(
	'F95A1FA4-5479-401B-BA92-47DBA65DFE75',
	textTheAnagnostistSays.id
);

export const textThePsaltistSays = await makeMultilingualTextWithId(
	'3E502A86-C32C-4ED1-9F29-44285BCE6328',
	'295CA132-DB3E-4FBC-B4D5-38D819A953BD',
	'Ὁ ψάλτης λέγει·',
	'9DF1916F-E502-467F-B951-BC644C172B85',
	'Ⲡⲓⲯⲁⲗⲧⲏⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'478A0106-DF4F-4523-89F9-4549F84CCEC7',
	'يَقُولُ الْمُرَتِّلُ:',
	'0AE8CC9F-68C4-45AA-B52D-72668E9940EC',
	'The chanter says:',
	'C01F58BC-572E-4A36-A03E-18543133D037',
	'Der Psaltist sagt:'
);

export const clauseThePsaltistSays = makeClause(
	'A8D228FE-78CA-47DB-B535-B8510EA53936',
	textThePsaltistSays.id
);

export const textThePeopleSays = await makeMultilingualTextWithId(
	'DC47670E-0EA9-4D07-B8B9-D705A5A07DAB',
	'15090AEF-9F7D-4DA8-8640-A56A0E2F1119',
	'Ὁ Λαὸς λέγει·',
	'38F7DB19-61E5-44B6-BA7F-8E6047A9578E',
	'Ⲡⲓⲗⲁⲟⲥ ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'0160F247-7200-4461-8CF6-73F3AC077BFB',
	'يَقُولُ الشَّعْبُ:',
	'325BFA8F-40E7-4E83-AA1E-266BA9F18E81',
	'The people say:',
	'1D50D2D2-2FFF-4AA0-8CB5-494B3CED6B4A',
	'Das Volk sagt:'
);

export const clauseThePeopleSays = makeClause(
	'62335375-CEC1-4562-9296-86414E5AFC00',
	textThePeopleSays.id
);

export const textTheAbbotSays = await makeMultilingualTextWithId(
	'8AB8BE81-1521-4B4C-B5AA-79BC40DA9EAE',
	'4C08C42F-9CFA-43A3-B21E-DE124F52904F',
	'Ὁ ἡγούμενος τῆς μονῆς λέγει· ',
	'648A97FC-4257-4C8E-A41C-E857CCC94EC4',
	'Ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'D64E56CC-F302-4E4E-A1D2-E49C984F1A29',
	'يَقُولُ رَئِيسُ الدَّيْرِ:',
	'5AA1B922-2ED5-4FA6-8181-A612053CFBC7',
	'The abbot says:',
	'9EA8D399-BB55-4A05-BFA1-959B78D8E7D3',
	'Der Vorsteher des Klosters sagt:'
);

export const clauseTheAbbotSays = makeClause(
	'A7F4D382-8E63-4B2A-A191-C95341DB8686',
	textTheAbbotSays.id
);

export const textTheMonkToBeSays = await makeMultilingualTextWithId(
	'87A153A8-E07A-49D4-A993-504A65CA9BCD',
	'6324FFCD-3C9A-46AF-9A4E-76A020D0B3EA',
	'Ὁ μέλλων μοναχὸς λέγει· ',
	'FA26CF22-1AD2-4B36-BFFD-37FBBFFF66C8',
	'Ⲡⲓⲥⲟⲛ ⲉⲧⲉⲣⲁⲓⲧⲓⲛ ⲉⲣⲙⲟⲛⲁⲭⲟⲥ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'B6DF21D9-B039-4C1F-ABA5-8FB0B2F05B91',
	'يَقُولُ الطَّالِبُ الرَّهْبَنَةَ:',
	'50E8CC73-9023-4A74-99B3-0EAFF81FADA6',
	'The monk to be says:',
	'4134D11A-644E-4A72-A90C-B7B751217C38',
	'Der angehende Mönch sagt:'
);

export const clauseTheMonkToBeSays = makeClause(
	'36185638-BEFF-42AB-9199-159D7E211F7F',
	textTheMonkToBeSays.id
);

export const textTheNunToBeSays = await makeMultilingualTextWithId(
	'926F9AFB-3F23-40C6-909B-9F22F38C5A20',
	'565407F7-3D1A-46C8-8EE0-84CBD56C1DC4',
	'Ἡ μέλλουσα μοναχὴ λέγει·',
	'9468AEE0-7445-4ABB-8D65-09524D8E7E95',
	'ϯⲥⲱⲛⲓ ⲉⲧⲉⲣⲁⲓⲧⲓⲛ ⲉⲣⲙⲟⲛⲁⲭⲏ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ',
	'5CE44AEE-B14A-4E8C-A1E6-F4642F701413',
	'تَقُولُ الطَّالِبَةُ الرَّهْبَنَةَ:',
	'D680BE6D-DB95-4F26-B702-AC002423AD8C',
	'The nun to be says:',
	'83308FCE-0C75-4789-B36B-C89B55A556AE',
	'Die angehende Nonne sagt:'
);

export const clauseTheNunToBeSays = makeClause(
	'CF7C0737-8ED2-4C93-9FC4-7EED192A3877',
	textTheNunToBeSays.id
);
