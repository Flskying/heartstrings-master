// 获取时间显示的元素
const timeDisplay = document.getElementById('time_display');

// 设置起始日期（假设为固定日期，可以根据实际情况修改）
const startDate = new Date('2002-10-22T22:00:00Z');

// 更新时间显示的函数
function updateTimer() {
    // 获取当前时间
    //const currentDate = new Date('2024-07-29T09:00:00Z');
	const currentDate = new Date();

    // 计算时间差（单位为毫秒）
    const timeDifference = currentDate - startDate;

    // 将时间差转换为天、小时、分钟和秒
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // 更新显示的文本内容
    timeDisplay.textContent = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
}

// 每隔一秒更新一次时间显示
setInterval(updateTimer, 1000);

// 页面加载时立即更新时间显示
updateTimer();
