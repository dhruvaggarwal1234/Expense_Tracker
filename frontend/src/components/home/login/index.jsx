import log_img from "../../../assets/login/login_page.jpg";

const Login = () => {
  return (
    <div className="login_container  justify-between">
      <div className="left_side w-150 h-150">
        <img src={log_img} alt="Login Illustration"  className=" w-150 h-150"/>
      </div>
      <div className="right_side">
         <div><h1>Login Page</h1></div>
      </div>
    </div>
  );
};

export default Login;
