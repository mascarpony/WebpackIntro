import "./style.scss";
import User from './user'

const user = new User('Luke', 'Skywalker');
document.getElementById("user").innerHTML = user.sayHi();