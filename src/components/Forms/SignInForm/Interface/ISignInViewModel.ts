export interface ISignInViewModel {
  handleSignIn: () => void;
  isLoading?: boolean;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  validationMessage: string;
  setValidationMessage: (message: string) => void;
  setValidationPassword: (message: string) => void;
  validationPassword: string;
  buttonDesabled: boolean;
  isSubmitButtonAvailable: boolean;
}
