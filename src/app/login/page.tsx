import React from "react";
import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-md border border-gray-300 rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <a href="/">
              <Image src="/images/logo.png" alt="logo" width={120} height={32} className="w-28 md:w-32" />
            </a>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Login</h2>
            <p className="text-gray-500 text-sm">Sign in to your account</p>
          </div>
          <form action="#" method="POST">
            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                <input name="email" type="email" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter your email" required />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                <input name="password" type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter your password" required />
              </div>
            </div>
            <button type="submit" className="w-full mt-6 bg-green-900 text-white font-semibold py-3 rounded-full hover:bg-green-800 transition-all">Login</button>
            <p className="text-slate-600 text-sm mt-6 text-center">Don't have an account? <a href="/register" className="text-blue-600 font-medium hover:underline ml-1">Sign up</a></p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
