$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});


            // YANDEX MAPS


ymaps.ready(init);
function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [55.707618, 37.697415],
        zoom: 16
    }); 
    
    var myPlacemark = new ymaps.Placemark([55.707618, 37.697415], {
        hintContent: 'ул. Южнопортовая, дом 9',
        balloonContent: 'Панцирь'
    });
    
    myMap.geoObjects.add(myPlacemark);
}


