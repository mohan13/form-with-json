import React, { useEffect, useState } from "react";
import { Form } from "../../components/reusable/form";

const Login = () => {
  const [loginData, setLoginData] = useState(null);
  const [loginSchema, setLoginSchema] = useState(null);

  useEffect(() => {
    fetch("../../../public/fieldSchema/login.json")
      .then((res) => res.json())
      .then((data) => setLoginSchema(data))
      .catch((error) => console.log("Error loading Json schema:", error));
  }, []);
  const handleLogin = (login) => {
    console.log(login);
    setLoginData(login);
  };
  return (
    <>
      {loginSchema && <Form schema={loginSchema} onSubmit={handleLogin} />}

      {loginData && (
        <div className="mt-4 flex flex-col justify-start items-start gap-4">
          <h3 className="text-2xl mb-4 text-green-500">
            Form Submitted Successfully!
          </h3>

          <p>
            <strong>Email:</strong> {loginData.email}
          </p>
          <p>
            <strong>Password:</strong> {loginData.password}
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
