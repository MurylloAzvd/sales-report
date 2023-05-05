import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface SalesChartProps {
  data: number[];
}

export const SalesChart = ({ data }: SalesChartProps) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: "line",
        },
        title: {
          text: "Vendas por mês:",
        },
        xAxis: {
          categories: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
        },
        yAxis: {
          title: {
            text: "Vendas",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: "Vendas",
            data: data,
          },
        ],
      }}
    />
  );
};
