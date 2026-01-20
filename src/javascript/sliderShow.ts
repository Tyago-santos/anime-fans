export default class SliderShow {
    private containerSlider;
    private initialValue : number;
    constructor(containerSlider:HTMLDivElement) {
        this.containerSlider = containerSlider;
        this.initialValue = 0;
        setInterval(this.setTimeSlider, 5000); 
    }

    setTimeSlider =  ()=>{
        this.initialValue++
        if (this.initialValue > 3) {
            this.initialValue = 0
        }
        this.containerSlider.style.transform  = `translateX(-${this.initialValue}00%)`; 
        console.log(this.initialValue);
        
    }

    

}