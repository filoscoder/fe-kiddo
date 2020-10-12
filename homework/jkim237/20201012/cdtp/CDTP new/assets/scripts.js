// Stored variables
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 100;
var cartStatus = false;
var backTopExtra = 0;
var storeViewportHeight = $(window).height() / 2;
var rotateBackTop = 0;


// Back to Top button functionality
function back_to_top() {
	var btn = $('#back_top');

	btn.on('click', function (e) {
		$('html,body').animate({scrollTop: 0}, 500);
	});
};

// Padding to add leading zeroes
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

// Random logo at FOOTER
function random_logos() {
	var randomLogo = $('.random_logo');
	var currentLogo = randomLogo.attr('src');
	var randomLogoNumber = Math.floor(Math.random() * 10) + 1;
	randomLogoNumber = pad(randomLogoNumber, 2);
	var newLogo = currentLogo.replace('01', randomLogoNumber)

	randomLogo.attr('src', newLogo);
}

// Randomly choose between pillar and a random logo
function sometimes_pillar() {
	var footerDivs = $('.footer__ident');
	var footerDiv = footerDivs[Math.floor(Math.random()*footerDivs.length)];
	$(footerDiv).removeClass('invisible');
}

// Things do do constantly on scroll
// $(window).scroll(function () {
// 	// Always rotate Back to Top button
// 	rotateBackTop = $(this).scrollTop();
// 	$('#back_top').css({ transform: 'rotate(' + rotateBackTop/6 + 'deg)' });
// });

// Button toggles
function toggles_clickable() {
	$('.toggle_button').click(function() {
		// console.log('clicked');
		var toggled = this;
		var plusorminus = $(toggled).find('.dingbats').html();
		$(toggled).parent().find('.toggle_content').toggleClass('hidden');
		if(plusorminus == '+') {
			$(toggled).find('.dingbats').html('âˆ’');
		} else {
			$(toggled).find('.dingbats').html('+');
		};
		console.log(plusorminus);
	});
};

// Break pillar on mouseover
function pillar_break() {
	$('.pillar_solid').mouseover(function() {
		$(this).css('display','none');
		$('.pillar_break').css('display','inline-block')
	});
};

// Turns seconds (float) into minutes and seconds (integer)
function seconds_into_time(seconds) {
    var minutes = Math.floor(seconds/60); //Get remaining minutes
    seconds -= minutes*60;
    seconds = Math.round(seconds);
    return minutes+":"+(seconds < 10 ? '0'+seconds : seconds); //zero padding on minutes and seconds
};

