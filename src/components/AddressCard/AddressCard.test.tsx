import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import AddressCard, {Address} from '.';

const mockAddress: Address = {
  id: 1,
  label: 'Casa',
  address: '123 Avenida Principal',
  coordinate: {latitude: 0, longitude: 0},
  isSelected: false,
  world: 'Terra',
  onAction: jest.fn(),
  onViewOnMap: jest.fn(),
};

describe('AddressCard', () => {
  it('renders correctly', () => {
    const {getByText} = render(<AddressCard {...mockAddress} />);
    expect(getByText('Casa')).toBeDefined();
    expect(getByText('123 Avenida Principal')).toBeDefined();
    expect(getByText('Terra')).toBeDefined();
  });

  it('calls onAction when icon is pressed', () => {
    const {getByTestId} = render(<AddressCard {...mockAddress} />);
    fireEvent.press(getByTestId('address-icon'));
    expect(mockAddress.onAction).toHaveBeenCalledWith(1);
  });

  it('calls onViewOnMap when "Ver no mapa" is pressed', () => {
    const {getByText} = render(<AddressCard {...mockAddress} />);
    fireEvent.press(getByText('Ver no mapa'));
    expect(mockAddress.onViewOnMap).toHaveBeenCalled();
  });

  it('renders with isSelected styling', () => {
    const {getByTestId} = render(
      <AddressCard {...mockAddress} isSelected={true} />,
    );
    const addressCard = getByTestId('address-card');
    expect(addressCard.props.style.backgroundColor).toBe('#d1c4e9');
  });
});
