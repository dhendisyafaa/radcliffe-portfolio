import React, { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import TitleSection from "@/components/homepage/TitleSection";
import { useAllJournal } from "@/pages/api/resolvers/journalResolver";
import supabase from "supabase";

const BlogSection = () => {
  const { data: journals, isLoading } = useAllJournal();
  const journal = journals?.data;

  return (
    <div className="w-full h-fit container py-8">
      <TitleSection
        title={"Dhensjournal"}
        description={"Want to get closer to me?"}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-screen place-items-start place-content-start">
        {isLoading && <p className="text-white text-center">Loading...</p>}
        {journal?.map((item) => (
          <CardBlog key={item.id} journal={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
