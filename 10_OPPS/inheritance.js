class user{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.username=username
        this.password=password
        
    }
 }