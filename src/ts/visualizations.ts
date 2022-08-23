import * as d3 from 'd3';

export function createViz(functionName : any) {
    eval(functionName + '()');
}

// 3 circles visualization
function circlesViz() {
    const data = [2, 5, 8];

    const picture = d3.select('#viz')
        .append('svg')
        .attr('width', 100)
        .attr('height', 75);

    const circles = picture.selectAll('circle')
        .data(data);

    circles.enter()
        .append('circle')
        .attr('cx', d => d*10)
        .attr('cy', 50)
        .attr('r', d => d * 2)
        .attr('fill', 'red');
}

