Highcharts.setOptions({
    lang: {
        rangeSelectorZoom: '',
        rangeSelectorFrom: '开始时间',
        rangeSelectorTo: '结束时间'
    },
    global: {
        timezoneOffset: -8 * 60
    }
});

var space = '&nbsp;&nbsp;&nbsp;&nbsp;';
  //var zsData = {"data":[[1493775000000,1113.96,118000],[1493775060000,1113.84,272000],[1493775120000,1113.71,452000],[1493775180000,1113.75,604000],[1493775240000,1113.91,1528000],[1493775300000,1113.56,2021000],[1493775360000,1113.49,2055000],[1493775420000,1113.28,2758000],[1493775480000,1113.28,2884000],[1493775540000,1113.21,2982000],[1493775600000,1113.27,3308000],[1493775660000,1113.01,3449000],[1493775720000,1113.09,3594550],[1493775780000,1113.23,3778550],[1493775840000,1113.08,4011550],[1493775900000,1113.07,4158550],[1493775960000,1112.98,4342550],[1493776020000,1112.88,4491550],[1493776080000,1112.85,4653350],[1493776140000,1112.76,4806350],[1493776200000,1112.61,5085350],[1493776260000,1112.9,5304350],[1493776320000,1112.98,5611350],[1493776380000,1112.84,5690350],[1493776440000,1112.86,5789492],[1493776500000,1112.88,5871492],[1493776560000,1112.8,6001492],[1493776620000,1112.87,6192492],[1493776680000,1112.89,6274492],[1493776740000,1112.74,6482492],[1493776800000,1112.69,6569492],[1493776860000,1112.64,6886492],[1493776920000,1112.6,6911492],[1493776980000,1112.54,7441492],[1493777040000,1112.6,7828492],[1493777100000,1112.55,7939492],[1493777160000,1112.54,8132892],[1493777220000,1112.49,8326692],[1493777280000,1112.44,8464692],[1493777340000,1112.27,8550692],[1493777400000,1112.22,8659692],[1493777460000,1112.3,8854692],[1493777520000,1112.28,8914708],[1493777580000,1112.24,9001708],[1493777640000,1112.31,9335708],[1493777700000,1112.3,9415708],[1493777760000,1112.28,9504708],[1493777820000,1112.33,9617708],[1493777880000,1112.33,9708708],[1493777940000,1112.42,9806708],[1493778000000,1112.39,9923708],[1493778060000,1112.41,10161708],[1493778120000,1112.42,10499708],[1493778180000,1112.41,10579708],[1493778240000,1112.45,10665708],[1493778300000,1112.52,10870708],[1493778360000,1112.34,11080708],[1493778420000,1112.41,11365708],[1493778480000,1112.42,11622708],[1493778540000,1112.43,11725708],[1493778600000,1112.66,11906708],[1493778660000,1112.64,12059708],[1493778720000,1112.65,12207708],[1493778780000,1112.53,12325708],[1493778840000,1112.43,12421708],[1493778900000,1112.35,12636708],[1493778960000,1112.17,12809708],[1493779020000,1112.17,13010708],[1493779080000,1112.03,13096708],[1493779140000,1112.09,13140708],[1493779200000,1112.07,13179708],[1493779260000,1111.99,13277708],[1493779320000,1112,13482708],[1493779380000,1111.92,13660708],[1493779440000,1111.86,13796708],[1493779500000,1111.74,13899708],[1493779560000,1111.77,14016908],[1493779620000,1111.76,14097908],[1493779680000,1111.56,14229908],[1493779740000,1111.59,14438908],[1493779800000,1111.71,14574908],[1493779860000,1111.66,14784908],[1493779920000,1111.65,14878908],[1493779980000,1111.59,15452908],[1493780040000,1111.75,15728908],[1493780100000,1111.71,15904908],[1493780160000,1111.82,16248908],[1493780220000,1111.88,16290908],[1493780280000,1111.83,17205908],[1493780340000,1111.81,17384908],[1493780400000,1111.82,17736908],[1493780460000,1111.79,17839908],[1493780520000,1111.71,17934908],[1493780580000,1111.7,17952908],[1493780640000,1111.73,18024908],[1493780700000,1111.67,18217908]],"yes":"1113.96","open":"1113.96"};


