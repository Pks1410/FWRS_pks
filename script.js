let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myQuote");
  let images = document.getElementsByClassName("images");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    images[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  images[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
let cards=document.getElementsByClassName("card");
for (i=0;i<cards.length;i++){
    if (i%2==0){
        cards[i].style.translate='50px';
        cards[i].style.borderLeft='10px double cyan';
        cards[i].style.paddingLeft='20px';
    }
    else{
        cards[i].style.borderRight='10px double cyan';
        cards[i].style.paddingRight='20px';
    }
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.top = "0";
  } else {
      navbar.style.top = "-50px";
  }
}