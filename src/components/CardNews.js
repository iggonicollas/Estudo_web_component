class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const type = document.createElement("span");
        type.textContent = this.getAttribute("type") || "By Anonymous";
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(type);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/defaultphoto.png";
        newsImage.alt = "default-photo";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `

            .card{
            width: 50%;    
            -moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.67);
            -webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.67);
            box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.67);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            }
            
            .card_left{
            display: flex;    
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            padding-right: 10px;
            }
            
            .card_left > span {
            font-weight: bold;
            }
            
            .card_left > a {
            margin-top: 10px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            }
            
            .card_left > p {
            color: gray;
            margin-top: 10px;
            }

            .card_right{
            justify-content: center;
            display: flex;
                
            }
                
            .card_right > img {
            height: 150px;    
            }
            
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);