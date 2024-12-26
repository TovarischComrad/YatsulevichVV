window.onload = function() {

    function make_table_of_content(){

        var html = ["oge_phys_formulas.html"];
        var name = ["Формулы"];

        const tc = document.getElementById('tc_phys');
        var left = "<p><a class=\"a1\" href=\"";
        var center = "\">";
        var right = "</a></p>";
        
        for (var i = 0; i < html.length; i++) {
            tc.innerHTML += left + html[i] + center + name[i] + right;
        }
    };

    make_table_of_content();
}