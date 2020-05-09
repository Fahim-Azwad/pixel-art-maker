//Selecting variable for height, width and picked color
var height, width, color;
//Putting button in a variable to control it's functionality
var submitButton = document.querySelector("input[type=submit]");
//Putting casnvas table in a variable on which grid will be created
var pixelCanvas = document.querySelector("#pixelCanvas");

//Adding event listener to the button
submitButton.addEventListener("click", function(event) {
  //Preventing the submit button from dits default event
  event.preventDefault();
  //Assigning input values to height and width variables
  height = document.querySelector("#inputHeight").value;
  width = document.querySelector("#inputWidth").value;
  //Calling the makeGrid function
  makeGrid(height, width);
});

//Making grid functon
function makeGrid(height, width) {
  //A variable is created to store the created tables. It helps us
  //remove them if player chooses to change the shape of the grid
  //by redefining height and width
  var createdTable = document.querySelectorAll("tr");
  //Removing any previous grids on design canvas, if there were any
  Array.prototype.forEach.call(createdTable, function(node) {
    node.parentNode.removeChild(node);
  });
  //Making grid by looping.
  //Each table body is given a distinctive id so that we can create
  // cells in them in the next loop
  for (row = 1; row <= height; row++) {
    pixelCanvas.insertAdjacentHTML("afterbegin", "<tr id=table" + row + "></tr>");
    for (column = 1; column <= width; column++) {
      document.querySelector("#table" + row).insertAdjacentHTML("afterbegin", "<td></td>");
    }
  }
  //Adding color to cell
  var createdCells = document.querySelectorAll("td");
  //Selecting each indivudial cells
  Array.prototype.forEach.call(createdCells, function addColor(cell) {
    //Adding event listener to each cells
    cell.addEventListener('click', function() {
      color = document.querySelector("#colorPicker").value;
      //Varifying if the cells have color in them
      //If they do, then remove it, and if they don't, assigning chosen color
      if (cell.hasAttribute("style")) {
        cell.removeAttribute("style");
      } else {
        cell.setAttribute("style", "background-color:" + color);
      }
    });
  });
};
