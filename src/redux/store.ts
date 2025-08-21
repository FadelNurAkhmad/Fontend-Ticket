import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/redux/features/filter/filterSlice";
// import ticketReducer from "@/redux/features/ticket/ticketSlice";

// Membuat store utama dengan configureStore dari Redux Toolkit
const store = configureStore({
  reducer: {
    filter: filterReducer, // Menambahkan reducer filter ke dalam store
    // ticket: ticketReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
