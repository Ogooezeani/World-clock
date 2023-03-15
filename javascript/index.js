function showElement(elementId) {
  let element = document.querySelector(elementId);
  element.removeAttribute("hidden");
  return element;
}

function hideElement(elementId) {
  let element = document.querySelector(elementId);
  element.setAttribute("hidden", "hidden");
  return element;
}

function updateElement(cityId, timezone) {
  let cityElement = document.querySelector(cityId);
  if (cityElement) {
    let cityTime = moment().tz(timezone);
    cityElement.querySelector(".date").innerHTML =
      cityTime.format("MMMM Do YYYY");
    cityElement.querySelector(".time").innerHTML = cityTime.format(
      "h:mm:ss:SSS [<small>]A[</small>]"
    );
  }
}

function refreshTime() {
  updateElement("#molndal", "Europe/Stockholm");

  updateElement("#lagos", "Africa/Lagos");
}

function updateLocation(event) {
  if (!event.target.value) {
    return;
  }

  let locationTimeZone = event.target.value;
  if (locationTimeZone === "current") {
    locationTimeZone = moment.tz.guess();
  }
  let locationName = locationTimeZone.replace("_", " ").split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  hideElement("#cities");
  showElement("#goToHome");
  let selectedCityElement = showElement("#selectedCity");
  selectedCityElement.innerHTML = `<div class ="city">
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

function showAllCities(event) {
  hideElement("#selectedCity");
  hideElement("#goToHome");
  showElement("#cities");
}

refreshTime();
setInterval(refreshTime, 1000);

let locationSelect = document.querySelector("#location");
locationSelect.addEventListener("change", updateLocation);

document.querySelector("#goToHome").addEventListener("click", showAllCities);
