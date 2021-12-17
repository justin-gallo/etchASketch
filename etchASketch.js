let numOfPixels = 32;
let totalRes = 640;
let sizeOfPixel = (totalRes/numOfPixels).toFixed(0);

const drawingContainer = document.querySelector(".drawingContainer");

createRows(numOfPixels);
assignHoverListeners();

function createRows(dimension) {
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

function clearChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function assignHoverListeners() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('pixelsHoverBlack');
        });
    });
}

const resetBtn = document.querySelector('.clearButton');
resetBtn.addEventListener("click", () => {
    numOfPixels = prompt("Enter a size for the new canvas between 1 and 100.", "32");
    sizeOfPixel = (totalRes/numOfPixels).toFixed(0);
    clearChildNodes(drawingContainer);
    createRows(numOfPixels);
    assignHoverListeners();
});