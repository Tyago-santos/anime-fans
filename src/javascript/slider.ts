export class Slider {
    private scrollX;
    private btnRight;
    private btnLeft;

    private countSlider;

    constructor(scrollX: HTMLElement, btnRight: HTMLButtonElement,  btnLeft: HTMLButtonElement ){
        this.scrollX = scrollX;
        this.btnRight =  btnRight;
        this.btnLeft =  btnLeft

        this.countSlider = 1
        this.initialEvents();
    }


    initialEvents(){
        
    this.btnRight?.addEventListener('click', () => {
        this.countSlider++
        this.scrollX.style.marginLeft = `-${150 * this.countSlider}px`; 
      
    });

    this.btnLeft?.addEventListener('click', () => {
        this.countSlider--
        if (this.countSlider < 1) {
            this.countSlider = 0
        }
        this.scrollX.style.marginLeft = `-${150 * this.countSlider}px`; 
        
    });
    }
    


}