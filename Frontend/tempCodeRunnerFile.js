let users = [
  {id: 1, name: "Ruthwik Topper"},
  {id: 2, name: "Adithya Topper"},
  {id: 3, name: "Siddartha Topper"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
// filter - returns array of all matching elements
let someUsers = users.filter(item => item.id < 4);
alert("Toppers trio ",someUsers); // 2