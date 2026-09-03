const WINE_URL = "https://genxp-2506.github.io/assets/datasets/Winemag/Winemag.json";

document.addEventListener("DOMContentLoaded", async () => {
  const wineRes = await fetch(WINE_URL);
  const wineData = await wineRes.json();

  const svgWidth = document.querySelector("#wine-svg").clientWidth;
  const svgHeight = document.querySelector("#wine-svg").clientHeight;

  // size svg
  const svg = d3.select("#wine-svg")
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

  // TODO: scales
  const rxScale = "??";
  const ryScale = "??";
  const cxScale = "??";
  const cyScale = "??";

  // bind and draw data
  svg.append("g")
    .selectAll("ellipse")
    .data(wineData)
    .join("ellipse")
    .attr("cx", (d) => cxScale(d.points))
    .attr("cy", (d) => cyScale(d.price))
    .attr("rx", (d) => rxScale(d.points))
    .attr("ry", (d) => ryScale(d.price))
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-opacity", 0.1);
});
