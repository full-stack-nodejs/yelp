import React from "react";
import AddRestourants from "../components/AddRestourants";
import Header from "../components/Header";
import RestourantList from "../components/RestourantList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestourants />
      <RestourantList />
    </div>
  );
};

export default Home;
