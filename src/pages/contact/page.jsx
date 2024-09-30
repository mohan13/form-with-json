import React, { useEffect, useState } from "react";
import { Form } from "../../components/reusable/form";

const ContactPage = () => {
  const [contact, setContact] = useState(null);
  const [contactSchema, setContactSchema] = useState(null);
  const handleContact = (data) => {
    console.log(data);
    setContact(data);
  };

  useEffect(() => {
    fetch("../../../public/fieldSchema/contact.json")
      .then((res) => res.json())
      .then((data) => setContactSchema(data))
      .catch((error) => console.log("Error loading Json schema:", error));
  }, []);
  return (
    <>
      {contactSchema && (
        <Form schema={contactSchema} onSubmit={handleContact} />
      )}

      {contact && (
        <div className="mt-4 flex flex-col justify-start items-start gap-4">
          <h3 className="text-2xl mb-4 text-green-500">
            Form Submitted Successfully!
          </h3>
          <p>
            <strong>Full Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {contact.phone}
          </p>
          <p>
            <strong>Cover Letter:</strong> {contact.message}
          </p>
        </div>
      )}
    </>
  );
};

export default ContactPage;
