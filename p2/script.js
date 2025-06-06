// script.js
const showLogin = () => {
  let str = `
    <div class='App-Container'>
      <h1>Login Form</h1>
      <input type="text" id="txtEmail" placeholder="Email" />
      <input type="password" id="txtPass" placeholder="Password" />
      <button onclick="login()">Log In</button>
      <button onclick="showRegister()">Create Account</button>
    </div>
  `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <div class='App-Container'>
      <h1>Register Form</h1>
      <input type="text" id="txtName" placeholder="Full Name" />
      <input type="text" id="txtEmail" placeholder="Email" />
      <input type="password" id="txtPass" placeholder="Password" />
      <button onclick="register()">Register</button>
      <button onclick="showLogin()">Back to Login</button>
    </div>
  `;
  root.innerHTML = str;
};

const login = () => {
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPass").value;
  alert(`Logging in with\nEmail: ${email}\nPassword: ${pass}`);
};

const register = () => {
  const name = document.getElementById("txtName").value;
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPass").value;
  alert(`Registering\nName: ${name}\nEmail: ${email}\nPassword: ${pass}`);
};
