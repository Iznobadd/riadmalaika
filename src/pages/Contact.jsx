import React from "react";
import PostIt from "../components/contact/PostIt";
import Faq from "../components/contact/Faq";
import { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import Weather from "../components/contact/Weather";

function Contact() {
  useEffect(() => {
    document.title = "Nous contacter | Riad Malaika";
  }, []);
  return (
    <>
      <div className="contact-banner">
        <h2>Contact</h2>
      </div>
      <PostIt />
      <Faq />

      <Weather />
      <ContactForm />
    </>
  );
}

export default Contact;
