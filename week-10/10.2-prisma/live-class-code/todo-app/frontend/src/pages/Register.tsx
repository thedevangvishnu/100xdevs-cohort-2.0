import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as requests from "../requests";

export type RegisterFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(requests.register, {
    onSuccess: async () => {
      console.log("Register successful");
      await queryClient.invalidateQueries("token");
      navigate("/");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();

  const onSubmit = (data: RegisterFormType) => {
    mutate(data);
  };

  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center text-center">
      <h1 className="font-semibold mb-10">Register</h1>
      <div className="w-full md:max-w-[500px] px-8">
        <form
          action=""
          className="w-full flex flex-col gap-4 items-center justify-center"
        >
          <div className="flex flex-col gap-2">
            <label className="w-full flex gap-2 items-center border-b-2">
              <span>
                <FaUser className="text-lg opacity-40" />
              </span>
              <input
                type="text"
                placeholder="Firstname"
                className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
                {...register("firstName", {
                  required: "This field is required!",
                })}
              />
            </label>
            <div className="h-3 w-full self-start text-left">
              {errors.firstName && (
                <p className="text-red-500 italic">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="w-full flex gap-2 items-center border-b-2">
              <span>
                <FaUser className="text-lg opacity-40" />
              </span>
              <input
                type="text"
                placeholder="Lastname"
                className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
                {...register("lastName", {
                  required: "This field is required!",
                })}
              />
            </label>
            <div className="h-3 w-full self-start text-left">
              {errors.lastName && (
                <p className="text-red-500 italic">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="w-full flex gap-2 items-center border-b-2">
              <span>
                <TbMailFilled className="text-xl opacity-40" />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
                {...register("email", {
                  required: "This field is required!",
                })}
              />
            </label>
            <div className="h-3 w-full self-start text-left">
              {errors.email && (
                <p className="text-red-500 italic">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="w-full flex gap-2 items-center border-b-2">
              <span>
                <FaLock className="text-lg opacity-40" />
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
                {...register("password", {
                  required: "This field is required!",
                })}
              />
            </label>

            <div className="h-3 w-full self-start text-left">
              {errors.password && (
                <p className="text-red-500 italic">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="w-full flex gap-2 items-center border-b-2">
              <span>
                <FaLock className="text-lg opacity-40" />
              </span>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full py-3 px-2 border-none outline-none bg-transparent text-white text-xl"
                {...register("confirmPassword", {
                  required: "This field is required!",
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Passwords do not match!";
                    }
                  },
                })}
              />
            </label>

            <div className="h-3 w-full self-start text-left">
              {errors.confirmPassword && (
                <p className="text-red-500 italic">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="mt-2"
          >
            {isLoading ? "Loading..." : "SIGN UP"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-lg">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
