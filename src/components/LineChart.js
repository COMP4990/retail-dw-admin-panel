import React, { useState, useEffect } from 'react';
import withContext from "../withContext";
import { Line } from '@ant-design/charts';

function LineChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(process.env.REACT_APP_API_URL + '/admin/salesPrice/?mode=month')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
      smooth: true,
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'Revenue',
    annotations: [
      // 低于中位数颜色变化
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: 'Some sort of chart',
        offsetY: -4,
        style: {
          textBaseline: 'bottom',
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };

  return <Line {...config} />;
};

export default withContext(LineChart);