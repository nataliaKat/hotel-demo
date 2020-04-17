$(document).ready(function() {

    counter = 0

    $("#myform").submit(function(e) {
        e.preventDefault();
        let content = `<tr>
                        <th scope='row'>${++counter}</th>`
        for (i = 0; i <= 5; i++) {
            content += `<td>${e.target[i].value}</td>`
            if (i == 5) {
                content += "</tr>"
            }             
        } 
        $('#my-table tr:last').after(content);
    })

})