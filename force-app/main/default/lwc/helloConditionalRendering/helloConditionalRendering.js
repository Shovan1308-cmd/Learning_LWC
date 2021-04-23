import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible=false
    password

    handleClick(){
        this.isVisible=true
    }
    changeHandler(event){
        this.password=event.target.value
    }
    get otpGenerate(){
        if(this.password==='Shovan@123'){
            return 'Alpha1234'
        }
    }
}