import React, { useContext } from "react";
import TextField from "../Components/TextField";
import SelectTag from "../Components/SelectTag";
const ContactForm = () => {
    const savedTheme = localStorage.getItem("theme");
  const aboutOptions = [
    { value: "Customer", label: "Customer" },
    { value: "Partner", label: "Partner" },
    { value: "Other", label: "Other" },
  ];
  const helpWithOptions = [
    { value: "Customer", label: "Customer" },
    { value: "Partner", label: "Partner" },
    { value: "Other", label: "Other" },
  ];
  return (
    <div className="max-w-3xl   xs:mx-5 sm:mx-5 md:mx-auto lg:mx-auto my-20 ">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form className={`space-y-2 flex flex-col ${savedTheme === 'dark' && 'bg-white text-black p-7 border-r-10 rounded-lg'}`}>
        <SelectTag
          label=" Tell us about you"
          options={aboutOptions}
          name="about"
        />

        <SelectTag
          label=" What can we help you with?"
          options={helpWithOptions}
          name="helpWith"
        />

        <TextField
          label=" Full Name"
          id="name"
          name="fName"
          type="text"
          className=" px-2  py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Your full name"
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          className="px-2  py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="you@example.com"
        />

        <TextField
          id="website"
          name="CompanyWeb"
          type="url"
          className="px-2  py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="https://yourcompany.com"
        />

        <label htmlFor="message" className="block text-sm font-medium">
          Describe your issue or question
        </label>
        <textarea
          id="message"
          rows="4"
          className="px-2  mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Write your message here..."
        ></textarea>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`px-4 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 
                bg-black text-white
             `}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
