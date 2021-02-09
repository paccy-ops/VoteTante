import React from 'react';
import './ReportParPost.css';
import { useState } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
// defaults.global.tooltips= false
defaults.global.title.position = 'bottom';
defaults.global.legend.position = 'right';
// defaults.global.legend.display = false;
defaults.scale.ticks.display = false;
// defaults.global.label.display = false;

const ReportParPost = () => {
  const [state, setState] = useState([1000, 300, 500, 700]);
  return (
    <div className='report-par-post'>
      <Doughnut
        data={{
          labels: [
            'Pacifique Twagirayesu',
            'Dael Joshua Mangaoang',
            'ChristianKenneth Torres',
            'Jhale Barry Mabanta',
          ],
          datasets: [
            {
              label: '# number of votes',
              data: state,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],

              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: 'none',
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 15,
              fontColor: 'white',
            },
          },
          title: {
            display: true,
            text: ' Manager Voting Report ',
            fontSize: 20,
            fontColor: 'white',
          },
        }}
      />
      <button>
        <h6>Publish Official Results</h6>
      </button>
    </div>
  );
};

export default ReportParPost;
