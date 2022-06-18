import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const UserAuth = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.authtext)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

 return (
   <>
     <Card style={{ marginTop: 100 }}>
       <Card.Body>
         <Form onSubmit={submitFormData}>
           <Form.Group className="mb-3">
             <Form.Label>Email</Form.Label>
             <Form.Control
               style={{ border: error ? "2px solid red" : "" }}
               type="text"
               placeholder="otp code"
               onChange={handleFormData("authtext")}
             />
           </Form.Group>
           <div style={{ display: "flex", justifyContent: "space-around" }}>
             <Button variant="primary" onClick={prevStep}>
               Previous
             </Button>

             <Button variant="primary" onClick={nextStep}>
               Continue
             </Button>
           </div>
         </Form>
       </Card.Body>
     </Card>
   </>
 );
};

export default UserAuth;