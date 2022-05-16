const daysEl = document.getElementById("days");
const hoursEl =document.getElementById("hours");
const minsEl =document.getElementById("mins");
const secondsEl =document.getElementById("seconds");




function countDown () {
    const newYearsDate = new Date ('2023 17,May 00:00:00').getTime();
    const currentDate = new Date ().getTime();
    const gap = (newYearsDate - currentDate); 
    

    



//how to calculate the time down, am using Main in front not to clash with the real constant//

const mainseconds= 1000;
const mainmins = mainseconds * 60;
const mainhours = mainmins * 60;
const maindays = mainhours * 24;



//how to solve this shit//

 const days = Math.floor( gap / maindays);
 const hours = Math.floor((gap % maindays) / mainhours);
 const mins = Math.floor((gap % mainhours) / mainmins);
 const seconds = Math.floor((gap % mainmins) / mainseconds);

 daysEl.innerHTML= days;
 hoursEl.innerHTML = hours ;
 minsEl.innerHTML = mins ;
 secondsEl.innerHTML = seconds;
 

}

//set a count down cfor the seconds//
// meant to return just 'countdown()', but because the seconds needs to move ....will return setintervall(countDown, 1000)

setInterval(countDown, 1000);



