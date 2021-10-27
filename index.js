const template = document.createElement('template');
template.innerHTML = `
    <style> 
        nav{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        h1{
            color: blueviolet;
        }
        ul{
            list-style: none;
            display: flex;
            flex-direction: row;
        }
        li{
            padding: 0rem 1rem;
        }

    </style>
    <nav>
        <h1>Logo</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </nav>
`;

class WC_Header extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))       
        
    }
}
window.customElements.define('wc-header', WC_Header)