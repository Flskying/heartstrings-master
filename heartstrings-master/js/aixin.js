function showContent() {
    var heart = document.getElementById('heart');
    var content = document.getElementById('content');
    
    // 显示内容
    content.classList.add('show');

    // 延迟一段时间后进行淡出效果和跳转
    setTimeout(function() {
        heart.classList.add('fade-out');
        content.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = '../html/heart.html';
        }, 500); // 等待 0.5 秒（500 毫秒），与过渡时间一致
    }, 2000); // 等待 2 秒（2000 毫秒），与你希望的等待时间一致
}