//首页做市分时图
function drawIndexChart(el, jsonData, code) {

    //数据
    var timeLineData = jsonData.data;
    //数据长度
    var length = timeLineData.length;
    //最后数据
    var last_data = jsonData.data[length-1];
    //开盘价
    var todayOpen = Number(jsonData.open);
    //昨收
    var yesterdayClose = Number(jsonData.yes);
    var todayDate = timeLineData[0][0];

    var caldatas = [];
    var positions = [];

    var day = Highcharts.dateFormat('%Y/%m/%d', todayDate),
    breaks = [{
        from: new Date(day + ' 11:30').getTime(),
        to: new Date(day + ' 13:00').getTime(),
        breakSize: 0 * 60 * 1000
    }],
    min = new Date(day + ' 9:30').getTime(),
    max = new Date(day + ' 15:00').getTime(),
    // x 轴标签便宜高度
    height = $('#' + el).height() * 0.23,
    width = $('#' + el).width();

    caldatas = cal_data(timeLineData,yesterdayClose);
    
    show_info(timeLineData,yesterdayClose,jsonData.open,'in_fs_infos',1);

    //提示框出现
    $('#in_fs_infos').show();

    // Create the chart
    $('#' + el).highcharts('StockChart', {
        chart: {
     
            spacing: 1,
            borderRadius: 0,
            animation: false,
            events: {
                load: function() {
                    //获取当天日期
                    var myDate = new Date();
                    var day = myDate.getDay();
                    var hour = myDate.getHours();
                    var minute = myDate.getMinutes();
                    var time = hour + ':' + minute;

                    //周一到周五执行定时刷新
                    if (myDate.getDay() > 0 && myDate.getDay() < 6) {
                        if (time_range("09:30", "11:36") || time_range("13:00", "15:31")) {
                            //定时获取实时数据
                            setInterval(function() {
                                yesterdayClose = Number(jsonData.yes);
                                todayOpen = Number(jsonData.open);
                                //地址
                                var url = U('price/Data/getCur');
                                url += '&hqzqdm=' + code;
                                $.getJSON(url,function(jsonData) {
                                    var chart = $('#' + el).highcharts();
                                    
                                    timeLineData = jsonData.data;

                                    //价格
                                    var cur_price = jsonData.f3;

                                    //重新计算
                                    caldatas = cal_data(timeLineData,yesterdayClose);
                                    //更新图表
                                    chart.series[0].update({
                                        data: timeLineData
                                    },false);
                                    chart.series[1].update({
                                        data: timeLineData
                                    },false);
                                    chart.series[2].update({
                                        data: caldatas[4]
                                    },false);

                                    chart.redraw();


                                    //更新
                                    if(jsonData.yes < cur_price){//涨
                                        pnum_html = "<span class='red_font'>"+ jsonData.f3_float + "</span>";
                                        pnum_html += "<span class='red_font'>+" + jsonData.zz + "(" + jsonData.updown + "%)</span>";
                                        pnum_html += "<span>" + jsonData.date +"</span>";
                                    }else if(jsonData.yes > cur_price){//跌
                                        pnum_html = "<span class='green_font'>"+ jsonData.f3_float + "</span>";
                                        pnum_html += "<span class='green_font'>" + jsonData.zz + "(" + jsonData.updown + "%)</span>";
                                        pnum_html += "<span>" + jsonData.date +"</span>";
                                    }else{//相等
                                        pnum_html = "<span class='default_font'>"+ jsonData.f3_float + "</span>";
                                        pnum_html += "<span class='default_font'>+" + jsonData.zz + "(" + jsonData.updown + "%)</span>";
                                        pnum_html += "<span>" + jsonData.date +"</span>";
                                    }
                                    $('.up_info').html(pnum_html);

                                    //fs_infos
                                    var fs_infos_open = '今开:' + todayOpen + space;
                                    console.log(fs_infos_open);
                                    var fs_infos_cur = '当前:' + jsonData.f3_float;
                                    fs_infos_cur += jsonData.zz > 0  ? "<span class='red_font'>(" + jsonData.updown + "%)</span>" :  "<span class='green_font'>(" + jsonData.updown + "%)</span>";
                                    var fs_infos_time = '时间:' + Highcharts.dateFormat('%H:%M', jsonData.f0);
                                    var fs_infos = fs_infos_open + fs_infos_cur + space + fs_infos_time;
                                    $('#in_fs_infos').html(fs_infos);
                                });
                            },60 * 1000);
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }

                }
            }
        },
        colors: ['#2f7ed8', '#2E84CC', '#8bbc21', '#910000', '#1aadce', 
   '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        rangeSelector: {
            enabled: false
        },
        scrollbar: {
            enabled: false,
        },
        navigator: {
            enabled: false
        },

        title: {
            text: '实时净值走势'
        },
        credits: {
             enabled: false
        
        },
        xAxis: [{
            min: min,
            max: max,
            gridLineWidth: 1,
            tickLength: 0,
            labels: {
                y: 15,
                autoRotation: false,
                autoRotationLimit: 0,
                formatter: function() {
                    if (this.value === new Date(day + ' 11:30').getTime()) {
                        return '11:30/13:00';
                    }
                    return Highcharts.dateFormat('%H:%M', this.value);
                }
            },
            breaks: breaks,
            tickPositioner: function() {
                return [new Date(day + ' 09:30').getTime(), new Date(day + ' 10:30').getTime(), new Date(day + ' 11:30').getTime(), new Date(day + ' 14:00').getTime(), new Date(day + ' 15:00').getTime()]
            },
        }],
        yAxis: [{
            height: '100%',
            lineColor: '#C7CBD4',
            opposite: false,
            lineWidth: 1,
            labels: {
                
                align: 'right',
                formatter: function() {
                    if (this.value.toFixed(4) == yesterdayClose) {
                        return this.value.toFixed(4);
                    } else if (this.value > yesterdayClose) {
                        return '<span style="color:#D71720">' + this.value.toFixed(4) + '</span>';
                    } else {
                        return '<span style="color:#00a650">' + this.value.toFixed(4) + '</span>';
                    }
                }
            },
            showFirstLabel: true,
            showLastLabel: true,
            tickPositioner: function() {
                positions = cal_positions(timeLineData,yesterdayClose,caldatas);
                return positions;
            },
            plotLines: [{
                value: yesterdayClose,
                width: 2,
                color: '#D71720',
                dashStyle: 'shortDot',
                label: {
                    y: 14
                }
            }
            ],
        },
        {
            height: '100%',
            opposite: true,
            showFirstLabel: true,
            showLastLabel: true,
            gridLineWidth: 1,
            labels: {
             
                align: 'left',
                formatter: function() {
                    var percent = (this.value - yesterdayClose) / yesterdayClose * 100,
                    flag = percent > 0 ? '+': '';

                    if (percent.toFixed(2) == 0) {
                        return percent.toFixed(2) + '%';
                    } else if (this.value > yesterdayClose) {
                        return '<span style="color:#D71720">' + flag + percent.toFixed(2) + '%</span>';
                    } else {
                        return '<span style="color:#00a650">' + flag + percent.toFixed(2) + '%</span>';
                    }
                }
            },
animation:false,
            tickPositioner: function() {
                return positions;
            }

        }],
//      plotOptions: {
//          series: {
//              dataGrouping: {
//                  enabled: false
//              },
//              pointPlacement: 'on'
//          }
//      },

        tooltip: {
            shared: true,
            useHTML: true,
            shadow: false,
            borderColor: "rgba(255, 255, 255, 0)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            formatter: function() {
                yesterdayClose = Number(jsonData.yes);
                todayOpen = Number(jsonData.open);
                var points = this.points,
                percent = 0,
                str = '今开:' + todayOpen.toFixed(4) + space,
                time = '时间:' + Highcharts.dateFormat('%H:%M', this.points[0].x);

                // console.log(points);
                // str                
                Highcharts.each(points,
                function(p, i) {
                    if (i === 0) {
                        str += '当前:' + p.y.toFixed(4);
                    } else if (i === 1) {
                        percent = (p.y - yesterdayClose) / yesterdayClose * 100;
                        str += '<span style="color: ' + (percent > 0 ? '#D71720': '#00a650') + '">(' + percent.toFixed(2) + '%)</span>' + space;
                    }
                    // else if (i === 2) {
                    //     str += '成交量(万):' + (p.y / 10000).toFixed(2) + space
                    // }
                });

                str += time;

                $('#in_fs_infos').html(str);
            }
        },

        series: [{
            name: '单位净值',
            data: timeLineData,
            tooltip: {
                valueDecimals: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidthPlus: 0,
                    lineWidth: 1
                }
            }
        },
        {
            name: '涨幅',
            data: timeLineData,
            yAxis: 1,
            zIndex: 10,
            lineWidth: 1,
            states: {
                hover: {
                    lineWidthPlus: 0,
                    lineWidth: 1
                }
            }

        }]
    });

}

