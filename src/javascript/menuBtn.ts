export default class MenuBtn {
    private mobileMenu
    private elBtn;
    constructor(elBtn: HTMLButtonElement, mobileMenu ){
        this.elBtn = elBtn;
        this.mobileMenu = mobileMenu;
        this.initialEvents();
    }

    initialEvents = ()=>{
<<<<<<< HEAD
      if(){
        this.elBtn?.addEventListener('click', ()=>{
=======
        this.elBtn.addEventListener('click', ()=>{
>>>>>>> parent of 2aa96f5 (fix: fix deploy)


          if(this.mobileMenu.classList.contains('-translate-x-full')){
              this.mobileMenu.classList.remove('-translate-x-full');
              this.mobileMenu.classList.add('translate-x-0');
              this.elBtn.querySelector('i').classList.replace('fa-bars', 'fa-close');
          }else{
              this.mobileMenu.classList.add('-translate-x-full');
              this.mobileMenu.classList.remove('translate-x-0');
              this.elBtn.querySelector('i').classList.replace('fa-close', 'fa-bars');

          }

        });
      }

    }
}
