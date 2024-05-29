import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Collection from '.';

describe('<Collection />', () => {
  it('renders correctly', () => {
    const {getByLabelText, getByPlaceholderText} = render(
      <Collection onClose={() => {}} onSave={() => {}} />,
    );

    const cepInput = getByPlaceholderText('cep');
    fireEvent.changeText(cepInput, '12345678');
    expect(cepInput.props.value).toBe('12345678');

    const addressInput = getByPlaceholderText('Endereço completo');
    fireEvent.changeText(addressInput, 'Rua Exemplo, 123');
    expect(addressInput.props.value).toBe('Rua Exemplo, 123');
  });
});
