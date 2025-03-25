document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏子菜单展开/收起
    const menuItems = document.querySelectorAll('.main-nav > ul > li');
    
    menuItems.forEach(item => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            const link = item.querySelector('a');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            });
        }
    });
    
    // 响应式侧边栏开关
    const toggleSidebar = document.createElement('button');
    toggleSidebar.className = 'toggle-sidebar';
    toggleSidebar.innerHTML = '☰';
    document.querySelector('.top-nav').prepend(toggleSidebar);
    
    toggleSidebar.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    // 搜索功能
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            // 执行搜索操作，可以根据当前选中的搜索引擎决定跳转到哪里
            const activeEngine = document.querySelector('.engine.active').textContent;
            let searchUrl = '';
            
            switch(activeEngine) {
                case '百度':
                    searchUrl = `https://www.baidu.com/s?wd=K12教育 ${query}`;
                    break;
                case '知乎':
                    searchUrl = `https://www.zhihu.com/search?q=K12教育 ${query}`;
                    break;
                case 'B站':
                    searchUrl = `https://search.bilibili.com/all?keyword=K12教育 ${query}`;
                    break;
                case '小红书':
                    searchUrl = `https://www.xiaohongshu.com/search_result?keyword=K12教育 ${query}`;
                    break;
                default:
                    // 站内搜索，这里可以替换为实际的搜索API
                    console.log('站内搜索:', query);
                    return;
            }
            
            window.open(searchUrl, '_blank');
        }
    });
    
    // 搜索引擎切换
    const engines = document.querySelectorAll('.engine');
    engines.forEach(engine => {
        engine.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.engine.active').classList.remove('active');
            engine.classList.add('active');
        });
    });
    
    // 分类标签切换
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            
            // 这里可以添加根据分类加载不同内容的逻辑
        });
    });
    
    // 资源卡片点击事件
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = card.querySelector('.resource-title').textContent;
            // 这里可以跳转到资源详情页或外部链接
            console.log('查看资源:', title);
        });
    });
    
    // 热门资源和新闻项点击事件
    const hotItems = document.querySelectorAll('.hot-item');
    hotItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = item.querySelector('h3').textContent;
            console.log('查看热门资源:', title);
        });
    });
    
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = item.querySelector('.news-title').textContent;
            console.log('查看新闻:', title);
        });
    });
});
