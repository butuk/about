import * as d3 from 'd3';

export function createViz(functionName : any) {
    eval(functionName + '()');
}

// 3 circles visualization
function circlesViz() {
    const data = [2, 5, 10];

    const picture = d3.select('#viz')
        .append("div")
        .classed("svg-container", true)
        .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        //x, y, width, height in graphic units wich will be recalculated in page scale (width = 100%)
        .attr("viewBox", "0 0 1000 50")
        .classed("svg-content", true)

    const circles = picture.selectAll('circle')
        .data(data);

    circles.enter()
        .append('circle')
        .attr('cx', d => d*10)
        .attr('cy', 25)
        .attr('r', d => d * 2)
        .attr('fill', 'red');
}

