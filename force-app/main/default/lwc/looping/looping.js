import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    trainList=["Tamilnadu Express","Kerala Express","Karnataka Express","Goa Express","Andhra Pradesh Express","Telangana Express",
"Maharashtra Express"]

airlineList=[
    {
        id:"6E 597",
        name:"Indigo",
        source:"Mumbai",
        destination:"Hyderabad"
    },
    {
        id:"AI 787",
        name:"Air India",
        source:"Kolkata",
        destination:"Delhi"
    },
    {
        id:"AZ 574",
        name:"Air Asia",
        source:"Mumbai",
        destination:"Chennai"
    },
    {
        id:"SG 626",
        name:"Spice Jet",
        source:"Imphal",
        destination:"Guwahati"
    }
]
}