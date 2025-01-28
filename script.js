// Function to change the image
function Aminus() {
const img1= document.getElementById("img1");
const img2= document.getElementById("img2");
const img3= document.getElementById("img3");
const img4= document.getElementById("img4");
// Check the current image source and toggle it
 if (img1.src.includes("icon-plus.svg")) {
    img1.src = "icon-minus.svg";
    img2.src ="icon-plus.svg";
    img3.src ="icon-plus.svg";
    img4.src ="icon-plus.svg";
   }

};
function bminus() {
const img1= document.getElementById("img1");
const img2= document.getElementById("img2");
const img3= document.getElementById("img3");
const img4= document.getElementById("img4");
// Check the current image source and toggle it
 if (img2.src.includes("icon-plus.svg")) {
    img2.src = "icon-minus.svg";
    img1.src ="icon-plus.svg";
    img3.src ="icon-plus.svg";
    img4.src ="icon-plus.svg";
   }

};

function cminus() {
const img1= document.getElementById("img1");
const img2= document.getElementById("img2");
const img3= document.getElementById("img3");
const img4= document.getElementById("img4");
// Check the current image source and toggle it
 if (img3.src.includes("icon-plus.svg")) {
    img3.src = "icon-minus.svg";
    img1.src ="icon-plus.svg";
    img2.src ="icon-plus.svg";
    img4.src ="icon-plus.svg";
   }

};
 
function dminus() {
const img1= document.getElementById("img1");
const img2= document.getElementById("img2");
const img3= document.getElementById("img3");
const img4= document.getElementById("img4");
// Check the current image source and toggle it
 if (img4.src.includes("icon-plus.svg")) {
    img4.src = "icon-minus.svg";
    img1.src ="icon-plus.svg";
    img3.src ="icon-plus.svg";
    img2.src ="icon-plus.svg";
   }

};
