import ContactForm from "@/utils/components/ContactForm";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import React from "react";

function Contact() {
  return (
    <RootLayout title="Contact">
      <h1 className="mb-2 text-4xl font-bold">Contact Us</h1>
      <ContactForm />
    </RootLayout>
  );
}

export default Contact;
