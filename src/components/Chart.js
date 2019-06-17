import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
const Chart = props => {
  let obj = {};
  let dateLabels = [];
  let dateCounts = [];
  if (props.times) {
    props.times.sort((a, b) => a - b);
    props.times.map(item => {
      obj[moment(item).format("l")]
        ? (obj[moment(item).format("l")] += 1)
        : (obj[moment(item).format("l")] = 1);
    });
    dateLabels = Object.keys(obj);
    dateLabels.unshift(moment(new Date()).format("l"));
    dateCounts = Object.values(obj);
    dateCounts.unshift(0);
  }

  const data = {
    labels: dateLabels.reverse(),
    datasets: [
      {
        label: `Commits to ${props.name}`,

        backgroundColor: "rgba(115, 134, 213, .2)",
        borderColor: "rgba(115, 134, 213, 1)",
        hoverBackgroundColor: "rgba(115, 134, 213, .4)",
        hoverBorderColor: "rgba(115, 134, 213, 1)",

        // backgroundColor: "rgba(23, 162, 184, .2)",
        // borderColor: "rgba(23, 162, 184, 1)",
        // hoverBackgroundColor: "rgba(23, 162, 184, .4)",
        // hoverBorderColor: "rgba(23, 162, 184, 1)",

        borderWidth: 1,
        data: dateCounts.reverse()
      }
    ]
  };
  return (
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
};
export default Chart;
