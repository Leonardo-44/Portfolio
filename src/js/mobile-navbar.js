class MobileNavbar {
    constructor(mobileMenuSelector, menuSelector, menuLinksSelector) {
        this.mobileMenu = document.querySelector(mobileMenuSelector);
        this.menu = document.querySelector(menuSelector);
        this.menuLinks = document.querySelectorAll(menuLinksSelector);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.menuLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;


    });
    }

    handleClick(){
        this.menu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
     

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }   

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobileMenu",
    ".menu",
    ".menuLinks li"
);

mobileNavbar.init();
