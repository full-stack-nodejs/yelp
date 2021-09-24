import React, { createContext, useState } from "react";

export const RestourantsContext = createContext();

export const RestourantsContextProvider = (props) => {
  const [restourants, setRestourants] = useState([]);

  return (
    <RestourantsContext.Provider value={{ restourants, setRestourants }}>
      {props.children}
    </RestourantsContext.Provider>
  );
};
