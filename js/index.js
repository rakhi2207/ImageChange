"use strict"
function myFunction() {
  var x = document.getElementsByClassName("topnav")[0];
    console.log(x)
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function dragNdrop(event) {
    let fileName = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById('banner');
    preview.setAttribute("src", fileName);
    document.getElementById('banner1').setAttribute('src',fileName);
}

function drag() {
  document.getElementById('uploadFile').parentNode.className = 'inner_upload';
}
function drop() {
  document.getElementById('uploadFile').parentNode.className = 'inner_upload';
}

function change()
{
  let value=document.getElementById('urlvalue');
  let srcData=value.value;
  if(srcData.length>0)
  {
    document.getElementById('banner').setAttribute('src',srcData);
    document.getElementById('banner1').setAttribute('src',srcData);
  }
  value.value=''
}

function changing(value)
{
  let preview = document.getElementById('banner');
  preview.setAttribute("src", value.src);
  document.getElementById('banner1').setAttribute('src',value.src);
}
function getFirst()
{
  let img1=document.getElementsByClassName('si')[0];
  changing(img1)
}
function getSecond()
{
  let img1=document.getElementsByClassName('si')[1];
  changing(img1)
}
function getThird()
{
  let img1=document.getElementsByClassName('si')[2];
  changing(img1)
}
// const images = document.getElementsByClassName("ci");
// console.log(images)
// let i=0;
// setInterval(function(){ 

//     // images.forEach( (img, i) => {
//     //   img.style.display = 'none';
//     // })
//     console.log(i)
//     if(i == 0) {
//         images[i].style.display = 'block';
//       }
//       else if(i == images.length) 
//       {
//         images[i - 1].style.display = 'none';
//         i=0;
//         images[i].style.display = 'block';
//       }
//       else {
//         images[i - 1].style.display = 'none';
//         images[i].style.display = 'block';
//     }
    
//     i++;
  
//   }, 2000);