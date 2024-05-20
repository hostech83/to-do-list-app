//1. Add a new item to the list of items:
function newItem() {
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    let text = $("<text></text>").append(inputValue); 
    li.append(text);
  
    if ($("#input").val() === "") {
      alert("You must write something!");
    } else {
      let list = $("#list");
      list.append(li);
      //clears the input after adding the item
      $('#input').val(''); 
    }

    //2. Crossing out an item from the list of items:
    li.on("dblclick", function () {
      text.toggleClass("strike");
      li.toggleClass("opacity");
    });
  
    //3(i). Add the delete button "X":
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    $(crossOutButton).append("X");
    li.append(crossOutButton);
  
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  
    crossOutButton.on("click", function () {
      li.addClass("delete");
    });
  
    // 4. Reordering the items:
    $("#list").sortable();
}