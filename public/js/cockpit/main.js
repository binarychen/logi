$(function() {
//  $("#demo").bootstrapTable({
//      url: "http://ydjr.dev.chengyiwm.com/goldman-mgr/listProduct",
//      sortName: "prodId", //排序列  
//      striped: true, //條紋行  
//      sidePagination: "server", //服务器分页  
//      clickToSelect: true, //选择行即选择checkbox  
//      singleSelect: true, //仅允许单选  
//      searchOnEnterKey: true, //ENTER键搜索  
//      pagination: true, //启用分页  
//      escape: true, //过滤危险字符  
//      queryParams: getParams, //携带参数  
//      method: "post", //请求格式  
//      responseHandler: responseHandler,
//  });
$('.counter').countUp({
	 delay: 10,
    time: 500
});
});

//$(".animate-btn").on("click", function(){
//number = number + parseFloat((Math.random() * 1000).toFixed(2));
//$.animateToPrice(number);
//});
//setInterval(function(){
//	number = number + parseFloat((Math.random() * 10).toFixed(2));
//$.animateToPrice(number);
//},10000)


/**
 *  默认加载时携带参数
 * 
 *  将自带的param参数转化到cy的请求逻辑协议
// */
//function getParams(params) {
//  var query = $("#searchKey").val();
//  console.log(JSON.stringify(params));
//  return {
//      head: {
//          userId: "11154",
//          skey: "6FC19FCE5D8DCF130954D8AE2CADB30A",
//          platform: "pc",
//          imei: "",
//          appVersion: "",
//          cityId: "",
//          platformVersion: "",
//          deviceId: "",
//          channel: "",
//          protoVersion: 1,
//          isPreview: 2
//      },
//      body: {
//          'query': params.search,   // 搜索参数
//          'start': params.offset,  // 分页开始位置
//          'pageSize': params.limit, //每页多少条
//
//      }
//  }
//}

/**
 * 获取返回的数据的时候做相应处理，让bootstrap table认识我们的返回格式
 * @param {Object} res
// */
//function responseHandler(res) {
//  return {
//      "rows": res.body.listProduct, // 具体每一个bean的列表
//      "total": res.body.totalCount  // 总共有多少条返回数据
//  }
//}
//
//function tabliList(){
//                $('#winport-table').bootstrapTable({
//                      method: 'get',
//                      toolbar: '#toolbar',    //工具按钮用哪个容器
//                      striped: true,      //是否显示行间隔色
//                      cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//                      pagination: true,     //是否显示分页（*）
//                      sortable: false,      //是否启用排序
//                      sortOrder: "asc",     //排序方式
//                      pageNumber:1,      //初始化加载第一页，默认第一页
//                      pageSize: 10,      //每页的记录行数（*）
//                      pageList: [10, 25, 50, 100],  //可供选择的每页的行数（*）
//                      url: "自己的url",//这个接口需要处理bootstrap table传递的固定参数
//                      queryParamsType:'', //默认值为 'limit' ,在默认情况下 传给服务端的参数为：offset,limit,sort
//                                          // 设置为 ''  在这种情况下传给服务器的参数为：pageSize,pageNumber
//
//                      //queryParams: queryParams,//前端调用服务时，会默认传递上边提到的参数，如果需要添加自定义参数，可以自定义一个函数返回请求参数
//                      sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
//                      //search: true,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
//                      strictSearch: true,
//                      //showColumns: true,     //是否显示所有的列
//                      //showRefresh: true,     //是否显示刷新按钮
//                      minimumCountColumns: 2,    //最少允许的列数
//                      clickToSelect: true,    //是否启用点击选中行
//                      searchOnEnterKey: true,
//                      onLoadSuccess:function(data){    //加载成功后的事件
////                             console.log(data);
//                      },
//                      columns: [{
//                          field: 'winportName',
//                          title: '商铺名称',
//                          align: 'center'
//                      }, {
//                          field: 'winportPrice',
//                          title: '商铺价格',
//                          align: 'center'
//                      }, {
//                          field: 'imgPath',
//                          title: '商铺图片',
//                          align: 'center'
//                      },{
//                          field: 'winportAddress',
//                          title: '商铺地址',
//                          align: 'center'
//                      }, {
//                          field: 'winportArea',
//                          title: '商铺标签',
//                          align: 'center'
//                      },{
//                          field: '',
//                          title: '操作',
//                          align: 'center',
//                          formatter:function(value,row,index){
//                              //通过formatter可以自定义列显示的内容
//                              //value：当前field的值，即id
//                              //row：当前行的数据
//                              var a = "<button >修改</button>“；
//                              return a;
//                          }
//                      }],
//                      pagination:true
//                  });
//          }



