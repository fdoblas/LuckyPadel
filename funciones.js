$(document).on('pageshow', '#mapas', function(e, data) {
    $('#cuerpomapas').height(getRealContentHeight());
    // This is the minimum zoom level that we'll allow
   /* var minZoomLevel = 12;
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: new google.maps.LatLng(37.3825, -5.996389),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    */
  
    var myLatlng = new google.maps.LatLng(37.3825, -5.996389);
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var contentString = '<div id="infoEmpresa"><h4>Club Lucky Padel</h4><p>Calle Melancolía nº 7</p></div>'
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Mi EMPRESA"
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    
    
});

function getRealContentHeight() {
    var header = $.mobile.activePage.find("div[data-role='header']:visible");
    var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
    var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
    var viewport_height = $(window).height();
    var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
    if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
        content_height -= (content.outerHeight() - content.height());
    }
    return content_height;
}

window.addEventListener('load',function(){
   FastClick.attach(document.body); 
});