export function Login() {
    console.log("Login");
    return (
    <>
      <h1>Login</h1>
      <input id="username"></input>
        <label htmlFor="username" ></label>

      <input id="password"></input>
        <label htmlFor="password"></label>

      <button>Log In</button>

      <a href="">Register</a>
    </>
    );
  }