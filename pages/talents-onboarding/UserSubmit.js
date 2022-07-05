import { m } from "framer-motion";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import validator from "validator";

const SubmitProfile = ({ prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty( values )
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  //destructuring the object from values
  const { talent, terms, authtext, client, firstName, lastName, age, genderm, genderf, DOB, email, password, bio, role, voicerange, sourcelang, targetlang, tel, langstrength, avatar, audiosample, city, spokenlang, country } = values;

  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Auth Text :</strong> {authtext}{" "}
          </p>
          <p>
            <strong>Talent :</strong> {talent}{" "}
          </p>
          <p>
            <strong>Client :</strong> {client}{" "}
          </p>
          <p>
            <strong>DOB :</strong> {DOB}{" "}
          </p>
          <p>
            <strong>Gender Male :</strong> {genderm}{" "}
          </p>
          <p>
            <strong>Gender Female :</strong> {genderf}{" "}
          </p>
          <p>
            <strong>Phone Number :</strong> {tel}{" "}
          </p>
          <p>
            <strong>Password :</strong> {password}{" "}
          </p>
          <p>
            <strong>Bio :</strong> {bio}{" "}
          </p>
          <p>
            <strong>Country :</strong> {country}{" "}
          </p>
          <p>
            <strong>City :</strong> {city}{" "}
          </p>
          <p>
            <strong>Role :</strong> {role}{" "}
          </p>
          <p>
            <strong>Spoken Language :</strong> {spokenlang}{" "}
          </p>
          <p>
            <strong>Voice Range :</strong> {voicerange}{" "}
          </p>
          <p>
            <strong>Source Language :</strong> {sourcelang}{" "}
          </p>
          <p>
            <strong>Target Language :</strong> {targetlang}{" "}
          </p>
          <p>
            <strong>Language Strength :</strong> {langstrength}{" "}
          </p>
          <p>
            <strong>Audio Sample :</strong> {audiosample}{" "}
          </p>
          <p>
            <strong>Profile Photo :</strong> {avatar}{" "}
          </p>
          <p>
            <strong>Terms :</strong> {terms}{" "}
          </p>
        </Card.Body>
      </Card>
      <button 
                role="button" 
                className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6" 
                onClick={prevStep}
              >
                Back
              </button>
    </>
  );
};

export default SubmitProfile;