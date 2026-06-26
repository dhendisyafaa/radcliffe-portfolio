import Link from "next/link";
import { Button } from "../ui/button";

const DhensJournalSection = () => {
  return (
    <div className="w-full py-16">
      <div className="bg-white/[0.03] border border-white/10 hover:border-primary/40 rounded-xl p-8 md:p-12 text-center space-y-4 transition-all duration-500 group">
        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
          Dhensjournal
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          Discover my Thoughts
        </h3>
        <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto">
          Thoughts, experiments, and stories I&apos;ve written.
        </p>
        <div className="pt-3">
          <Link href="/dhensjournal">
            <Button className="gap-2 group/btn">Start reading</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DhensJournalSection;
