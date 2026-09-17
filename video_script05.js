//第二版：新增監聽指令，讀取當前播放秒數並顯示
//TESTing

let player;  //定義變數用來存放YT播放器

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",{  //"player"是HTML中id為player的容器
        videoId: "4WybwsKIeIQ",  //GH：4WybwsKIeIQ
        events: {
            onReady: onPlayerReady  //當播放器準備好時，呼叫onPlayerReady函式
        }
    });
}

function onPlayerReady(event) {
    console.log("播放器已準備完成");

    setInterval(function() {  //每隔1000毫秒(1秒))執行一次
        const currentTime = player.getCurrentTime();  //取得當下影片秒數
        console.log("現在播放時間：" + currentTime);  //顯示當下秒數
    }, 1000);
}
