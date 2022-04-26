class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  login(){
    console.log(this.name, 'just logged in');
  }
  logout(){
    console.log(this.name, 'just logged out');
  }

}

var userOne = new User('Ryu', 'ryu@gmail.com');

userOne.login()