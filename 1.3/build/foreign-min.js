/*! cityselector - v1.3 - 2014-07-02 2:15:21 PM
* Copyright (c) 2014 baxian; Licensed  */
KISSY.add("gallery/cityselector/1.3/foreign",function(){"use strict";var a=[{name:"\u5965\u5730\u5229",pinyin:"aodili",spy:"adl",code:"3909606"},{name:"\u6fb3\u5927\u5229\u4e9a",pinyin:"aodaliya",spy:"adly",code:"27015",city:[{name:"\u963f\u5fb7\u83b1\u5fb7",pinyin:"adelaide",spy:"adld",code:"3300645"},{name:"\u8d1d\u5c14\u6e7e",pinyin:"beierwan",spy:"bew",code:"220424059"},{name:"\u5e03\u91cc\u65af\u73ed",pinyin:"bulisiban",spy:"blsb",code:"3299825"},{name:"\u5f17\u91cc\u66fc\u7279\u5c14",pinyin:"fulimanteer",spy:"flmte",code:"220422088"},{name:"\u58a8\u5c14\u672c",pinyin:"moerben",spy:"meb",code:"3231855"},{name:"\u7ebd\u5361\u65af\u5c14",pinyin:"niukasier",spy:"nkse",code:"3301060"},{name:"\u73c0\u65af",pinyin:"posi",spy:"ps",code:"3302048"},{name:"\u6c64\u65af\u7ef4\u5c14",pinyin:"tangsiweier",spy:"tswe",code:"220404884"},{name:"\u6089\u5c3c",pinyin:"xini",spy:"xn",code:"3231834"}]},{name:"\u963f\u5c14\u5df4\u5c3c\u4e9a",pinyin:"aerbaniya",spy:"aebny",code:"37630922"},{name:"\u963f\u5c14\u53ca\u5229\u4e9a",pinyin:"aerjiliya",spy:"aejly",code:"8356172"},{name:"\u7231\u5c14\u5170",pinyin:"aierlan",spy:"ael",code:"39487"},{name:"\u963f\u5bcc\u6c57",pinyin:"afuhan",spy:"afh",code:"107978"},{name:"\u5b89\u54e5\u62c9",pinyin:"angela",spy:"agl",code:"3611735"},{name:"\u963f\u6839\u5ef7",pinyin:"agenting",spy:"agt",code:"39273"},{name:"\u57c3\u53ca",pinyin:"aiji",spy:"aj",code:"3357616"},{name:"\u963f\u8054\u914b",pinyin:"alianqiu",spy:"alq",code:"4003960",city:[{name:"\u963f\u5e03\u624e\u6bd4",pinyin:"abuzhabi",spy:"abzb",code:"3299612"},{name:"\u963f\u6cbb\u66fc",pinyin:"azhiman",spy:"azm",code:"220428024"},{name:"\u8fea\u62dc",pinyin:"dibai",spy:"db",code:"3231861"},{name:"\u5bcc\u67e5\u4f0a\u62c9",pinyin:"fuchayila",spy:"fcyl",code:"220412586"},{name:"\u54c8\u4f0a\u9a6c\u89d2",pinyin:"hayimajiao",spy:"hymj",code:"220424157"},{name:"\u6c99\u8fe6",pinyin:"shajia",spy:"sj",code:"3231853"},{name:"\u4e4c\u59c6\u76d6\u4e07",pinyin:"wumugaiwan",spy:"wmgw",code:"220416347"}]},{name:"\u963f\u66fc",pinyin:"aman",spy:"am",code:"7798360"},{name:"\u6fb3\u95e8",pinyin:"aomen",spy:"am",code:"29121"},{name:"\u963f\u585e\u62dc\u7586",pinyin:"asaibaijiang",spy:"asbj",code:"32401930"},{name:"\u57c3\u585e\u4fc4\u6bd4\u4e9a",pinyin:"aisaiebiya",spy:"aseby",code:"23559851"},{name:"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a",pinyin:"babuyaxinjineiya",spy:"bbyxjny",code:"37630942"},{name:"\u535a\u8328\u74e6\u7eb3",pinyin:"bociwana",spy:"bcwn",code:"37630933"},{name:"\u51b0\u5c9b",pinyin:"bingdao",spy:"bd",code:"3617288"},{name:"\u6ce2\u9ed1",pinyin:"bohei",spy:"bh",code:"25639632"},{name:"\u4fdd\u52a0\u5229\u4e9a",pinyin:"baojialiya",spy:"bjly",code:"3284903"},{name:"\u5df4\u57fa\u65af\u5766",pinyin:"bajisitan",spy:"bjst",code:"3300979"},{name:"\u6ce2\u5170",pinyin:"bolan",spy:"bl",code:"3857691"},{name:"\u5df4\u6797",pinyin:"balin",spy:"bl",code:"3300964"},{name:"\u6bd4\u5229\u65f6",pinyin:"bilishi",spy:"bls",code:"3620977"},{name:"\u73bb\u5229\u7ef4\u4e9a",pinyin:"boliweiya",spy:"blwy",code:"53000"},{name:"\u5317\u7f8e\u6d32\u5176\u4ed6\u56fd\u5bb6",pinyin:"beimeizhouqitaguojia",spy:"bmzqtgj",code:"82284436"},{name:"\u8d1d\u5b81",pinyin:"beining",spy:"bn",code:"8491678"},{name:"\u5df4\u897f",pinyin:"baxi",spy:"bx",code:"39272"},{name:"\u8d64\u9053\u51e0\u5185\u4e9a",pinyin:"chidaojineiya",spy:"cdjny",code:"34050683"},{name:"\u671d\u9c9c",pinyin:"chaoxian",spy:"cx",code:"10961557"},{name:"\u591a\u54e5",pinyin:"duoge",spy:"dg",code:"14700468"},{name:"\u5fb7\u56fd",pinyin:"deguo",spy:"dg",code:"27413"},{name:"\u4e39\u9ea6",pinyin:"danmai",spy:"dm",code:"39486"},{name:"\u5927\u6eaa\u5730",pinyin:"daxidi",spy:"dxd",code:"3394638"},{name:"\u5927\u6d0b\u6d32\u5176\u4ed6\u56fd\u5bb6",pinyin:"dayangzhouqitaguojia",spy:"dyzqtgj",code:"82284438"},{name:"\u5384\u74dc\u591a\u5c14",pinyin:"eguaduoer",spy:"egde",code:"21643311"},{name:"\u4fc4\u7f57\u65af",pinyin:"eluosi",spy:"els",code:"3314460",city:[{name:"\u7b26\u62c9\u8fea\u6c83\u65af\u6258\u514b",pinyin:"fuladiwosituoke",spy:"fldwstk",code:"7260553"},{name:"\u5580\u5c71",pinyin:"kashan",spy:"ks",code:"95566259"},{name:"\u83ab\u65af\u79d1",pinyin:"mosike",spy:"msk",code:"3231845"},{name:"\u5723\u5f7c\u5f97\u5821",pinyin:"shengbidebao",spy:"sbdb",code:"3299355"},{name:"\u7d22\u5951",pinyin:"suoqi",spy:"sq",code:"20593948"},{name:"\u65b0\u897f\u4f2f\u5229\u4e9a",pinyin:"xinxiboliya",spy:"xxbly",code:"3632303"},{name:"\u53f6\u5361\u6377\u7433\u5821",pinyin:"yekajielinbao",spy:"ykjlb",code:"30557029"}]},{name:"\u5384\u7acb\u7279\u91cc\u4e9a",pinyin:"eliteliya",spy:"eltly",code:"37630934"},{name:"\u6cd5\u56fd",pinyin:"faguo",spy:"fg",code:"27412",city:[{name:"\u6ce2\u5c14\u591a",pinyin:"boerduo",spy:"bed",code:"3346688"},{name:"\u5df4\u9ece",pinyin:"bali",spy:"bl",code:"3299349"},{name:"\u91cc\u6602",pinyin:"liang",spy:"la",code:"3299328"},{name:"\u91cc\u5c14",pinyin:"lier",spy:"le",code:"18381621"},{name:"\u9a6c\u8d5b",pinyin:"masai",spy:"ms",code:"3301088"},{name:"\u5c3c\u65af",pinyin:"nisi",spy:"ns",code:"3231823"},{name:"\u5357\u7279",pinyin:"nante",spy:"nt",code:"3299348"}]},{name:"\u6590\u6d4e",pinyin:"feiji",spy:"fj",code:"3907207"},{name:"\u82ac\u5170",pinyin:"fenlan",spy:"fl",code:"43785"},{name:"\u83f2\u5f8b\u5bbe",pinyin:"feilu:bin",spy:"flb",code:"3286564",city:[{name:"\u8fbe\u6c83",pinyin:"dawo",spy:"dw",code:"6950301"},{name:"\u594e\u677e\u57ce",pinyin:"kuisongcheng",spy:"ksc",code:"218916463"},{name:"\u9a6c\u5c3c\u62c9",pinyin:"manila",spy:"mnl",code:"3231854"},{name:"\u5bbf\u52a1",pinyin:"suwu",spy:"sw",code:"137946539"},{name:"\u957f\u6ee9\u5c9b",pinyin:"zhangtandao",spy:"ztd",code:"3985066"}]},{name:"\u975e\u6d32\u5176\u4ed6\u56fd\u5bb6",pinyin:"feizhouqitaguojia",spy:"fzqtgj",code:"82284439"},{name:"\u53e4\u5df4",pinyin:"guba",spy:"gb",code:"52995"},{name:"\u521a\u679c",pinyin:"gangguo",spy:"gg",code:"37630935"},{name:"\u54e5\u4f26\u6bd4\u4e9a",pinyin:"gelunbiya",spy:"glby",code:"52996"},{name:"\u54e5\u65af\u8fbe\u9ece\u52a0",pinyin:"gesidalijia",spy:"gsdlj",code:"94581"},{name:"\u572d\u4e9a\u90a3",pinyin:"guiyanei",spy:"gyn",code:"5274544"},{name:"\u97e9\u56fd",pinyin:"hanguo",spy:"hg",code:"27019"},{name:"\u8377\u5170",pinyin:"helan",spy:"hl",code:"39274"},{name:"\u54c8\u8428\u514b\u65af\u5766",pinyin:"hasakesitan",spy:"hskst",code:"6849343"},{name:"\u6d25\u5df4\u5e03\u97e6",pinyin:"jinbabuwei",spy:"jbbw",code:"8059156"},{name:"\u5409\u5c14\u5409\u65af\u65af\u5766",pinyin:"jierjisisitan",spy:"jejsst",code:"37281513"},{name:"\u6377\u514b",pinyin:"jieke",spy:"jk",code:"3281850"},{name:"\u52a0\u7eb3",pinyin:"jiana",spy:"jn",code:"3301212"},{name:"\u52a0\u62ff\u5927",pinyin:"jianada",spy:"jnd",code:"27410"},{name:"\u52a0\u84ec",pinyin:"jiapeng",spy:"jp",code:"37630926"},{name:"\u67ec\u57d4\u5be8",pinyin:"jianpuzhai",spy:"jpz",code:"4053742",city:[{name:"\u767d\u9a6c\u5e02",pinyin:"baimashi",spy:"bms",code:"220402666"},{name:"\u78c5\u771f\u5e02",pinyin:"bangzhenshi",spy:"bzs",code:"220400721"},{name:"\u8d21\u5e03",pinyin:"gongbu",spy:"gb",code:"215106874"},{name:"\u91d1\u8fb9\u5e02",pinyin:"jinbianshi",spy:"jbs",code:"220412285"},{name:"\u6854\u4e95\u5e02",pinyin:"jiejingshi",spy:"jjs",code:"220402665"},{name:"\u8499\u591a\u5409\u5229\u5e02",pinyin:"mengduojilishi",spy:"mdjls",code:"220412287"},{name:"\u9a6c\u5fb7\u65fa\u5e02",pinyin:"madewangshi",spy:"mdws",code:"220414150"},{name:"\u897f\u54c8\u52aa\u514b\u5e02",pinyin:"xihanukeshi",spy:"xhnks",code:"220396849"},{name:"\u66b9\u7c92\u5e02",pinyin:"xianlishi",spy:"xls",code:"220412286"}]},{name:"\u514b\u7f57\u5730\u4e9a",pinyin:"keluodiya",spy:"kldy",code:"3753248"},{name:"\u5580\u9ea6\u9686",pinyin:"kamailong",spy:"kml",code:"3302683"},{name:"\u80af\u5c3c\u4e9a",pinyin:"kenniya",spy:"kny",code:"119853"},{name:"\u5361\u5854\u5c14",pinyin:"kataer",spy:"kte",code:"3308734"},{name:"\u79d1\u5a01\u7279",pinyin:"keweite",spy:"kwt",code:"3300961"},{name:"\u5229\u6bd4\u91cc\u4e9a",pinyin:"libiliya",spy:"lbly",code:"37630927"},{name:"\u9ece\u5df4\u5ae9",pinyin:"libanen",spy:"lbn",code:"17828418"},{name:"\u5229\u6bd4\u4e9a",pinyin:"libiya",spy:"lby",code:"37630936"},{name:"\u7f57\u9a6c\u5c3c\u4e9a",pinyin:"luomaniya",spy:"lmny",code:"9363119"},{name:"\u5362\u68ee\u5821",pinyin:"lusenbao",spy:"lsb",code:"4004107"},{name:"\u7acb\u9676\u5b9b",pinyin:"litaowan",spy:"ltw",code:"16245445"},{name:"\u8001\u631d",pinyin:"laowo",spy:"lw",code:"7717221",city:[{name:"\u7405\u52c3\u62c9\u90a6",pinyin:"langbolabang",spy:"lblb",code:"24291548"},{name:"\u6c99\u6e7e",pinyin:"shawan",spy:"sw",code:"7554315"},{name:"\u4e07\u8363",pinyin:"wanrong",spy:"wr",code:"16619593"},{name:"\u4e07\u8c61",pinyin:"wanxiang",spy:"wx",code:"3233370"}]},{name:"\u7f05\u7538",pinyin:"miandian",spy:"md",code:"3936150",city:[{name:"\u52c3\u751f",pinyin:"bosheng",spy:"bs",code:"119511096"},{name:"\u4e1c\u679d",pinyin:"dongzhi",spy:"dz",code:"94276646"},{name:"\u814a\u620d",pinyin:"lashu",spy:"ls",code:"220414327"},{name:"\u66fc\u5fb7\u52d2",pinyin:"mandele",spy:"mdl",code:"3630501"},{name:"\u5bc6\u652f\u90a3",pinyin:"mizhinei",spy:"mzn",code:"42771355"},{name:"\u5185\u6bd4\u90fd",pinyin:"neibidou",spy:"nbd",code:"220398980"},{name:"\u5b9e\u7686",pinyin:"shijie",spy:"sj",code:"220416205"},{name:"\u4ef0\u5149",pinyin:"yangguang",spy:"yg",code:"3300683"}]},{name:"\u9a6c\u8fbe\u52a0\u65af\u52a0",pinyin:"madajiasijia",spy:"mdjsj",code:"3336649"},{name:"\u9a6c\u5c14\u4ee3\u592b",pinyin:"maerdaifu",spy:"medf",code:"3299559",city:[{name:"\u5b89\u5a1c\u5854\u62c9\u5409\u54c8\u74e6/Anantara Kihavah",pinyin:"annatalajihawa/Anantara Kihavah",spy:"antljhw/Anantara Kihavah",code:"218920386"},{name:"\u5b89\u5a1c\u5854\u62c9\u8587\u8389\u7b1b\u53e4\u5c9b/Anantara Veli Dhigu",pinyin:"annatalaweilidigudao/Anantara Veli Dhigu",spy:"antlwldgd/Anantara Veli Dhigu",code:"218932326"},{name:"\u963f\u96c5\u8fbe/AYADA",pinyin:"ayada/AYADA",spy:"ayd/AYADA",code:"218936012"},{name:"\u6ce2\u675c\u5e0c\u8482/Coco Palm Bodu Hithi",pinyin:"boduxidi/Coco Palm Bodu Hithi",spy:"bdxd/Coco Palm Bodu Hithi",code:"218914840"},{name:"\u767d\u91d1\u5c9b/Hudhuranfushi",pinyin:"baijindao/Hudhuranfushi",spy:"bjd/Hudhuranfushi",code:"218916582"},{name:"\u5df4\u6d1b\u65af/Baros",pinyin:"baluosi/Baros",spy:"bls/Baros",code:"218922365"},{name:"\u675c\u59ae\u53ef\u9c81/Dhuni Kolhu",pinyin:"dunikelu/Dhuni Kolhu",spy:"dnkl/Dhuni Kolhu",code:"218914843"},{name:"\u8fea\u5a03\u5c9b/LUX",pinyin:"diwadao/LUX",spy:"dwd/LUX",code:"218920407"},{name:"\u90fd\u559c\u5929\u9619/Dusit Thani",pinyin:"douxitianque/Dusit Thani",spy:"dxtq/Dusit Thani",code:"218920402"},{name:"\u8299\u82b1\u82ac/Huvafen",pinyin:"fuhuafen/Huvafen",spy:"fhf/Huvafen",code:"218932148"},{name:"\u83f2\u5229\u897f\u5965/Filitheyo",pinyin:"feilixiao/Filitheyo",spy:"flxa/Filitheyo",code:"218930155"},{name:"\u6e2f\u4e3d\u5c9b/Conrad Rangali",pinyin:"ganglidao/Conrad Rangali",spy:"gld/Conrad Rangali",code:"218920408"},{name:"\u5eb7\u675c\u739b/Kandooma",pinyin:"kangduma/Kandooma",spy:"kdm/Kandooma",code:"218926318"},{name:"\u5e93\u62c9\u739b\u8482/Kuramathi",pinyin:"kulamadi/Kuramathi",spy:"klmd/Kuramathi",code:"218910974"},{name:"\u5361\u5c3c\u5c9b/Club Med Kani",pinyin:"kanidao/Club Med Kani",spy:"knd/Club Med Kani",code:"218924314"},{name:"\u9c81\u6ee8\u900a\u5c9b/Club Robinson",pinyin:"lubinxundao/Club Robinson",spy:"lbxd/Club Robinson",code:"218920412"},{name:"\u8389\u8389\u5c9b/Lily Beach",pinyin:"lilidao/Lily Beach",spy:"lld/Lily Beach",code:"218912993"},{name:"\u84dd\u8272\u7f8e\u4eba\u8549/Thulhagiri",pinyin:"lansemeirenjiao/Thulhagiri",spy:"lsmrj/Thulhagiri",code:"218922370"},{name:"\u84dd\u6e7e\u534a\u5c9b/Herathera",pinyin:"lanwanbandao/Herathera",spy:"lwbd/Herathera",code:"218924318"},{name:"\u66fc\u5fb7\u8299/Medhufushi",pinyin:"mandefu/Medhufushi",spy:"mdf/Medhufushi",code:"218914852"},{name:"\u871c\u675c\u5e15\u8339/Meedhupparu",pinyin:"miduparu/Meedhupparu",spy:"mdpr/Meedhupparu",code:"218934107"},{name:"\u6155\u8299\u58eb/Moofushi",pinyin:"mufushi/Moofushi",spy:"mfs/Moofushi",code:"218936011"},{name:"\u68a6\u5e7b\u5c9b/Dhonveli",pinyin:"menghuandao/Dhonveli",spy:"mhd/Dhonveli",code:"218924319"},{name:"\u9b45\u529b\u5c9b\u54c8\u5e93\u62c9/Chaaya Hakura",pinyin:"meilidaohakula/Chaaya Hakura",spy:"mldhkl/Chaaya Hakura",code:"218934106"},{name:"\u739b\u5a1c\u6cd5\u9c81/Waldorf Astoria",pinyin:"manafalu/Waldorf Astoria",spy:"mnfl/Waldorf Astoria",code:"218928320"},{name:"\u6ee1\u6708\u5c9b/Fullmoon Sheraton",pinyin:"manyuedao/Fullmoon Sheraton",spy:"myd/Fullmoon Sheraton",code:"218934103"},{name:"\u5b81\u9759\u5c9b/W Retreat&Spa",pinyin:"ningjingdao/W Retreat&Spa",spy:"njd/W Retreat&Spa",code:"218924285"},{name:"\u5c3c\u4e9a\u7f8e/Niyama",pinyin:"niyamei/Niyama",spy:"nym/Niyama",code:"218932167"},{name:"\u56db\u5b63\u5e93\u8fbe\u547c\u62c9/Fourseasons Kuda Hura",pinyin:"sijikudahula/Fourseasons Kuda Hura",spy:"sjkdhl/Fourseasons Kuda Hura",code:"218910966"},{name:"\u56db\u5b63\u5170\u8fbe\u5409\u62c9\u74e6\u9c81/Fourseasons Landaa Giravaru",pinyin:"sijilandajilawalu/Fourseasons Landaa Giravaru",spy:"sjldjlwl/Fourseasons Landaa Giravaru",code:"218934097"},{name:"\u7d22\u5c3c\u5a03\u59ec\u4e3d/Soneva Gili",pinyin:"suoniwajili/Soneva Gili",spy:"snwjl/Soneva Gili",code:"218926290"},{name:"\u795e\u4ed9\u73ca\u745a/Island Hideaway",pinyin:"shenxianshanhu/Island Hideaway",spy:"sxsh/Island Hideaway",code:"218918552"},{name:"\u53cc\u9c7c\u5c9b/Olhuveli",pinyin:"shuangyudao/Olhuveli",spy:"syd/Olhuveli",code:"218924316"},{name:"\u6cf0\u59ec\u9b45\u529b/Taj Exotica",pinyin:"taijimeili/Taj Exotica",spy:"tjml/Taj Exotica",code:"218924309"},{name:"\u6cf0\u59ec\u73ca\u745a/Taj Vivanta",pinyin:"taijishanhu/Taj Vivanta",spy:"tjsh/Taj Vivanta",code:"218918563"},{name:"\u74e6\u5ea6\u5c9b/Vadoo",pinyin:"wadudao/Vadoo",spy:"wdd/Vadoo",code:"218910972"},{name:"\u8587\u9732\u4e3d\u8299/Vilu Reef",pinyin:"weilulifu/Vilu Reef",spy:"wllf/Vilu Reef",code:"218924324"},{name:"\u8587\u62c9\u838e\u9732/Velassaru",pinyin:"weilashalu/Velassaru",spy:"wlsl/Velassaru",code:"218932173"},{name:"\u552f\u4e00\u745e\u63d0\u62c9/One&Only Reethi Raah",pinyin:"weiyiruitila/One&Only Reethi Raah",spy:"wyrtl/One&Only Reethi Raah",code:"218908990"},{name:"\u5e0c\u5c14\u987f\u4f0a\u9732\u5c9b/Hilton Irufushi",pinyin:"xierdunyiludao/Hilton Irufushi",spy:"xedyld/Hilton Irufushi",code:"218934104"},{name:"\u9999\u683c\u91cc\u62c9\u8587\u5b81\u59ec\u4e3d/Shangri-la Villingili",pinyin:"xianggelilaweiningjili/Shangri-la Villingili",spy:"xgllwnjl/Shangri-la Villingili",code:"218916576"},{name:"\u7eda\u4e3d\u5c9b/Club Rannalhi",pinyin:"xuanlidao/Club Rannalhi",spy:"xld/Club Rannalhi",code:"218924320"},{name:"\u60a6\u693f\u8587\u62c9\u74e6\u9c81/Angsana Velavaru",pinyin:"yuechunweilawalu/Angsana Velavaru",spy:"ycwlwl/Angsana Velavaru",code:"218926313"},{name:"\u60a6\u693f\u4f0a\u745a\u9c81/Angsana Ihuru",pinyin:"yuechunyihulu/Angsana Ihuru",spy:"ycyhl/Angsana Ihuru",code:"218924315"},{name:"\u60a6\u6995\u5e84\u74e6\u5bbe\u6cd5\u9c81/Banyantree Vabbinfaru",pinyin:"yuerongzhuangwabinfalu/Banyantree Vabbinfaru",spy:"yrzwbfl/Banyantree Vabbinfaru",code:"218914839"},{name:"\u6930\u5b50\u5c9b/Kurumba",pinyin:"yezidao/Kurumba",spy:"yzd/Kurumba",code:"218936157"},{name:"\u603b\u7763\u5c9b/Viceroy",pinyin:"zongdudao/Viceroy",spy:"zdd/Viceroy",code:"218914827"},{name:"\u5353\u7f8e\u4e9a\u5fb7\u74e6\u7eb3\u8299\u58eb/Jumeirah Dhevanafushi",pinyin:"zhuomeiyadewanafushi/Jumeirah Dhevanafushi",spy:"zmydwnfs/Jumeirah Dhevanafushi",code:"218926306"},{name:"\u5353\u7f8e\u4e9a\u8587\u5854\u8587\u8389/Jumeirah Vittaveli",pinyin:"zhuomeiyaweitaweili/Jumeirah Vittaveli",spy:"zmywtwl/Jumeirah Vittaveli",code:"218932147"},{name:"\u94bb\u77f3\u5c9b/Diamond A/T",pinyin:"zuanshidao/Diamond A/T",spy:"zsd/Diamond A/T",code:"218912994"},{name:"\u4e2d\u592e\u683c\u5170\u5fb7\u68ee\u7279\u62c9/Centara Grand",pinyin:"zhongyanggelandesentela/Centara Grand",spy:"zygldstl/Centara Grand",code:"218936015"}]},{name:"\u7f8e\u56fd",pinyin:"meiguo",spy:"mg",code:"27409",city:[{name:"\u963f\u62c9\u65af\u52a0",pinyin:"alasijia",spy:"alsj",code:"38305"},{name:"\u6ce2\u58eb\u987f",pinyin:"boshidun",spy:"bsd",code:"3231848"},{name:"\u4e39\u4f5b",pinyin:"danfo",spy:"df",code:"3300709"},{name:"\u5e95\u7279\u5f8b",pinyin:"ditelu:",spy:"dtl",code:"3231828"},{name:"\u8d39\u57ce",pinyin:"feicheng",spy:"fc",code:"3300762"},{name:"\u534e\u76db\u987f",pinyin:"huashengdun",spy:"hsd",code:"3300550"},{name:"\u65e7\u91d1\u5c71",pinyin:"jiujinshan",spy:"jjs",code:"32031"},{name:"\u6d1b\u6749\u77f6",pinyin:"luoshanji",spy:"lsj",code:"32027"},{name:"\u8bfa\u798f\u514b",pinyin:"nuofuke",spy:"nfk",code:"4068565"},{name:"\u7ebd\u7ea6",pinyin:"niuyue",spy:"ny",code:"32028"},{name:"\u5339\u5179\u5821",pinyin:"pizibao",spy:"pzb",code:"3300759"},{name:"\u65b0\u5965\u5c14\u826f",pinyin:"xinaoerliang",spy:"xael",code:"3328385"},{name:"\u4f11\u65af\u6566",pinyin:"xiusidun",spy:"xsd",code:"7170113"},{name:"\u590f\u5a01\u5937",pinyin:"xiaweiyi",spy:"xwy",code:"58213"},{name:"\u897f\u96c5\u56fe",pinyin:"xiyatu",spy:"xyt",code:"3300991"},{name:"\u76d0\u6e56\u57ce",pinyin:"yanhucheng",spy:"yhc",code:"3872941"},{name:"\u829d\u52a0\u54e5",pinyin:"zhijiage",spy:"zjg",code:"3231832"}]},{name:"\u8499\u53e4",pinyin:"menggu",spy:"mg",code:"4383995"},{name:"\u5b5f\u52a0\u62c9\u56fd",pinyin:"mengjialaguo",spy:"mjlg",code:"30407041"},{name:"\u9a6c\u91cc",pinyin:"mali",spy:"ml",code:"29066736"},{name:"\u79d8\u9c81",pinyin:"milu",spy:"ml",code:"52999"},{name:"\u6bdb\u91cc\u6c42\u65af",pinyin:"maoliqiusi",spy:"mlqs",code:"3300942",city:[{name:"\u9e20\u6bd4",pinyin:"jiubi",spy:"jb",code:"220398968"},{name:"\u5361\u7279\u90a6",pinyin:"katebang",spy:"ktb",code:"126072016"},{name:"\u8def\u6613\u6e2f",pinyin:"luyigang",spy:"lyg",code:"17565054"}]},{name:"\u6bdb\u91cc\u5854\u5c3c\u4e9a",pinyin:"maolitaniya",spy:"mltny",code:"37630938"},{name:"\u9a6c\u6765\u897f\u4e9a",pinyin:"malaixiya",spy:"mlxy",code:"3286452",city:[{name:"\u69df\u57ce",pinyin:"bincheng",spy:"bc",code:"3313191"},{name:"\u5173\u4e39",pinyin:"guandan",spy:"gd",code:"3327820"},{name:"\u5409\u9686\u5761",pinyin:"jilongpo",spy:"jlp",code:"3231837"},{name:"\u5170\u5361\u5a01",pinyin:"lankawei",spy:"lkw",code:"3311320"},{name:"\u9a6c\u516d\u7532",pinyin:"maliujia",spy:"mlj",code:"4180814"},{name:"\u65b0\u5c71",pinyin:"xinshan",spy:"xs",code:"3619650"},{name:"\u6021\u4fdd",pinyin:"yibao",spy:"yb",code:"119856"}]},{name:"\u83ab\u6851\u6bd4\u514b",pinyin:"mosangbike",spy:"msbk",code:"37630939"},{name:"\u58a8\u897f\u54e5",pinyin:"moxige",spy:"mxg",code:"52992"},{name:"\u5c3c\u6cca\u5c14",pinyin:"niboer",spy:"nbe",code:"3793613",city:[{name:"\u5df4\u5fb7\u5c97",pinyin:"badegang",spy:"bdg",code:"220416067"},{name:"\u5df4\u5fb7\u62c9\u666e\u5c14",pinyin:"badelapuer",spy:"bdlpe",code:"220402704"},{name:"\u52a0\u5fb7\u6ee1\u90fd",pinyin:"jiademandou",spy:"jdmd",code:"3300934"},{name:"\u5e15\u5766",pinyin:"patan",spy:"pt",code:"151185818"},{name:"\u4f0a\u62c9\u59c6",pinyin:"yilamu",spy:"ylm",code:"127418281"}]},{name:"\u5357\u975e",pinyin:"nanfei",spy:"nf",code:"3274954"},{name:"\u5357\u6781",pinyin:"nanji",spy:"nj",code:"3283820"},{name:"\u7eb3\u7c73\u6bd4\u4e9a",pinyin:"namibiya",spy:"nmby",code:"29364250"},{name:"\u5357\u7f8e\u6d32\u5176\u4ed6\u56fd\u5bb6",pinyin:"nanmeizhouqitaguojia",spy:"nmzqtgj",code:"82284437"},{name:"\u5c3c\u65e5\u5c14",pinyin:"nirier",spy:"nre",code:"37630928"},{name:"\u5c3c\u65e5\u5229\u4e9a",pinyin:"niriliya",spy:"nrly",code:"3302689"},{name:"\u6b27\u6d32\u5176\u4ed6\u56fd\u5bb6",pinyin:"ouzhouqitaguojia",spy:"ozqtgj",code:"82284435"},{name:"\u8461\u8404\u7259",pinyin:"putaoya",spy:"pty",code:"39276"},{name:"\u65e5\u672c",pinyin:"riben",spy:"rb",code:"27023",city:[{name:"\u5343\u53f6",pinyin:"qianye",spy:"qy",code:"3830529"},{name:"\u51b2\u7ef3",pinyin:"chongsheng",spy:"cs",code:"3301153"},{name:"\u5927\u962a",pinyin:"daban",spy:"db",code:"3300916"},{name:"\u4e1c\u4eac",pinyin:"dongjing",spy:"dj",code:"32032"},{name:"\u798f\u5c71",pinyin:"fushan",spy:"fs",code:"6256825"},{name:"\u5bab\u5d0e",pinyin:"gongqi",spy:"gq",code:"6818597"},{name:"\u51fd\u9986",pinyin:"hanguan",spy:"hg",code:"6818311"},{name:"\u4eac\u90fd",pinyin:"jingdou",spy:"jd",code:"116959"},{name:"\u540d\u53e4\u5c4b",pinyin:"mingguwu",spy:"mgw",code:"3231844"},{name:"\u5948\u826f",pinyin:"nailiang",spy:"nl",code:"4423678"},{name:"\u795e\u6237",pinyin:"shenhu",spy:"sh",code:"7205255"},{name:"\u795e\u5948\u5ddd",pinyin:"shennaichuan",spy:"snc",code:"22452725"},{name:"\u957f\u5d0e",pinyin:"zhangqi",spy:"zq",code:"3231843"}]},{name:"\u745e\u5178",pinyin:"ruidian",spy:"rd",code:"27415"},{name:"\u745e\u58eb",pinyin:"ruishi",spy:"rs",code:"3255100"},{name:"\u82cf\u4e39",pinyin:"sudan",spy:"sd",code:"12281302"},{name:"\u65af\u6d1b\u4f10\u514b",pinyin:"siluofake",spy:"slfk",code:"37630929"},{name:"\u585e\u62c9\u5229\u6602",pinyin:"sailaliang",spy:"slla",code:"37630930"},{name:"\u65af\u91cc\u5170\u5361",pinyin:"sililanka",spy:"sllk",code:"3300947"},{name:"\u7d22\u9a6c\u91cc",pinyin:"suomali",spy:"sml",code:"12551170"},{name:"\u585e\u820c\u5c14",pinyin:"saisheer",spy:"sse",code:"6528826"},{name:"\u6c99\u7279\u963f\u62c9\u4f2f",pinyin:"shatealabo",spy:"stalb",code:"6307773"},{name:"\u571f\u8033\u5176",pinyin:"tuerqi",spy:"teq",code:"39488",city:[{name:"\u5b89\u5361\u62c9",pinyin:"ankala",spy:"akl",code:"42771"},{name:"\u5b89\u5854\u5229\u4e9a",pinyin:"antaliya",spy:"atly",code:"6955099"},{name:"\u8fea\u4e9a\u5df4\u514b\u5c14",pinyin:"diyabakeer",spy:"dybke",code:"6930733"},{name:"\u51e1\u57ce",pinyin:"fancheng",spy:"fc",code:"6110502"},{name:"\u7279\u62c9\u5e03\u5b97",pinyin:"telabuzong",spy:"tlbz",code:"6810128"},{name:"\u4f0a\u65af\u5766\u5e03\u5c14",pinyin:"yisitanbuer",spy:"ystbe",code:"3231852"}]},{name:"\u6cf0\u56fd",pinyin:"taiguo",spy:"tg",code:"27024",city:[{name:"\u82ad\u5824\u96c5",pinyin:"badiya",spy:"bdy",code:"8648911"},{name:"\u8463\u91cc",pinyin:"dongli",spy:"dl",code:"3471035"},{name:"\u5408\u827e",pinyin:"heai",spy:"ha",code:"3481195"},{name:"\u534e\u6b23",pinyin:"huaxin",spy:"hx",code:"4198211"},{name:"\u66fc\u8c37",pinyin:"mangu",spy:"mg",code:"3231835"},{name:"\u666e\u5409",pinyin:"puji",spy:"pj",code:"3300922"},{name:"\u6e05\u83b1",pinyin:"qinglai",spy:"ql",code:"3596368"},{name:"\u6e05\u8fc8",pinyin:"qingmai",spy:"qm",code:"3299739"},{name:"\u7d20\u53fb\u4ed6\u5c3c",pinyin:"suletani",spy:"sltn",code:"218904542"}]},{name:"\u6c64\u52a0",pinyin:"tangjia",spy:"tj",code:"37630945"},{name:"\u5854\u5409\u514b\u65af\u5766",pinyin:"tajikesitan",spy:"tjkst",code:"37630921"},{name:"\u571f\u5e93\u66fc\u65af\u5766",pinyin:"tukumansitan",spy:"tkmst",code:"4427509"},{name:"\u5929\u5b81",pinyin:"tianning",spy:"tn",code:"7468124"},{name:"\u7a81\u5c3c\u65af",pinyin:"tunisi",spy:"tns",code:"3302680"},{name:"\u53f0\u6e7e",pinyin:"taiwan",spy:"tw",code:"27368",city:[{name:"\u677f\u6865",pinyin:"banqiao",spy:"bq",code:"8139370"},{name:"\u6597\u516d",pinyin:"douliu",spy:"dl",code:"218926171"},{name:"\u51e4\u5c71",pinyin:"fengshan",spy:"fs",code:"9966263"},{name:"\u4e30\u539f",pinyin:"fengyuan",spy:"fy",code:"7645107"},{name:"\u9ad8\u96c4",pinyin:"gaoxiong",spy:"gx",code:"3301091"},{name:"\u82b1\u83b2",pinyin:"hualian",spy:"hl",code:"7648926"},{name:"\u57fa\u9686",pinyin:"jilong",spy:"jl",code:"17398410"},{name:"\u5609\u4e49",pinyin:"jiayi",spy:"jy",code:"4024435"},{name:"\u9a6c\u516c",pinyin:"magong",spy:"mg",code:"218926172"},{name:"\u82d7\u6817",pinyin:"miaoli",spy:"ml",code:"15224426"},{name:"\u5c4f\u4e1c",pinyin:"pingdong",spy:"pd",code:"9325819"},{name:"\u53f0\u5317",pinyin:"taibei",spy:"tb",code:"42417"},{name:"\u592a\u4fdd",pinyin:"taibao",spy:"tb",code:"34758454"},{name:"\u53f0\u4e1c",pinyin:"taidong",spy:"td",code:"43540770"},{name:"\u53f0\u5357",pinyin:"tainan",spy:"tn",code:"4024226"},{name:"\u6843\u56ed",pinyin:"taoyuan",spy:"ty",code:"56547"},{name:"\u53f0\u4e2d",pinyin:"taizhong",spy:"tz",code:"3301211"},{name:"\u65b0\u8425",pinyin:"xinying",spy:"xy",code:"218932025"},{name:"\u65b0\u7af9",pinyin:"xinzhu",spy:"xz",code:"4129351"},{name:"\u5b9c\u5170",pinyin:"yilan",spy:"yl",code:"7553380"},{name:"\u7af9\u5317",pinyin:"zhubei",spy:"zb",code:"218912826"},{name:"\u5f70\u5316",pinyin:"zhanghua",spy:"zh",code:"68546823"}]},{name:"\u4e4c\u5e72\u8fbe",pinyin:"wuganda",spy:"wgd",code:"36730392"},{name:"\u4e4c\u514b\u5170",pinyin:"wukelan",spy:"wkl",code:"3316549"},{name:"\u6587\u83b1",pinyin:"wenlai",spy:"wl",code:"3319599"},{name:"\u4e4c\u62c9\u572d",pinyin:"wulagui",spy:"wlg",code:"53003"},{name:"\u59d4\u5185\u745e\u62c9",pinyin:"weineiruila",spy:"wnrl",code:"52997"},{name:"\u4e4c\u5179\u522b\u514b\u65af\u5766",pinyin:"wuzibiekesitan",spy:"wzbkst",code:"7260977"},{name:"\u897f\u73ed\u7259",pinyin:"xibanya",spy:"xby",code:"27424"},{name:"\u9999\u6e2f",pinyin:"xianggang",spy:"xg",code:"27369"},{name:"\u65b0\u52a0\u5761",pinyin:"xinjiapo",spy:"xjp",code:"43446",city:[{name:"\u725b\u8f66\u6c34",pinyin:"niucheshui",spy:"ncs",code:"10032501"},{name:"\u5723\u6dd8\u6c99",pinyin:"shengtaosha",spy:"sts",code:"8099687"},{name:"\u5370\u5ea6\u57ce",pinyin:"yinducheng",spy:"ydc",code:"218918069"},{name:"\u6a1f\u5b9c",pinyin:"zhangyi",spy:"zy",code:"69763871"}]},{name:"\u5e0c\u814a",pinyin:"xila",spy:"xl",code:"3298620"},{name:"\u53d9\u5229\u4e9a",pinyin:"xuliya",spy:"xly",code:"6469571"},{name:"\u65b0\u897f\u5170",pinyin:"xinxilan",spy:"xxl",code:"43444"},{name:"\u5308\u7259\u5229",pinyin:"xiongyali",spy:"xyl",code:"6897023"},{name:"\u5370\u5ea6",pinyin:"yindu",spy:"yd",code:"27026",city:[{name:"\u827e\u54c8\u8fc8\u8fbe\u5df4\u5fb7",pinyin:"aihamaidabade",spy:"ahmdbd",code:"3408075"},{name:"\u73ed\u52a0\u7f57\u5c14",pinyin:"banjialuoer",spy:"bjle",code:"3320017"},{name:"\u6d77\u5fb7\u62c9\u5df4",pinyin:"haidelaba",spy:"hdlb",code:"3395243"},{name:"\u52a0\u5c14\u5404\u7b54",pinyin:"jiaergeda",spy:"jegd",code:"3573421"},{name:"\u9a6c\u5fb7\u62c9\u65af",pinyin:"madelasi",spy:"mdls",code:"3299528"},{name:"\u5b5f\u4e70",pinyin:"mengmai",spy:"mm",code:"3301082"},{name:"\u65b0\u5fb7\u91cc",pinyin:"xindeli",spy:"xdl",code:"3231858"}]},{name:"\u7ea6\u65e6",pinyin:"yuedan",spy:"yd",code:"4272673"},{name:"\u610f\u5927\u5229",pinyin:"yidali",spy:"ydl",code:"39865108",city:[{name:"\u6bd4\u8428",pinyin:"bisa",spy:"bs",code:"22077"},{name:"\u90fd\u7075",pinyin:"douling",spy:"dl",code:"3301014"},{name:"\u4f5b\u7f57\u4f26\u8428",pinyin:"foluolunsa",spy:"flls",code:"3301001"},{name:"\u7f57\u9a6c",pinyin:"luoma",spy:"lm",code:"58210"},{name:"\u7c73\u5170",pinyin:"milan",spy:"ml",code:"64305683"},{name:"\u90a3\u4e0d\u52d2\u65af",pinyin:"neibulesi",spy:"nbls",code:"3301028"},{name:"\u5e9e\u8d1d",pinyin:"pangbei",spy:"pb",code:"7797185"},{name:"\u7ef4\u7f57\u7eb3",pinyin:"weiluona",spy:"wln",code:"194668160"},{name:"\u5a01\u5c3c\u65af",pinyin:"weinisi",spy:"wns",code:"3301023"},{name:"\u9521\u8036\u7eb3",pinyin:"xiyena",spy:"xyn",code:"42970451"}]},{name:"\u5370\u5ea6\u5c3c\u897f\u4e9a",pinyin:"yindunixiya",spy:"ydnxy",code:"3355806",city:[{name:"\u5df4\u5398\u5c9b",pinyin:"balidao",spy:"bld",code:"3299566"},{name:"\u68c9\u5170",pinyin:"mianlan",spy:"ml",code:"3778090"},{name:"\u65e5\u60f9",pinyin:"rire",spy:"rr",code:"3778066"},{name:"\u6cd7\u6c34",pinyin:"sishui",spy:"ss",code:"3330869"},{name:"\u4e07\u9686",pinyin:"wanlong",spy:"wl",code:"3914246"},{name:"\u96c5\u52a0\u8fbe",pinyin:"yajiada",spy:"yjd",code:"3231842"}]},{name:"\u82f1\u56fd",pinyin:"yingguo",spy:"yg",code:"27411",city:[{name:"\u7231\u4e01\u5821",pinyin:"aidingbao",spy:"adb",code:"3301037"},{name:"\u8d1d\u5c14\u6cd5\u65af\u7279",pinyin:"beierfasite",spy:"befst",code:"4484558"},{name:"\u4f2f\u660e\u7ff0",pinyin:"bominghan",spy:"bmh",code:"3301043"},{name:"\u52a0\u7684\u592b",pinyin:"jiadefu",spy:"jdf",code:"3872188"},{name:"\u5251\u6865",pinyin:"jianqiao",spy:"jq",code:"3276953"},{name:"\u4f26\u6566",pinyin:"lundun",spy:"ld",code:"58209"},{name:"\u5229\u7269\u6d66",pinyin:"liwupu",spy:"lwp",code:"39166"},{name:"\u725b\u6d25",pinyin:"niujin",spy:"nj",code:"132564"},{name:"\u666e\u5229\u8305\u65af",pinyin:"pulimaosi",spy:"plms",code:"5729006"},{name:"\u8c22\u83f2\u5c14\u5fb7",pinyin:"xiefeierde",spy:"xfed",code:"6810784"}]},{name:"\u4f0a\u6717",pinyin:"yilang",spy:"yl",code:"7978434"},{name:"\u4e5f\u95e8",pinyin:"yemen",spy:"ym",code:"3342873"},{name:"\u7259\u4e70\u52a0",pinyin:"yamaijia",spy:"ymj",code:"52993"},{name:"\u4e9a\u7f8e\u5c3c\u4e9a",pinyin:"yameiniya",spy:"ymny",code:"7576774"},{name:"\u8d8a\u5357",pinyin:"yuenan",spy:"yn",code:"27027",city:[{name:"\u4f1a\u5b89",pinyin:"huian",spy:"ha",code:"70377554"},{name:"\u6d77\u9632",pinyin:"haifang",spy:"hf",code:"38088577"},{name:"\u6cb3\u5185",pinyin:"henei",spy:"hn",code:"3299896"},{name:"\u91d1\u5170\u6e7e\u5e02",pinyin:"jinlanwanshi",spy:"jlws",code:"218910520"},{name:"\u5357\u5b9a",pinyin:"nanding",spy:"nd",code:"218910521"},{name:"\u82b9\u82f4",pinyin:"qinju",spy:"qj",code:"218910522"},{name:"\u987a\u5316",pinyin:"shunhua",spy:"sh",code:"6787172"},{name:"\u5c98\u6e2f",pinyin:"xiangang",spy:"xg",code:"6787307"},{name:"\u897f\u8d21",pinyin:"xigong",spy:"xg",code:"218908560"},{name:"\u82bd\u5e84",pinyin:"yazhuang",spy:"yz",code:"110395481"}]},{name:"\u4ee5\u8272\u5217",pinyin:"yiselie",spy:"ysl",code:"43550"},{name:"\u4e9a\u6d32\u5176\u4ed6\u56fd\u5bb6",pinyin:"yazhouqitaguojia",spy:"yzqtgj",code:"82284434"},{name:"\u8d5e\u6bd4\u4e9a",pinyin:"zanbiya",spy:"zby",code:"11768346"},{name:"\u667a\u5229",pinyin:"zhili",spy:"zl",code:"53001"}];return a});