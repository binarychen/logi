

$(function() {
	$("#datepicker1").datepicker();
//  new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
//  $("#datepicker1").value=new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(); 

    $("#shoutuo").change(function(){
    	if ($("#shoutuo").is(":checked")) {
    	
    		  $(".ms-drop.bottom li").each(function(i){
    		  	//console.log($(this).find("input").val());
    		  	$(".ms-drop.bottom li").addClass("selected");
//  		  	console.log($(".ms-drop.bottom li input").val());
    		  	if ($(this).find("input").val()=="1") {
    		  		
    		  		$(".ms-drop.bottom li").addClass("selected");
    		  	}
    		  })
    		  
          
    	} else{
    		  $(".ms-drop.bottom li").each(function (i) {                
                if ($(".ms-drop.bottom li input").val()=="1") {
    		  		$(".ms-drop.bottom li input").removeClass("selected");
    		  	}
               
            }
            );
    	}
    })



});
$(function() {
	$('#sec1').change(function() {
		//console.log($(this).val());
	}).multipleSelect({
		width: '10%'
	});
});
$(function() {

	var mycpic1 = echarts.init(document.getElementById('pic1'));
	var pic1 = {
		title: {
			//      text: '月度资金净划入'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				//          type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: ['净划入']
		},
		toolbox: {
			//      feature: {
			//          saveAsImage: {}
			//      }
		},
		grid: {
			left: '4%',
			right: '15%',
			bottom: '3%',

			height: 85,
			containLabel: true
		},
		xAxis: [{
			name: "月",
			y: '50%',
			type: 'category',
			boundaryGap: false,
			data: [' ', '1', '2', '3', '4', '5', '6']
		}],
		yAxis: [{
			name: "百万",
			type: 'value',
			splitNumber: 2,
		}],
		series: [{
			name: '净划入',
			type: 'line',
			stack: '总量',
			areaStyle: {
				normal: {}
			},
			data: [0, 130, 200, 100, -100, -150, 60]
		}, ]
	};
	mycpic1.setOption(pic1);

	var mybing = echarts.init(document.getElementById('bing'));
	bingtu = {
		title: {
			// text: '某站点用户访问来源',
			// subtext: '纯属虚构',
			x: 'center'
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		color: ['#01B8AA', '#374649', '#FD625E', '#61a0a8', '#d48265'],
		legend: {
			orient: 'vertical',
			left: 'left',
			// data: ['1','2','3']
		},
		label:{
			normal:{
				formatter:'{b}:{c}',
//			position:"inside",
			}
			
		},labelLine:{
			normal:{
				show:false,
				length:2,
				length2:3,
				smooth:true
			}
		},
		series: [{
			name: '资产配置',
			type: 'pie',
			radius: '60%',
			center: ['50%', '45%'],
			data: [{
					value: 335,
					name: '逆回购'
				}, {
					value: 310,
					name: '固收'
				}, {
					value: 234,
					name: '权益类'
				}, {
					value: 234,
					name: '其他'
				}, {
					value: 234,
					name: '正回购'
				},

			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};

	mybing.setOption(bingtu);

	var myzhu = echarts.init(document.getElementById('piczhu'));
	var piczhu = {
		title: {

			//					text: '收益图',
			//      textStyle:'center',
			//					x: "center",

		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
			//					width:100,
			height: 85,
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
			data: ['买入', '卖出', '净买入'],
			y: 10,
			x: 55,
			itemWidth: 18,
			itemHeight: 12,
			
		},
		xAxis: [{
			type: 'category',
			data: [''],
			axisPointer: {
				type: 'shadow'
			}
		}],
		yAxis: [{
			type: 'value',
			//          name: '万元',
			//          min: 0,
			nameGap: 4,
			nameTextStyle: {
				fontSize: 14,
			},
			axisLabel: {
				formatter: '{value}'
			},
			splitNumber: 3,
		}],
		series: [{
			name: '买入',
			type: 'bar',
			data: [300],
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: "#01B8AA",
				}
			},
		}, {
			name: '卖出',
			type: 'bar',
			data: [-200],
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			barMaxWidth: 30,

			itemStyle: {
				normal: {
					color: '#374649'
				}
			},
		}, {
			name: '净买入',
			type: 'bar',
			data: [100],
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: '#FD625E'
				}
			},
		}]
	};
	myzhu.setOption(piczhu);

	var myyibiao = echarts.init(document.getElementById('yibiao'));
	yibiao = {
		title: {
			text: '',
			subtext: 'VaR(%)',
			subtextStyle: {
				color: "#000",
			},
			left: 'center',
			y: 75,
			link: 'http://www.baidu.com'
		},
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '指标',
			type: 'gauge',
			splitNumber: 5,
			axisLine: {
				show: true,
				lineStyle: {
					width: 8,
					shadowBlur: 0,
					color: [
						[0.1, "#00FF01"],
						[0.2, '#FFFF00'],
						[1, '#FE0000'],
						// [0.8, '#87ceeb'],
						// [1, '#87ceeb']
					]
				}
			},
			"pointer": {
				"width": 3, //指针的宽度
				"length": "70%", //指针长度，按照半圆半径的百分比
				"color": "#2d99e2"
			},
			axisLabel: {
				// formatter: function(e) {
				//     switch (e + "") {
				//         case "10":
				//             return "弱";
				//         case "30":
				//             return "低";
				//         case "60":
				//             return "中";
				//         case "90":
				//             return "高";
				//         default:
				//             return "";
				//     }
				// },

				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}
			},
			min: 0,
			max: 50,
			startAngle: 225,
			endAngle: -45,
			axisTick: {
				splitNumber: 5,
				//          length:1
			},
			//      axisLine:{
			//      	
			//      },
			splitLine: {
				length: 6,
				lineStyle: {
					width: 1,

				}
			},
			detail: {
				formatter: '{value}%',
				offsetCenter: [0, "70%"],
				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}
			},
			data: [{
				value: 11.46,
				//          name: 'Var/MTM',
				//           textStyle: {
				//              fontSize: 5,
				//              fontWeight: ""
				//          }
			}]
		}]
	};
	myyibiao.setOption(yibiao);

	var main_zhu1 = echarts.init(document.getElementById('main_zhu1'));
	m_zhu_1 = {
		backgroundColor: '#fff',
		title: {
			text: "损益情况",
		},

		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		color: ['#01B8AA', '#374649', '#FD625E', '#61a0a8', '#d48265'],
		legend: {
			data: ['已实现', '未实现']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['股票', '基金', '债券', '定期存款', '金融产品', '现金及其他', '逆回购', "费用", '汇总'],
			axisLabel: {
				interval: 0,

			}
		}],
		yAxis: [{
			name: "万元",
			type: 'value',
			splitNumber: 2,

		}],
		series: [

			{
				name: '已实现',
				type: 'bar',
				stack: '广告',
				data: [320, 332, 301, 334, 440, 330, 310, 333, 444],
				label: {
					normal: {
						show: true,
						position: 'inside',
					}
				},
				barWidth: 32,
			}, {
				name: '未实现',
				type: 'bar',
				stack: '广告',
				data: [120, 182, 191, 134, 190, 130, 110, 111, 120],
				label: {
					normal: {
						show: true,
						position: 'inside',
					}
				},
				barWidth: 32,
			}
		]
	};
	main_zhu1.setOption(m_zhu_1);

	var main_zhu2 = echarts.init(document.getElementById('main_zhu2'));
	m_zhu_2 = {
		color: ['#01B8AA'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '8 %',
			bottom: '3%',
			containLabel: true,
			height: 140,
		},
		yAxis: [{
			type: 'category',
			data: ['其他', '万能', '传统', '分红', ],
			axisTick: {
				alignWithLabel: true
			},

		}],
		xAxis: [{
			type: 'value',
			splitNumber: 3,
			name: "万元",
		}],
		backgroundColor: '#ffffff',
		series: [{
			name: '',
			type: 'bar',
			barWidth: '40%',
			data: [7700, 8800, 9900, 11100],
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#01B8AA',
						fontSize: 12
					}
				}
			}
		}]
	};
	main_zhu2.setOption(m_zhu_2);

	//var oneday1=new Date();
	//oneday=oneday1.getDay().();
	//console.log(oneday);
	//3600000*24
	var mycpic2 = echarts.init(document.getElementById('pic2'));

	var pic2 = {
		backgroundColor: '#fff',
		title: {

			text: '收益率/预测',
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
			backgroundColor: 'rgba(150,150,150,0.7)'

		},

		legend: {
			x: 'left',
			padding: [10, 20, 0, 20],
			data: ['分红', '传统', '万能'],
			selected: {
				'分红': true,
				'传统': true,
				'万能': true,

			}
		},
		grid: {
			left: '0',
			right: '3%',
			bottom: '3%',
			top: '17%',
			containLabel: true
		},
		xAxis: {
			type: 'time',
			interval: 1000 * 60 * 60 * 24 ,
			boundaryGap: false,
			min: new Date(2017, 0, 0),
			max: new Date(2017, 12, 1),
			splitNumber: 12,
			//                      axisLine: {show: false}
			//      min:1483262600000,
			//      max:1514735999000,
			//          data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10', '1.11',  '1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19', '1.20', '1.21', '1.22','12.31'],
			//

			splitLine: {
				show: false,
			},
			axisLabel: {
				//           interval:function(index,name){//index是x轴的坐标序号，name是坐标值  
				////               if(index%interval === 0){  
				////                      return true;  
				////                 }  
				////                 return false;  
				//console.log(index);
				//console.log(name);
				//             }   
				formatter: function(value, index) {
					// 格式化成月/日，只在第一个刻度显示年份
					var date = new Date(value);
					var texts = [(date.getMonth() + 1), date.getDate()];
					  if (index === 0) {
					   return texts.join('/');
					  }
					if(date.getDate()==1){
							return texts.join('/');
					}else{
						return " ";
					}
				
				}
			},
			axisTick: {
			length:0	
				//             }   
			
			},
			//splitNumber:12,
			//      splitLine: { //网格线
			//          show: true,
			//          lineStyle: {
			//              color: ['#b1b1b1'],
			//              type: 'dashed'
			//          }
			//      },
		},
		yAxis: {
			name: "收益率(%)",
			splitNumber: 6,
			//  	splitLine:{
			//  		show:false,
			//  	}
			//      splitLine: { //网格线
			//          show: true,
			//          lineStyle: {
			//              color: ['#b1b1b1'],
			//              type: 'dashed'
			//          }
			//      }
		},
		//  visualMap: {
		//      show: false,
		//      dimension: 0,
		//      pieces: [{
		//          lte: 1483262600000,
		//          color: 'green'
		//      }, {
		//          gt: 1483262600000,
		//          lte: 1493262600000,
		//          color: 'red'
		//      }, {
		//          gt: 1493262600000,
		//          lte: 1503262600000,
		//          color: 'green'
		//      }]
		//  },

		series: [{
			name: '分红',
			type: 'line',
			symbol: "none",
			//      data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
			data: [
				[1483262600000, 0],
				[1484262600000, 10],
				[1485262600000, 20],
				[1485562600000, 30],
				[1485582600000, 40],
				[1486262600000, 222],
				[1490262600000, 422],
				[1496262600000, 356],
				[1497262600000, 270],
				[1499262600000, 300],
				[1503262600000, 350],
				[1505262600000, 400],
				[1506262600000, 500]
			],
			label: {
				normal: {
					show: true,
					position: 'top' //值显示
				}
			},
			itemStyle: {
				normal: {
					color: "#ff3d3d",
					lineStyle: {
						color: "#ff3d3d",
					}
				}
			},
		}, {
			name: '分红年底预测',
			type: 'line',

			//      data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
			data: [
				[1514735999000, 1000]
			],
			label: {
				normal: {
					show: true,
					position: 'top' //值显示
				}
			},
			itemStyle: {
				//	    	  normal: {
				//		          color: function(params) {
				//		          	console.log(params.data[0]);
				//		              var colorList;
				//		              if (params.data[0]>=1497262600000) {
				//		                  colorList = '#ef232a';
				//		              } else {
				//		                  colorList = '#14b143';
				//		              }
				//	              return colorList;
				//		          },
				lineStyle: {
					color: "#ff3d3d",
					type: "dotted",
				}

			},

		}, {
			name: '传统',
			type: 'line',
			symbol: "none",
			//      data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
			data: [
				[1483262600000, 0],
				[1486262600000, 422],
				[1496262600000, 456],
				[1497262600000, 470],
				[1499262600000, 500],
				[1503262600000, 550],
				[1505262600000, 600],
				[1506262600000, 700]
			],
			label: {
				normal: {
					show: true,
					position: 'top' //值显示
				}
			},
			itemStyle: {
				normal: {
					//		          color: function(params) {
					//		          	console.log(params.data[0]);
					//		              var colorList;
					//		              if (params.data[0]>=1497262600000) {
					//		                  colorList = '#ef232a';
					//		              } else {
					//		                  colorList = '#14b143';
					//		              }
					//	              return colorList;
					//		          },
					color: "#000",
					lineStyle: {
						color: "#000",
						//		          	type: "dotted",

					}
				}
			},

		}, {
			name: '传统年底预测',
			type: 'line',

			//      data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
			data: [
				[1514735999000, 800]
			],
			label: {
				normal: {
					show: true,
					position: 'top' //值显示
				}
			},
			itemStyle: {
				//	    	  normal: {
				//		          color: function(params) {
				//		          	console.log(params.data[0]);
				//		              var colorList;
				//		              if (params.data[0]>=1497262600000) {
				//		                  colorList = '#ef232a';
				//		              } else {
				//		                  colorList = '#14b143';
				//		              }
				//	              return colorList;
				//		          },
				normal: {
					color: "#000",
				},
				lineStyle: {
					color: "#000",
					type: "dotted",
				}

			},

		}, {
			name: '万能',
			type: 'line',
			symbol: "none",
			//      data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
			data: [
				[1483262600000, 0],
				[1486262600000, 322],
				[1496262600000, 356],
				[1497262600000, 370],
				[1499262600000, 400],
				[1503262600000, 450],
				[1505262600000, 500],
				[1506262600000, 600]
			],
			label: {
				normal: {
					show: true,
					position: 'top' //值显示
				}
			},
			itemStyle: {
				normal: {
					//		          color: function(params) {
					//		          	console.log(params.data[0]);
					//		              var colorList;
					//		              if (params.data[0]>=1497262600000) {
					//		                  colorList = '#ef232a';
					//		              } else {
					//		                  colorList = '#14b143';
					//		              }
					//	              return colorList;
					//		          },
					color: "#5f52a0",
					lineStyle: {
						color: "#5f52a0",
						//		          	type: "dotted",

					}
				}
			},

		}, {
			name: '万能年底预测',
			type: 'line',

			//      data: ['200', '210', '215', '220', '225', '230', '235', '240', '245', '250', '260', '270',  '275', '280', '285', '280', '275', '270', '275', '280', '280', '285', ],
			data: [
				[1514735999000, 700]
			],
			label: {
				normal: {
					show: true,
					position: 'top' //值显示
				}
			},
			itemStyle: {
				//	    	  normal: {
				//		          color: function(params) {
				//		          	console.log(params.data[0]);
				//		              var colorList;
				//		              if (params.data[0]>=1497262600000) {
				//		                  colorList = '#ef232a';
				//		              } else {
				//		                  colorList = '#14b143';
				//		              }
				//	              return colorList;
				//		          },
				normal: {
					color: "#5f52a0",
				},
				lineStyle: {
					color: "#5f52a0",
					type: "dotted",
				}

			},

		}, ]
	};
	mycpic2.setOption(pic2);

	var md_1 = echarts.init(document.getElementById('md_1'));
	op_md1 = {
		tooltip: {
			trigger: 'item',
			formatter: function(mode) {
				//          	console.log(mode);
				return [
					'<div class="tooltip-title">' + mode.name + '</div>',
					'投资额度（万）: &nbsp;&nbsp;' + mode.data.touzi + '<br>',
					'净值（万）: &nbsp;&nbsp;' + mode.data.jingzhi + '<br>',
					'单位净值（元): &nbsp;&nbsp;' + mode.data.danwei + '<br>',
					'权益市值仓位（%）: &nbsp;&nbsp;' + mode.data.quanyi + "<br>",
					'年初以来全口径收益（万）: &nbsp;&nbsp;' + mode.data.nianchu + "<br>",
				].join('');
			}
		},

		color: ['#ff3d3d', '#00a0e9', '#f603ff', '#00b419', '#5f52a0'],
		series: [{
			type: 'treemap',
			width: '100%',
			height: '100%',
			roam: false,

			nodeClick: false,
			levels: [{
				itemStyle: {
					normal: {
						gapWidth: 1
					}
				}
			}],
			breadcrumb: {
				show: false
			},
			label: {
				normal: {
					show: true,
					position: [10, 10]
				}
			},
			itemStyle: {
				normal: {
					show: true,
					textStyle: {
						color: '#fff',
						fontSize: 16,
					},
					borderWidth: 1,
					borderColor: '#fff'
				},
				emphasis: {
					label: {
						show: true
					}
				}
			},
			data: [{
				value: 8,
				children: [{
					name: '曹平璘\n\n单位净值：1.11',
					value: 10,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '林建臻',
					value: 8,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '高丰臣',
					value: 5,
					touzi: 11,
					jingzhi: 12,
					danwei: 13,
					quanyi: 14,
					nianchu: 15,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '毛祖宏',
					value: 5,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '林先国',
					value: 4,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '刘雨',
					value: 4,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '郑研研',
					value: 4,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '李琰',
					value: 4,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}, {
					name: '粘洪峰',
					value: 4,
					itemStyle: {
						normal: {
							color: '#80cbc4'
						}
					}
				}]
			}, {
				value: 6,
				children: [{
					name: '王永',
					value: 10,
					itemStyle: {
						normal: {
							color: '#82dae6'
						}
					}
				}, {
					name: '李玉清',
					value: 5,
					itemStyle: {
						normal: {
							color: '#82dae6'
						}
					}
				}, {
					name: '刘磊',
					value: 5,
					itemStyle: {
						normal: {
							color: '#82dae6'
						}
					}
				}, {
					name: '周国兴',
					value: 5,
					itemStyle: {
						normal: {
							color: '#82dae6'
						}
					}
				}]
			}, {
				value: 6,
				children: [{
					name: '林先国',
					value: 10,
					itemStyle: {
						normal: {
							color: '#88e186'
						}
					}
				}, {
					name: '粘洪峰',
					value: 8,
					itemStyle: {
						normal: {
							color: '#88e186'
						}
					}
				}, {
					name: '王永',
					value: 8,
					itemStyle: {
						normal: {
							color: '#88e186'
						}
					}
				}]
			}, {
				value: 6,
				children: [{
					name: '刘雨',
					value: 10,
					itemStyle: {
						normal: {
							color: '#acd680'
						}
					}
				}, {
					name: '刘磊',
					value: 8,
					itemStyle: {
						normal: {
							color: '#acd680'
						}
					}
				}]
			}]
		}]
	};

	md_1.setOption(op_md1);
	var md_2 = echarts.init(document.getElementById('md_2'));
	var bcBySeriesIndex = ['B', 'B', 'B', 'B', 'C', 'C', 'C', 'C'];

	op_md2 = {
		title: {
			text: "流动性分析",
		},
		backgroundColor: '#fff',
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function(params) {
				var html = [];

				var category = {};
				echarts.util.each(params, function(param) {
					var catName = param.seriesName;
					var bc = bcBySeriesIndex[param.seriesIndex];
					if(!category[catName]) {
						category[catName] = {};
					}
					category[catName][bc] = param.value;
				});
				//console.log(category);
				echarts.util.each(category, function(cate, key) {
					html.push(
						'<tr>',
						'<td>', key, '</td>',
						'<td>', cate.B, '</td>',

						'</tr>'
					);
				})

				return '<table border=1><tbody>' +
					'<tr><td></td></tr>' +
					html.join('') +
					'</tbody></table>';
			}
		},
		legend: {
			data: [
				'三个月内', '一年内（不含三个月内）', '一年以上'
			]
		},
		color: ['#01B8AA', '#374649', '#FD625E', '#61a0a8', '#d48265'],
		grid: {
			left: '5%',
			right: '4%',
			bottom: '20%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['定期存款和协议存款', '政府债券', '金融债', '企业债券', '资产证券化产品', '信托资产', '基础设施投资', '保险资产管理产品', '权益投资', '贷款', '投资性不动产', '衍生金融工具', '其他投资资产'],
			axisLabel: {
				interval: 0,
				rotate: 45,
			}
		}],
		yAxis: [{
			type: 'value',
			name: "万元",
		}],
		series: [{
			name: '三个月内',
			type: 'bar',
			barWidth: 20,
			stack: 'B',
			data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330],

		}, {
			name: '一年内（不含三个月内）',
			type: 'bar',
			stack: 'B',
			data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230]
		}, {
			name: '一年以上',
			type: 'bar',
			stack: 'B',
			data: [50, 70, 31, 124, 90, 30, 10, 120, 132, 101, 134, 90, 230]
		}]
	};
	md_2.setOption(op_md2);

	var bt_1 = echarts.init(document.getElementById('bt_1'));
	op_bt1 = {
		backgroundColor: '#fff',
		title: {
			text: '投连组合对比',

		},
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '16%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['秦康积极成长', '建信平衡', '秦康平衡配置', '新华资产', '招商信诺灵动A', '北大方正平衡', '国寿平衡增长', '中意策略增长', '海康平衡', '瑞秦财智平衡', '平安发展', '平安平衡'],
			splitLine: {
				show: false
			},
			axisTick: {
				//							alignWithLabel: true
			},
			axisLabel: {
				interval: 0,
				rotate: 45,
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			splitArea: {
				show: true,
			},
			axisLabel: {
				formatter: '{value} %'
			}
		}],
		series: [{
			name: '对比值',
			type: 'bar',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			itemStyle: {
				normal: {
					color: function(value) {
						//									console.log(value);
						if(value.name == "新华资产") {
							return '#FD625E'
						} else {
							return '#01B8AA'
						}
					}
				}
			},
			data: [120, 115, 110, 105, 70, 50, 30, 20, -20, -30, -40, -50],
			barWidth: 22,
		}]
	};
	bt_1.setOption(op_bt1);

	var leida = echarts.init(document.getElementById('leida'));
	var op_leida = {
		backgroundColor: '#fff',
		title: {
			text: '行业配置偏离',
			subtext: '行业按申万一级分类'
		},

		tooltip: {},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '16%',
			containLabel: true
		},
		legend: {
			data: ['基准权重', '组合权重'],
			bottom: 5,
		},
		radar: {
			// shape: 'circle',
			indicator: [{
					name: '行业1',
					max: 6500
				}, {
					name: '行业2',
					max: 30000
				}, {
					name: '行业3',
					max: 38000
				}, {
					name: '行业4',
					max: 52000
				}, {
					name: '行业5',
					max: 25000
				}, {
					name: '行业6',
					max: 25000
				}, {
					name: '行业7',
					max: 25000
				},

			]
		},
		series: [{
			name: '权重',
			type: 'radar',
			// areaStyle: {normal: {}},
			//      y:100,
			data: [{
				value: [4300, 10000, 28000, 35000, 20000, 19000, 19000, 19000, 19000, 19000],
				name: '基准权重'
			}, {
				value: [5000, 14000, 28000, 31000, 22000, 21000, 19000, 19000, 19000, 19000],
				name: '组合权重'
			}]
		}]
	};
	leida.setOption(op_leida);

	var sandian = echarts.init(document.getElementById('sandian'));
	op_sandian = {
		title: {
			//      text: '波动性分析',
			// subtext: '今年以来'
		},
		grid: {
			left: '5%',
			right: '17%',
			bottom: '3%',
			containLabel: true
		},
		color: ['#ff3d3d', '#00a0e9', '#f603ff', '#00b419', '#5f52a0'],

		toolbox: {
			//      feature: {
			//          dataZoom: {},
			//          brush: {
			//              type: ['rect', 'polygon', 'clear']
			//          }
			//      }
		},

		brush: {},
		legend: {
			data: ['近三个月', '近六个月', '今年以来'],
			left: 'center',
			y: 20,
		},
		xAxis: [{
			type: 'value',
			scale: true,
			name: "收益率",
			axisLabel: {
				formatter: '{value} %'
			},
			splitLine: {
				show: false
			}
		}],
		yAxis: [{
			type: 'value',
			scale: true,
			// axisLabel : {
			//     formatter: '{value} kg'
			name: "波动值",
			splitLine: {
				show: false
			},
			splitNumber: 4,
		}],
		series: [{
				name: '近三个月',
				type: 'scatter',
				data: [
					[1.2, 0.6, '分红'],
					[67.5, 0.1, "传统"],
					[59.5, 0.2, "万能"]
				],
				label: {
					emphasis: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'top'
					}
				},
			}, {
				name: '近六个月',
				type: 'scatter',
				data: [
					[74.0, 0.6, '分红'],
					[75.3, 0.8, "传统"],
					[93.5, 0.7, "万能"]
				],
				label: {
					emphasis: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'top'
					}
				},
			},

			{
				name: '今年以来',
				type: 'scatter',
				data: [
					[4.0, 0.6, "传统"],
					[71.3, 0.8, "传统"],
					[66.5, 0.7, "万能"],
				],
				label: {
					emphasis: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'top'
					}
				},
			}
		]
	};

	sandian.setOption(op_sandian);

	var yibiaopan2 = echarts.init(document.getElementById('yibiaopan2'));
	//opyibiaopan2 = {
	//  tooltip : {
	//      formatter: "{a} <br/>{c} {b}"
	//  },
	//  toolbox: {
	//      show: true,
	//      feature: {
	//          restore: {show: true},
	//          saveAsImage: {show: true}
	//      }
	//  },
	//  series : [
	//      {
	//          name: '速度',
	//          type: 'gauge',
	//          z: 3,
	//          min: 0,
	//          max: 220,
	//          center: ['60%', '55%'],
	//          splitNumber:8,
	//          radius: '100%',
	//          axisLabel:{
	//          	textStyle:{
	//          		fontSize:4,
	//          	}
	//          },
	//          pointer:{
	//          	width:2,
	//          },
	////          ['50%', '50%'],
	////          detail:{
	////          	offsetCenter:["30%", '70%'],
	////          },
	//          axisLine: {            // 坐标轴线
	//              lineStyle: {       // 属性lineStyle控制线条样式
	//                  width: 8
	//              }
	//          },
	//          axisTick: {            // 坐标轴小标记
	//              length:0,        // 属性length控制线长
	//              lineStyle: {       // 属性lineStyle控制线条样式
	//                  color: 'auto'
	//              }
	//          },
	//          splitLine: {           // 分隔线
	//              length:12,         // 属性length控制线长
	//              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	//                  color: 'auto'
	//              }
	//          },
	//          title : {
	//              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	//                  // fontWeight: 'bolder',
	//                  fontSize: 5,
	//                  fontStyle: 'italic',
	//                  offsetCenter:[0, 0],
	//              },
	//              y:50,
	//          },
	//          detail : {
	//              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	//                  fontWeight: 'bolder',
	//                  fontSize:16,
	//              }
	//          },
	//          data:[{value: 40, name: 'VaR(千万)\n'}],
	//      },
	//      {
	//          name: '转速',
	//          type: 'gauge',
	//          center: ['20%', '55%'],    // 默认全局居中
	//          radius: '35%',
	//          min:0,
	//          max:50,
	//          endAngle:45,
	//          splitNumber:10,
	//          axisLine: {            // 坐标轴线
	//              show: true,
	//          lineStyle: {
	//              color: [
	//                  [0.1, '#c23531'],
	//                  [0.2, '#EFC631'],
	//                  [1, '#63869e'],
	//                  
	//              ],
	//              width: 2
	//          }
	//          },
	//          axisTick: {            // 坐标轴小标记
	//              length:0,        // 属性length控制线长
	//              lineStyle: {       // 属性lineStyle控制线条样式
	//                  color: 'auto'
	//              }
	//          },
	//          splitLine: {           // 分隔线
	//              length:10,         // 属性length控制线长
	//              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	//                  color: 'auto'
	//              }
	//          },
	//          pointer: {
	//              width:5
	//          },
	//          title: {
	//              offsetCenter: [0, '-30%'],       // x, y，单位px
	//          },
	//          detail: {
	//              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	//                  fontWeight: 'bolder'
	//              }
	//          },
	//          data:[{value: 4.5, name: 'VaR(%)'}]
	//      }
	//  ]
	//};	
	opyibiaopan2 = {
		"toolbox": {
			"show": false,
			"feature": {
				"mark": {
					"show": true
				},
				"restore": {
					"show": true
				},
				"saveAsImage": {
					"show": true
				}
			}
		},
		"series": [{
			"name": "指标",
			"type": "gauge",
			"startAngle": 180, //总的360，设置180就是半圆
			"endAngle": 0,
			"center": ["50%", "55%"], //整体的位置设置
			"radius": 55,
			"axisLine": {
				"lineStyle": {
					"width": 17, //柱子的宽度
					"color": [
							[0.398, "#2d99e2"],
							[1, "#dce3ec"]
						] //0.298是百分比的比例值（小数），还有对应两个颜色值
				}
			},
			"axisTick": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"splitLine": {
				"show": false
			},
			"pointer": {
				"width": 5, //指针的宽度
				"length": "60%", //指针长度，按照半圆半径的百分比
				"color": "#2d99e2"
			},
			"title": {
				"show": true,
				"offsetCenter": [0, "25%"], //标题位置设置
				"textStyle": { //标题样式设置
					"color": "#2d99e2",
					"fontSize": 15,
					"fontFamily": "微软雅黑",
					"fontWeight": "bold"
				}
			},
			"detail": {
				"show": false
			},
			"data": [{ //显示数据
				"value": 39.8,
				"name": "\n\n39.8亿\nVaR",
				y: 40,
			}]
		}]
	};
	yibiaopan2.setOption(opyibiaopan2);
})