//收益表格
 var firstCol1 = [
                        [{"field":"goodsName","title":"收益","colspan":1,"rowspan":2},
                        {"title":"分红","colspan":3,"rowspan":1},
                        {"title":"传统","colspan":3,"rowspan":1},
                        {"title":"万能","colspan":3,"rowspan":1},
                        {"title":"其他","colspan":3,"rowspan":1}],
                        [{"field":"fenhong.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"fenhong.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"fenhong.heji","title":"合计","colspan":1,"rowspan":1},
                         {"field":"chuan.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"chuan.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"chuan.heji","title":"合计","colspan":1,"rowspan":1},
                         {"field":"wanneng.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"wanneng.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"wanneng.heji","title":"合计","colspan":1,"rowspan":1},
                         {"field":"dai.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"dai.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"dai.heji","title":"合计","colspan":1,"rowspan":1}],
                         
                         
                         ];
                         
  var firstCol1 = [
                        [{"field":"goodsName","title":"收益","colspan":1,"rowspan":2},
                        {"title":"分红","colspan":3,"rowspan":1},
                        {"title":"传统","colspan":3,"rowspan":1},
                        {"title":"万能","colspan":3,"rowspan":1},
                        {"title":"其他","colspan":3,"rowspan":1}],
                        [{"field":"fenhong.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"fenhong.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"fenhong.heji","title":"合计","colspan":1,"rowspan":1},
                         {"field":"chuan.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"chuan.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"chuan.heji","title":"合计","colspan":1,"rowspan":1},
                         {"field":"wanneng.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"wanneng.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"wanneng.heji","title":"合计","colspan":1,"rowspan":1},
                         {"field":"dai.price","title":"已实现","colspan":1,"rowspan":1},
                         {"field":"dai.wei","title":"未实现","colspan":1,"rowspan":1},
                         {"field":"dai.heji","title":"合计","colspan":1,"rowspan":1}],
                         
                         
                         ];                        
        /*数据*/
        var data1 = [{"goodsName":"股票","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"基金","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"债券","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"定期存款","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"固定类基金","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"金融产品","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"现金及其他","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"逆回购","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"费用","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                    {"goodsName":"汇总","fenhong":{"price":"3200","wei":"100","heji":"3300"},"chuan":{"price":"1600","wei":"200","heji":"1800"},"wanneng":{"price":"2000","wei":"1000","heji":"3000"},"dai":{"price":"2000","wei":"200","heji":"2200"}},
                   
                   
        ];
        
//	$(function() {
//			$("#gains").bootstrapTable({
//					showExport: true,
//				exportDataType: "basic",
////				columns: firstCol1,
//				data: data2,
//			
//			});
//		});
		
        /*数据*/
            var data2 =  [{"ZuHe":"分红","ChenBen":"2000","ChenBenZhanBi":"33%","ShiZhi":"3333","ShiZhiZhanBi":"33%","ChenBenBianHua":"13%","ShiZhiBianHua":"13%"},
                       {"ZuHe":"传统","ChenBen":"2000","ChenBenZhanBi":"33%","ShiZhi":"3333","ShiZhiZhanBi":"33%","ChenBenBianHua":"23%","ShiZhiBianHua":"13%"},
                       {"ZuHe":"万能","ChenBen":"2000","ChenBenZhanBi":"33%","ShiZhi":"3333","ShiZhiZhanBi":"33%","ChenBenBianHua":"13%","ShiZhiBianHua":"13%"},
                       {"ZuHe":"次级债","ChenBen":"2000","ChenBenZhanBi":"33%","ShiZhi":"3333","ShiZhiZhanBi":"33%","ChenBenBianHua":"23%","ShiZhiBianHua":"13%"},
                        {"ZuHe":"精选万能","ChenBen":"2000","ChenBenZhanBi":"33%","ShiZhi":"3333","ShiZhiZhanBi":"33%","ChenBenBianHua":"23%","ShiZhiBianHua":"13%"},
                         
                        ];
        /*初始化表格*/
        $(function(){
            $("#tab").bootstrapTable({
              
                data: data2
            });
        });
   
                   
 $(function(){
            $(".tab_gm1").bootstrapTable({
           
          
            });
        });


//分红传统万能表格图形显示
$(function(){
	var mycpic1 = echarts.init(document.getElementById('pic1'));
 var  pic1 = {
 	title: {

//					text: '收益图',
					//      textStyle:'center',
//					x: "center",

				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
//      feature: {
//          dataView: {show: true, readOnly: false},
//          magicType: {show: true, type: ['line', 'bar']},
//          restore: {show: true},
//          saveAsImage: {show: true}
//      }
    },
    legend: {
        data:['划入','划出','净划入'],
        y:25,
    },
    xAxis: [
        {
            type: 'category',
            data: [''],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '万元',
//          min: 0,

            axisLabel: {
                formatter: '{value}'
            },
         splitNumber:3,
        }
    ],
    series: [
        {
            name:'划入',
            type:'bar',
            data:[300],
             label : {  
                            normal : {  
                                show : true,  
                                position: 'top'  
                            }  
                        },
                        barMaxWidth:30,
        },
        {
            name:'划出',
            type:'bar',
            data:[-200],
             label : {  
                            normal : {  
                                show : true,  
                                position: 'top'  
                            }  
                        }, 
                           barMaxWidth:30,
        },
        {
            name:'净划入',
            type:'bar',
            data:[100],
             label : {  
                            normal : {  
                                show : true,  
                                position: 'top'  
                            }  
                        }, 
                           barMaxWidth:30,
        }
    ]
};
mycpic1.setOption(pic1);

//var mycbjiao = echarts.init(document.getElementById('bjiao'));
//bjiao = {
//	title: {
//      text: '交易性',
//      
//    
//      
//      subtext: '总量：2000',
//     top:"55%",
//     left:"42%",
//      textStyle: {
//          
//          fontSize: 24
//      }
//
//      
//   
//  },
//  tooltip: {
//  
////      		position: ['35%', '55%'],
////      	alwaysShowContent:"true",
//      	showContent:"false",
//      	
//      trigger: 'item',
//      formatter: "{a} <br/>{b}: {c} ({d}%)"
//  },
//  legend: {
//      top:"10",
//      x: 'left',
//       data:['股票（境内)','股票（境外）','固定优先股','权益优先股','开放式基金','封闭式基金','债券型基金','货币型基金','国债','央行票据',
//      '普通金融债','政策性金融债','公司债','企业债','可转债','短期融资券',
//      '金融产品','次级债券','次级债务','中期票据','境外债券','可交换债券'
//      ]
//  },
//  series: [
//     
//      {
//      	itemStyle:{ 
//                          normal:{ 
//                              label:{ 
//                                 show: true, 
//                                 formatter: '{b} : {c}' 
//                              }, 
//                              labelLine :{show:true}
//                          } 
//                      } ,
//          name:'交易性',
//          type:'pie',
//          radius: ['35%', '53%'],
//          center: ["50%", "60%"],
//          data:[
//              {value:335, name:'股票（境内)'},
//              {value:310, name:'股票（境外）'},
//              {value:234, name:'固定优先股'},
//              {value:135, name:'权益优先股'},
//              {value:1048, name:'开放式基金'},
//              {value:251, name:'封闭式基金'},
//              {value:647, name:'债券型基金'},
//              {value:147, name:'货币型基金'},
//              {value:447, name:'国债'},
//              {value:147, name:'央行票据'},
//              {value:102, name:'普通金融债'},
//              {value:0, name:'政策性金融债'},
//              {value:147, name:'公司债'},
//              {value:0, name:'企业债'},
//              {value:0, name:'可转债'},
//              {value:0, name:'短期融资券'},
//              {value:147, name:'金融产品'},
//              {value:347, name:'次级债券'},
//              {value:147, name:'次级债务'},
//              {value:147, name:'中期票据'},
//              {value:147, name:'境外债券'},
//              {value:147, name:'可交换债券'},
//           
//          ]
//      }
//  ]
//};


	var mycpic2 = echarts.init(document.getElementById('pic2'));

  var pic2 = {
  	title: {

					text: '收益率',
					//      textStyle:'center',
					x: "center",

				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
    color: ['#ff3d3d', '#00a0e9', '#f603ff', '#00b419', '#5f52a0'],
    tooltip: {
        trigger: 'axis',
//      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        x: 'left',
        padding: [10, 20, 0, 20],
        data: ['分红', '传统', '万能'],
        selected: {
            '分红': true,
            '传统': true,
            '万能': false,
           
        }
    },
    grid: {
        left: '0',
        right: '3%',
        bottom: '3%',
        top: '13%',
        containLabel: true
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        min:11111111111,
        max:22222222111,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#b1b1b1'],
                type: 'dashed'
            }
        },
//      data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10', '1.11',  '1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19', '1.20', '1.21', '1.22','12.31']
  },
    yAxis: {
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#b1b1b1'],
                type: 'dashed'
            }
        }
    },
    series: [{
        name: '分红',
        type: 'line',
        
        data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
        label: {
            normal: {
                show: true,
                position: 'top' //值显示
            }
        }
    },{
        name: '分红',
        type: 'line',
        data: ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','285', '400'],
      
        label: {
            normal: {
                show: true,
                position: 'top' //值显示
            }
        },
       
        lineStyle:{
            
            normal:{
              type:{ formatter:function(value) {
                     if (value.length<5) {
                        //  return "dashed";
                     }else{
                        //  return "solid";
                         }// body...
                 }
              }
            }
        }
        
    }, {
        name: '传统',
        type: 'line',
     data: ['300', '310', '315', '320', '325', '330', '335', '340', '345', '350', '360', '370',  '375', '380', '385', '380', '375', '370', '375', '380', '380', '385', ],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        }
    },{
        name: '传统',
        type: 'line',
        data: ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','385', '450'],
        label: {
            normal: {
                show: true,
                position: 'top' //值显示
            }
        },
       
        lineStyle:{
            
            normal:{
              type:{ formatter:function(value) {
                     if (value.length<5) {
                        //  return "dashed";
                     }else{
                        //  return "solid";
                         }// body...
                 }
              }
            }
        }
        
    }, {
        name: '万能',
        type: 'line',        
        data: ['100', '110', '115', '120', '125', '130', '135', '140', '145', '150', '160', '170',  '175', '180', '185', '180', '175', '170', '175', '180', '180', '185', ],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        }
    },{
        name: '万能',
        type: 'line',
        data: ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','185', '250'],
        label: {
            normal: {
                show: true,
                position: 'top' //值显示
            }
        },
       
        lineStyle:{
            
            normal:{
              type:{ formatter:function(value) {
                     if (value.length<5) {
                        //  return "dashed";
                     }else{
                        //  return "solid";
                         }// body...
                 }
              }
            }
        }
        
    }]
};
	mycpic2.setOption(pic2);

  var mychuan=echarts.init(document.getElementById('huanxing'));
