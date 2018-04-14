/// This function makes the grid depending on grid height and grid width, submitted by the user.
function makeGrid() {
let gridstart = $("#pixelCanvas");
event.preventDefault();
  gridstart.empty();
  
const inputHeight=$("#inputHeight").val();
const inputWeight=$("#inputWeight").val();

for (let i=1;i<=inputHeight;i++){
	
	gridstart.append("<tr class='row'></tr>" );
}

for (let j=1;j<=inputWeight;j++){
			$(".row").append("<td class='pixel'>  </td>");
	}
  
 
    // dragging feature 
    let mouseDown = false;

    $('td').on('mousemove', function() {
        if (mouseDown) {
            let color = $('#colorPicker').val();
            $(this).css('background-Color', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseDown = true;
    });

    $('td').on('mouseup', function() {
        mouseDown = false;
    });


  //function to color the cell

  $(".pixel").click(function() {
  let color=$('#colorPicker').val();

  
 $(this).css('background-color', color); 
 //Erasing the cell
 if (event.shiftKey) {
      $(this).css('background-color', '');
      } 
});               
  
}


//Submit button
const submitButton=$("#sizeSelector").find("input[type='submit']");


submitButton.click(makeGrid);

//Reset button
const resetButton=$("#sizeSelector").find("input[type='reset']");

resetButton.click(function(){
$("#pixelCanvas").empty();
$('#colorPicker').val('#ff0000');

});


