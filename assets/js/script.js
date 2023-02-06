window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.voltaTopo');
    scroll.classList.toggle('active', window.scrollY > 650);
  })
  
  function irTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  class MobileNavbar {
    constructor(mobileMenu, navList, topicos) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.topicos = document.querySelectorAll(topicos);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind();
    }
  
    animaLinks() {
      this.topicos.forEach((link) => {
        link.style.animation
          ? (link.style.aimation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
      });
    }
  
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.animaLinks();
    }
  
  
    addClickEvent() {
      this.mobileMenu.addEventListener('click', () => console.log("está funcionando"));
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  