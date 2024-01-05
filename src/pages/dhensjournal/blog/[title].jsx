import HomepageLayout from "@/components/homepage/HomepageLayout";
import { ListSosmedHorizontal } from "@/components/homepage/ListSosmedComponent";
import { Badge } from "@/components/ui/badge";
import { convertISODate } from "@/lib/convertISODate";
import { useJournalById } from "@/pages/api/resolvers/journalResolver";
import { useRouter } from "next/router";
import { FiClock } from "react-icons/fi";

const ContentBlog = () => {
  const { query } = useRouter();
  const { data: journalData, isLoading } = useJournalById(query.id);
  if (isLoading) return <p className="text-white text-center">Loading...</p>;
  if (journalData.data === null || journalData.data === undefined) return;
  const journal = journalData?.data[0];

  return (
    <article className="bg-[url('/assets/bg-blog.svg')] bg-top bg-cover bg-no-repeat">
      <HomepageLayout>
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
          <div className="w-full min-h-screen flex items-center justify-start">
            <div className="space-y-5 md:w-[65%]">
              <div className="inline-flex gap-2 text-sm md:text-base items-center text-zinc-500">
                <FiClock />
                <p>{convertISODate(journal?.createdAt)}</p>
              </div>
              <p className="text-white text-2xl md:text-5xl font-bold">{`${decodeURIComponent(
                journal?.title
              )}`}</p>
              <p className="text-zinc-500 text-sm md:text-lg font-medium">
                {journal?.short_description}
              </p>
              <p className="text-zinc-500 text-sm md:text-base font-medium">
                <span className="text-primary">Author:</span> {journal?.author}
              </p>
              <div className="flex items-center gap-1">
                {journal?.tag != undefined &&
                  journal?.tag.map((item, index) => (
                    <Badge key={index}>{item}</Badge>
                  ))}
              </div>
              <div className="pt-10">
                <ListSosmedHorizontal />
              </div>
            </div>
          </div>
          <div className="min-h-screen w-full md:px-6 mb-12 text-white/90 text-lg leading-8 tracking-wide">
            {journal?.content}
          </div>
        </div>
      </HomepageLayout>
    </article>
  );
};

export default ContentBlog;
