import { FaChartBar } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}

        <div className="flex justify-center mb-12">
          <Link to="/" className="flex items-center gap-3">
            <FaChartBar className="text-2xl text-slate-900" />
            <span className="text-3xl font-semibold text-slate-900">
              Rank Pilot
            </span>
          </Link>
        </div>

        {/* Card */}

        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-slate-900">
              Welcome back
            </h1>

            <p className="text-gray-500 mt-3">
              Sign in to your Rank Pilot account
            </p>

          </div>

          {/* Form */}

          <form className="mt-10 space-y-6">

            {/* Email */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <div className="flex items-center border border-gray-200 rounded-xl px-4 h-14">

                <FiMail className="text-gray-400 text-lg" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full ml-3 outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <div className="flex items-center border border-gray-200 rounded-xl px-4 h-14">

                <FiLock className="text-gray-400 text-lg" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full ml-3 outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Forgot Password */}

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              Sign In
            </button>

          </form>

        </div>

        {/* Bottom */}

        <p className="text-center text-gray-500 mt-8">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-slate-900 hover:text-blue-600"
          >
            Sign up
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;