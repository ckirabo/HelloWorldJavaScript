
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