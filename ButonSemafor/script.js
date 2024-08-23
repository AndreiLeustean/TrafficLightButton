let a = 3;

function changeColor() {
    var button = document.getElementById('colorButton');
    if (a == 1) {
        button.classList.remove('btn-danger');
        button.classList.add('btn-warning'); // Bootstrap class for yellow button
        a++;
    } else if (a == 2) {
        button.classList.remove('btn-warning');
        button.classList.add('btn-success'); // Bootstrap class for green button
        a++;
    } else if (a == 3) {
        button.classList.remove('btn-success');
        button.classList.add('btn-danger'); // Bootstrap class for red button
        a = 1;
    }
}
// Function to automatically change color every 10 seconds
function autoChangeColor() {
    changeColor();
    setInterval(changeColor, 10000); // Change color every 10 seconds
}

// Initialize the auto color change
autoChangeColor();
