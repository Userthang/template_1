function show_content(tabId, select_tab) {
    const contents = document.querySelectorAll('.tab_content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.getElementById(select_tab).classList.add('active');
    const activeTab = Array.from(tabs).find(tab => tab.textContent === tabId.replace('tab', 'Tab'));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function toggle_menu_info() {
    const header_info = document.getElementById('header_info');
    header_info.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    const open_menu = document.querySelector('.open_menu');
    const header_nav = document.querySelector('.header_nav');
    const overlay = document.querySelector('.overlay');

    open_menu.addEventListener('click', function () {
        open_menu.classList.toggle('active');
        header_nav.classList.toggle('show');
        overlay.classList.toggle('active');

    });

    overlay.addEventListener('click', function () {
        open_menu.classList.remove('active');
        header_nav.classList.remove('show');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

});

function get_height(get_value, replace_value) {
    const source = document.querySelector(get_value)
    const target = document.querySelector(replace_value);
    
    target.style.height = source.offsetHeight + 'px';
    new ResizeObserver(() => {
        target.style.height = source.offsetHeight + 'px';
    }).observe(source);
}

document.addEventListener('DOMContentLoaded', function() {
        get_height('.content_voice', '.replace_content_voice');
        get_height('.content_staff', '.replace_content_staff');
    });
