import { Link } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="w-full max-w-md">

        {/* Logo */}

        <div className="flex justify-center mb-10">
          <Link to="/" className="flex items-center gap-2">
            <FaChartBar className="text-xl text-slate-900" />
            <span className="text-3xl font-semibold text-slate-900">
              Rank Pilot
            </span>
          </Link>
        </div>

        {/* Card */}

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-slate-900">
              Welcome back
            </h1>

            <p className="mt-2 text-gray-500">
              Create an Rank Pilot account
            </p>

          </div>

          {/* Form */}

          <form className="mt-8 space-y-5">

            {/* Name */}

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Name
              </label>

              <div className="flex items-center h-14 rounded-xl border border-gray-200 px-4">

                <FiUser className="text-gray-400 text-lg" />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full ml-3 outline-none bg-transparent"
                />

              </div>
            </div>

            {/* Email */}

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Email
              </label>

              <div className="flex items-center h-14 rounded-xl border border-gray-200 px-4">

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
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Password
              </label>

              <div className="flex items-center h-14 rounded-xl border border-gray-200 px-4">

                <FiLock className="text-gray-400 text-lg" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full ml-3 outline-none bg-transparent"
                />

              </div>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition duration-300"
            >
              Create Account
            </button>

          </form>

        </div>

        {/* Bottom */}

        <p className="mt-8 text-center text-gray-500">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-slate-900 hover:text-blue-600 transition"
          >
            Sign in
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Register;