import logo from './logo.svg';
import './App.css';
import {Bar} from 'react-chartjs-2'

function App() {
  return (
    <div className="App">
      <h1>Thống kê số lượng người ở từng trạng thái theo thời gian</h1>
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
                labelString:'Day',
                display:true,
                fontColor:'#876445',
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
                fontColor:'#876445',
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


    </div>
  );
}

export default App;
