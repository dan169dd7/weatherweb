var cityLenght = 0;//多少城市
var cityName;
var i = 0;
//設置天氣圖
function SetWeeaTher(woeid) {
    //將locationQuery不要轉換
    var locationQuery = "select%20*%20from%20weather.forecast%20where%20woeid%20%3D%20'" + WOEID + "%20and%20u=%27c%27";
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        function (data) {
            var forcast = data.query.results.channel.item.forecast;//本周天氣
            cityName = word[0].City[i].CName//城市
			$("#CName").text(cityName);
			Setforcast(forcast);
			i++;
        });
}

function Setforcast(forcast) {
	$(".weatherNow").empty();
	$(".weatherWeek").empty();
	for(index = 0; index < 7; index++){
		if (index == 0) {
			NowWeather(forcast[index]);
        }
		weatherWeekDay(forcast[index],index);	
	}
}
//今天氣象
function NowWeather(data){
	//天氣平均溫度
	var averagetemp=(parseInt(data.high)+parseInt(data.low))/2;
	var $WeatherNow='<div class="weatherNowIcon">'+
						'<img src="images/'+weather_con[data.code][0]+'" />'+//天氣編號
					'</div>'+
					'<div class="weatherNowDetail">'+
						'<h2>'+weather_con[data.code][1]+'</h2>'+
						'<p>'+data.low+'&deg; / '+data.high+'&deg;</p>'+//最高  最低溫
					'</div>'+
					'<div class="weatherNowTemp">'+
						'<p>'+parseInt(averagetemp)+'&deg;</p>'+
					'</div>';
	$(".weatherNow").append($WeatherNow);
	var temperature;
	if(averagetemp >= 28)
	{
		temperature = "天氣炎熱,多多喝水,小心別中暑。";
	}
	else if (averagetemp >= 25 &&  averagetemp <28)
	{
		temperature = "天氣偏熱,仍須多喝水,小心別中暑。";
	}
	else if (averagetemp >= 20 &&  averagetemp <25)
	{
		temperature = "天氣溫暖,早晚出門可加薄外套,小心別著涼。";
	}
	else if (averagetemp >= 16 &&  averagetemp <20)
	{
		temperature = "天氣溫和,平時出門穿著一件薄外套或防風外套。小心別著涼了。";
	}
	else if (averagetemp >= 10 &&  averagetemp <16)
	{
		temperature = "天氣更冷了,要開始穿冬裝了。注意保暖。";
	}
	else if (averagetemp <10)
	{
		temperature = "寒流來了,穿上更保暖的冬裝。沒事別出門及注意保暖。";
	}

	$("#test").text("今天"+cityName+"的天氣是"+weather_con[data.code][1]+"。"+weather_con[data.code][2]+"溫度是" + averagetemp +"。" + temperature);							
}
//下一周氣象
function weatherWeekDay(data,index){
	//如果是下周的頭和尾
	var signoe='';
	if(index==0){
		signoe=' weatherWeekDayFirst';		
	}
	else if(index==6){
		signoe=' weatherWeekDayLast';		
	}
	//天氣平均溫度
	var averagetemp=(parseInt(data.high)+parseInt(data.low))/2;
	var $Weather='<div class="weatherWeekDay'+signoe+'">'+
						'<p>'+WeekChinese[data.day]+'</p>'+//星期幾
						'<div class="weatherWeekIcon">'+
							'<img src="images/'+weather_con[data.code][0]+'" />'+//天氣編號
						'</div>'+
						'<p>'+parseInt(averagetemp)+'&deg;</p>'+
					'</div>';
	$(".weatherWeek").append($Weather);							
}
//計算有幾個城市
(function () {
    $.each(word[0].City, function (index, value) {
        cityLenght++;
    });
})();

function ShowWaeather() {
	var e = document.getElementById('CityList');
	i = e.options[e.selectedIndex].value;
    $("#todayWeather").empty();
    $("#otherdayWeather").empty();
	SetWeeaTher(word[0].City[i].ID);
    setTimeout("ShowWaeather()", 500);
};

ShowWaeather();
