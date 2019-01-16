
//hello world BARK
let hPara = document.createElement("p");


let hText = document.createTextNode("Hello World BARK");
hPara.appendChild(hText);

let hiHTML = document.getElementById("hi");
hiHTML.appendChild(hPara);


//image shiba

let divTag = document.getElementById("image");
let aHref = document.createElement("a");

let imgTag = document.createElement("img");
imgTag.alt = "A happy shiba";
imgTag.src = "images/wine.jpg"
imgTag.width = 250;
imgTag.height = 250;

aHref.appendChild(imgTag);
divTag.appendChild(aHref);

//list of stock

let divListTag = document.getElementById("list");
let ulTag = document.createElement("ul");

let liTag1 = document.createElement("li");
let aTag1 =  document.createElement("a");
aTag1.href = "manage_stock.html";
aTag1.text = "Manage Stock";
liTag1.appendChild(aTag1);
ulTag.appendChild(liTag1);
divListTag.appendChild(ulTag);


let liTag2 = document.createElement("li");
let aTag2 =  document.createElement("a");
aTag2.href = "replenish_stock.html";
aTag2.text = "Replenish Stock";
liTag2.appendChild(aTag2);
ulTag.appendChild(liTag2);

//Enter name and password form
let form1 = document.getElementById("email_form");
let divTagEmail = document.createElement("div");
let inputEmail= document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "email....";
inputEmail.alt = "Enter Email";
inputEmail.required = "required" ;

divTagEmail.appendChild(inputEmail);
form1.appendChild(divTagEmail);