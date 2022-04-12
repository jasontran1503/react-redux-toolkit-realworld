import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get articles global
      // .addCase(articleDetailThunk.getArticlesGlobal.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(articleDetailThunk.getArticlesGlobal.fulfilled, (state, action) => {
      //   if (action.payload) {
      //     state.isLoading = false;
      //     state.articles = action.payload.articles;
      //     state.articlesCount = action.payload.articlesCount;
      //     state.articleTab = ArticleTab.GLOBAL;
      //   }
      // })

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
      });
  }
});

export const articleDetailActions = articleDetailSlice.actions;

export const selectArticle = (state: RootState) => state.articleDetail.article;
export const selectLoading = (state: RootState) => state.articleDetail.isLoading;
// export const selectErrors = (state: RootState) => state.auth.error?.errors;

const articleDetailReducer = articleDetailSlice.reducer;
export default articleDetailReducer;
