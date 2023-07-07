import React from "react";
import PostIt from "../components/contact/PostIt";
import Faq from "../components/contact/Faq";
import { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";

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
      <ContactForm />
    </>
  );
}

export default Contact;
