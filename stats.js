//Tutorial came from: https://github.com/dimestorerocket/html5-javascript-bar-chart-from-csv-file/blob/master/BarGraphTempData.html

function makeChart(states) {

    var statesLabel = states.map(function(d){return d.State});
    var dailysales = states.map(function(d) {return d.DailySalesRevenue});
    var avgtrans = states.map(function(d) {return d.AverageTransactions});

    var chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: statesLabel,
        datasets: [
          {
            data: dailysales,
            backgroundColor: 'rgb(220, 53, 69, 0.8)'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Daily Sales Revenue for Each State',
          fontSize: 18
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Daily Sales Revenue (dollars)',
              fontSize: 16
            },
            ticks: {
              min: 0,
              stepSize: 150,
              fontSize: 14
            }
          }
        ],
          xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'States',
              fontSize: 16
            },
            ticks: {
              fontSize: 14
            }
          }
        ]
       }
      }
    });

  var chart2 = new Chart('chart2', {
    type: 'bar',
    data: {
      labels: statesLabel,
      datasets: [
        {
          data: avgtrans,
          backgroundColor: 'rgb(220, 53, 69, 0.8)'
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Average Transactions for Each State',
        fontSize: 18
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [
        { 
          scaleLabel: {
            display: true,
            labelString: 'Number of Average Transactions',
            fontSize: 16
          },
          ticks: {
            min: 0,
            stepSize: 5,
            fontSize: 14
          }
        }
      ],
        xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'States',
            fontSize: 16
        },
          ticks: {
            fontSize: 14
          }
        }
      ]
     }
    }
  });
}

function makeChart2(cities) {

    var citiesLabel = cities.map(function(d){return d.City});
    var ttt = cities.map(function(d) {return d.TableTurnTime});
    var qsr = cities.map(function(d) {return d.QSRAvgTicketSize});
    var fsr = cities.map(function(d) {return d.FSRAvgTicketSize});
    var pop = cities.map(function(d) {return d.PercentOffPremise});

    var chart3 = new Chart('chart3', {
      type: 'bar',
      data: {
        labels: citiesLabel,
        datasets: [
          {
            data: ttt,
            backgroundColor: 'rgb(220, 53, 69, 0.8)'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Table Turn Time for Popular Cities in the US',
          fontSize: 18
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Table Turn Time (minutes)',
              fontSize: 16
            },
            ticks: {
              min: 0,
              stepSize: 5,
              fontSize: 14
            }
          }
        ],
          xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Cities',
              fontSize: 16
            },
            ticks: {
              fontSize: 14
            }
          }
        ]
      }
    }
  });

var chart4 = new Chart('chart4', {
      type: 'bar',
      data: {
        labels: citiesLabel,
        datasets: [
          {
            data: pop,
            backgroundColor: 'rgb(220, 53, 69, 0.8)'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Percent off Premise Popular Cities in the US',
          fontSize: 18
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Percent Off Premise',
              fontSize: 16
            },
            ticks: {
              min: 0,
              stepSize: 2,
              fontSize: 14
            }
          }
        ],
          xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Cities',
              fontSize: 16
            },
            ticks: {
              fontSize: 14
            }
          }
        ]
      }
    }
  });

var chart4 = new Chart('chart4', {
      type: 'bar',
      data: {
        labels: citiesLabel,
        datasets: [
          {
            data: pop,
            backgroundColor: 'rgb(220, 53, 69, 0.8)'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Percent off Premise Popular Cities in the US',
          fontSize: 18
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Percent Off Premise (%)',
              fontSize: 16
            },
            ticks: {
              min: 0,
              stepSize: 2,
              fontSize: 14
            }
          }
        ],
          xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Cities',
              fontSize: 16
            },
            ticks: {
              fontSize: 14
            }
          }
        ]
      }
    }
  });

  var chart5 = new Chart('chart5', {
    type: 'bar',
    data: {
      labels: citiesLabel,
      datasets: [
        {
          label: 'FSR',
          data: fsr,
          backgroundColor: 'rgb(220, 53, 69, 0.8)',
        },
        {
          label: 'QSR',
          data: qsr,
          backgroundColor: 'rgb(128, 128, 128, 0.8)'
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'FSR and QSR Average Ticket Size of Popular Cities in the US',
        fontSize: 18
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Average Ticket Size (dollars)',
            fontSize: 16
          },
          ticks: {
            min: 0,
            stepSize: 5,
            fontSize: 14
          }
        }
      ],
        xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Cities',
            fontSize: 16
          },
          ticks: {
            fontSize: 14
          }
        }
      ]
    }
  }
});

}


var file1 = 'https://raw.githubusercontent.com/leejennie/leejennie.github.io/master/state_sales_revenue.csv';
d3.csv(file1).then(makeChart);

var file2 = 'https://raw.githubusercontent.com/leejennie/leejennie.github.io/master/restaurant_city_data.csv';
d3.csv(file2).then(makeChart2);

