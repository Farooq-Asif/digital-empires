import React, { useState } from "react";
import TextField from "../Components/TextField";
import SelectTag from "../Components/SelectTag";
import { contactFormSchema } from "../Schema/Schema";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../store/recentnews/actions/actionsCreators";
const ContactForm = () => {
  const savedTheme = localStorage.getItem("theme");
  const{isLoading}=useSelector((state)=>state.news)
  const aboutOptions = [
    { value: "i'm a merchant.", label: "i'm a merchant." },
    { value: "i'm a creator.", label: "i'm a creator." },
    { value: "i'm a shopper.", label: "i'm a shopper." },
  ];
  const countryOptions = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "India", label: "India" },
    { value: "Englan.", label: "England" },
  ];

  const helpWithOptions = [
    {
      value: "Something else (Please explain in the description below)",
      label: "Something else (Please explain in the description below)",
    },
    {
      value: "Interest in brand collaboration",
      label: "Interest in brand collaboration",
    },
    { value: "Promotion opportunities", label: "Promotion opportunities" },
    {
      value: "Interest in Favely influencer marketplace",
      label: "Interest in Favely influencer marketplace",
    },
  ];

  const initialValues = {
    name: "",
    email: "",
    message: "",
    country: "",
    companyUrl: "https://",
    user_type: "",
    topic: "",
    countryOptions: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
const Dispatch=useDispatch()
const [showGreenTick, setShowGreenTick] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Validate form values
      contactFormSchema.parse(formValues);
  
      // Dispatch the contact form action
      Dispatch(contactUs(formValues));
  
      // Reset the green tick state and display it after 2 seconds
      setShowGreenTick(false);
      setTimeout(() => {
        setShowGreenTick(true);
  
        // Hide the green tick after 10 seconds
        setTimeout(() => {
          setShowGreenTick(false);
        }, 10000);

      }, 2000);
      setFormValues(initialValues)

    } catch (err) {
      // Handle validation errors
      const validationErrors = {};
      err.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
      toast.error("All Fields Are Required");
    }
  };
  

  return (
    <div className="max-w-3xl xs:mx-5 sm:mx-5 md:mx-auto lg:mx-auto my-20">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className={`space-y-2 flex flex-col ${
          savedTheme === "dark" &&
          "bg-white text-black p-7 border-r-10 rounded-lg"
        }`}
      >
        <SelectTag
          label="Tell Us About You"
          options={aboutOptions}
          name="user_type"
          onChange={handleChange}
          value={formValues.user_type}
          errors={errors.user_type}
        />

        <SelectTag
          label="What can we help you with?"
          options={helpWithOptions}
          name="topic"
          onChange={handleChange}
          value={formValues.topic}
          errors={errors.topic}
        />
        <SelectTag
          label="Country"
          options={countryOptions}
          name="country"
          onChange={handleChange}
          value={formValues.country}
          errors={errors.country}
        />

        <TextField
          label="Full Name"
          name="name"
          type="text"
          className="px-2 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm  focus:border-black  sm:text-sm"
          placeholder="Your full name"
          value={formValues.name}
          onChange={handleChange}
          errors={errors.name}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          className="px-2 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-black   sm:text-sm"
          placeholder="you@example.com"
          value={formValues.email}
          onChange={handleChange}
          errors={errors.email}
        />

        <TextField
          label="Personal Website (optional)"
          name="companyUrl"
          type="text"
          className="px-2 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-black  sm:text-sm"
          placeholder="https://yourcompany.com"
          value={formValues.companyUrl}
          onChange={handleChange}
          errors={errors.companyUrl}
        />

        <label htmlFor="message" className="block text-sm font-medium">
          Describe your issue or question
        </label>
        <textarea
          name="message"
          rows="4"
          className="px-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-black sm:text-sm"
          placeholder="Write your message here..."
          value={formValues.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}

        <div>
          <button
            type="submit"
            className={`px-5 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent ${savedTheme==='dark' ? 'bg-[#F2F2F1]  text-black border border-black':'bg-black text-white border border-white'}`}
          >
            {isLoading ? (
        // Spinner
        <div className="w-5 h-5 border-4 border-t-white border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      ) : showGreenTick ? (
        // Green Tick
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-green-500 transition-all duration-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <span>Submit</span>
      )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
