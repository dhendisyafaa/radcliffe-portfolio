import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { convertISODate } from "@/lib/convertISODate";
import Link from "next/link";
import { FiClock } from "react-icons/fi";

const CardBlog = ({ journal }) => {
  const title = `${encodeURIComponent(journal.title)}`;
  const formatedCreatedAt = convertISODate(journal.createdAt);

  return (
    <Link
      href={`/dhensjournal/journal/${encodeURIComponent(title)}?id=${
        journal.id
      }`}
    >
      <Card className="dark flex flex-col justify-between hover:border-primary duration-300 group cursor-pointer min-h-80">
        <CardHeader>
          <div className="space-y-1">
            <div className="inline-flex gap-2 text-sm items-center text-white">
              <FiClock />
              <p>{formatedCreatedAt}</p>
            </div>
            <CardTitle className="text-white group-hover:text-primary leading-7 duration-300">
              {`${decodeURIComponent(title)}`}
            </CardTitle>
            <CardDescription className="leading-6">
              <p
                dangerouslySetInnerHTML={{
                  __html: journal?.short_description,
                }}
              />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1">
            {journal?.tag.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardBlog;
