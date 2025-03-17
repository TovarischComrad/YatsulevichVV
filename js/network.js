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
        }
    ]);

    // Создаем связи
    const edges = new vis.DataSet([
        { from: 1, to: 2, arrows: "to" },
        { from: 1, to: 3, arrows: "to" },
        { from: 1, to: 4, arrows: "to" }
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

    // Обработчик клика по узлам для показа дополнительной информации
    network.on("click", function(params) {
        const infoPanel = document.getElementById("info-panel");
        const infoContent = document.getElementById("info-content");
        
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            
            infoContent.innerHTML = `
                <h3>${node.label}</h3>
                <p>${node.description}</p>
            `;
            
            infoPanel.style.display = "block";
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
});
