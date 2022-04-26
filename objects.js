class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login(){
    console.log(this.name, 'just logged in');
    return this;
  }
  logout(){
    console.log(this.name, 'just logged out');
    return this;
  }

  updateScore(){
    this.score++;
    console.log(this.name,"score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user){
    users = users.filter(u => u.email != user.email);
  }
}


var userOne = new User('Ryu', 'ryu@gmail.com');
var userTwo = new User('John', 'john@gmail.com');
var admin = new Admin('Tom','tom@gmail.com');

var users = [userOne, userTwo];

admin.deleteUser(userTwo);
console.log(users)