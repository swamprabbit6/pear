$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
// Sets the current day on the top of the page
  var divTags = document.querySelectorAll("div");
//Establishes which hours are shown as past, present and future
  for (let i = 0; i < divTags.length; i++) {
    if (divTags[i].id.startsWith("hour")) {
        hour_24 = divTags[i].id.slice(-2)
        var hour = dayjs().hour()
        if (hour_24 < hour) {
          divTags[i].setAttribute("class", "row time-block past");
        }  
        else if (hour_24 == hour) {
          divTags[i].setAttribute("class", "row time-block present");
        }
        else {
          divTags[i].setAttribute("class", "row time-block future");
        }
  }} 
  
  const saveButton = document.querySelectorAll("button");
    for (let i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click", function () {
    const idValue = this.parentElement.id
    let element = $('#'+ idValue)
    let note = element.children()[1].value
    localStorage.setItem(idValue, note);
  })}
  ;
//sets the local storage
  for (let i = 0; i < localStorage.length; i++) {
      let key = (localStorage.key(i));
      value = localStorage[key]
      var element = document.getElementById(key);
      console.log(element);
      element.children[1].value = value
    }
 
});
