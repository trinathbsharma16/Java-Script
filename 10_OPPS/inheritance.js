class user{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username) // extends and super are the keyword which u need to add to  get the properties of the parent 
        this.email=email
        this.username=username
        this.password=password
        
    }
    addcourse(){
        console.log(`New course was added by${this.username}`);
        
    }
 }

const newcourse=new teacher(" physics",'trinath@1234',"125")
newcourse.addcourse()

const newcourse2=new user("Trinath")
newcourse2.logMe()

console.log(newcourse instanceof teacher);
console.log(newcourse instanceof user);
