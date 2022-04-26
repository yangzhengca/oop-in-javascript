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

function Admin(...args){
  // inheritance User
  User.apply(this, args);

  this.role = 'super admin';
}

// inheritance prototype from User
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
  users = users.filter( u => u.email != user.email);
}

var userOne = new User('Ryu', 'ryu@gmail.com');
var userTwo = new User('John', 'john@gmail.com');
var admin = new Admin('Tom', 'tom@gmail.com');

var users = [userOne, userTwo, admin];

console.log(admin)