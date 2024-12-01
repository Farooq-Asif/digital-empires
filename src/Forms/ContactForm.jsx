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
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo (Congo-Brazzaville)", label: "Congo (Congo-Brazzaville)" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czechia (Czech Republic)", label: "Czechia (Czech Republic)" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Eswatini (fmr. Swaziland)", label: "Eswatini (fmr. Swaziland)" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Greece", label: "Greece" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    { value: "Holy See", label: "Holy See" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Laos", label: "Laos" },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libya", label: "Libya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mexico", label: "Mexico" },
    { value: "Micronesia", label: "Micronesia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar (Burma)", label: "Myanmar (Burma)" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Niger", label: "Niger" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "North Korea", label: "North Korea" },
    { value: "North Macedonia", label: "North Macedonia" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    { value: "Palestine", label: "Palestine" },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Qatar", label: "Qatar" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "South Africa", label: "South Africa" },
    { value: "South Korea", label: "South Korea" },
    { value: "South Sudan", label: "South Sudan" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syria", label: "Syria" },
    { value: "Tajikistan", label: "Tajikistan" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-Leste", label: "Timor-Leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tonga", label: "Tonga" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States of America", label: "United States of America" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Vatican City", label: "Vatican City" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
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
          defaultOption='Select Option'
          value={formValues.user_type}
          errors={errors.user_type}
        />

        <SelectTag
          label="What can we help you with?"
          options={helpWithOptions}
          name="topic"
          defaultOption='Select Option'
          onChange={handleChange}
          value={formValues.topic}
          errors={errors.topic}
        />
        <SelectTag
          label="Country"
          defaultOption='Select Option'
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
        <div className="w-5 h-5 border-4 border-t-white border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin"/>
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
