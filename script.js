let slideIndex = 0;  
showSlides();  

function showSlides() {  
    let i;  
    let slides = document.getElementsByClassName("mySlides");  
    let dots = document.getElementsByClassName("dot");  
    
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    
    slideIndex++;  
    if (slideIndex > slides.length) {slideIndex = 1}    
  
    for (i = 0; i < dots.length; i++) {  
        dots[i].className = dots[i].className.replace(" active", "");  
    }  
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds  
}  

function plusSlides(n) {  
    showSlidesManual(slideIndex += n);  
}  

function currentSlide(n) {  
    showSlidesManual(slideIndex = n);  
}  

function showSlidesManual(n) {  
    let i;  
    let slides = document.getElementsByClassName("mySlides");  
    let dots = document.getElementsByClassName("dot");  

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}    
  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
  
    for (i = 0; i < dots.length; i++) {  
        dots[i].className = dots[i].className.replace(" active", "");  
    }  
  
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";  
}