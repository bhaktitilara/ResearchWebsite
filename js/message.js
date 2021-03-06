

function showEmergencyMessage(data) {

  var emergencyCheck = data.emergency;
      title = data.title;
      summary = data.summary;
      message = data.message;
      statusUpdates = data.updates;
      button = data.customButton;
      link = data.customLink;

      
  if(emergencyCheck == true) { 

    $("#uc-emergency").html("<style>#uc-emergency div > p > a { text-decoration: underline; } .alert { margin-bottom: 0px !important; } .alert-banner { background-color: #c69214; color: #000 !important; border-color: transparent; border-radius: 0; } .alert-banner a { color: #000 !important; border-color: #000 !important; } a.alert-link:hover { text-decoration: none; } .alert .text-link { border-color: #000 !important; border-bottom: 1px solid #000; font-size: 16px; } .no-hero { margin: 18.5em 0 3em; } .row.spacer { margin-top: 95px; } @media only screen and (max-width: 990px) { .row.spacer { margin-top: 190px; } } @media only screen and (max-width: 768px) { #uc-emergency { font-size: 13px; line-height: 1.4; } .alert .text-link { font-size: 13px; } .layout-title { position: relative; } }</style><div style='display: block;' class='alert alert-banner text-center' role='alert'> <div class='container no-gutter'> <div class='row'> <div class='col-xs-12 col-md-3 col-lg-2'> <strong><span class='fa fa-exclamation-triangle' aria-hidden='true'></span>"+ data.title +"</strong> </div> <div class='col-xs-12 col-md-7 col-lg-8'> <p>"+ data.summary +"</p> </div> <div class='col-xs-12 col-md-2'> <a href='"+link+"' class='alert-link text-right text-link small no-hover'>"+ button +"</a> </div> </div> </div> </div>");
        $(".emergency-header").html("<h2 class='h-alert-banner'>ALERT: <span class='emergency-h-text'>"+title+"</span></h2>");
    $("#emergency-message").html(message);
    $("#emergency-updates").html(statusUpdates);
    $( ".em-container" ).addClass( "m-top" );
    $( ".no-emergency" ).addClass( "hidden" );

  }
};

(function($) {
    $(document).ready(function() {
		$.ajax( {
			url:"https://www.ucsd.edu/common/_emergency-broadcast/js-message.jsonp?callback=?",
			dataType: "jsonp",
			jsonpCallback:"showEmergencyMessage"
		});
	});
})(jQuery);

 
