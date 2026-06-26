import TitleSection from "../homepage/TitleSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import FILM_ACHIEVMENT from "../../constant/film_achievment.json";
import Link from "next/link";

const MyFilmAchievment = () => {
  if (FILM_ACHIEVMENT.length === 0) {
    return null;
  }

  return (
    <div className="w-full min-h-fit">
      <TitleSection title={"Accolades"} />
      <div className="grid md:grid-cols-2 gap-3">
        {FILM_ACHIEVMENT.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.url_credential}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Card className="dark flex flex-col justify-between hover:border-primary duration-300 group min-h-48">
                <CardHeader className="items-start gap-4 space-y-0">
                  <div className="flex w-full justify-between items-center gap-3">
                    <CardTitle className="text-white group-hover:text-primary duration-300">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{item.publisher}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between space-x-4 text-xs md:text-sm text-muted-foreground">
                    <div className="text-end">{item.id_credential}</div>
                    <div>
                      {item.date_publication}
                      {item.expiration_date ? ` - ${item.expiration_date}` : ""}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyFilmAchievment;
