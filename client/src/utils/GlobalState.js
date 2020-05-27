import React, { useContext, useReducer } from "react";

const initialState = {
  savedGames: [],
  currentGame: [],
  userData: [],
  userFriends: [],
  searchFriendArr: [],
  newFriendArr: [],
  clickedFriendArr: [],
  userProfileFriends: [],
  userProfileGames: []
};

// Think of this as our main Context API that 
//will server as the Provider and Consumer to 
//handling all our data in our entire application. Global State
const StoreContext = React.createContext();

// Don't forget to import all of your actions!
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAME":
        console.log("INSIDE ADD GAME CASE"); //FOR DEBUG
        return {
            ...state,
            savedGames: [...state.savedGames]
        }
        case "ADD_USERDATA":
          return {
            ...state,
            userData: action.data
          }
        case "GET_USER_GAMES":
          return {
            ...state,
            savedGames: action.games
          }
        case "GET_USER_FRIENDS":
          return {
            ...state,
            userFriends: action.friends
          }
        case "SEARCH_ALL_FRIENDS":
          return {
            ...state,
            searchFriendArr: action.searchFriend
          }
        case "ADD_FRIEND": 
          return {
            ...state,
            newFriendArr: action.newFriend
          }
        case "GET_CLICKED_FRIEND":
          return {
            ...state,
            clickedFriendArr: action.clickedFriend
          }
        case "USER_PROFILE_FRIENDS":
          return {
            ...state,
            userProfileFriends: [action.friends]
          }
        case "USER_PROFILE_GAMES":
          return {
            ...state,
            userProfileGames: [action.games]
          }
        // case "GET_USER_DATA":
        //   return{
        //     ...state,
        //     usersData: action.user
        //   }
    default:
      return state;
  }
};

/*
  We need a way where our components can import our Provider 
  but as they import the provider we should provide with them 
  a couple things on the initial value:
    1) state - latest and greatest data
    2) dispatch object - this will be needed if we ever needed to 
    modify state. We'll have dispatch a message to our reducer 
    who will then update the state
    value is going to be an object. For simplicity lets just make it an array
*/
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={[state, dispatch]} {...props} />;
};

/* 
  We need a way where our components can import our Consumer. 
  We are going to use the useContext hook to wire up our context API consumer.
  This consumer is going to give us the ability to get the data from our Context API Provider
*/
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext }; // There are 2 things we are exposing from our Global Context API.
// Provider
// Consumer - aka useContext Hook

  // {
    //   gameId: undefined,
    //   name: undefined,
    //   yearPublished: undefined,
    //   description: undefined,
    //   minPlayers: undefined,
    //   maxPlayers: undefined,
    //   minPlayTime: undefined,
    //   maxPlayTime: undefined,
    //   yearPublished: undefined,
    // }