

// header js start here 
const headerBar = document.querySelector('.header-bar');
const menuArea = document.querySelector('.menu-area');

headerBar.addEventListener('click', () => {
  menuArea.classList.toggle('active');
});



// faq js start here
function toggleFAQ(el) {
  const item = el.parentElement;
  const answer = item.querySelector('.faq-answer');

  if (item.classList.contains('active')) {
    answer.style.maxHeight = null;
    item.classList.remove('active');
  } else {
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}





// preloder js start here
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');
  
  setTimeout(() => {
    preloader.classList.add('loaded');
    
    setTimeout(() => {
      content.classList.add('visible');
    }, 500);
  }, 2000); 
});





// back to top js
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

























