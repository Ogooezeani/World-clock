function refreshTime() {
let molndalElement = document.querySelector("#molndal");
let molndalDateElement = molndalElement.querySelector(".date");
let molndalTimeElement =molndalElement.querySelector(".time");
let molndalTime = moment().tz("Europe/Stockholm");
molndalDateElement.innerHTML = molndalTime.format("MMMM Do YYYY");
molndalTimeElement.innerHTML = molndalTime.format("h:mm:ss:SSS [<small>]A[</small>]");

let lagosElement = document.querySelector("#lagos");
let lagosDateElement = lagosElement.querySelector(".date");
let lagosTimeElement =lagosElement.querySelector(".time");
let lagosTime = moment().tz("Africa/Lagos");
lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss:SSS [<small>]A[</small>]");
}

refreshTime();
setInterval(refreshTime, 1000);