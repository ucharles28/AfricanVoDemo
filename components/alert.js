import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error 400!</Alert.Heading>
          <p>
            Bad Request
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
  render(<AlertDismissibleExample />)