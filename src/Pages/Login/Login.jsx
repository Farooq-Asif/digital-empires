import React from "react";
import LoginForm from "../../Forms/LoginForm";
import Footer from "../../Footer/Footer";
import TopLoginBar from "../../Components/TopLoginBar";
import img from "../../Assets/Images/curved9.jpg";

const Login = () => {
  return (
    <>
      <TopLoginBar />
      <main className="bg-[#f8f9fa] w-full min-h-screen p-3">
        <div
          className="bg-cover bg-center bg-no-repeat h-80 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(310deg, rgba(20, 23, 39, 0.6), rgba(58, 65, 111, 0.6)), url(${img})`,
          }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white">Welcome</h1>
            <p className="text-white mt-5">
              We're glad to have you here. Please log in to continue.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mt-16">
          <div className="w-[30rem] bg-white rounded-xl p-7">
            <h2 className="font-bold text-xl text-center">Sign In</h2>
            <LoginForm />
            {/* <div className="flex items-center justify-center my-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <p className="mx-4 text-gray-500 text-sm">Or</p>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div> */}
           
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
