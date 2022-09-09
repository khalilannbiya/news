import React from "react";
import { useState, useEffect } from "react";
import { Container, Navbar, Error, Loading } from "./components";

import { getNews } from "./services/getNews";

const App = () => {
   useEffect(() => {
      const fetchTechNews = async () => {
         const res = await getNews({
            searchQuery: "microsoft",
         });
      };

      fetchTechNews();
   }, []);

   return (
      <>
         <Navbar />
         <Container>
            <h1>hello</h1>
         </Container>
      </>
   );
};

export default App;
