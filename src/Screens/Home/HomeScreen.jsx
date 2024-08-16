import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tab from "./components/Tab";
import { useLocation } from "react-router-dom";
import { db } from "../../../utils/index";
import { Ideas } from "../../../utils/schema";
import IdeaList from "./components/IdeaList";
import { desc } from "drizzle-orm";
function HomeScreen() {
  const params = useLocation();

  const [ideaList, setIdeaList] = useState([]);

  useEffect(() => {
    getAllIdeas();
  }, [params]);

  let getAllIdeas = async () => {
    const result = await db
      .select()
      .from(Ideas)
      .orderBy(
        desc(
          params.hash === "#hot" || params.hash === "#top"
            ? Ideas.vote
            : Ideas.id
        )
      )
      .limit(20);
    console.log(result);
    setIdeaList(result);
  };
  return (
    <div>
      <Header />
      <Hero />
      <Tab />
      <IdeaList ideaList={ideaList} refreshData={getAllIdeas} />
    </div>
  );
}

export default HomeScreen;
