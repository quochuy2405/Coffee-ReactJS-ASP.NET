import React from 'react';
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2';
import './styles.scss';
function Revenue(props) {
  const dataDay = {
    labels:[2,4,6,8,10,12,14,16,18,20,22,24],
    datasets: [{
      label: 'Doanh thu (triệu)',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  const dataMonth = {
    labels: [
      'Coffee',
      'Sách',
      'Khác'
    ],
    datasets: [{
      label: 'Sản phẩm bán chạy',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const dataYear = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets: [{
      label: 'Doanh Thu Tháng(Triệu)',
      data: [65, 59, 80, 81, 56, 55, 40,50,80,90,3,30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  const data_Week = {
    datasets: [{
      label: 'Doanh Thu Tuần(Triệu)',
      data: [{
        x: 1,
        y: 1,
        r: 1
      }, {
        x: 0,
        y: 4,
        r: 1
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  };

  return (

    <div className='Revenue'>
    
      <div className='Revenue__Day'>
        <h5 className="Title_Revenue color_day">Doanh Thu Hôm Nay</h5>
        <Line 
          data={dataDay}
          width={100}
          height={200}
          options={{ maintainAspectRatio: false }}/>
      </div>
      <div className='Revenue__Week'>
      <h5 className="Title_Revenue color_week">Doanh Thu Tuần</h5>
        <Pie 
          data={dataMonth}
          width={100}
          height={200}
          options={{ maintainAspectRatio: false }}/>
      </div>
      <div className='Revenue__Month'>
      <h5 className="Title_Revenue color_month">Doanh Thu Tháng</h5>
      <Bubble
         data={data_Week}
         width={100}
         height={200}
         options={{ maintainAspectRatio: false }}/>
      </div>
      <div className='Revenue__Year'>
        <h5 className="Title_Revenue color_year">Doanh Thu Năm</h5>
        <div className="months_of_Year">
        <Bar
          data={dataYear}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
        </div>
      </div>

    </div>
  );
}

export default Revenue;
