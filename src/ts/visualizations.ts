import * as d3 from 'd3';
import {extent} from "d3";
import {dataset} from "../../data/experience";

export function createViz(functionName : any) {
    eval(functionName + '()');
}

// My work experience visualization
function experience() {
            const SVG = {WIDTH: 400, HEIGHT: 50};
            const MARGIN = {TOP: 0, RIGHT: 10, BOTTOM: 10, LEFT: 0}
            const VIZ = {WIDTH: (SVG.WIDTH - MARGIN.LEFT - MARGIN.RIGHT), HEIGHT: (SVG.HEIGHT - MARGIN.TOP - MARGIN.BOTTOM)};
            const THICKNESS = 5;
            const COLOR = {AGENCY: 'green', STUDIO: 'blue', PRODUCT: 'red'}

            // Scales
            const monthsDomain : number[] | any[] = d3.extent(dataset, d => d.months);
            const x = d3.scaleLinear()
                .domain(monthsDomain)
                .range([80, VIZ.WIDTH]);

            const orderDomain: number[] | any[] = d3.extent(dataset, d => d.no);
            const y = d3.scaleLinear()
                .domain(orderDomain)
                .range([0, VIZ.HEIGHT])

            // Place for chart
            const picture = d3.select('#viz')
                .append("div")
                .classed("svg-container", true)
                .append('svg')
                //x, y, width, height in graphic units which will be recalculated in page scale (width = 100%)
                .attr("viewBox", `0 0 ${SVG.WIDTH} ${SVG.HEIGHT}`)
                .attr("preserveAspectRatio", "xMinYMin meet")

            const group = picture.append('g')
                .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

            // Chart itself
            const rectangles = group.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('width', d => x(d.months))
                .attr('height', THICKNESS)
                .attr('x', 0)
                .attr('y', d => y(d.no))
                .attr('fill', d => {
                    if(d.type === 'agency') {
                        return COLOR.AGENCY;
                    } else if (d.type === 'studio') {
                        return COLOR.STUDIO;
                    } else {
                        return COLOR.PRODUCT;
                    }
                })
}