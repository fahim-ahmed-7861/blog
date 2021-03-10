import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import postList from "../reducers/postList";

const rootReducers=combineReducers({
    
    postList:postList
  });

 

export const store=createStore(rootReducers,applyMiddleware(ReduxThunk));

//console.log(store.getState)
