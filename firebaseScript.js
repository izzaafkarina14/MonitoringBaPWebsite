import Plotly from 'plotly.js-dist';

// Contoh penggunaan Plotly.js
const data = [{
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  type: 'scatter'
}];

Plotly.newPlot('myDiv', data);
