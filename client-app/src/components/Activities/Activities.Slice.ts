import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivitiesType } from '@/types/@types.articles';
// import { auth } from '@/utils/firebase/firebase-config';
// import { signOutAuth } from '@/utils/firebase/firebase-config';
// import { onAuthStateChangedListener } from '../../utils/firebase/firebase-utils';

const initialState = { articles: [] } satisfies ActivitiesType as ActivitiesType

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state : any, action: PayloadAction<ActivitiesType>) => {
      state.articles = action.payload;
    },
  },
})

export const { setArticles } = articlesSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: Number) => (dispatch: any) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getArticles = (state : any) => state.articles.articles

// export const signOut = async () => {
//     await signOutAuth(auth);

//     // Clear the cookies in the server
//     const response = await fetch("http://localhost:3000/api/logout", {
//       method: "POST",
//     });
//     if (response.status === 200) {
//       setUser(null);
//     }
// }

export default articlesSlice.reducer
