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
