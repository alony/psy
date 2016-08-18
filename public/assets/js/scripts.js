/*-----------------------------------------------------------------------------------*/
/*  STYLE SELECT #TODO remove me
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
  jQuery('div#style-select select').on("change", function() {
    window.location.href = $(this).val();
  });

  jQuery('body').on("mouseup vmouseup", function(e) {
    // send event into iframe
    var iframe = document.getElementById("iframe-image-slider");

    if (iframe) {
      $(iframe.contentDocument).find('.cd-handle').removeClass('draggable');
      $(iframe.contentDocument).find('.cd-resize-img').removeClass('resizable');
    }
  });

  jQuery('.methods-list ul li h4').on('click', function(e) {
    $(this).parent('li').toggleClass('active');
    $(this).parent('li').find('p').slideToggle();
  });
});

/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.media').fitVids();
});

/*-----------------------------------------------------------------------------------*/
/*	CHAT STYLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	$('.format-chat li:even').css('background-color','#e9e9e9');
	$('.format-chat li:odd').css('background-color','#f4f4f4');

  $('form#contact_form').on('submit', function(e) {

    var data = {};
    var formData = $(this).serializeArray();

    formData.forEach(function(item, i, formData) {
      data[item.name] = item.value;
    });

    $.post("http://secretary-.herokuapp.com/email/",
      data).success(function(a) {
        $("form").hide();
        $(".hint").html("Danke für Ihr Interesse an einem Termin bzw. weiteren Informationen.\nIch werde mich umgehend mit Ihnen in Verbindung setzen.").show();
      }).error(function(data) {
        var errMsg = JSON.parse(data.responseText);
        $(".hint").html(errMsg).show();
      });

    return false;
  });
});



/*-----------------------------------------------------------------------------------*/
/*	SELECTNAV
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	selectnav("#branding .menu ul", {
		label: '--- Navigation --- ',
		indent: '-'
	});
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
 $(document).ready(function() {
 if(!(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
        $('.gallery-items li.item').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(400);
        });
    }
    });

/*-----------------------------------------------------------------------------------*/
/*	SOCIAL HOVER
/*-----------------------------------------------------------------------------------*/

$(function() {
$('.social img').css("opacity","1.0");
$('.social img').hover(function () {
$(this).stop().animate({ opacity: 0.75 }, "fast"); },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/


$(function() {
$("a.button, .forms fieldset .btn-submit, #submit").css("opacity","1.0");
$("a.button, .forms fieldset .btn-submit, #submit").hover(function () {
$(this).stop().animate({ opacity: 0.85 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	$('input[title]').each(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));
		}

		$(this).focus(function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('').addClass('focused');
			}
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title')).removeClass('focused');
			}
		});
	});
});

/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide();
//slide up and down when click over heading 2
$("h4").click(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
return true;
});
});

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});

/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/

getTwitters('twitter', {
        id: 'elemisdesign',
        count: 2,
        enableLinks: true,
        ignoreReplies: false,
        template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span><br /><em class="twitterTime"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></em>',
        newwindow: true
});


/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})