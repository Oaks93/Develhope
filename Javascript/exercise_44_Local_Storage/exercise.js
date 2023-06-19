const user = {
  id: 1,
  name: "John",
  age: 25,
};
function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

saveUser(user);

function recoverUserFromLocalStorage() {
  const userString = localStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    return console.log(user);
  } else {   
    return console.log('User not found.') }
}
recoverUserFromLocalStorage()