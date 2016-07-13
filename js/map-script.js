	
	'use strict';	
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
  	//INITIALIZE MAP
	function initialize() {
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 12,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(41.1530668427586,-74.54987525939941),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		
    var marker1 = new MarkerWithLabel({
          position: new google.maps.LatLng(41.13685999999999, -74.58309889999998),
          draggable: false,
          raiseOnDrag: false,
          icon: ' ',
          map: map, 
          labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-food"></i></div>',
          labelAnchor: new google.maps.Point(0, 0),
          labelClass: "labels" // the CSS class for the label
        });

    var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.13713142550872, -74.58225958049297),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size inline" style="background-color:#f0394d"><i class="de-icon-bell-alt" style="color:#FFF"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});
    
		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.1845151, -74.51910720000001),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size inline" style="background-color:#0d9a48"><i class="de-icon-home-1"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		
			
		/*var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.046617, -77.030567	),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.045857, -77.032538),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});	
		
		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.046053, -77.028732),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});	
			
		var marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.045363, -77.029939),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});	*/		
    	//marker.setMap( map );
		
		
		//INFO WINDOWS
		//=======================================================================================
		var ceremonyString = '<div>'+
		'<b>WEDDING CEREMONY</b>'+
    '<br/>137 Wheatsworth Rd.<br/>Hamburg, NJ 07419'+
    '<br/><a target="_blank" href="https://www.google.com/maps/dir//Ballyowen+Golf+Club,+137+Wheatsworth+Rd,+Hamburg,+NJ+07419/@41.1397653,-74.589412,2250m/data=!3m1!1e3!4m15!1m6!3m5!1s0x0:0x27a8a43b407d3381!2sBallyowen+Golf+Club!8m2!3d41.1368597!4d-74.5830998!4m7!1m0!1m5!1m1!1s0x89c314ce5c45faa9:0x27a8a43b407d3381!2m2!1d-74.5830989!2d41.13686">Get Directions</a>'+
    '</div>';
		
		var hotelString = '<div>'+
		'<b>MINERALS HOTEL</b>'+
    '<br/>2 Chamonix Dr, <br/>Vernon Township, NJ 07462'+
    '<br/><a target="_blank" href="https://www.google.com/maps/dir//2+Chamonix+Dr,+Vernon+Township,+NJ+07462/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c315f58c705e1d:0xae74768f11a5d3ef?sa=X&ved=0ahUKEwia0Yfeqe_NAhVGgx4KHetwD-wQwwUIHjAA">Get Directions</a>'+
    '</div>';

    var receptionString = '<div>'+
    '<b>COCKTAIL HOUR + RECEPTION</b>'+
    '<br/>Steps away from the ceremony site,<br/>'+
    'in the Ballyowen Pavilion'+
        '</div>';

 	 	var infowindow2 = new google.maps.InfoWindow({
      		content: ceremonyString
  		});
		
		var infowindow3 = new google.maps.InfoWindow({
      		content: hotelString
  		});
		
    var infowindow1 = new google.maps.InfoWindow({
          content: receptionString
      });
		
		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		//infowindow.open(map,marker1);
		
		//ON CLICK MARKER, OPEN INFO WINDOWS
		//=======================================================================================


    function closeInfoWindows(infowindow1,infowindow2,infowindow3){
      infowindow1.close();
      infowindow2.close();
      infowindow3.close();
    };

		google.maps.event.addListener(marker1, 'click', function() {
      closeInfoWindows(infowindow1,infowindow2,infowindow3);
  			infowindow1.open(map,marker1);
  		});

    google.maps.event.addListener(marker2, 'click', function() {
      closeInfoWindows(infowindow1,infowindow2,infowindow3);
        infowindow2.open(map,marker2);
      });

    google.maps.event.addListener(marker3, 'click', function() {
      closeInfoWindows(infowindow1,infowindow2,infowindow3);
        infowindow3.open(map,marker3);
      });

		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});
		
		google.maps.event.addListener(marker1, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker1);
  		});
		
		google.maps.event.addListener(marker2, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});*/
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
