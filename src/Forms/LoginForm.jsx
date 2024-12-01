import React, { useState } from "react";
import TextField from "../Components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/user/actions/actionsCreators";
import { useNavigate } from "react-router";
import Spinner from "../Components/Spinner";

const LoginForm = () => {
  const { isLoading } = useSelector((state) => state.user);
  const [formValues, setFormvalues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(userLogin(formValues, navigate, setFormvalues));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">
          Admin Login Panel
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <TextField
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <TextField
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white border border-white py-2 rounded-lg hover:bg-gray-900 transition duration-200 flex items-center justify-center"
          >
            {isLoading ? <Spinner /> : "Login"} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
