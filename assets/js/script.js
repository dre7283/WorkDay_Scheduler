$(document).ready(function(){

// Save Button listener event
$('.saveBtn').on('click', function(){
});
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

