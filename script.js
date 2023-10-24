const dateHTML = $(".day-js")
const timeHTML = $(".time")
const date = dayjs().format("dddd, MMMM DD YYYY")
const currentTime = dayjs().format("hh:mm:a")


function printDate(){
    dateHTML.text(date);
  };
   printDate();

function timezone(){
    timeHTML.text(currentTime);
  }; 
  timezone();