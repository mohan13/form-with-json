import React, { useEffect, useState } from "react";
import { Form } from "../../components/reusable/form";

const ContactPage = () => {
  const [contact, setContact] = useState([]);
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

      {Object.values(contact).map((item, index) => (
        <div
          key={index}
          className=" flex flex-col gap-2 justify-start items-start "
        >
          <h3 className="text-2xl mb-4 text-green-500">
            Form Submitted Successfully!
          </h3>
          {item}
        </div>
      ))}
    </>
  );
};

export default ContactPage;
