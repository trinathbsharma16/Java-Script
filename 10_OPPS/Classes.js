//ES6
class User{
    constructor(username,password,email){
        this.username=username
        this.password=password
        this.email=email
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return`${this.username.toUpperCase()}`
    }
}

const newuser=new User('Trinath123',"123","Trinath@1234")
console.log(newuser);
console.log(newuser.encryptPassword());
console.log(newuser.changeusername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());