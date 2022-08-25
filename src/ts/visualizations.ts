import * as d3 from 'd3';

export function createViz(functionName : any) {
    eval(functionName + '()');
}

// TEST: 3 circles visualization
function circlesViz() {
    const data = [2, 5, 10];

    const picture = d3.select('#viz')
        .append("div")
        .classed("svg-container", true)
        .append('svg')
        //x, y, width, height in graphic units which will be recalculated in page scale (width = 100%)
        .attr("viewBox", "0 0 1000 50")
        .attr("preserveAspectRatio", "xMinYMin meet")

    const circles = picture.selectAll('circle')
        .data(data);

    circles.enter()
        .append('circle')
        .attr('cx', d => d*10)
        .attr('cy', 25)
        .attr('r', d => d * 2)
        .attr('fill', 'red');
}

// My work experience visualization
function experience() {
    d3.csv('data/experience.csv')
        .then(dataset => {

            const SVG = {WIDTH: 1000, HEIGHT: 50};
            //const MARGIN = {TOP: 10, RIGHT: 10, BOTTOM: 10, LEFT: 10}
            //const VIZ = {WIDTH: (SVG.WIDTH - MARGIN.LEFT - MARGIN.RIGHT), HEIGHT: (SVG.HEIGHT - MARGIN.TOP - MARGIN.BOTTOM)};
            const RADIUS = 20;
            //const AGENCY_COLOR = 'green';
            const STUDIO_COLOR = 'blue';
            //const PRODUCT_COLOR = 'red';

            const months : number[] = [];
            dataset.forEach(d => {
                const numMonths: number = parseInt(d.months as any);
                months.push(numMonths);
                console.log(100, months);
            })

            const picture = d3.select('#viz')
                .append("div")
                .classed("svg-container", true)
                .append('svg')
                //x, y, width, height in graphic units which will be recalculated in page scale (width = 100%)
                .attr("viewBox", `0 0 ${SVG.WIDTH} ${SVG.HEIGHT}`)
                .attr("preserveAspectRatio", "xMinYMin meet")
                .append('circle')
                .attr('cx', 50)
                .attr('cy', 25)
                .attr('r', `${RADIUS}`)
                .attr('fill', `${STUDIO_COLOR}`);

    }).catch(error => {
        console.log(error);
    });
}