// Vimeo Replacement Player
function vimeo_funtimes() {
	// array of durations we'll need later
	var vimeoDuration = [];
	var vimeoDurationScrub = [];
	var jqueryScrubTime = [];
	// Finds every iframe on the page
  $('iframe').each(function(index, value) {
    var vimeoObject = value;
		// console.log(index);
    // console.log(vimeoObject);
		var vimeoObject = value;
		// console.log(vimeoObject);
		var vimeoSplit = $(vimeoObject).attr('src').split(':');
		var vimeoCleanUrl = vimeoSplit[1];
		// console.log(vimeoCleanUrl);

		// Wrap iframe in container
    $(vimeoObject).wrap('<div class="video__player_top"><div class="video__player_wrapper">');

		// IF ITS A PLAYER, DO ONE THING, IF IT'S A LOOP, DO ANOTHER
		if ($(vimeoObject).parents('.video__loop').length) {
			//DO LOOP STUFF
			// console.log('its a loop');
			var vimeosrc = vimeoCleanUrl + '?background=1';
		} else {
			//DO PLAYER STUFF
			var vimeosrc = vimeoCleanUrl + '?title=0&byline=0&portrait=0&transparent=0&autopause=true';
			$(vimeoObject).after('<div class="video__player_button_play">PLAY</div><div class="video__player_bar"><div class="video__player_space"></div><div class="video__player_time">0:00</div></div><div class="video__player_seekbar"><div class="video__player_seeklabel">SEEK</div></div><div class="video__player_button_pause"></div>');
				// console.log('its a player');
		};
		$(vimeoObject).attr('src', vimeosrc);
    var jqueryPlayer = new Vimeo.Player(this);

		// Uses Player.js | CLICK PAUSE
		$('.video__player_button_pause').click(function() {
			jqueryPlayer.pause().then(function() {
				$(vimeoObject).siblings('.video__player_button_pause').css('display','none');
				$(vimeoObject).siblings('.video__player_bar').css('opacity','1');
				// console.log('pause');
		    // the video was played
			}).catch(function(error) {
			    switch (error.name) {
			        case 'PasswordError':
			            // the video is password-protected and the viewer needs to enter the
			            // password first
			            break;

			        case 'PrivacyError':
			            // the video is private
			            break;

			        default:
			            // some other error occurred
			            break;
			    }
			});
		});

		$( '.video' ).click(function() {
		  $(this).closest('iframe').trigger( 'click' );
		  // console.log('intercept');
		});

    // Uses Player.js |HIDE PLAY BUTTON WHEN PLAYING
    jqueryPlayer.on('play', function(data) {
			if ($(vimeoObject).parents('.video__player').length) {
				$('header').removeClass('nav__static').removeClass('nav__fixed_exposed').addClass('nav__fixed_hidden');
			};
      $(vimeoObject).siblings('.video__player_button_play').css('opacity','0');
			$(vimeoObject).siblings('.video__player_bar').css('opacity','1');
      $(vimeoObject).siblings('.video__player_button_pause').css('display','block');
			setTimeout(function(){
				// console.log('timeout hide');
				$(vimeoObject).siblings('.video__player_bar').css('opacity','0');
			}, 3000);
    });

		// Uses Player.js | Show looping background videos on load
		if ($(vimeoObject).parents('.video__loop').length) {
			jqueryPlayer.on('loaded', function(data) {
	        $(vimeoObject).closest('.video').css('opacity','1');
	    });
		} else {
			jqueryPlayer.on('loaded', function(data) {
	        $(vimeoObject).closest('.video').css('opacity','1');
	    });
		};

    // Uses Player.js |HIDE PLAY BUTTON WHEN PLAYING
    jqueryPlayer.on('ended', function(data) {
      $(vimeoObject).siblings('.video__player_bar').find('.video__player_space').css('width', '0%');
    });

    // Uses Player.js |SHOW PLAY BUTTON WHEN PAUSED
    jqueryPlayer.on('pause', function(data) {
        $(vimeoObject).siblings('.video__player_button_play').css('opacity','1');
        $(vimeoObject).siblings('.video__player_bar').css('opacity','0');
    });

    //HOVER CONTROLS
    $(vimeoObject).hover(function(){
      //ON
      $(vimeoObject).siblings('.video__player_bar').css('opacity','1');
    }, function(){
      //OFF
			setTimeout(function(){
				// console.log('timeout hide');
				$(vimeoObject).siblings('.video__player_bar').css('opacity','0');
			}, 3000);
    });

		$('.video__player_button_pause').hover(function(){
      //ON
			// console.log('hover pause button');
      $(vimeoObject).siblings('.video__player_bar').css('opacity','1');
    }, function(){
      //OFF
			setTimeout(function(){
				// console.log('timeout hide');
				$(vimeoObject).siblings('.video__player_bar').css('opacity','0');
			}, 3000);
    });

    // Uses Player.js | GET DURATION OF EACH
    jqueryPlayer.getDuration().then(function(duration) {
      vimeoDuration[index] = duration;
			// console.log("duration of " + index + " is " + vimeoDuration[index]);
        // duration = the duration of the video in seconds
    }).catch(function(error) {
        // an error occurred
    });

		//SCRUBBER EACH ACTIONS
		$('.video__player_seekbar').each(function(seekindex, el) {
			$(this).hover(function() {
	      //ATTACH TO MOUSE HORIZONTAL POSITION
	      $(this).mousemove(function() {
						// console.log(seekindex);
	          var currentMousePosition = event.clientX;
	          var currentWindowWidth = $(window).width();
						// Mouse Position / Window width = % * total duration = scrubbed duration, convert to seconds
	          vimeoDurationScrub[seekindex] = (currentMousePosition/currentWindowWidth) * vimeoDuration[seekindex];
	          jqueryScrubTime[seekindex] = seconds_into_time(vimeoDurationScrub[seekindex]);
	          // console.log("scrub location of " + index + " is " + jqueryScrubTime[seekindex]);
						currentMousePosition = (currentMousePosition*.9) + (.05*currentWindowWidth);
						// console.log(currentMousePosition);
	          $(this).find('.video__player_seeklabel').html(jqueryScrubTime[seekindex]).css('left',currentMousePosition+'px');
	      });
	      //SEEK REPLACES TIME
	      $(this).css('opacity','1').siblings('.video__player_bar').css('opacity','0');
	    }, function() {
	      //HIDE SEEK BAR
	      $(this).css('opacity','0');
	    });
		});


    // Uses Player.js | CLICK SCRUBBER
    $('.video__player_seekbar').click(function() {
      jqueryPlayer.setCurrentTime(vimeoDurationScrub[index]).then(function(seconds) {
				$(vimeoObject).siblings('.video__player_seekbar').css('opacity','0');
				$(vimeoObject).siblings('.video__player_bar').css('opacity','1');
				setTimeout(function(){
					// console.log('timeout hide');
					$(vimeoObject).siblings('.video__player_bar').css('opacity','0');
				}, 3000);
        // console.log(vimeoDurationScrub[index]);
          // seconds = the actual time that the player seeked to
      }).catch(function(error) {
          switch (error.name) {
              case 'RangeError':
                  // the time was less than 0 or greater than the videoâ€™s duration
                  break;

              default:
                  // some other error occurred
                  break;
          }
      });
    });


    // Uses Player.js | FUNCTION TO DO WHEN TIME UPDATE (PLAYING)
    jqueryPlayer.on('timeupdate', function(data) {
      //TURN TIME LOCATION INTO %
      var vimeoTimeLocation = data.percent * 90 + '%';
      // console.log(vimeoTimeLocation);
      jqueryPlayer.getCurrentTime().then(function(seconds) {
          // seconds = the current playback position
          var jqueryPlayerTime = seconds_into_time(seconds);
          // console.log(jqueryPlayerTime);
          //CHANGE THE TIME, ALIGN TO EDGE
          $(vimeoObject).siblings('.video__player_bar').find('.video__player_time').html(jqueryPlayerTime);
          $(vimeoObject).siblings('.video__player_bar').find('.video__player_space').css('width',vimeoTimeLocation);
      }).catch(function(error) {
          // an error occurred
          // console.log('getcurrenttime error')
      });
    });

  });
};

