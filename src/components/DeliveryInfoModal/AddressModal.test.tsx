import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import AddressModal, {AddressModalProps} from '.';

describe('AddressModal', () => {
  const mockProps: AddressModalProps = {
    visible: true,
    onClose: jest.fn(),
    onSave: jest.fn(),
  };

  it('renders correctly with Terra selected by default', () => {
    const {getByText} = render(<AddressModal {...mockProps} />);

    expect(getByText('Detalhes da entrega')).toBeDefined();
    expect(getByText('Selecione o Mundo da coleta')).toBeDefined();
    expect(getByText('Terra')).toBeDefined();
    expect(getByText('Marte')).toBeDefined();
  });

  it('calls onClose when close button is pressed', () => {
    const {getByTestId} = render(<AddressModal {...mockProps} />);

    fireEvent.press(getByTestId('close-button'));
    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('selects Marte for collection and Terra for delivery', () => {
    const {getByText} = render(<AddressModal {...mockProps} />);

    fireEvent.press(getByText('Marte'));
    expect(mockProps.onSave).toHaveBeenCalledWith('Marte');

    fireEvent.press(getByText('Terra'));
    expect(mockProps.onSave).toHaveBeenCalledWith('Terra');
  });

  it('calls onSave when save button is pressed', () => {
    const {getByText} = render(<AddressModal {...mockProps} />);

    fireEvent.press(getByText('Salvar'));
    expect(mockProps.onSave).toHaveBeenCalled();
  });
});