//时间范围
function time_range(beginTime, endTime) {
    var strb = beginTime.split(":");
    if (strb.length != 2) {
        return false;
    }

    var stre = endTime.split(":");
    if (stre.length != 2) {
        return false;
    }

    var b = new Date();
    var e = new Date();
    var n = new Date();

    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);

    if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
        return true;
    } else {
        return false;
    }
}

//数据计算
function cal_data(t,y){
    var caldatas = [];
    var temp = null;
    var volume = [];
    var _volume = null;
    Highcharts.each(t,
    function(d, i) {
        if (i == 0) {
            ami = d[1];
            am = d[1];
            pmi = Number(100 * (d[1] / y - 1));
            pm = Number(100 * (d[1] / y - 1));

            //成交量
            _volume = d[2];
        } else {
            ami = ami > d[1] ? d[1] : ami;
            am = am > d[1] ? am: d[1];
            pmi = pmi > Number(100 * (d[1] / y - 1)) ? Number(100 * (d[1] / y - 1)) : pmi;
            pm = pm > Number(100 * (d[1] / y - 1)) ? pm: Number(100 * (d[1] / y - 1));

            //成交量
            var v = 0;
            for(j=i-1;j>0;j--){
                if(t[j][2] != 0){
                    v = t[j][2];
                    break;
                }else{
                    continue;
                }
            }
            _volume = d[2] == 0 ? 0 : d[2] - v;
        }

        //成交量
        temp = {
            x: d[0],
            y: _volume,
            // color: d[1] > todayOpen ? 'red' : 'green'
            color: '#2727ff'
        };

        volume.push(temp);
    });
    caldatas.push(ami);
    caldatas.push(am);
    caldatas.push(pmi);
    caldatas.push(pm);
    caldatas.push(volume);
    return caldatas;
}

