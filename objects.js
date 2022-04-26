function User(name, email){
  this.name = name;
  this.email = email;
  this.online = false;
  this.login = function () {
    console.log(this.email, 'has logged in')
  }
}

var userOne = new User('Ryu', 'ryu@gmail.com');
var userTwo = new User('John', 'john@gmail.com');


console.log(userOne)