import React, { useContext } from "react";
import registerLottie from "../../assets/Lotties/newregister.json";
import LottieWrapper from "lottie-react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Lottie = LottieWrapper.default || LottieWrapper;

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.mail.value;
    const password = form.password.value;
    console.log("Attempting Registration with:", email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-gray-50">
      <div className="hero-content flex-col lg:flex-row w-full max-w-5xl p-6">
        <div className="text-center p-4 lg:w-1/2 lg:order-1 order-2">
          <Lottie
            style={{ width: "350px", height: "350px", margin: "0 auto" }}
            animationData={registerLottie}
            loop={true}
          />
        </div>

        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl border border-gray-200 lg:w-1/2 lg:order-2 order-1">
          <div className="card-body p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
              Register Now!
            </h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset space-y-4">
                <label className="">
                  <span className="label-text font-medium text-gray-700">
                    Email Address
                  </span>

                  <input
                    type="email"
                    className="input input-bordered w-full mt-1 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    name="mail"
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <label className="">
                  <span className="label-text font-medium text-gray-700">
                    Password
                  </span>

                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full mt-1 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    placeholder="Minimum 6 characters"
                    required
                  />
                </label>
                <div className="text-right">
                  <a className="link link-hover text-sm text-gray-500 hover:text-violet-600">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white border-none text-lg font-semibold transition duration-200"
                >
                  Register
                </button>
              </fieldset>
            </form>

            <div className="text-center mt-6 text-sm text-gray-600">
              Already have an account?
              <Link
                to="/signIn"
                className="link link-hover font-bold text-violet-600 hover:text-violet-800 ml-1"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
