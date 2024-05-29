// addressModal.test.tsx

import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import AddressModal from '.';

describe('<AddressModal />', () => {
  it('renders correctly', () => {
    const onCloseMock = jest.fn();
    const onSaveMock = jest.fn();

    const {getByText, getByTestId} = render(
      <AddressModal visible onClose={onCloseMock} onSave={onSaveMock} />,
    );

    expect(getByText('Detalhes do Endereço')).toBeTruthy();
    expect(getByText('Endereço de Entrega')).toBeTruthy();

    const saveButton = getByTestId('save-button');
    fireEvent.press(saveButton);
    expect(onSaveMock).toHaveBeenCalledTimes(1);

    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
