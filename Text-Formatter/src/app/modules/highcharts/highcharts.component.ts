import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';

TreemapModule(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent {
  show: boolean = false;
  initialMessage: string = "No Chart Selected";
  Highcharts: typeof Highcharts = Highcharts;

  constructor() {}

  showChart(chartType: string): void {
    this.initialMessage = "";
    this.show = true;
    
    switch (chartType) {
      case 'piechart':
        this.renderPieChart();
        break;
      case 'columnchart':
        this.renderColumnChart();
        break;
      case 'linechart':
        this.renderLineChart();
        break;
      case 'treemapchart':
        this.renderTreemapChart();
        break;
      case 'areachart':
        this.renderAreaChart();
        break;
      case 'stakedbarchart':
        this.renderStackedBarChart();
        break;
      default:
        console.log("None");
    }
  }

  renderPieChart(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'pie',
        backgroundColor: '#f2f2f2'
      },
      title: {
        text: 'Egg Yolk Composition'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Water',
            y: 55.02
          },
          {
            name: 'Fat',
            sliced: true,
            selected: true,
            y: 26.71
          },
          {
            name: 'Carbohydrates',
            y: 1.09
          },
          {
            name: 'Proteins',
            y: 15.5
          },
          {
            name: 'Ash',
            y: 1.68
          }
        ]
      }] as any
    });
  }

  renderColumnChart(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe']
      },
      yAxis: {
        title: {
          text: 'Population (millions)'
        }
      },
      series: [{
          name: 'Year 1990',
          data: [632, 727, 3202, 721]
        },
        {
          name: 'Year 2000',
          data: [814, 841, 3714, 726]
        },
        {
          name: 'Year 2021',
          data: [1393, 1031, 4695, 745]
        }
      ] as any
    });
  }

  renderLineChart(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'U.S Solar Employment Growth'
      },
      xAxis: {
        categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      series: [{
        name: 'Installation & Developers',
        data: [
            43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610, 168960, 171558
          ]
        },
        {
          name: 'Manufacturing',
          data: [
            24916, 37941, 29742, 29851, 32490, 30282,
            38121, 36885, 33726, 34243, 31050, 33099, 33473
          ]
        },
        {
          name: 'Sales & Distribution',
          data: [
            11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 25663, 28978, 30618
          ]
        },
        {
          name: 'Operations & Maintenance',
          data: [
            null, null, null, null, null, null, null,
            null, 11164, 11218, 10077, 12530, 16585
          ]
        },
        {
          name: 'Other',
          data: [
            21908, 5548, 8105, 11248, 8989, 11816, 18274,
            17300, 13053, 11906, 10073, 11471, 11648
          ]
        }
      ] as any
    });
  }

  renderTreemapChart(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'treemap'
      },
      title: {
        text: 'Highcharts Treemapn'
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        clip: false,
        data: [{
            name: 'A',
            value: 6,
            colorValue: 1
          },
          {
            name: 'B',
            value: 6,
            colorValue: 2
          },
          {
            name: 'C',
            value: 4,
            colorValue: 3
          },
          {
            name: 'D',
            value: 3,
            colorValue: 4
          },
          {
            name: 'E',
            value: 2,
            colorValue: 5
          },
          {
            name: 'F',
            value: 2,
            colorValue: 6
          },
          {
            name: 'G',
            value: 1,
            colorValue: 7
          }
        ]
      }] as any
    });
  }

  renderAreaChart(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'area'
      },
      title: {
        text: 'US and USSR nuclear stockpiles'
      },
      xAxis: {
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Range: 1940 to 2024.'
        }
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states'
        }
      },
      series: [{
        name: 'USA',
        data: [
            null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
            1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
            28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
            26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
            23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
            21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
            10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
            5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
            3750, 3708, 3708, 3708, 3708
          ]
        },
        {
          name: 'USSR/Russia',
        data: [
            null, null, null, null, null, null, null, null, null,
            1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
            3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
            14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
            32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
            32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
            13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
            5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
            4310, 4495, 4477, 4489, 4380
        ]
        }
      ] as any
    });
  }

  renderStackedBarChart(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Ferry passengers by vehicle type 2024'
      },
      xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May']
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
      } ,
      series: [{
          name: 'Motorcycles',
          data: [74, 27, 52, 93, 1272]
        },
        {
          name: 'Null-emission vehicles',
          data: [2106, 2398, 3046, 3195, 4916]
        },
        {
          name: 'Conventional vehicles',
          data: [12213, 12721, 15242, 16518, 25037]
        }
      ] as any
    });
  }
}