//最新的显示到info上
function show_info(t,y,o,id,type){
    var length = t.length;
    if(type == 1){//首页及个股页
        //最新的显示到infos上面
        var i = length - 1;
        //今开
        var str = '昨收:' + y + space + '今开:' + o + space;
        //当前
        //涨跌幅
        if(y == 0){
            str += '当前:' + t[i][1].toFixed(2) + '(0.00%)' + space;
        }else{
            str += '当前:' + t[i][1].toFixed(2);
            percent = (t[i][1] - y) / y * 100;
            str += '<span style="color: ' + (percent > 0 ? '#D71720': '#00a650') + '">(' + percent.toFixed(2) + '%)</span>' + space;
        }
        //时间
        str += '时间:' + Highcharts.dateFormat('%H:%M', t[i][0]);
        //成交量
        //str += '成交量(万):' + (data[2] / 10000).toFixed(2) + space
    }else if(type ==2){//右侧边栏
        //最新的显示到infos上面
        var i = length - 1;
        //当前
        var str = '当前:' + t[i][1];
        //涨跌幅
        percent = (t[i][1] - y) / y * 100;
        str += '<span style="color: ' + (percent > 0 ? '#D71720': '#00a650') + '">(' + percent.toFixed(2) + '%)</span>' + space;
        //时间
        str += '时间:' + Highcharts.dateFormat('%H:%M', t[i][0]);
    }
    $('#'+id).html(str);
}


