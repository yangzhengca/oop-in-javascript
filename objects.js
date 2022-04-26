function User(name, email){
  this.name = name;
  this.email = email;
  this.online = false;

}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');

}

User.prototype.logout = function(){
  this.online = false;
  console.log(this.email, 'has logged out');

}

var userOne = new User('Ryu', 'ryu@gmail.com');
var userTwo = new User('John', 'john@gmail.com');

