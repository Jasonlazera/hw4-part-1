// Jason Lazera 7/31/21 jason_lazera@student.uml.edu
var it = 0;

//makes sure that user input is valid
// function error_check() {

//     var x_start = document.getElementById("myForm").elements[0].value;
//     var x_end = document.getElementById("myForm").elements[1].value;
//     var y_start = document.getElementById("myForm").elements[2].value;
//     var y_end = document.getElementById("myForm").elements[3].value;
//     let text;
//     var x_start_valid = false;
//     var y_start_valid = false;
//     var x_end_valid = false;
//     var y_end_valid = false;


//     //make sures x is valid starting value
//     if(x_start >= -50 && x_start <= 50) {
//         if (x_start < 0 && x_start >= -50) {
//             x_start = Number(x_start * -1);
//         }
//         x_start_valid = true;
//     }

//     //make sures y is valid starting value
//     if(y_start >= -50 && y_start <= 50) {
//         if (y_start < 0 && y_start >= -50) {
//             y_start = Number(y_start * -1);
//         }
//         y_start_valid = true;
//     }

//     //make sures x is valid ending value
//     if(x_end >= -50 && x_end <= 50) {
//         if (x_end < 0 && x_end >= -50) {
//             x_end = Number(x_end * -1);
//         }
//         x_end_valid = true;
//     }

//     //makes sure y is valid ending value
//     if(y_end >= -50 && y_end <= 50) {
//         if (y_end < 0 && y_end >= -50) {
//             y_end = Number(y_end * -1);
//         }
//         y_end_valid = true;
//     }

//     //rest of conditions are validated
//     if ((x_end < x_start)) {
//         x_end_valid = false;
//         x_start_valid = false;
//     }

//     if ((y_end < y_start)) {
//         y_end_valid = false;
//         y_start_valid = false;
//     }

//     if (x_start_valid === true && x_end_valid === true &&
//          y_start_valid === true && y_end_valid === true) {
//         text = "Input Valid";
//         document.getElementById("demo").innerHTML = text;
//         create_table(x_start, x_end, y_start, y_end);
//     }

//     //if the input is invalid, the user is told why and it is handled
//     //gracefully
//     if (x_start_valid === false || x_end_valid === false ||
//         y_start_valid === false || y_end_valid === false) {

//         if ((x_end < x_start)) {
//             text = "Input Invalid. Make sure the end size is larger than the start size";
//         }
        
//         else if ((y_end < y_start)) {
//             text = "Input Invalid. Make sure the end size is larger than the start size";
//         }

//         else {
//             text = "Input Invalid. Make sure a number value between -50 and 50 is entered for each option.";
//         }
//         document.getElementById("demo").innerHTML = text;
//     }
// }

//some code from this function was taken from https://stackoverflow.com/questions/14643617/create-table-using-javascript
//function generates the table
function create_table() {

    var x_start = document.getElementById("myForm").elements[0].value;
    var x_end = document.getElementById("myForm").elements[1].value;
    var y_start = document.getElementById("myForm").elements[2].value;
    var y_end = document.getElementById("myForm").elements[3].value;

    var num = Number(x_start);
    var num2 = Number(y_start);

    //html elements are imported
    var tablearea = document.getElementById('tablearea');
    var tbl = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '2px solid black';

    //table is made based on template from stackoverflow
    for(var i = y_start-1; i <= y_end; i++){
        var tr = tbl.insertRow();

        for(var j = x_start-1; j <= x_end; j++) {

            var td = tr.insertCell();

            if(i == y_start-1 && j == x_start-1) {
                td.appendChild(document.createTextNode(''));
            }

            else if (i == (y_start-1)) {
                td.appendChild(document.createTextNode((num)));
                num = num + 1;
            }

            else if (j == (x_start-1)) {
                td.appendChild(document.createTextNode((num2)));
                num2 = num2 + 1;
            }

            else {
                td.appendChild(document.createTextNode(i*j));
                if (i == y_start-1 && j != x_start-1) {
                    td.appendChild(document.createTextNode(i));
                }
            }
            td.style.border = '2px solid black';
        }
    }

    if (it > 0) {
        var table1 = document.getElementById('table1');
        tablearea.removeChild(table1);
        console.log(1);
    }

    tbl.setAttribute('id', 'table1');
    tablearea.appendChild(tbl);
    
    it++;
}
