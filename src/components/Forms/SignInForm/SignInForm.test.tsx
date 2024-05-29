import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {SignInForm} from '.';

// Mocking ViewModel
jest.mock('./ViewModel/useSignInViewModel', () => ({
  __esModule: true,
  default: () => ({
    validationMessage: '',
    setValidationMessage: jest.fn(),
    setValidationPassword: jest.fn(),
    validationPassword: '',
    isLoading: false,
    password: '',
    setPassword: jest.fn(),
    email: '',
    setEmail: jest.fn(),
    handleSignIn: jest.fn(),
    isSubmitButtonAvailable: true,
  }),
}));

describe('SignInForm', () => {
  it('renders correctly', () => {
    const {getByText, getByPlaceholderText} = render(<SignInForm />);

    expect(getByText('Entrar')).toBeDefined();
    expect(getByPlaceholderText('E-mail')).toBeDefined();
    expect(getByPlaceholderText('Senha')).toBeDefined();
  });

  it('calls setEmail and setPassword on input change', () => {
    const {getByPlaceholderText} = render(<SignInForm />);

    const emailInput = getByPlaceholderText('E-mail');
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');

    const passwordInput = getByPlaceholderText('Senha');
    fireEvent.changeText(passwordInput, 'password123');
    expect(passwordInput.props.value).toBe('password123');
  });
});
