import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import GetInTouchComponent from '../../Components/GetInTouchComponent'
import ContactForm from '../../Forms/ContactForm'
const Contact = () => {
  return (
   <>
      <GetInTouchComponent title='Get n touch' paragraph={`Do you have a question or interested in working with us?  Share your thoughts with us by completing the form below  and well reply as soon as possible.`} myclass='bg-purple-200' />
      <div className="my-8 mx-auto border-das border-gray-300 w-1/2"></div>

    <ContactForm/>
   </>
  )
}

export default MainLayout(Contact)