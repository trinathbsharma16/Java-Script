class user{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
 /*static */  createId(){
      return Math.random()
    }


}
const trr=new user("Trinath")
console.log(trr.createId());



class teacher extends  user{
    constructor(username,email){
        super(email)
        this.username=username
    }
}

const iphone=new teacher("iphone","user@gamil.com")
console.log(iphone);
