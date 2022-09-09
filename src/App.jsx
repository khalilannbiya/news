import React from "react";
import { useState, useEffect } from "react";
import { Container, Navbar, Error, Loading, NewsList } from "./components";

import { getNews } from "./services/getNews";

const App = () => {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchTechNews = async () => {
         setLoading(true);
         const res = await getNews({
            searchQuery: "microsoft",
         });

         if (!res) {
            setLoading(false);
            setError(true);

            return;
         }
         setLoading(false);
         setArticles(res.articles);
      };

      fetchTechNews();
   }, []);

   console.log(articles);
   return (
      <>
         <Navbar />
         <Container>
            {loading && <Loading />}
            {error && <Error />}
            {!loading && articles.length > 0 && <NewsList articles={articles} />}
         </Container>
      </>
   );
};

export default App;
