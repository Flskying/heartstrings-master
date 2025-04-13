<script>
    document.addEventListener("DOMContentLoaded", function() {
        const loveIcon = document.getElementById('love-icon');
        loveIcon.style.cursor = 'pointer'; // 可选：改变光标样式为手型
        loveIcon.addEventListener('click', function() {
            window.location.href = 'yourpage.html';
        });
    });
</script>