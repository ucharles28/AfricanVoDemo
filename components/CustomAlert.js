import { Alert } from 'antd';

function CustomAlert({ type, message, show, showTitle }) {
  console.log(message)
  if (show) {
    return (
      // <Alert variant={variant} onClose={() => setShow(false)} dismissible>
      //   {title && <Alert.Heading>{title}</Alert.Heading>}
      //   <p>
      //       {body}
      //   </p>
      // </Alert>
      <Alert
        message={showTitle ? (type === 'error' ? "Error" : "Success") : null}
        description={message}
        type={type}
        showIcon={showTitle}
      />
    );
  }
}
export default CustomAlert;
  // render(<CustomAlert />)
  // render(<CustomAlert />)