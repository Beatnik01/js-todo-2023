const videos = ["seoul.mp4", "shanghai.mp4", "tokyo01.mp4", "tokyo02.mp4"];
const chosenVideo = videos[Math.floor(Math.random() * videos.length)];
const bgVidoe = document.createElement("video");
const bg = document.querySelector(".bg");
bgVidoe.src = `videos/${chosenVideo}`;
bg.appendChild(bgVidoe);
bgVidoe.autoplay = true;
bgVidoe.loop = true;
bgVidoe.muted = true;
