class Menu extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        const shadow = this.attachShadow({ mode: 'open' });

        //estilo de la lista
        let style = `<style>
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        
        li {
            padding: 8px;
            margin-bottom: 7px;
            background-color:  #9ccb16 ;
            color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 2), 0 1px 2px rgba(0, 0, 0, 0.24);
            text-align: center;
        }
        
        li:hover {
            background-color: #0099cc;
        }
        a {
            color: white;
            text-decoration: none;
        }
        </style>`

        shadow.innerHTML = style;


        //Opciones del menu
        let menu = document.createElement('ul');

        let listBuses = document.createElement('li');
        let aBuses = document.createElement('a');
        aBuses.setAttribute('href', './index.html');
        aBuses.innerText = 'BUSES';
        listBuses.appendChild(aBuses);
        menu.appendChild(listBuses);


        let listEmpresas = document.createElement('li');
        let aEmpresas = document.createElement('a');
        aEmpresas.setAttribute('href', './empresas.html');
        aEmpresas.innerText = 'EMPRESAS';
        listEmpresas.appendChild(aEmpresas);
        menu.appendChild(listEmpresas);



        shadow.appendChild(menu);

    }
}

customElements.define('menu-seleccion', Menu);
export default Menu;