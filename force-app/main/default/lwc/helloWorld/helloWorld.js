import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /** Data Binding Example */
    fullName="Shovan"
    courseEnrolled="aura"

    changeCourse(event){
        this.courseEnrolled=event.target.value;
    }

   /** Track property */  
  @track address={
        city :'Kolkata',
        postalcode :700153,
        country :'India'
    }
    changeCity(event){
        this.address.city=event.target.value
    }
    /** Getters in LWC */
    users=["john","shovan","nikhil"]
    num1=10
    num2=20

    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiply(){
        return this.num1*this.num2
    }
}