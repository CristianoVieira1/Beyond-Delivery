import auth from '@react-native-firebase/auth';
import {isValidEmail} from '@utils/validations';
import {useState} from 'react';
import {useSession} from '../../../../context/Session';
import {ISignInViewModel} from '../Interface/ISignInViewModel';

const useSignInViewModel = () => {
  const {setSession} = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [validationPassword, setValidationPassword] = useState('');
  const buttonDesabled = isValidEmail(email) || password.length < 6;

  const isSubmitButtonAvailable = (): boolean => {
    return isValidEmail(email) && password.length >= 6;
  };

  function cleanInputs() {
    setEmail('');
    setPassword('');
  }

  const loginGoogle = async (): Promise<void> => {};

  function handleSignIn() {
    setIsLoading(true);
    if (isValidEmail(email)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(async response => {
          setSession(prevSession => ({
            ...prevSession,
            autenticated: true,
          }));
          setIsLoading(false);
          cleanInputs();
        })
        .catch((error: any) => {
          if (error.code === 'auth/invalid-email') {
            setValidationMessage('Esse endereço de e-mail é inválido!');
          }

          if (error.code === 'auth/invalid-credential') {
            setValidationMessage('Esse endereço de e-mail é inválido!');
          }

          if (error.code === 'auth/user-not-found') {
            setValidationMessage('Usuário não encontrado!');
          }

          if (error.code === 'auth/wrong-password') {
            setValidationPassword('Senha incorreta!');
          }
          cleanInputs();
          setIsLoading(false);
        })
        .finally(() => {
          cleanInputs();
          setIsLoading(false);
        });
      return;
    }
    setValidationMessage('Endereço de e-mail é obrigatório!');
    setIsLoading(false);
  }

  const viewModel: ISignInViewModel = {
    validationMessage,
    setValidationPassword,
    validationPassword,
    setValidationMessage,
    buttonDesabled,
    handleSignIn,
    isLoading,
    password,
    setPassword,
    email,
    setEmail,
    isSubmitButtonAvailable: isSubmitButtonAvailable(),
  };

  return viewModel;
};

export default useSignInViewModel;
