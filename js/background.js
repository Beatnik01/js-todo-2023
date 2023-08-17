const videos = ["seoul.mp4", "shanghai.mp4", "tokyo01.mp4", "tokyo02.mp4"];
const chosenVideo = videos[Math.floor(Math.random() * videos.length)];
const bgVidoe = document.createElement("video");
bgVidoe.src = `videos/${chosenVideo}`;
document.body.appendChild(bgVidoe);
bgVidoe.autoplay = true;
bgVidoe.loop = true;
bgVidoe.muted = true;
