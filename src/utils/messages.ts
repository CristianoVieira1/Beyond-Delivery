import {Toast} from 'react-native-toast-message/lib/src/Toast';

interface IToast {
  type: 'error' | 'success';
  text1: string;
}

export const handleMensageToast = (toast: IToast) => {
  Toast.show({
    topOffset: 70,
    autoHide: true,
    type: toast.type,
    position: 'top',
    bottomOffset: 40,
    visibilityTime: 5000,
    text1: toast.text1,
  });
};
