const urlParams = new URLSearchParams(window.location.search);
const watch = urlParams.get("data");

const videoTitle = document.getElementById("video-title");
const title = document.getElementById("title-text");
const iframe = document.getElementById("iframe");

// set main title
title.textContent = watch;

// episodes
const ep1 = document.getElementById("ep1");
const ep2 = document.getElementById("ep2");
const ep3 = document.getElementById("ep3");
const ep4 = document.getElementById("ep4");
const ep5 = document.getElementById("ep5");

// function for playing video
function playvideo(link) {
    iframe.src = link;
}

// for reply1988
if (watch === "reply1988") {
    // autoplay first episode
    let link = "https://drive.google.com/file/d/198AXCPxONfMPGgePjGBvs4Ryljw7job6/preview";
    playvideo(link);
    videoTitle.textContent = "Reply 1988 episode 01";

    // after clicking episodes button
    ep1.addEventListener("click", function() {
        let link = "https://drive.google.com/file/d/198AXCPxONfMPGgePjGBvs4Ryljw7job6/preview";
        playvideo(link);
        videoTitle.textContent = "Reply 1988 episode 01";
    });

    ep2.addEventListener("click", function() {
        let link = "https://drive.google.com/file/d/1jvnImdlkHa8_ihWPnbJJnvym_oIdna8Y/preview";
        playvideo(link);
        videoTitle.textContent = "Reply 1988 episode 02";
    });

        ep2.addEventListener("click", function() {
        let link = "https://drive.google.com/file/d/1_allDGa3LNXvHXyk4MN1oS1ZRKHe75bB/preview";
        playvideo(link);
        videoTitle.textContent = "Reply 1988 episode 02";
    });


    // similarly ep3, ep4, ep5...
}