//计算位置
function cal_positions(t,y,c){
    var positions = [];
    var tickMax = null;
    var tickMin = null;
    var increment = null;
    var interval = null;

    var ami = c[0];
    var am = c[1];
    tick = Number((ami));
    increment = Number(((am - ami) / 5));
    tickMin = Number((ami));
    tickMax = Number((am));
    if (0 == t.length) { //还没有数据时，y 的幅值 在 -1% - 1%上下浮动
        tickMin = 0.99 * y;
        tickMax = 1.01 * y;
    } else if (0 == increment) { //有数据了  但是数据都是一样的幅值
        if (y > Number(ami)) {
            tickMin = Number(ami);
            tickMax = 2 * y - Number(ami);
        } else if (y < Number(ami)) {
            tickMax = Number(am);
            tickMin = y - (Number(am) - y);
        } else {
            tickMin = 0.99 * y;
            tickMax = 1.01 * y;
        }
    } else if (ami - y < 0 && am - y >=0) { //最小值在昨日收盘价下面，最大值在昨日收盘价上面
        var limit = Math.max(Math.abs(ami - y), Math.abs(am - y));
        tickMin = y - limit;
        tickMax = y + limit;
    } else if (ami >= y && am > y) { //最小最大值均在昨日收盘价上面
        tickMax = am;
        tickMin = y - (tickMax - y);

    } else if (ami < y && am <= y) { //最小最大值均在昨日收盘价下面
        tickMin = ami;
        tickMax = y + (y - tickMin);
    }
    if (tickMax > 2 * y) { //数据超过100%了
        tickMin = 0;
    }
    interval = Number(tickMax - y) / 10;
    tickMax += interval;
    tickMin = y - (tickMax - y);
    increment = (tickMax - y) / 2;
    tick = tickMin;
    var i = 0;
    for (tick; i++<6; tick += increment) {
        positions.push(Number(tick));
    }
    // 判断是否有重复的值,有重复的值特殊处理	
    for(var i=0;i<5;i++){ 
        if (positions[i].toFixed(2) == positions[i+1].toFixed(2)){
            positions = [];
            for (i=y-0.02;i<y+0.04;i=i+0.01) {
                positions.push(i);
            }
            return positions;
        } 
    }
 
    return positions;
}



