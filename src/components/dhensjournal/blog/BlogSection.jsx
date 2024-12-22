import React, { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import TitleSection from "@/components/homepage/TitleSection";
import { useAllJournal } from "@/pages/api/resolvers/journalResolver";
import supabase from "supabase";
import SkeletonCardBlog from "@/components/common/skeleton/SkeletonCardBlog";

const BlogSection = () => {
  const { data: journals, isLoading } = useAllJournal();
  const journal = journals?.data;

  return (
    <div className="w-full h-fit container py-8">
      <TitleSection
        title={"Dhensjournal"}
        description={"Want to get closer to me?"}
      />
      {journal ? (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-screen place-items-start place-content-start">
          {isLoading &&
            Array(3)
              .fill(" ")
              .map((item, i) => {
                return <SkeletonCardBlog key={i} />;
              })}
          {journal?.map((item) => (
            <CardBlog key={item.id} journal={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-primary">
          Sorry, for a while I deleted my journal collection
        </p>
      )}
    </div>
  );
};

export default BlogSection;
