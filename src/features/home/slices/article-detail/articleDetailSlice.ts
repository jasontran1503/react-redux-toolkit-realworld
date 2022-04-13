import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { GenericError } from 'appModels';
import { ArticeDetailState } from 'features/home/articleModel';
import articleDetailThunk from './articleDetailThunk';

const initialState: ArticeDetailState = {
  article: null,
  isLoading: false,
  error: null
};

const articleDetailSlice = createSlice({
  name: 'articleDetail',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get article
      .addCase(articleDetailThunk.getArticle.pending, (state) => {
        state.isLoading = true;
        state.article = null;
      })
      .addCase(articleDetailThunk.getArticle.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.article = action.payload.article;
        }
      })
      .addCase(articleDetailThunk.getArticle.rejected, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.error = action.payload as GenericError;
        }
      })

      // Delete article
      .addCase(articleDetailThunk.deleteArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(articleDetailThunk.deleteArticle.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
        }
      })
      .addCase(articleDetailThunk.deleteArticle.rejected, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.error = action.payload as GenericError;
        }
      })

      // Create article
      .addCase(articleDetailThunk.createArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(articleDetailThunk.createArticle.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.article = action.payload.article;
        }
      })
      .addCase(articleDetailThunk.createArticle.rejected, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.error = action.payload as GenericError;
        }
      })

      // Update article
      .addCase(articleDetailThunk.updateArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(articleDetailThunk.updateArticle.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.article = action.payload.article;
        }
      })
      .addCase(articleDetailThunk.updateArticle.rejected, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.error = action.payload as GenericError;
        }
      });
  }
});

export const articleDetailActions = articleDetailSlice.actions;

export const selectArticle = (state: RootState) => state.articleDetail.article;
export const selectArticleLoading = (state: RootState) => state.articleDetail.isLoading;
export const selectArticleErrors = (state: RootState) => state.articleDetail.error;

const articleDetailReducer = articleDetailSlice.reducer;
export default articleDetailReducer;
