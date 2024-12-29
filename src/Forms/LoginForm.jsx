import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/user/actions/actionsCreators";
import TextField from "../Components/TextField";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const{isLoading}=useSelector((state)=>state.user)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      dispatch(userLogin(formValues, navigate));
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white  rounded-lg p-6 w-full">
      
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <TextField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <Link to="/forgot-password">
            <p className="text-primary cursor-pointer font-semibold w-fit mt-3 text-sm">
              Forgot Password?
            </p>
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white border border-white py-2 rounded-lg hover:bg-gray-900 transition duration-200 flex items-center justify-center"
          >
            {isLoading ? <Spinner/> : 'Login'}
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
