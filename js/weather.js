function onGeoOk() {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find u");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
