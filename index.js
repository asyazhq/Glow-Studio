//Scroll to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Jquery css manipulation
function typing() {
  $("#email").css("background-color", "#e0e0e0");
}


// First set of carousels
let slideIndex1 = [1, 1, 1];
let slideId1 = ["list1", "list2", "list3"];
showSlides1(1, 0);
showSlides1(1, 1);
showSlides1(1, 2);

function plusSlides1(n, no) {
  showSlides1(slideIndex1[no] += n, no);
}

function showSlides1(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId1[no]);
  if (n > x.length) { slideIndex1[no] = 1 }
  if (n < 1) { slideIndex1[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1[no] - 1].style.display = "block";
}

// Second set of carousels
let slideIndex2 = [1, 1, 1];
let slideId2 = ["list1", "list2", "list3"];
showSlides2(1, 0);
showSlides2(1, 1);
showSlides2(1, 2);

function plusSlides2(n, no) {
  showSlides2(slideIndex2[no] += n, no);
}

function showSlides2(n, no) {
  let j;
  let y = document.getElementsByClassName(slideId2[no]);
  if (n > y.length) { slideIndex2[no] = 1 }
  if (n < 1) { slideIndex2[no] = y.length }
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideIndex2[no] - 1].style.display = "block";
}


//Multimedia control
function play() {
  var myVideo = document.getElementById("video1");
  if (myVideo.paused) {
    myVideo.play();
  }
  else {
    myVideo.pause();
  }
}
function stop() {
  var myVideo = document.getElementById("video1");
  myVideo.pause();
  myVideo.currentTime = 0;
}


//Filter 
function w3AddClass(element, name) {
  element.classList.add(name);
}
function w3RemoveClass(element, name) {
  element.classList.remove(name);
}
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1 || c == "") {
      w3AddClass(x[i], "show");
    }
  }
  var btns = document.getElementsByClassName("btnFilter");
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}
// Show filtered elements by default
filterSelection("all");

//popup menu
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
