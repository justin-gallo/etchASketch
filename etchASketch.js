let numOfPixels = 32;
let totalRes = 640;
let sizeOfPixel = (totalRes/numOfPixels).toFixed(0);

function createRows(dimension) {
    const drawingContainer = document.querySelector(".drawingContainer");
    drawingContainer.setAttribute("style",`width:${totalRes}px; height:${totalRes}px;`);
    for (let i = 0; i <= numOfPixels; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute("style",`height:${sizeOfPixel}px`);
        drawingContainer.appendChild(row);
        for (let j = 0; j <= numOfPixels; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.setAttribute("style",`width:${sizeOfPixel}px; height:${sizeOfPixel}px`);
            row.appendChild(pixel);
        }
    }
}

createRows(numOfPixels);

let pixels = document.querySelectorAll('.pixel');

pixels.forEach((div) => {
    div.addEventListener('mouseover', function() {
        div.classList.add('pixelsHover');
    });
});