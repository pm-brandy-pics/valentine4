window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft"){
       SlideChange(-1);
       if (slideIndex==1) {
        document.getElementById("mon").innerHTML = "December";
       } 
       if (slideIndex==2) {
        document.getElementById("mon").innerHTML = "February";
       } 
       if (slideIndex==3) {
        document.getElementById("mon").innerHTML = "April";
       }
       if (slideIndex==4) {
        document.getElementById("mon").innerHTML = "May";
        var video = document.getElementById("sat4");
        video.play();

       } 
       if (slideIndex==5) {
        document.getElementById("mon").innerHTML = "June";
        var video = document.getElementById("sat5");
        video.play();

       }
       if (slideIndex==6) {
        document.getElementById("mon").innerHTML = "July";
        var video = document.getElementById("sat6");
        video.play();

       }
       if (slideIndex==7) {
        document.getElementById("mon").innerHTML = "August";
       }
       if (slideIndex==8) {
        document.getElementById("mon").innerHTML = "September";
       }
       if (slideIndex==9) {
        document.getElementById("mon").innerHTML = "October";
       }
       if (slideIndex==10) {
        document.getElementById("mon").innerHTML = "November";
        var video = document.getElementById("sat10");
        video.play();

       }
       if (slideIndex==11) {
        document.getElementById("mon").innerHTML = "December";
       }
       if (slideIndex==12) {
        document.getElementById("mon").innerHTML = "January";
       }
       document.getElementById("mon").className = "month"
    } else if (e.key === "ArrowRight"){
       SlideChange(1);
       if (slideIndex==1) {
        document.getElementById("mon").innerHTML = "December";
       } 
       if (slideIndex==2) {
        document.getElementById("mon").innerHTML = "February";
       } 
       if (slideIndex==3) {
        document.getElementById("mon").innerHTML = "April";
       }
       if (slideIndex==4) {
        document.getElementById("mon").innerHTML = "May";
        var video = document.getElementById("sat4");
        video.play();

       } 
       if (slideIndex==5) {
        document.getElementById("mon").innerHTML = "June";
        var video = document.getElementById("sat5");
        video.play();

       }
       if (slideIndex==6) {
        document.getElementById("mon").innerHTML = "July";
        var video = document.getElementById("sat6");
        video.play();

       }
       if (slideIndex==7) {
        document.getElementById("mon").innerHTML = "August";
       }
       if (slideIndex==8) {
        document.getElementById("mon").innerHTML = "September";
       }
       if (slideIndex==9) {
        document.getElementById("mon").innerHTML = "October";
       }
       if (slideIndex==10) {
        document.getElementById("mon").innerHTML = "November";
        var video = document.getElementById("sat10");
        video.play();

       }
       if (slideIndex==11) {
        document.getElementById("mon").innerHTML = "December";
       }
       if (slideIndex==12) {
        document.getElementById("mon").innerHTML = "January";
       }
       document.getElementById("mon").className = "month"
    }
 })

var slideIndex = 1;
showSlides(slideIndex);
function SlideChange(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("satelliteimage");
    console.log(slides);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    document.getElementById(`${slideIndex}`).focus();
}

sat1.src = "I.jpg";
sat2.src = "feb.jpg";
sat3.src = "apr.jpg";
sat4.src = "may.mp4";
sat5.src = "june.mp4";
sat6.src = "july.mp4";
sat7.src = "august.jpg";
sat8.src = "sep.jpg";
sat9.src = "oct.png";
sat10.src = "nov.mp4";
sat11.src = "dec.jpeg";
sat12.src = "jan.jpeg";

var video = document.getElementById("background");
video.play();
