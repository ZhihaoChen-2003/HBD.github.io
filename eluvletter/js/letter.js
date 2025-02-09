var aparted = false;

$("#open").click(function() {

    if (!aparted) {
        var typed = new Typed('.letter', {
            strings: ["^1000Dear&nbsp;茜茜(xixi)🤪",
                "老^200王<br><br>&nbsp;&nbsp;哈哈哈哈，你上当了！略略略~ 你以为这里面藏着什么秘密吗？😏 其实，我还没想好该写什么，但我知道，你肯定有话想对我说，酝酿这么几天了😏<br>&nbsp;&nbsp;Anyway，生日快乐！🎉🎂 今天是你的大日子，开心到爆，祝你每一天都像生日一样快乐！🥳<br><br><p style='float:right; display:block; width:80px;'>^1000C^200ZH</p>"
            ],
            typeSpeed: 100,
            backSpeed: 50
        });

        $('#open').find("span").eq(0).css('background-position', "0 -150px");

        aparted = true;

        var music = document.getElementById('music2');
        if (music.paused) {
            music.play();
            $('#music_btn2').css("opacity", "1");
        }
    }

});

function playPause() {
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');

    if (music.paused) {
        music.play();
        music_btn.css("opacity", "1");
    } else {
        music.pause();
        music_btn.css("opacity", "0.2");
    }
}


window.onload = function() {

    var currentUrl = window.location.href;
    var firstIndex = currentUrl.indexOf("#");
    if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

    $('#music2').attr('src', bgmsrc);

    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) event.preventDefault();
    });

    var lastTouchEnd = 0;

    document.addEventListener('touchend', function(event) {

        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;

    }, false);

    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });

    $('body').css('opacity', '1');
    $('#jsi-cherry-container').css('z-index', '-99');

}