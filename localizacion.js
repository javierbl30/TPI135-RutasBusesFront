/* class Localizacion extends HTMLElement {

    constructor(){
        super();
    }
    
    connectedCallback(){
       const shadow = this.attachShadow({mode:'open'})
       const contenedor = document.createElement('div');
       contenedor.id = 'map-container';
       let area = document.createElement('area');
       
        
        contenedor.appendChild(area);
        shadow.appendChild(contenedor)    
        
        function initMap(){
            
        
                const options = {
                    center: {
                        lat: ubicacion.latitude,
                        lng: ubicacion.longitude
                    },
                    zoom: 15 
                }
        
                var map = document.getElementById('map');
        
                const mapa = new google.maps.Map(map, options);

        
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude
                });
                }else{
                    alert("El navegador no soporta geolocalización")
                }
      }
        }

        
    
    }
    window.customElements.define('ruta8-map', Localizacion); */ 