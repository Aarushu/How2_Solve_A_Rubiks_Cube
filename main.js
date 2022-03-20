qwerty = [];
average = [];
function submit()
{
    var name_1 = document.getElementById("1").value;
    var name_2 = document.getElementById("2").value;
    var name_3 = document.getElementById("3").value;
    var name_4 = document.getElementById("4").value;
    var name_5 = document.getElementById("5").value;
    qwerty.push(name_1);
    qwerty.push(name_2);
    qwerty.push(name_3);
    qwerty.push(name_4);
    qwerty.push(name_5);
    average.push(name_1);
    average.push(name_2);
    average.push(name_3);
    average.push(name_4);
    average.push(name_5);
    console.log(qwerty);
    document.getElementById("display_name").innerHTML = qwerty;
}

function display_times()
{
    var first = qwerty[0];
    var second = qwerty[1];
    var third = qwerty[3];
    var Fourth = qwerty[4];
    var Fifth = qwerty[5];
    console.log(first);
}