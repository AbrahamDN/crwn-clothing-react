import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      {/* <SearchExampleCategory /> */}
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
