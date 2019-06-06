 class Localizacion extends HTMLElement {

    constructor(){
        super();
    }
    
    connectedCallback(){
       const sd = this.attachShadow({ mode:'open' });
       //damos el estilo del mapa, en este caso el tamaño que tendrá
       let style = `<style>
        #map{
            width: 600px;
            height: 600px; 
        }
        </style>`

       sd.innerHTML = style;
      //Contenedor del mapa
       const contenedor = document.createElement('div');
       contenedor.id = 'map';

     //  let mapa = document.createElement('map');
     //  mapa.id = 'mapa';
      
       //Función para crear el mapa
       let initMap = function(){

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                    const options = {
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        zoom: 15 
                    }

                    var map = document.getElementById('map');
       
            
                    contenedor = new google.maps.Map(map, options);
               // this.latitude = position.coords.latitude;
               // this.longitude = position.coords.longitude;
            
               // callback();
                });
                }else{
                    alert("El navegador no soporta geolocalización")
                } 
    
           // callback();
            //initMap();

    
        }
        
      //  contenedor.appendChild(mapa);
        sd.appendChild(contenedor)    
    
    }
    
    }
    window.customElements.define('mapa-ruta', Localizacion);
    export default Localizacion;  