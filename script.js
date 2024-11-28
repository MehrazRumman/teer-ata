const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
 
  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? 1 : 0;

    const assets = slide.querySelectorAll(".pack, .food, .product, .bowl");
    assets.forEach(asset => {
      asset.style.opacity = 0;
      asset.style.transform = ""; 
    });
  });

  
  const currentAssets = slides[slideIndex].querySelectorAll(".pack, .food, .product, .bowl");

  setTimeout(() => {
    currentAssets.forEach(asset => {
      asset.style.opacity = 1;

    
      if (asset.classList.contains("left")) {
        asset.style.transform = "translateX(0)";
      }
      if (asset.classList.contains("right")) {
        asset.style.transform = "translateX(0)";
      }
      if (asset.classList.contains("upper")) {
        asset.style.transform = "translateY(0)";
      }
      if (asset.classList.contains("bottom-right")) {
        asset.style.transform = "translate(0, 0)";
      }

      
      if (slideIndex === 0) {
        if (asset.classList.contains("pack-left")) {
          asset.style.transform = "translate(-50%, 0)";
          asset.style.bottom = "10%";
        }
        if (asset.classList.contains("food-right")) {
          asset.style.transform = "translate(-50%, 0)";
          asset.style.bottom = "10%"; 
        }
      }
    });
  }, 500); 
}

function startAdLoop() {
  showSlide(currentSlide);
  setTimeout(() => {
    currentSlide = (currentSlide + 1) % slides.length; 
    startAdLoop(); 
  }, 2800);
}


startAdLoop();
