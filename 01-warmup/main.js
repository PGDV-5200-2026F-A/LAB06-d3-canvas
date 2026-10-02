const WINE_URL = "https://genxp-2506.github.io/assets/datasets/Winemag/Winemag.json";

document.addEventListener("DOMContentLoaded", async () => {
  const wineRes = await fetch(WINE_URL);
  const wineData = await wineRes.json();

  const svgWidth = document.querySelector("#wine-svg").clientWidth;
  const svgHeight = document.querySelector("#wine-svg").clientHeight;

  // size svg
  const svg = d3.select("#wine-svg")
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

  // scaling
  const rScale = d3.scaleLinear()
    .domain(d3.extent(wineData, d => d.price))
    .range([10, svgHeight / 2]);

  const strokeScale = d3.scaleSequentialLog()
    .domain(d3.extent(wineData, d => d.price))
    .interpolator(d3.interpolateHsl("orange", "purple"));

  const cxScale = d3.scaleLinear()
    .domain(d3.extent(wineData, d => d.points))
    .range([0, svgWidth]);

  // bind and draw data
  svg.append("g")
    .selectAll("circle")
    .data(wineData)
    .join("circle")
    .attr("cx", (d) => cxScale(d.points))
    .attr("cy", svgHeight / 2)
    .attr("r", d => rScale(d.price))
    .attr("fill", "none")
    .attr("stroke", d => strokeScale(d.price))
    .attr("stroke-width", 1)
    .attr("stroke-opacity", 0.3);
});
