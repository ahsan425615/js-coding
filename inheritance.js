class User {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    
    }

    addcourse(){
        console.log(`A new course added by ${this.username}`);
    }


}
const ahs = new  Teacher("AHSAN", "teacher@gmail.com", "12345")
ahs.addcourse()









