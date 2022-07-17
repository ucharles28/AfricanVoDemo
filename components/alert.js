import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertDismissibleExample({ variant, title, body, show, setShow }) {  
    if (show) {
      return (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{title}</Alert.Heading>
          <p>
              {body}
          </p>
        </Alert>
      );
    }
  }
  
  render(<AlertDismissibleExample />)