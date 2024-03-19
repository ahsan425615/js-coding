function SetUsername(username){
    this.username = username
}
function createUser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password

}

const ahs = new createUser("ahsan", "ahsan@gmail.com", "123")
console.log(ahs);