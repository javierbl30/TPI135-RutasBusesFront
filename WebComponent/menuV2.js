class MenuV2 extends HTMLElement{

    constructor(){
        super();
                
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode:'open'});

        let style = `<style>
        
            #minav ul {
                list-style: none;
                padding: 0;
            }
            #minav li {
                line-height: 3rem;
                position: relative;
            }
            .menu ul {
                position: absolute;
            }
            #minav a {
                color: #ddd;
                display: block;
                padding: 0 4.4em;
                text-decoration: none;
                transition: .4s;
            }
            #minav a:hover {
                color: #000;
                background: rgb(243, 235, 235);
            }
            #minav li ul {
                display: none;
            }
            #minav li:hover>ul {
                display: block;
            }
            /*Primer nivel del menu*/
            .menu {
                background: #333;
                display: table;
                width: 100%;
            }
            .menu>li {
                float: left;
            }
            /*Segundo nivel del menu*/
            #minav li li {
                background: #222;
                width: 210px;
                overflow: hidden;
                transition: all .5s;
            }
            #minav li:hover>ul>li {
                max-height: 1000px;
                overflow: visible;
            }
            .menu>li>ul {
                top: 100%;
            }
            /*Tercer nivel del menu*/
            .menu ul ul {
                left: 100%;
                top: 0;
            }
        
        
        </style>`

        shadow.innerHTML = style; 

        let template=document.getElementById('menu');
		let templateContent=template.content;
		var clone=document.importNode(templateContent, true);
		shadow.appendChild(clone);

        //menu
        let nav=document.createElement('nav');
        nav.setAttribute('id', 'minav')
        let ulMenu=document.createElement('ul')
        ulMenu.setAttribute('class', 'menu');
        nav.appendChild(ulMenu);

        let listMenuBuses=document.createElement('li');
        let aMenuBuses=document.createElement('a');
        aMenuBuses.setAttribute('href','#');
        aMenuBuses.innerText='MENU';
        listMenuBuses.appendChild(aMenuBuses);

        let ulBuses=document.createElement('ul');
        let listBuses=document.createElement('li');
        let aBuses=document.createElement('a');
        aBuses.setAttribute('href','./index.html');
        aBuses.innerText='BUSES';
        listMenuBuses.appendChild(aBuses);
        ulBuses.appendChild(listBuses);
     

        let listEmpresas=document.createElement('li');
        let aEmpresas=document.createElement('a');
        aEmpresas.setAttribute('href','./empresas.html');
        aEmpresas.innerText='EMPRESAS';
        listEmpresas.appendChild(aEmpresas);
        ulBuses.appendChild(listEmpresas);

        let listRutas=document.createElement('li');
        let aRutas=document.createElement('a');
        aRutas.setAttribute('href','./rutas.html');
        aRutas.innerText='RUTAS';
        listRutas.appendChild(aRutas);
        ulBuses.appendChild(listRutas);

        listMenuBuses.appendChild(ulBuses);
        ulMenu.appendChild(listMenuBuses);


        shadow.appendChild(nav);

     }
}

customElements.define('menu-v2', MenuV2);
export default MenuV2;