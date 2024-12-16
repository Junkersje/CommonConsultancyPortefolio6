const { options } = require("../controller");
const chartqueries = require("../queries/chartqueries");
let myChart = document.getElementById('myChart').getContext('2d');

let opinionChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['1 Linje', '2 Linjer', '3 Linjer', '4 Linjer', '5 Linjer', '6 Linjer', '7 Linjer', '8 Linjer', '9 Linjer', '10 Linjer', '11 Linjer', '12 Linjer', '13 Linjer', '14 Linjer', '15 Linjer', '16 Linjer', '17 Linjer', '18 Linjer', '19 Linjer', '20 Linjer'],
        datasets: [{
            label: 'Antal',
            data: [2, 5, 1],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(0, 0, 255, 0.5)'
            ],
            borderWidth: 2,
            borderColor: '#777'
        }]
    },
    options:{}
});

async function loadIndexHeatmap() {
    const data = await fetchData('/api/overview');
    updateHeatmap(data);
  }