class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password =  password;
    }
     encryptpassword(){
        return `${this.password}abc`
     }
     changeUsername(){
        return `${this.username.toUpperCase()}`
     }


}
const ahs = new User("ahsan", "ahsan@mail.com", "123")
console.log(ahs.encryptpassword());
console.log(ahs.changeUsername());


// Behind the scene

function User(uname, email, password){
    this.username = this.username;
    this.email = email;
    this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}ahs`
}
User.prototype.changeUsername = function(){
    return `${this.uname.toUpperCase()}`
}
const mal = new User("ahsan_Malik", "abc@gmail.com", "12345")
console.log(mal.encryptpassword());
console.log(mal.changeUsername());







