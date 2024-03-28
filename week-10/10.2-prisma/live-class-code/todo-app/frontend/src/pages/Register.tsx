import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Register = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center text-center">
      <h1 className="font-semibold mb-10">Register</h1>
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
              type="text"
              placeholder="Name"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
            />
          </label>

          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <TbMailFilled className="text-xl opacity-40" />
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

          <label className="w-full flex gap-2 items-center border-b-2">
            <span>
              <FaLock className="text-lg opacity-40" />
            </span>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
            />
          </label>

          <button>SIGN UP</button>

          <div>
            <p className="text-lg">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
