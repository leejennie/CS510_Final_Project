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
                  data: dailysales
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
                          suggestedMin: 50,
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
                data: avgtrans
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
                        suggestedMin: 5,
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

var file1 = 'https://raw.githubusercontent.com/leejennie/leejennie.github.io/master/state_sales_revenue.csv';
d3.csv(file1).then(makeChart);