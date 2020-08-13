const CHART = document.getElementById("doughnutChart");
// console.log(CHART);
let doughnutChart = new Chart(CHART, {
	type: 'doughnut',
	data: {
		labels: [
        	'Strengths',
        	'Skills',
        	'Abilities'
    	],
    	datasets: [{
    		label: 'Post Assessment Feedback Roadmap',
    		backgroundColor: ['#f1c40f','#e67e22','#16a085'],
        	data: [10, 20, 30]
    	}],

    	// These labels appear in the legend and in the tooltips when hovering different arcs
    	
	}
});
