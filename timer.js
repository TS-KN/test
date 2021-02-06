let finish;  //終了時刻
let intervalId;
let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startTimer);
let stopButton = document.querySelector("#stop-button");
stopButton.addEventListener("click", stopTimer);

// タイマー開始
function startTimer(){
    //ユーザからのタイマー時間を取得
    let second = document.querySelector("#time-input").value;
    console.log(second);
    //終了時刻を代入
    finish = Date.now() + second * 1000;
    //checkRemainingTimeを50ミリ秒ごとに呼び出す
    intervalId = setInterval(checkRemainingTime,50);
    //スタートボタンを無効化
    startButton.disabled = true;
}

//タイマーストップ
function stopTimer(){
    clearInterval(intervalId);
    // 残り時間をリセット
    setDisplay(0);
    //スタートボタンを有効化
    startButton.disabled = false;
}

//残り時間チェック
function checkRemainingTime(){
    let remain = finish - Date.now();

    // 残り時間を計算
    let second = Math.floor(remain / 1000) + 1;
    setDisplay(second);
    
    //残り時間が0以下になったらタイマーストップ
    if(remain <= 0){
        stopTimer();
        alert("時間になりました");
    }
}

//残り時間表示
function setDisplay(second){
    let countDown = document.querySelector("#count-down");
    countDown.textContent = second;
}