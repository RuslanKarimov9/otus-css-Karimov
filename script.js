    // чтобы обеспечить управление прокруткой будем работать с со всей страницей (<html>)
    const page = document.querySelector('html');

    // находим окно, с которыми будем работать
    const win =  document.querySelector('#win');
    // находим кнопки управления
    //  - на включение
    const b_win = document.querySelector('#tool__win'); 
    //  - на выключение
    const b_win_Close = document.querySelector('#win-close'); 

    // обработчики событий
    const handle_win = () => {
        // добавляем/удаляем на подложку (#win) класс "win_closed", что подключает/отключает стиль 
        // указанного класса (основная настройка - display: none;)
        win.classList.toggle('win_closed'); 
        // добавляем/удаляем на страницу "page" класс "scroll-locked", 
        // что подключает/отключает стиль указанного класса (основная настройка - overflow: hidden;)  
        page.classList.toggle('scroll-locked');
    };

    // подключаем обработчик handle_win (см. выше) к событиям выбранных кнопок (они работают
    // в паре, поэтому обработчики у них одинаковые):
    b_win.addEventListener('click', handle_win);
    b_win_Close.addEventListener('click', handle_win);