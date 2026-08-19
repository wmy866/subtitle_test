let player;  //定義變數用來存放YT播放器

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",{  //"player"是HTML中id為player的容器
        width: "640",
        height: "360",
        videoId: "4WybwsKIeIQ"  //影片ID
    });
}