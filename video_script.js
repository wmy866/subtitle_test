let player;  //定義變數用來存放YT播放器

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",{  //"player"是HTML中id為player的容器
        videoId: "mMg0PV3FAfE"  //影片ID
    });
}