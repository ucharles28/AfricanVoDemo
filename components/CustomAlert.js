import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function CustomAlert ({ variant, title, body, show, setShow }) {  
    if (show) {
      return (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
          {title && <Alert.Heading>{title}</Alert.Heading>}
          <p>
              {body}
          </p>
        </Alert>
      );
    }
  }
  export default CustomAlert;
  // render(<CustomAlert />)