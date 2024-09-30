import React, { useEffect, useState } from "react";
import { Form } from "../../components/reusable/form";

const JobForm = () => {
  const [jobSchema, setJobSchema] = useState(null);
  const [job, setJob] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  useEffect(() => {
    fetch("../../../public/fieldSchema/jobApplication.json")
      .then((res) => res.json())
      .then((data) => setJobSchema(data))
      .catch((error) => console.log("Error loading Json schema:", error));
  }, []);

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    if (data.resume && data.resume[0]) {
      console.log("Uploaded PDF:", data.resume[0]);
      setUploadedFileName(URL.createObjectURL(data.resume[0]));
    }
    setJob(data);
  };

  console.log("job", uploadedFileName);
  return (
    <>
      {jobSchema ? (
        <Form schema={jobSchema} onSubmit={onSubmit} />
      ) : (
        <p>Loading form...</p>
      )}
      {job && (
        <div className="mt-4 flex flex-col justify-start items-start gap-4">
          <h3 className="text-2xl mb-4 text-green-500">
            Form Submitted Successfully!
          </h3>
          <p>
            <strong>Full Name:</strong> {job.fullName}
          </p>
          <p>
            <strong>Email:</strong> {job.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {job.phone}
          </p>
          <p>
            <strong>Cover Letter:</strong> {job.coverLetter}
          </p>{" "}
          <p>
            <strong>Gender:</strong> {job.gender}
          </p>{" "}
          <p>
            <strong>Language:</strong> {job.programming}
          </p>
          {uploadedFileName && (
            <div>
              <h3>Uploaded PDF File:</h3>
              <p>{uploadedFileName}</p> {/* Show PDF file name */}
            </div>
          )}
        </div>
      )}{" "}
      {/* Provide a link to view the uploaded PDF */}
    </>
  );
};

export default JobForm;