//首页成指分时图
function drawIndexCzChart(el, jsonData, code) {

    //数据
    var timeLineData = jsonData;
    //数据长度
    var length = timeLineData.length;
    //最后数据
    var last_data = jsonData[length-1];

    // x 轴标签便宜高度
    var height = $('#' + el).height() * 0.23,
    width = $('#' + el).width();

    var volume = [];
    var _timeLineData = []
    Highcharts.each(timeLineData,function(d, i) {
        //成交量
        temp = {
            x: d[0],
            y: d[4],
            // color: d[1] > todayOpen ? 'red' : 'green'
            color: '#2727ff'
        };
        volume.push(temp);

        //组装数据
        _timeLineData[d[0]] = [d[1],d[2],d[3],d[4],d[5]];
    });


    //y轴刻度
    Highcharts.each(timeLineData,
    function(d, i) {
        if (i == 0) {
            ami = d[1];
            am = d[1];
        } else {
            ami = ami > d[1] ? d[1] : ami;
            am = am > d[1] ? am: d[1];
        }
    });

    var positions = [];
    var tickMax = null;
    var tickMin = null;

    tickMin = Math.floor(Number(ami/250)) * 250;
    tickMax = Math.ceil(Number(ami/250)) * 250;

    var tick = tickMin;
    var i = 0;
    for (tickMin; i++<6; tick += 250) {
        positions.push(Number(tick));
    }

    //顶部信息初始
    var str = ''
    str = '当日指数:' + timeLineData[length-1][1].toFixed(2) + '<span style="color: ' + (timeLineData[length-1][3] > 0 ? '#D71720': '#00a650') + '">(' + timeLineData[length-1][3] + '%)</span>' + space;

    str += '成交额:' + timeLineData[length-1][5] / 10000 + '万元' + space;
    str += '时间:' + Highcharts.dateFormat('%Y-%m-%d',timeLineData[length-1][0]);

    //提示框出现
    $('#in_cz_infos').html(str);
    $('#in_cz_infos').show();

    // Create the chart
    $('#' + el).highcharts('StockChart', {
        chart: {
            spacing: 1,
            borderRadius: 0,
            animation: false
        },
        colors: ['#D71720', '#2E84CC', '#8bbc21', '#910000', '#1aadce', 
   '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        rangeSelector: {
            height:0,
            buttonTheme: {
                display: 'none' // 不显示按钮
            },
            inputEnabled: false, // 不显示日期输入框
            selected:4
        },
        scrollbar: {
            enabled: false,
        },
        navigator: {
            top:190,
            height:30,
            xAxis: {
                labels: {
                    enabled : false
                }
            }
        },
        title: {
            text: ''
        },
        credits: {
            // enabled: false.
            text: 'Chinaipo.com',
            href: 'http://www.chinaipo.com',
            position: {
                align: 'left',
                x: 350,
                y: -height - 65,
                style: {
                    cursor: 'pointer',
                    fontSize: '12px'
                }
            }
        },
        xAxis: [{
            tickLength: 0,
            gridLineWidth: 1,
            top:56,
            labels: {
                align:'left',
                y: -113,
                autoRotation: false,
                autoRotationLimit: 0,
                formatter: function() {
                    return Highcharts.dateFormat('%Y%m%d', this.value);
                },
            },
            showFirstLabel: true
        }],
        yAxis: [{
            height: 170,
            lineColor: '#C7CBD4',
            opposite: false,
            lineWidth: 1,
            labels: {
                x: 10,
                align: 'left',
                formatter: function() {
                    return this.value;
                }
            },
            showFirstLabel: true,
            showLastLabel: true
        },{
            height: 170,
            lineColor: '#C7CBD4',
            opposite: true,
            lineWidth: 1,
            labels: {
                x: 10,
                align: 'left',
            },
            showFirstLabel: true,
            showLastLabel: true
        },
        {
            top: 230,
            height: 70,
            lineColor: '#C7CBD4',
            opposite: false,
            lineWidth: 1,
            offset: 0,
            labels: {
                x: 10,
                align: 'left',
                formatter: function() {
                    return this.value;
                }
            },
            showFirstLabel: false,
            showLastLabel: false
        },
        {
            top: 230,
            height: 70,
            lineColor: '#C7CBD4',
            opposite: true,
            lineWidth: 1,
            offset: 0,
            labels: {
                x: 10,
                align: 'left',
                formatter: function() {
                    return this.value;
                }
            },
            showFirstLabel: false,
            showLastLabel: false
        }],
        plotOptions: {
            series: {
                dataGrouping: {
                    enabled: false
                },
                pointPlacement: 'on'
            }
        },

        tooltip: {
            shared: true,
            useHTML: true,
            shadow: false,
            borderColor: "rgba(255, 255, 255, 0)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            formatter: function() {
                var points = this.points;
                var str = '';
                Highcharts.each(points,
                function(p, i) {
                    str = '当日指数:' + _timeLineData[p.x][0].toFixed(2) + '<span style="color: ' + (_timeLineData[p.x][2] > 0 ? '#D71720': '#00a650') + '">(' + _timeLineData[p.x][2].toFixed(2) + '%)</span>' + space;

                    str += '成交额:' + _timeLineData[p.x][4] / 10000 + '万元' + space;
                    str += '时间:' + Highcharts.dateFormat('%Y-%m-%d',p.x);
                });

                $('#in_cz_infos').html(str);
            }
        },

        series: [{
            name: '开盘价',
            data: timeLineData,
            tooltip: {
                valueDecimals: 2
            },
            lineWidth: 1
        },
        {
            type: 'column',
            name: 'volume',
            data: volume,
            yAxis: 2
        }]
    });

}

