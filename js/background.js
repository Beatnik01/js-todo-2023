const videos = [
  "seoul01.mp4",
  "seoul02.mp4",
  "taipei.mp4",
  "tokyo01.mp4",
  "tokyo02.mp4",
];
const chosenVideo = videos[Math.floor(Math.random() * videos.length)];
const bgVidoe = document.createElement("video");
const bg = document.querySelector(".bg");
bgVidoe.src = `videos/${chosenVideo}`;
bg.appendChild(bgVidoe);
bgVidoe.autoplay = true;
bgVidoe.loop = true;
bgVidoe.muted = true;

const countyName = document.querySelector("#cityInfo span:first-child");
const cityName = document.querySelector("#cityInfo span:last-child");
if (chosenVideo.includes("seoul")) {
  countyName.innerText = "Korea, ";
  cityName.innerText = "Seoul";
}
if (chosenVideo.includes("tokyo")) {
  countyName.innerText = "Japan, ";
  cityName.innerText = "Tokyo";
}
if (chosenVideo.includes("taipei")) {
  countyName.innerText = "Tawiwan, ";
  cityName.innerText = "Taipei";
}
