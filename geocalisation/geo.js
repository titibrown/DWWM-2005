// Vérifier que la geoclatisation soit disponible 

if ('geolocation' in navigator) {

    // getCurrentPosition() ou watchPosition() 
    // success; error, options


let options = {
    en
}





    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

    }, error);

    function error() {

    };

}
else {
    alert('test');
}