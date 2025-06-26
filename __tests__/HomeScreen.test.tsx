import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';

// Mocks
jest.mock('../redux/itemsSlice', () => ({
  fetchItems: () => ({ type: 'FETCH_ITEMS' }),
}));

// Constants
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockNavigate = jest.fn();

// Helper: Wrapped Component
const renderWithProviders = (store: any) => {
  return render(
    <Provider store={store}>
      <NavigationContainer>
        <HomeScreen navigation={{ navigate: mockNavigate } as any} route={{} as any} />
      </NavigationContainer>
    </Provider>
  );
};

describe('HomeScreen', () => {
  it('renders loading state correctly', () => {
    const store = mockStore({
      items: { items: [], loading: true },
    });

    const { getByText } = renderWithProviders(store);
    expect(getByText('Loading ...')).toBeTruthy();
  });

  it('renders list of items and navigates on item press', async () => {
    const items = [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
    ];
    const store = mockStore({
      items: { items, loading: false },
    });

    const { getByText } = renderWithProviders(store);

    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();

    fireEvent.press(getByText('Item 1'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Detail', { item: items[0] });
    });
  });
});
