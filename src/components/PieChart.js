import React from 'react';
import withContext from "../withContext";
import { Pie } from '@ant-design/charts';

function PieChart(props) {
  const { topProducts, topBrands } = props.context;
  const { data } = props;

  const config = {
    appendPadding: 10,
    data: data === "brands" ? topBrands : topProducts,
    angleField: 'quantity',
    colorField: data === "brands" ? 'brand' : 'product',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default withContext(PieChart);