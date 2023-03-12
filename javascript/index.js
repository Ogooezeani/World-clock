function refreshTime() {
  let molndalElement = document.querySelector("#molndal");
  if (molndalElement) {
    let molndalDateElement = molndalElement.querySelector(".date");
    let molndalTimeElement = molndalElement.querySelector(".time");
    let molndalTime = moment().tz("Europe/Stockholm");
    molndalDateElement.innerHTML = molndalTime.format("MMMM Do YYYY");
    molndalTimeElement.innerHTML = molndalTime.format(
      "h:mm:ss:SSS [<small>]A[</small>]"
    );
  }

  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");
    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss:SSS [<small>]A[</small>]"
    );
  }
}

function updateLocation(event) {
  if (!event.target.value) {
    return;
  }

  let locationTimeZone = event.target.value;
  let locationName = locationTimeZone.replace("_", " ").split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class ="city">
    <div>
    <h2>${locationName}</h2>
    <div class="date">${locationTime.format("MM Do YYYY")}</div>
    </div>
    <div class="time">${locationTime.format(
      "h:mm:ss"
    )} <small>${locationTime.format("A")}</small></div>
    </div>
    `;
}

refreshTime();
setInterval(refreshTime, 1000);

let locationSelect = document.querySelector("#location");
locationSelect.addEventListener("change", updateLocation);
