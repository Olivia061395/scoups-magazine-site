console.log('Happy developing ✨');

// 找出所有需要淡入動畫的元素
const fadeIns = document.querySelectorAll('.fade-in');

// 建立 Intersection Observer 監聽元素是否進入視窗
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 加入 visible 類別以觸發 CSS 動畫
            entry.target.classList.add('visible');
        } else {
            // 可選：滾動離開視窗時移除動畫（可重播）
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

// 啟用觀察每個元素
fadeIns.forEach(el => observer.observe(el));
