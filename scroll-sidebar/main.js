'use strict';

window.addEventListener('load', function () {
    var cell = document.querySelectorAll('aside .sidebar-cell'), //Поиск всех блоков в сайдбаре

        heightSidebar = document.querySelector('aside').clientHeight, // Высота всего сайдбара

        marginCellSidebar = heightSidebar / cell.length;

    for (let i = 0; i < cell.length; i++) {

        cell[i].style.height = marginCellSidebar +'px';
    }

});