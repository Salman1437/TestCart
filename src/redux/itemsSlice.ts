import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from '../types/Item';
import axios from 'axios';

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk('items/fetch', async () => {
  const response = await axios.get<Item[]>('https://fakestoreapi.com/products');
  return response.data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load items.';
      });
  },
});

export default itemsSlice.reducer;
