$(document).ready(function(){

// Save Button listener event
$('.saveBtn').on('click', function(){
    // looking for the data from the textarea for each hour
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    // saving in localStorage
    localStorage.setItem(time,value);

$('.alert').addClass('show');

setTimeout(function () {
    $('.alert').removeClass('show');
  }, 2000);
});

// show saved items from LocalStorage

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
});
// Translate time blocks to military format
var timeBlocksArr = [9,10,11,12,13,14,15,16,17]
var currentHour= moment().hour()
var currentDay =$("#currentDay")
console.log(currentHour)

// put current date using moment()
var systemTime = moment().format("dddd, MMMM Do")
currentDay.text(systemTime)

// compare the current hour with the time-blocks
function displayTimeBlockColors(){
    for (var i=0; i < timeBlocksArr.length; i++){
        
        var currentTextEl = $("#" +timeBlocksArr[i])
        // this is past
        if(currentHour>timeBlocksArr[i]){
            
            currentTextEl.addClass("past")
        }  
        // this is present
        else if (currentHour===timeBlocksArr[i]){
        currentTextEl.addClass("present")
        }
        // this is future
        else {
        currentTextEl.addClass("future")
        }
    }
}

displayTimeBlockColors()

// grab the textarea value and store in local storage


