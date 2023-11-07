$(document).ready(function () {
    // 获取喇叭图标、文字和音频元素
    var $playButton = $('#icon-reawake');
    var $playText = $('#text-reawake');
    var $audioElement = $('#myAudio')[0]; // 使用[0]获取原生的音频元素

    // 在图标或文字点击时触发事件
    $playButton.on('click', toggleAudio);
    $playText.on('click', toggleAudio);

    // 切换播放/暂停状态的函数
    function toggleAudio() {
        if ($audioElement.paused) {
            $audioElement.play();
            $playText.text('点击暂停音频');
        } else {
            $audioElement.pause();
            $playText.text('点击播放音频');
        }
    }
});

// // 获取喇叭图标、文字和音频元素
// var playButton = document.getElementById('playButton');
// var playText = document.getElementById('playText');
// var audioElement = document.getElementById('myAudio');

// // 在图标或文字点击时触发事件
// playButton.addEventListener('click', toggleAudio);
// playText.addEventListener('click', toggleAudio);

// // 切换播放/暂停状态的函数
// function toggleAudio() {
//     if (audioElement.paused) {
//         audioElement.play();
//         playText.textContent = '点击暂停音频';
//     } else {
//         audioElement.pause();
//         playText.textContent = '点击播放音频';
//     }
// }