// Window scroll checker
$(window).scroll(function(event){
    didScroll = true;
});

// Function to perform on scroll, only every X times
setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
	}, 200);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta, by distance
		if(Math.abs(lastScrollTop - st) <= delta)
		return;

		// If more than X, show the TOP button, else hide it
		if(st > storeViewportHeight && $(window).width() > 480) {
			$('#back_top_container').css('bottom', backTopExtra + 5 + 'vw');
		} else if(st > storeViewportHeight && $(window).width() < 480){
			$('#back_top_container').css('bottom', backTopExtra + 2 + 'vw');
		} else {
		}


		if (st > lastScrollTop && st > 70){ // If scrolling down
			$('header').removeClass('nav__static').removeClass('nav__fixed_exposed').addClass('nav__fixed_hidden');
			$('#back_top_container').css('bottom', '-25vw');
			// console.log('fixed down')
		} else {
			$('header').removeClass('nav__static').removeClass('nav__fixed_hidden').addClass('nav__fixed_exposed');
			// console.log('fixed up')
		}

	lastScrollTop = st;
	// console.log(st);
}



$(document).ready(function () {
	back_to_top();
	toggles_clickable();
	pillar_break();
	vimeo_funtimes();
	random_logos();
	sometimes_pillar();

	$('.shop__slider').slideshow({
		// options
		cellAlign: 'left',
		wrapAround: true,
		pageDots: false,
		contain: true,
		autoPlay: 5000
	});

	$('.shop__slider_main').slideshow({
		// options
		cellAlign: 'left',
		wrapAround: true,
		pageDots: false,
		prevNextButtons: false,
		contain: true,
		autoPlay: 5000
	});

	$('#about__location_slide').slideshow({
		// options
		cellAlign: 'left',
		wrapAround: true,
		pageDots: false,
		contain: true,
		autoPlay: 5000
	});

	// previous
	$('.shop__home_previous').on( 'click', function() {
		$('.shop__slider_main').slideshow('previous');
		// console.log('clicked prev');
	});
	// next
	$('.shop__home_next').on( 'click', function() {
		$('.shop__slider_main').slideshow('next');
	});

});

$(window).on('load', function() { // makes sure the whole site is loaded
	$('.site__preload').css('opacity','1'); // reveal page content

})