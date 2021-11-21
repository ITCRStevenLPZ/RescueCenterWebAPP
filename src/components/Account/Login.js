import "./css/style.css";

function Login(props) {
  return (
    <div class="login-card">
      <h1>Log-in</h1>
      <br />
      <form>
        <input type="text" name="user" placeholder="Username" />
        <input type="password" name="pass" placeholder="Password" />
        <input
          type="submit"
          name="login"
          class="login login-submit"
          value="login"
        />
      </form>

      <div class="login-help">
        <a href="#">Forgot Password</a>
      </div>
    </div>
  );
}
export default Login;
