import { notification } from 'antd';
export default function tokenIsValid() {
    const expirtyDate = new Date(localStorage.getItem('tokenExpiryDate'))
    return expirtyDate > new Date();
}

export function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

export function showNotification (type, description) {
    notification[type]({
      message: type === 'error' ? 'Error' : 'Success',
      description: description
    });
  };