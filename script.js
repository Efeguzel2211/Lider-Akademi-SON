var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  document.getElementById("scrollAnchor5").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var hakkımızda = document.getElementById("hakkımızda");

    hakkımızda.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };

  document.getElementById("scrollAnchor3").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementsByClassName("hamburger")
    var biz = document.getElementById("biz");

    biz.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };

  document.getElementById("scrollAnchor2").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var hizmet = document.getElementById("hizmet");

    hizmet.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };


  document.getElementById("scrollAnchor4").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var kadro = document.getElementById("kadro");

    kadro.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };








  document.getElementById("scrollAnchor6").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var hakkımızda = document.getElementById("hizmet");

    hakkımızda.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };
  

  document.getElementById("scrollAnchor7").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var hakkımızda = document.getElementById("biz");

    hakkımızda.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };


  document.getElementById("scrollAnchor8").onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var hakkımızda = document.getElementById("kadro");

    hakkımızda.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };



  document.getElementById("scrollAnchor9").onclick = function(event) {
    
    event.preventDefault(); // Prevent default anchor behavior
    

    hakkımızda.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };

  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("button-flex");
  } else {
    mybutton.classList.remove("button-flex");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




  const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContainer = document.getElementById("modalContainer");

openModalBtn.addEventListener("click", () => {
    modalContainer.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
        modalContainer.style.display = "none";
    }
});








