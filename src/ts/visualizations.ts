import * as d3 from 'd3';
import {dataset} from "../../data/experience";
import {max} from 'd3';
import {min} from 'd3';
import {extent} from 'd3';
import * as tip from 'd3-tip';

export function createViz(functionName : any) {
    eval(functionName + '()');
}

// My work experience visualization
function experience() {
            const SVG = {
                WIDTH: 400,
                HEIGHT: 45,
            };
            const MARGIN = {
                TOP: 20,
                RIGHT: 0,
                BOTTOM: 0,
                LEFT: 0,
            }

            const VIZ = {
                WIDTH: (SVG.WIDTH - MARGIN.LEFT - MARGIN.RIGHT),
                HEIGHT: (SVG.HEIGHT - MARGIN.TOP - MARGIN.BOTTOM),
            };
            const THICKNESS = 10;
            const COLOR = {
                // AGENCY: 'svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSdibGFjaycvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J3doaXRlJyBzdHJva2Utd2lkdGg9JzMnLz4KPC9zdmc+',
                AGENCY: 'crimson',
                // STUDIO: 'svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8Y2lyY2xlIGN4PSczLjUnIGN5PSczLjUnIHI9JzMuNScgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg==',
                STUDIO: 'limegreen',
                //PRODUCT: 'svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMTAnIGhlaWdodD0nNycgZmlsbD0nYmxhY2snIC8+Cjwvc3ZnPg==',
                PRODUCT: 'blue',
            };
            const TEXT  = {
                COLOR: 'darkgray',
                HEIGHT: 13,
            };

    // Width scale
            let monthsSum : number = 0;
            const monthsArr : number[] | any[] = [];
            dataset.forEach(place => {
                monthsArr.push(place.months);
                monthsSum += place.months;
            })
            const oneMonth: number = VIZ.WIDTH/monthsSum;
            const minBar = oneMonth * min(monthsArr);
            const maxBar = oneMonth * max(monthsArr);
            const monthsDomain: number[] | any[] = extent(dataset, d => d.months);
            const x = d3.scaleLinear()
                .domain(monthsDomain)
                .range([minBar, maxBar]);

    // Color scale
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
    // x, y, width, height in graphic units which will be recalculated in page scale (width = 100%)
                .attr('viewBox', `0 0 ${SVG.WIDTH} ${SVG.HEIGHT}`)
                .attr('preserveAspectRatio', 'xMinYMin meet')

            const group = picture.append('g')
                .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    // Chart itself
            group.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('x', d => x(d.enter))
                .attr('width', d => x(d.months))
                .attr('height', THICKNESS)
                .attr('y', 0)
                .attr('fill', d => color(d.type))
    //.attr('fill', d => console.log(`url(data:image/#${color(d.type)})`);



    // Years labels
            const startsArr : string[] | any[] = [];
            dataset.forEach(place => {
                startsArr.push(place.start);
            })
            const endsArr: string[] | any[]  = [];
            dataset.forEach(place => {
                endsArr.push(place.end);
            });

            group.append('text')
                .attr('x', 0)
                .attr('y', (THICKNESS + TEXT.HEIGHT))
                .attr('font-size', TEXT.HEIGHT)
                .text(`${startsArr[0]}`)
                .attr('fill', TEXT.COLOR);

            group.append('text')
                .attr('x', VIZ.WIDTH)
                .attr('y', (THICKNESS + TEXT.HEIGHT))
                .attr('font-size', TEXT.HEIGHT)
                .attr('text-anchor', 'end')
                .text(`${endsArr[endsArr.length-1]}`)
                .attr('fill', TEXT.COLOR);
    // Tooltip
    /*const tooltip = tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html((d: any) => {
            return `${d.name}: ${d.value}`;
        });*/


    // Switcher
/*            const switcherGroup = picture.append('g')
                .attr('transform', `translate(${SVG.WIDTH-MARGIN.LEFT}, ${MARGIN.TOP})`)
                .classed('switcher', true);

    // Add a rectangle element to the group element to act as a background for the switcher
            switcherGroup.append("rect")
                .attr("width", 90)
                .attr("height", 30)
                .attr("rx", 15)
                .attr("ry", 15)


    // Add text to the switcher
            switcherGroup.append("text")
                .text("By order")
                .attr("x", 10)
                .attr("y", 20)
                .attr('font-size', TEXT.HEIGHT)
                .attr('fill', TEXT.COLOR)

    // Add a click event to the switcher to toggle the chart
            switcherGroup.on("click", function() {
                console.log('Hi');
                // Code to toggle the chart
            });*/
}