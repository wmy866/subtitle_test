//第三版：判斷秒數顯示字幕
//TESTing

let player;  //定義變數用來存放YT播放器

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",{  //"player"是HTML中id為player的容器
        videoId: "mMg0PV3FAfE",  //GH：4WybwsKIeIQ
        events: {
            onReady: onPlayerReady  //當播放器準備好時，呼叫onPlayerReady函式
        }
    });
}

function onPlayerReady(event) {
    console.log("播放器已準備完成");

    setInterval(function() {  //每隔1000毫秒(1秒))執行一次
        const currentTime = player.getCurrentTime();  //取得當下影片秒數
        const playerState = player.getPlayerState();

        /*console.log("現在播放時間：" + currentTime);  //顯示當下秒數
        console.log("播放狀態：" + playerState);*/
        if (playerState === 1){
            console.log("播放中，目前秒數：" + currentTime);
        } else if (playerState ===2){
            console.log("暫停中，目前秒數：" + currentTime);
        } else if (playerState === 3){
            console.log("緩衝中，目前秒數：" + currentTime);
        }

    }, 1000);

    const subtitles = [
        { start: 0, end: 3, text: "11111111111"},
        { start: 3, end: 6, text: "22222222222"},
        { start: 6, end: 9, text: "33333333333"}
    ];
}