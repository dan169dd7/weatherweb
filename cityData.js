﻿var word = [
   {
	   Area: 'TW', City: [
		  { ID: '2306188', CName: '基隆', EName: 'Keelung' },
		  { ID: '90717580', CName: '新北', EName: 'NewTaipei' },
		  { ID: '20070568',CName: '臺北', EName: 'Taipei' },
		  { ID: '91982232', CName: '桃園', EName: 'Taoyuan' },
		  { ID: '56027303',CName: '新竹縣', EName: 'Zhubei' },
		  { ID: '2306185',CName: '新竹', EName: 'Hsinchu' },
		  { ID: '56027219',CName: '苗栗', EName: 'Miaoli' },
		  { ID: '2306181',CName: '臺中', EName: 'Taichung' },
		  { ID: '2306204',CName: '南投', EName: 'Nantou' },
		  { ID: '91290191',CName: '彰化', EName: 'Changhua' },
		  { ID: '28776037',CName: '雲林', EName: 'Douliu' },
		  { ID: '56804899', CName: '嘉義縣', EName: 'Alishan' },
		  { ID: '2296315', CName: '嘉義', EName: 'Chiayi' },
		  { ID: '2306182',CName: '臺南', EName: 'Tainan' },
		  { ID: '2306180',CName: '高雄', EName: 'Kaohsiung' },
		  { ID: '91290319',CName: '屏東', EName: 'Pingtung' },
		  { ID: '91290354', CName: '臺東', EName: 'Taitung' },
		  { ID: '91290403', CName: '花蓮', EName: 'Hualien' },
		  { ID: '91290369', CName: '宜蘭', EName: 'Yilan' }
	   ]
   }
];

var WeekChinese={
	"Mon":"一",
	"Tue":"二",
	"Wed":"三",
	"Thu":"四",
	"Fri":"五",
	"Sat":"六",
	"Sun":"日"
}

var weather_con = {
	"0":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"1":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"2":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"3":["weather_thunder.png","雷雨","請記得帶雨具。下雨天不建議登山及出海。打雷時千萬別躲在樹下面及注意雷擊"],
	"4":["weather_thunder.png","雷雨","請記得帶雨具。下雨天不建議登山及出海。打雷時千萬別躲在樹下面及注意雷擊"],
	"5":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"6":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"7":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"8":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"9":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"10":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"11":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"12":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"13":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"14":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"15":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"16":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"17":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"18":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"19":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"20":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"21":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"22":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"23":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"24":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"25":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"26":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"27":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"28":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"29":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"30":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"31":["weather_sunny.png","晴天","晴空萬里，超適合出門走一走。去登山/出海或運動一下吧"],
	"32":["weather_sunny.png","晴天","晴空萬里，超適合出門走一走。去登山/出海或運動一下吧"],
	"33":["weather_sunny.png","晴天","晴空萬里，超適合出門走一走。去登山/出海或運動一下吧"],
	"34":["weather_sunny.png","晴天","晴空萬里，超適合出門走一走。去登山/出海或運動一下吧"],
	"35":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"36":["weather_sunny.png","晴天"],
	"37":["weather_thunder.png","雷雨","請記得帶雨具。下雨天不建議登山及出海。打雷時千萬別躲在樹下面及注意雷擊"],
	"38":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"39":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"40":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"41":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"42":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"43":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"44":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"45":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"46":["weather_rain.png","雨天","請記得帶雨具。下雨天不建議登山及出海。"],
	"47":["weather_cloudy.png","多雲","請留意天氣變化。出門時可以帶雨具以防萬一。雲多時登山會影響視野，出海的話沒影響但還須留意天氣變化。"],
	"3200":"資料錯誤"
}