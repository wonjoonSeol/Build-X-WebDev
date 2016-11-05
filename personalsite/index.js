//This is a comment

/*  
    This is a multiline comment
*/

var myVariable = 3;

document.querySelector("#name").textContent = "Wonjoon Seol";

var icecream = 'mint';
var password = '1234';
    
    //window.prompt("Please Enter Password to see the Website", "password");

if (password === '1234') {
    alert("WELCOME TO MY WEBSITE!!!!!!!! <3 <3");
} else if (icecream === "vanilla") {
    alert("Well that's OK");
} else {
    alert("FAIL");
    window.location = "http://dank.infinite.pizza";
}

var portfolio = ["I attend a webdec class!",
                "I can do js!",
                 "I know the htmls!"
                 ];

var x = 0;

while (x > 10) {
    if (x === 5) {
        break;
    }
    
    //console.log(x);
    x++;
}

console.log(portfolio.length);

var list = document.getElementById("portfoliolist");

for (var i = 0; i < portfolio.length; i++){
    console.log(portfolio[i]);    
    console.log(list);
    
    var listitem = document.createElement("li")
    listitem.textContent = portfolio[i];
    list.appendChild(listitem);
}



for (var i in portfolio) {
    console.log(portfolio[i]);
    console.log(multiply(i,i));
}

function multiply(num1, num2) {
    var temporary = num1 * num2;
        return temporary - 1;
}

console.log(multiply(8,2));

function getElementbyId(id) {
    //do some magic to find that element
    return element;
}

var num = 5;
var x = multiply(num, 3);
console.log(x);
document.querySelector('html').onclick = function() {
    alert("Hah you clicked my website!"); //you don't need ; in javascript in this case. Only one thing. But still good practice.
}
//onclick when someone clicks

//document.getElementById(id);


document.getElementById("contactform").onsubmit = function(){
    alert("submitted form");
    console.log(document.getElementById("emailinput").value);
    console.log(document.getElementById("textinput").value);
}