//首页成指分时图
function drawHisChart(el, jsonData, code) {
	
	var timeLineData = jsonData.data;
	var yearBegin = Number(jsonData.yearbegin);
	var yesData = Number(jsonData.yes);
	
	$('#' + el).highcharts('StockChart', {
        chart: {
            spacing: 1,
            borderRadius: 0,
            animation: false
        },
        colors: ['#D71720', '#2E84CC', '#8bbc21', '#910000', '#1aadce', 
   '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        rangeSelector: {
            height:0,
            buttonTheme: {
                display: 'none' // 不显示按钮
            },
            inputEnabled: false, // 不显示日期输入框
            selected:4
        },
        scrollbar: {
            enabled: false,
        },
        navigator: {
            top:190,
            height:30,
            xAxis: {
                labels: {
                    enabled : false
                }
            }
        },
        title: {
            text: '年初以来净值变化'
        },
        credits: {
            // enabled: false.
            text: 'Chinaipo.com',
            href: 'http://www.chinaipo.com',
            position: {
                align: 'left',
                x: 350,
                y: -height - 65,
                style: {
                    cursor: 'pointer',
                    fontSize: '12px'
                }
            }
        },
        xAxis: [{
            tickLength: 0,
            gridLineWidth: 1,
            top:56,
            labels: {
                align:'left',
                y: -113,
                autoRotation: false,
                autoRotationLimit: 0,
                formatter: function() {
                    return Highcharts.dateFormat('%Y%m%d', this.value);
                },
            },
            showFirstLabel: true
        }],
        yAxis: [{
            height: 170,
            lineColor: '#C7CBD4',
            opposite: false,
            lineWidth: 1,
            labels: {
                x: 10,
                align: 'left',
                formatter: function() {
                    return this.value;
                }
            },
            showFirstLabel: true,
            showLastLabel: true
        },{
            height: 170,
            lineColor: '#C7CBD4',
            opposite: true,
            lineWidth: 1,
            labels: {
                x: 10,
                align: 'left',
            },
            showFirstLabel: true,
            showLastLabel: true
        },
        {
            top: 230,
            height: 70,
            lineColor: '#C7CBD4',
            opposite: false,
            lineWidth: 1,
            offset: 0,
            labels: {
                x: 10,
                align: 'left',
                formatter: function() {
                    return this.value;
                }
            },
            showFirstLabel: false,
            showLastLabel: false
        },
        {
            top: 230,
            height: 70,
            lineColor: '#C7CBD4',
            opposite: true,
            lineWidth: 1,
            offset: 0,
            labels: {
                x: 10,
                align: 'left',
                formatter: function() {
                    return this.value;
                }
            },
            showFirstLabel: false,
            showLastLabel: false
        }],
        plotOptions: {
            series: {
                dataGrouping: {
                    enabled: false
                },
                pointPlacement: 'on'
            }
        },

        tooltip: {
            shared: true,
            useHTML: true,
            shadow: false,
            borderColor: "rgba(255, 255, 255, 0)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            formatter: function() {
                var points = this.points;
                var str = '';
                Highcharts.each(points,
                function(p, i) {
                    str = '年初净值:' + yearBegin.toFixed(2) + '<span style="color: ' + (yearBegin > 0 ? '#D71720': '#00a650') + '">(' + yearBegin.toFixed(2) + '%)</span>' + space;

                    str += '昨收:' + yesData / 10000 + '万元' + space;
                    str += '时间:' + Highcharts.dateFormat('%Y-%m-%d',p.x);
                });

                $('#his_cz_infos').html(str);
            }
        },

        series: [{
            name: '开盘价',
            data: timeLineData,
            tooltip: {
                valueDecimals: 2
            },
            lineWidth: 1
        },
        {
            type: 'column',
            name: 'volume',
            data: volume,
            yAxis: 2
        }]
    });
}
