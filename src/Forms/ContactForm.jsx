import React, { useState } from "react";
import { z } from "zod";
import TextField from "../Components/TextField";
import SelectTag from "../Components/SelectTag";
import { contactFormSchema } from "../Schema/Schema";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const ContactForm = () => {
  const savedTheme = localStorage.getItem("theme");
  const [toastMessage, setToastMessage] = useState("");
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true); // Start the loading state

    try {
      contactFormSchema.parse(formValues); // Validate form values
      const res = await axios.post(
        "https://digital-empires-db-production.up.railway.app/digitalempires/contactus",
        formValues
      );
      console.log("🚀 ~ handleSubmit ~ res:", res);

      if (res.status === 200) {
        toast.success(res.data.message);
        Navigate("/");
      }
    } catch (err) {
      toast.success(err?.res?.data.message);
      if (err instanceof z.ZodError) {
        const fieldErrors = err.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(fieldErrors);
      } else {
        setToastMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false); // Always stop loading after handling
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
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="w-8 h-8 border-4 border-t-white border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
