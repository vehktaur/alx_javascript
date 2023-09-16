function welcome(fName, lName) {
  const firstName = fName;
  const lastName = lName;

  const fullName = `${firstName} ${lastName}`;
  function displayFullName() {
    alert(`Welcome ${fullName}`);
  }
  displayFullName();
}
