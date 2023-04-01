import React, { useReducer } from 'react';

import homeReducer, { initialState } from '../reducer/home';

export type HomeContent = {
  homeStatus: any
  homeDispatch: any
}

const HomeContext = React.createContext<HomeContent>({
  homeStatus: () => {},
  homeDispatch: () => {},
});
  
export const HomeContextProvider = (props: any) => {
    const [homeStatus, homeDispatch] = useReducer(homeReducer, initialState);

    return (
      <HomeContext.Provider
        value={{
          homeStatus,
          homeDispatch,
        }}
      >
        {props.children}
      </HomeContext.Provider>
    );
};

export default HomeContext;
