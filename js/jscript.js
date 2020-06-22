		
(function() {
  

		
	jQuery(document).ready(function(){
		
		
		/* Carousel Display */ 
		$('.carousel').carousel({
		  interval: 30000
		})
		
		/* ToolTip */ 
		$('[data-toggle="tooltip"]').tooltip();

		/* Navigation ScrollTo */ 
		function slideUpDown(yourElement, yOffset) {

			 var yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: yCoordinate + yOffset,
				behavior: 'smooth'
			});
			clear();
			
		}
		
		function clear(){
			slideUpDown("", "");
		}
		
		
		/* Navigation ScrollTo */ 
		$(".fa-arrow-up").click(function() {
			slideUpDown(document.getElementById('sectionBanner'), -1000);
		});
		
		/* Contact Us */ 
		$("#navEmail").click(function() {
			$('#email, #name, #phone, #message').val('');
			$('.badge-warning').hide();
		});
		

		
		/* Footer */ 
		var dt = new Date();
		$("#footerYear").text(dt.getFullYear());
		
		
		/* Slider-Swiper */
		var mySwiper = new Swiper(".swiper-container", {
			  direction: "vertical",
			  loop: true,
			  pagination: ".swiper-pagination",
			  grabCursor: true,
			  speed: 1000,
			  paginationClickable: true,
			  parallax: true,
			  autoplay: false,
			  effect: "slide",
			  mousewheelControl: 1
		});	
		
		
		/* Start Carousel Wheel */ 
		var carousel = document.querySelector('.carousel-wheel');
		var cells = carousel.querySelectorAll('.carousel__cell');
		var cellCount; // cellCount set from cells-range input value
		var selectedIndex = 0;
		var cellWidth = carousel.offsetWidth;
		var cellHeight = carousel.offsetHeight;
		var isHorizontal = true;
		var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
		var radius, theta;
		// console.log( cellWidth, cellHeight );

		function rotateCarousel() {
		  var angle = theta * selectedIndex * -1;
		  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
			rotateFn + '(' + angle + 'deg)';
		}

		var prevButton = document.querySelector('.previous-button');
		prevButton.addEventListener( 'click', function() {
		  selectedIndex--;
		  rotateCarousel();
		});

		var nextButton = document.querySelector('.next-button');
		nextButton.addEventListener( 'click', function() {
		  selectedIndex++;
		  rotateCarousel();
		});

		var cellsRange = document.querySelector('.cells-range');
		cellsRange.addEventListener( 'change', changeCarousel );
		cellsRange.addEventListener( 'input', changeCarousel );



		function changeCarousel() {
		  cellCount = cellsRange.value;
		  theta = 360 / cellCount;
		  var cellSize = isHorizontal ? cellWidth : cellHeight;
		  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
		  for ( var i=0; i < cells.length; i++ ) {
			var cell = cells[i];
			if ( i < cellCount ) {
			  // visible cell
			  cell.style.opacity = 1;
			  var cellAngle = theta * i;
			  cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
			} else {
			  // hidden cell
			  cell.style.opacity = 0;
			  cell.style.transform = 'none';
			}
		  }

		  rotateCarousel();
		}

		var orientationRadios = document.querySelectorAll('input[name="orientation"]');
		( function() {
		  for ( var i=0; i < orientationRadios.length; i++ ) {
			var radio = orientationRadios[i];
			radio.addEventListener( 'change', onOrientationChange );
		  }
		})();

		function onOrientationChange() {
		  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
		  isHorizontal = checkedRadio.value == 'horizontal';
		  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
		  changeCarousel();
		}

		// set initials
		onOrientationChange();
		
		/* End Carousel Wheel */ 
		
		
		/* Start jR3DCarouselGalleryDefault - Carousel Square Box */
		
		// with minimal configuration and default setting
		var slideImages = [];
		for (var i = 1; i < 6; i++) {
			slideImages.push({
			  src: 'img/sq-' + i + '.jpg'
			})
		}
		$('.jR3DCarouselGalleryDefault').jR3DCarousel({
			// width: 470,
			// height: 272,
			width: 650,
			height: 400,
			slides: slideImages
		});

		// Or with options
		$('.jR3DCarouselGalleryCustom').jR3DCarousel({
			// width: 470,
			width: 500,
			/* largest allowed width */
			// height: 272,
			height: 500,
			/* largest allowed height */
			slideLayout: 'fill',
			/* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
			animation: 'slide3D',
			/* slide | scroll | fade | zoomInSlide | zoomInScroll */
			animationCurve: 'ease',
			animationDuration: 1700,
			animationInterval: 2000,
			rotationDirection: 'ltr',
			slideClass: 'jR3DCarouselCustomSlide',
			autoplay: false,
			onSlideShow: slideShownCallback,
			/* callback when Slide show event occurs */
			navigation: 'circles' /* circles | squares */ ,
			perspective: 1200
		});
		function slideShownCallback($slide) {
			console.log("Slide shown: "+$slide.find('img').attr('src'));
		}
		/* End Carousel Square Box */
		
		
		
		
	});

	
})();
