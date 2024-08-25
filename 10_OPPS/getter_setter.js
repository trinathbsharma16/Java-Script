class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get passowrd(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password=val.toUpperCase()
    }
}
const trinath=new user("trinath@gmail.com","Tri123")
console.log(trinath.passowrd);

// getter is used to get values from outside the class
// setter is used to set the value into the class

// Maximum call stack size exceed is an error that occurs when beaucse contructer is being used to set the value and at the same 
// instace setter is also being used to set the vlaues
