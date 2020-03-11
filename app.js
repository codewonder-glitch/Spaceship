class US_Ship{
    constructor(hull,firepower,accuracy){
    this.hull=hull;
    this.firepower=firepower;
    this.accuracy=accuracy;
    }
    attack=()=>
    {
        for(let i=currentAlien;i<6;i++)
        {
            console.log("US is attacking alien ship " +(i+1));
            
            if(Math.random()<=Aliens[i].accuracy)
            {
                console.log("%c U.S attacked alien " +(i+1)  +"successfully","font-size:15px;background:blue;");
                if(this.hull_calc(i)<=0)
                {
                console.log("%c Hooray!!!Alien ship" +(i+1) +" is destroyed","font-size:20px;color:red;");
                if(this.retreat()==1)
                {
                    console.log("%c Players went for retreat","font-size:20px;color:blue;")
                    return;
                }
                if(i===5)
                alert("Horay!!!! U.S army Won")
                }
                else i--;        
                }else{
                console.log("%c Alien ship " +(i+ 1) +" is going to attack"); 
                Aliens[i].attack(i);
                return;
            }
        }

    }
    retreat(){
        let action = "";
        action = prompt("Players need retreat", "Yes or No");   
        try{
            if(action.toLowerCase()=="yes")
            return 1;
            else
            return 0;
        }
        catch(err)
        {
            console.log("Please press yes or no");
        }
       
    }
    hull_calc(i){
        Aliens[i].hull=Aliens[i].hull-Aliens[i].firepower;
        return Aliens[i].hull;
    }
    
}
class Alien_Ship{
    constructor() {
    this.hull=Math.floor(Math.random()*3)+3;
    this.firepower=Math.floor(Math.random()*2)+2;
    this.accuracy=((Math.floor(Math.random() * 3) + 6) )/10;
    }
    attack(Aliegnno)
    {
     if(Math.random()<=us_Ship.accuracy)
        {
            console.log("%c Alien " +Aliegnno+ " attacked U.S successfully","font-size:15px;background:blue;");
        if(this.hull_calc()<=0)
            {
            console.log("%c U.S ship is destroyed","font-size:20px;color:red;");
            alert("U.S Army Lost")
            return;
            }
            else this.attack(Aliegnno);
        }else
        {
            currentAlien=Aliegnno;
            us_Ship.attack();
        }
   }
    hull_calc(){
        this.hull=this.hull-this.firepower;
        return this.hull;
    }
}
const Alien1= new Alien_Ship();
const Alien2= new Alien_Ship();
const Alien3= new Alien_Ship();
const Alien4= new Alien_Ship();
const Alien5= new Alien_Ship();
const Alien6= new Alien_Ship();
let Aliens=[Alien1,Alien2,Alien3,Alien4,Alien5,Alien6];
var currentAlien=0;
const us_Ship=new US_Ship(20,5,0.7);
 alert("War is starting....");
us_Ship.attack();



