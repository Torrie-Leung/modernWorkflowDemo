const users = [
  {name: 'chimp', premium: true },
  {name: 'chick', premium: false },
  {name: 'yoshi', premium: true },
  {name: 'bender', premium: true },
  {name: 'toad', premium: false }
];

const getPremUsers = (users) =>{
  return users.filter(user => user.premium);
};
//only have one default export per file
export { users as default, getPremUsers};