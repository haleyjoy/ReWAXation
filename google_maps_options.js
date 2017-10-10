function initializeGoogleMap()
{
    $(document).foundation();
    var latlng = new google.maps.LatLng(28.561287,-81.444465);
    var latlng2 = new google.maps.LatLng(28.507561,-81.482359);

    var myOptions =
    {
        zoom: 13,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions2 =
    {
        zoom: 13,
        center: latlng2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);


    var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map,
        title:"Barnett Park"
   });

    var myMarker2 = new google.maps.Marker(
    {
        position: latlng2,
        map: map2,
        title:"Bill Fredrick Park at Turkey Lake"
    });


}