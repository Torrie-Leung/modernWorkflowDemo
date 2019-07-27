import {styleBody,addTitle} from './dom';
//when we're using modules, each file has its own unique scope
//must put an export keyword in front of the things you want to export and import them using {}
import users,{ getPremUsers } from './data';
console.log('index file');

styleBody();
addTitle("It's fun to stay YMCA~~");
addTitle('Hell from the other side~~');

console.log(users);
const premUsers = getPremUsers(users);
console.log(premUsers);