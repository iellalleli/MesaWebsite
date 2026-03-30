// Toggle Menu
function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".header-navigation");
    menuToggle.classList.toggle("active");
    nav.classList.toggle("show");
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const navLinks = document.querySelectorAll('.header-navigation a');
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  });
  
// Swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      speed: 600,
      parallax: true,
      loop: true,  
      autoplay: {
        delay: 3000,  
        disableOnInteraction: false, 
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
});
  
// Scroll to Top
document.addEventListener('scroll', function() {
    const skipLink = document.querySelector('.skip-link');
    if (window.scrollY > 200) {
      skipLink.classList.add('show');
    } else {
      skipLink.classList.remove('show');
    }
});

// Scroll Animations
function applyScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                  if (entry.target.classList.contains('main-courses-card')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                  }, index * 200); 
              } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, {
    threshold: 0.1
});

    document.querySelectorAll('#best_seller .food-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('#aboutUs .about-image, #aboutUs .about-content, #aboutUs .about-card').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.main-courses .card').forEach((card) => {
      card.classList.add('main-courses-card'); 
      observer.observe(card);
    });

    document.querySelectorAll('.stores, .store-locations .card').forEach(element => {
      observer.observe(element);
    });

}

document.addEventListener('DOMContentLoaded', applyScrollAnimations);

// MENU animations
function applyScaleAnimations() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show'); 
          }
      });
  }, {
      threshold: 0.2
  });

  document.querySelectorAll('.scroll-scale').forEach(card => {
      observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', applyScaleAnimations);


// Get the modal element
var modal = document.getElementById("successModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the form element
var form = document.querySelector('.contact-form');

// Show modal on form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the modal
    modal.style.display = "block";

    // Simulate form submission by resetting the form after modal appears
    setTimeout(function() {
        modal.style.display = "none";
        form.reset();  // Reset form after closing the modal
    }, 2000);  // Close modal after 2 seconds
});

// Close modal when clicking on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}