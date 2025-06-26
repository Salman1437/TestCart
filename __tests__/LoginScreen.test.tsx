import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('LoginScreen', () => {
  it('renders username and password inputs and login button', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={{ navigate: mockNavigate } as any} />);

    expect(getByPlaceholderText('Enter Username')).toBeTruthy();
    expect(getByPlaceholderText('Enter Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('shows error if username is less than 3 characters', async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<LoginScreen navigation={{ navigate: mockNavigate } as any} />);
    
    fireEvent.changeText(getByPlaceholderText('Enter Username'), 'ab');
    fireEvent.changeText(getByPlaceholderText('Enter Password'), '123456');
    fireEvent.press(getByText('Login'));

    expect(await findByText('Username must be at least 3 characters')).toBeTruthy();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('shows error if password is less than 5 characters', async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<LoginScreen navigation={{ navigate: mockNavigate } as any} />);
    
    fireEvent.changeText(getByPlaceholderText('Enter Username'), 'Salman');
    fireEvent.changeText(getByPlaceholderText('Enter Password'), '123');
    fireEvent.press(getByText('Login'));

    expect(await findByText('Minimum 5 characters password is required')).toBeTruthy();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('navigates to Home if inputs are valid', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={{ navigate: mockNavigate } as any} />);

    fireEvent.changeText(getByPlaceholderText('Enter Username'), 'Salman');
    fireEvent.changeText(getByPlaceholderText('Enter Password'), '123456');
    fireEvent.press(getByText('Login'));

    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });
});