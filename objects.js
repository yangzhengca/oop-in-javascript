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

var userOne = new User('Ryu', 'ryu@gmail.com');
var userTwo = new User('John', 'john@gmail.com');

userOne.login().updateScore().updateScore().logout()

// userOne.updateScore().updateScore()

// userTwo.updateScore()