document.addEventListener('DOMContentLoaded', function() {
    // Создаем узлы
    const nodes = new vis.DataSet([
        { 
            id: 1, 
            label: "ΔATA.V", 
            group: "main",
            title: "Центральный узел DATA.V",
            description: "Платформа для образовательных материалов",
            // Переопределяем шрифт для этого узла: больше размер и жирный шрифт
            font: {
                size: 24,
                bold: true, 
                face: "Inter, sans-serif" // Добавьте шрифт
            }
        },
        { 
            id: 2, 
            label: "Разбор задач", 
            group: "content",
            title: "Разбор задач",
            description: "Подробный анализ и решение практических задач по различным предметам"
        },
        { 
            id: 3, 
            label: "Авторские конспекты", 
            group: "content",
            title: "Авторские конспекты",
            description: "Уникальные учебные материалы и конспекты от экспертов"
        },
        { 
            id: 4, 
            label: "Современные лекции", 
            group: "content",
            title: "Современные лекции",
            description: "Актуальные образовательные лекции по различным темам"
        },
        // Добавляем дочерние узлы для Разбор задач
        { 
            id: 5, 
            label: "конспект1", 
            group: "subcontent",
            url: "/YatsulevichVV/privacy.html"
        },
        { 
            id: 6, 
            label: "конспект2", 
            group: "subcontent",
            url: "razbor_konspekt2.html"
        },
        { 
            id: 7, 
            label: "конспект3", 
            group: "subcontent",
            url: "razbor_konspekt3.html"
        },
        // Добавляем дочерние узлы для Авторские конспекты
        { 
            id: 8, 
            label: "конспект1", 
            group: "subcontent",
            url: "avtorskie_konspekt1.html"
        },
        { 
            id: 9, 
            label: "конспект2", 
            group: "subcontent",
            url: "avtorskie_konspekt2.html"
        },
        { 
            id: 10, 
            label: "конспект3", 
            group: "subcontent",
            url: "avtorskie_konspekt3.html"
        },
        // Добавляем дочерние узлы для Современные лекции
        { 
            id: 11, 
            label: "конспект1", 
            group: "subcontent",
            url: "lectures_konspekt1.html"
        },
        { 
            id: 12, 
            label: "конспект2", 
            group: "subcontent",
            url: "lectures_konspekt2.html"
        },
        { 
            id: 13, 
            label: "конспект3", 
            group: "subcontent",
            url: "lectures_konspekt3.html"
        }
    ]);

    // Создаем связи
    const edges = new vis.DataSet([
        { from: 1, to: 2, arrows: "to" },
        { from: 1, to: 3, arrows: "to" },
        { from: 1, to: 4, arrows: "to" },
        // Связи для Разбор задач
        { from: 2, to: 5, arrows: "to" },
        { from: 2, to: 6, arrows: "to" },
        { from: 2, to: 7, arrows: "to" },
        // Связи для Авторские конспекты
        { from: 3, to: 8, arrows: "to" },
        { from: 3, to: 9, arrows: "to" },
        { from: 3, to: 10, arrows: "to" },
        // Связи для Современные лекции
        { from: 4, to: 11, arrows: "to" },
        { from: 4, to: 12, arrows: "to" },
        { from: 4, to: 13, arrows: "to" }
    ]);

    // Настройки сети
    const options = {
        nodes: {
            shape: "box",
            margin: 10,
            borderWidth: 1,
            font: {
                size: 16,
            },
            // Убираем скругление углов
            shapeProperties: {
                borderRadius: 0
            },
            // Отключаем визуальный эффект выделения при клике и ховере
            chosen: false
        },
        edges: {
            width: 1,
            color: { color: "222222" },
            // Делаем стрелки строго прямыми
            smooth: false
        },
        groups: {
            main: { 
                // Настройка цвета для группы main
                color: { background: "#91C8E4", border: "#222222" },
                borderWidth: 1,
                shape: "box",
                font: { size: 16, color: "#222222",  face: "Inter, sans-serif", bold: true, }
            },
            content: { 
                // Настройка цвета для группы content
                color: { background: "#ffffff", border: "#222222" },
                shape: "box",
                borderWidth: 1,
            },
            subcontent: { 
                color: { background: "#E4E4E4", border: "#222222" },
                shape: "box",
                borderWidth: 1,
                font: { size: 16 }
            }
        },
        physics: {
            enabled: true,
            barnesHut: {
                gravitationalConstant: -2000,
                centralGravity: 0.15,
                springLength: 125,
                springConstant: 0.05
            },
            stabilization: {
                enabled: true,
                iterations: 1000,
                updateInterval: 100
            }
        },
        interaction: {
            // Отключаем эффекты hover
            hover: false,
            tooltipDelay: 200,
            hideEdgesOnDrag: true,
            multiselect: false
        }
    };

    // Создаем сеть
    const container = document.getElementById("network-container");
    const data = { nodes: nodes, edges: edges };
    const network = new vis.Network(container, data, options);

    // Добавляем кнопку полноэкранного режима
    const fullscreenButton = document.createElement('button');
    fullscreenButton.className = 'network-fullscreen-button';
    fullscreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>';
    container.appendChild(fullscreenButton);

    // Флаг для отслеживания состояния полноэкранного режима
    let isFullscreen = false;
    
    // Сохраняем исходные размеры и позицию контейнера
    let originalStyles = {
        width: '',
        height: '',
        position: '',
        top: '',
        left: '',
        zIndex: ''
    };

    // Функция для переключения полноэкранного режима
    function toggleFullscreen() {
        if (!isFullscreen) {
            // Сохраняем текущие стили
            originalStyles = {
                width: container.style.width,
                height: container.style.height,
                position: container.style.position,
                top: container.style.top,
                left: container.style.left,
                zIndex: container.style.zIndex
            };
            
            // Устанавливаем полноэкранный режим
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.zIndex = '9999';
            
            // Меняем иконку на кнопке
            fullscreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>';
            
            isFullscreen = true;
        } else {
            // Возвращаем исходные стили
            container.style.width = originalStyles.width;
            container.style.height = originalStyles.height;
            container.style.position = originalStyles.position;
            container.style.top = originalStyles.top;
            container.style.left = originalStyles.left;
            container.style.zIndex = originalStyles.zIndex;
            
            // Меняем иконку на кнопке обратно
            fullscreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>';
            
            isFullscreen = false;
        }
        
        // Пересчитываем размер сети
        setTimeout(() => {
            network.fit();
        }, 100);
    }

    // Добавляем обработчик клика на кнопку полноэкранного режима
    fullscreenButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleFullscreen();
    });

    // Обработчик клика по узлам для показа дополнительной информации
    network.on("click", function(params) {
        const infoPanel = document.getElementById("info-panel");
        const infoContent = document.getElementById("info-content");
        
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            
            // Проверяем наличие URL для перехода
            if (node.url) {
                window.location.href = node.url;
            } else {
                // Отображаем информацию для основных узлов
                infoContent.innerHTML = `
                    <h3>${node.label}</h3>
                    <p>${node.description}</p>
                `;
                infoPanel.style.display = "block";
            }
        } else {
            infoPanel.style.display = "none";
        }
    });

    // Начальная позиция для лучшего вида
    network.once("stabilizationIterationsDone", function() {
        network.fit();
    });
    
    // Адаптация сети при изменении размера окна
    window.addEventListener('resize', function() {
        network.fit();
    });
    
    // Обработчик клавиши Escape для выхода из полноэкранного режима
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isFullscreen) {
            toggleFullscreen();
        }
    });
});