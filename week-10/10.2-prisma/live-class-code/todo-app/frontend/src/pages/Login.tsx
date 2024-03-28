import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center text-center">
      <h1 className="font-semibold mb-10">Login</h1>
      <div className="w-full md:max-w-[500px] px-8">
        <form
          action=""
          className="w-full flex flex-col gap-6 items-center justify-center"
        >
          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <FaUser className="text-lg opacity-40" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
            />
          </label>

          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <FaLock className="text-lg opacity-40" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
            />
          </label>

          <button>SIGN IN</button>

          <div>
            <p className="text-lg">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
