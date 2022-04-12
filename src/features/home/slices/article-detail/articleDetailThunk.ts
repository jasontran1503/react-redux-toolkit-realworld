import { createAsyncThunk } from '@reduxjs/toolkit';
import articleApi from 'features/home/articleApi';

const getArticle = createAsyncThunk(
  'auth/getArticle',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await articleApi.getArticle(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const articleDetailThunk = {
  getArticle
};

export default articleDetailThunk;