var huanxing = {
	title: {

					text: '投资占比',
					//      textStyle:'center',
//					x: "center",

				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: [{
        orient: 'vertical',
        left: 'left',
        top: 'center',
//      data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告']
    }, {
        orient: 'vertical',
        left: 'right',
        top: 'center',
//      data:['百度','谷歌','必应','其他']
    }],
    series: [
        {
            name:'投资占比',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'分红', selected:true},
                {value:679, name:'传统'},
                {value:548, name:'万能'},
                 {value:548, name:'其他'},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '85%'],

            data:[
                {value:35, name:'固定'},
                {value:100, name:'权益'},
                {value:200, name:'其他'},
                {value:79, name:'固定'},
                {value:300, name:'权益'},
                {value:300, name:'其他'},
                {value:148, name:'固定'},
                {value:200, name:'权益'},
                {value:200, name:'其他'},
                {value:148, name:'固定'},
                {value:200, name:'权益'},
                {value:200, name:'其他'}
            ]
        }
    ]
};
mychuan.setOption(huanxing);


  var mychuan1=echarts.init(document.getElementById('huanxing1'));
var huanxing1 = {
	title: {

					text: '会计分类',
					//      textStyle:'center',
//					x: "center",

				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} :{d}%"
    },
    legend: [{
        orient: 'vertical',
        left: 'left',
        top: 'center',
//      data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告']
    }, {
        orient: 'vertical',
        left: 'right',
        top: 'center',
//      data:['百度','谷歌','必应','其他']
    }],
    
    series: [
        {
            name:'会计分类',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'分红', selected:true},
                {value:679, name:'传统'},
                {value:548, name:'万能'},
                 {value:548, name:'其他'},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '85%'],

            data:[
                {value:35, name:'交易性'},
                {value:100, name:'可供出售'},
                {value:200, name:'持有到期'},
                {value:0, name:'其他'},
                {value:79, name:'交易性'},
                {value:300, name:'可供出售'},
                {value:300, name:'持有到期'},
                {value:148, name:'交易性'},
                {value:200, name:'可供出售'},
                {value:200, name:'持有到期'},
                {value:148, name:'交易性'},
                {value:200, name:'可供出售'},
                {value:200, name:'持有到期'}
            ]
        }
    ]
};
mychuan1.setOption(huanxing1);
			setTimeout(function (){
    window.onresize = function () {
        mycpic2.resize();
        mycpic1.resize();
      
    }
},200)
	var opt = huanxing1.series[1];
//lineHide(opt);
//数据为零时隐藏线段
//function lineHide(opt) {
//	jQuery.each(opt.data, function (i, item) {
//		console.log(item.value);
//		if (item.value == 0) {
//			item.itemStyle.normal.labelLine.show = false;
//			item.itemStyle.normal.label.show = false;
//		}
//	});
//}
//	
})


