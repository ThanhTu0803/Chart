import logo from './logo.svg';
import './App.css';
import {Bar, Line} from 'react-chartjs-2'

function App() {
  return (
    <div className="App">
      <h1>THỐNG KÊ SỐ LƯỢNG NGƯỜI Ở TỪNG TRẠNG THÁI THEO THỜI GIAN</h1>
      <Bar
      data={{
        labels:['20/8','21/8','22/8','23/8','24/8','25/8','26/8','27/8'],
        datasets:[{
          label:'F0',
          data:[100,200,300,400,500,600,700,900],
          backgroundColor:'#90C8AC',
          barThickness:12
        },
        {
          label:'F1',
          data:[321,212,344,332,223,566,720,830],
          backgroundColor:'#F4BFBF',
          barThickness:12
        },
        {
          label:'F2',
          data:[123,200,232,400,232,23,950,600],
          backgroundColor:'#8FBDD3',
          barThickness:12
        },
        {
          label:'F3',
          data:[100,500,300,343,43,343,800,500],
          backgroundColor:'#BAABDA',
          barThickness:12
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Số lượng (Người): "+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'#898AA6'
            },
              scaleLabel:{
                labelString:'Ngày',
                display:true,
                fontColor:'#0096FF',
                fontSize:20
              },
              ticks:{
                fontColor:'#876445'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'#898AA'
            },
            scaleLabel:{
                labelString:'Số lượng (Người)',
                display:true,
                fontColor:'#0096FF',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'#876445',
              
            }
          }
          ]
        }
      }}
      >
      </Bar>
<br></br>
<br></br>
      <h1> THỐNG KÊ TIÊU THỤ CÁC GÓI NHU YẾU PHẨM</h1>
      <Bar
      data={{
        labels:['20/8','21/8','22/8','23/8','24/8','25/8','26/8','27/8'],
        datasets:[{
          label:'Thực phẩm tươi sống',
          data:[100,200,300,400,500,600,700,900],
          backgroundColor:'#90C8AC',
          barThickness:12
        },
        {
          label:'Thực phẩm sạch',
          data:[321,212,344,332,223,566,720,830],
          backgroundColor:'#F4BFBF',
          barThickness:12
        },
        {
          label:'Gia vị',
          data:[123,200,232,400,232,23,950,600],
          backgroundColor:'#8FBDD3',
          barThickness:12
        },
       
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Số lượng (Gói): "+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'#898AA6'
            },
              scaleLabel:{
                labelString:'Ngày',
                display:true,
                fontColor:'#0096FF',
                fontSize:20
              },
              ticks:{
                fontColor:'#876445'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'#898AA'
            },
            scaleLabel:{
                labelString:'Số lượng (Gói)',
                display:true,
                fontColor:'#0096FF',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'#876445',
              
            }
          }
          ]
        }
      }}
      >
      </Bar>
      <br></br>
<br></br>

      <h1> THỐNG KÊ TIÊU THỤ THỰC PHẨM TƯƠI SỐNG</h1>
      <Line 
       data={{
        labels:['Cá lóc','Thịt heo','Thịt gà','Thịt vịt','Thịt bò'],
        datasets:[{
          label:'Ngày 20/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 30, 20, 56],
          backgroundColor:'#90C8AC',
          borderColor: '#90C8AC'
        },
        {
          label:'Ngày 21/8',
          fill: false,
          data:[50, 40, 80, 45, 33],
          backgroundColor:'#F4BFBF',
          borderColor: '#F4BFBF'
        },
        {
          label:'Ngày 22/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 80, 81, 56],
          backgroundColor:'#8FBDD3',
          borderColor: '#8FBDD3'
        },
        {
          label:'Ngày 23/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 80, 81, 56],
          backgroundColor:'#BAABDA',
          borderColor: '#BAABDA'
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Số lượng (Sản phẩm): "+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'#898AA6'
            },
              scaleLabel:{
                labelString:'Sản phẩm',
                display:true,
                fontColor:'#0096FF',
                fontSize:20
              },
              ticks:{
                fontColor:'#876445'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'#898AA'
            },
            scaleLabel:{
                labelString:'Số lượng (Sản phẩm)',
                display:true,
                fontColor:'#0096FF',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'#876445',
              
            }
          }
          ]
        }
      }}
      >
        
      </Line>

      <br></br>
<br></br>

      <h1> THỐNG KÊ TIÊU THỤ THỰC PHẨM SẠCH</h1>
      <Line 
       data={{
        labels:['Rau xà lách','Cà chua','Rau muống','Bí đao','Ớt'],
        datasets:[{
          label:'Ngày 20/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 30, 20, 56],
          backgroundColor:'#90C8AC',
          borderColor: '#90C8AC'
        },
        {
          label:'Ngày 21/8',
          fill: false,
          data:[50, 40, 80, 45, 33],
          backgroundColor:'#F4BFBF',
          borderColor: '#F4BFBF'
        },
        {
          label:'Ngày 22/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 80, 81, 56],
          backgroundColor:'#8FBDD3',
          borderColor: '#8FBDD3'
        },
        {
          label:'Ngày 23/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 80, 81, 56],
          backgroundColor:'#BAABDA',
          borderColor: '#BAABDA'
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Số lượng (Sản phẩm): "+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'#898AA6'
            },
              scaleLabel:{
                labelString:'Sản phẩm',
                display:true,
                fontColor:'#0096FF',
                fontSize:20
              },
              ticks:{
                fontColor:'#876445'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'#898AA'
            },
            scaleLabel:{
                labelString:'Số lượng (Sản phẩm)',
                display:true,
                fontColor:'#0096FF',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'#876445',
              
            }
          }
          ]
        }
      }}
      >
        
      </Line>

      <br></br>
<br></br>

      <h1> THỐNG KÊ TIÊU THỤ GIA VỊ</h1>
      <Line 
       data={{
        labels:['Hạt nêm','Bột ngọt','Nước mắm','Đường','Muối'],
        datasets:[{
          label:'Ngày 20/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 30, 20, 56],
          backgroundColor:'#90C8AC',
          borderColor: '#90C8AC'
        },
        {
          label:'Ngày 21/8',
          fill: false,
          data:[50, 40, 80, 45, 33],
          backgroundColor:'#F4BFBF',
          borderColor: '#F4BFBF'
        },
        {
          label:'Ngày 22/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 80, 81, 56],
          backgroundColor:'#8FBDD3',
          borderColor: '#8FBDD3'
        },
        {
          label:'Ngày 23/8',
          axis: 'x',
          fill: false,
          data:[65, 59, 80, 81, 56],
          backgroundColor:'#BAABDA',
          borderColor: '#BAABDA'
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Số lượng (Sản phẩm): "+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'#898AA6'
            },
              scaleLabel:{
                labelString:'Sản phẩm',
                display:true,
                fontColor:'#0096FF',
                fontSize:20
              },
              ticks:{
                fontColor:'#876445'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'#898AA'
            },
            scaleLabel:{
                labelString:'Số lượng (Sản phẩm)',
                display:true,
                fontColor:'#0096FF',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'#876445',
              
            }
          }
          ]
        }
      }}
      >
        
      </Line>
    </div>
  );
}

export default App;
