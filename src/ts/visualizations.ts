import * as d3 from 'd3';
import {dataset} from "../../data/experience";
import {max} from 'd3';
import {min} from 'd3';
import {extent} from 'd3';

export function createViz(functionName : any) {
    eval(functionName + '()');
}

// My work experience visualization
function experience() {
            const SVG = {WIDTH: 400, HEIGHT: 20};
            const MARGIN = {TOP: 0, RIGHT: 0, BOTTOM: 10, LEFT: 0}
            const VIZ = {WIDTH: (SVG.WIDTH - MARGIN.LEFT - MARGIN.RIGHT), HEIGHT: (SVG.HEIGHT - MARGIN.TOP - MARGIN.BOTTOM)};
            const THICKNESS = 15;
            const COLOR = {AGENCY: 'green', STUDIO: 'blue', PRODUCT: 'red'}

    // Scales
            const monthsArr : number[] = [];
            dataset.forEach(place => {
                monthsArr.push(place.months);
            })
            const monthLength: number = VIZ.WIDTH/monthsArr.reduce((a, b) => a + b, 0);
            const minLength = monthLength * min(monthsArr);
            const maxLength = monthLength * max(monthsArr);
            const monthsDomain: number[] | any[] = extent(dataset, d => d.months);
            const width = d3.scaleLinear()
                .domain(monthsDomain)
                .range([minLength, maxLength]);

            const types : string[] = [];
            dataset.forEach(place => {
                types.push(place.type);
            })
            const colorDomain = new Set(types);
            const color = d3.scaleOrdinal(Object.values(COLOR))
                .domain(colorDomain)

    // Place for chart
            const picture = d3.select('#viz')
                .append('div')
                .classed("svg-container", true)
                .append('svg')
                //x, y, width, height in graphic units which will be recalculated in page scale (width = 100%)
                .attr('viewBox', `0 0 ${SVG.WIDTH} ${SVG.HEIGHT}`)
                .attr('preserveAspectRatio', 'xMinYMin meet')

            const group = picture.append('g')
                .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    // Chart itself
            group.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('x', d => width(d.enter))
                .attr('width', d => width(d.months))
                .attr('height', THICKNESS)
                .attr('y', 0)
                .attr('fill', d => color(d.type))
}