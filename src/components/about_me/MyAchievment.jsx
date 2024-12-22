import Image from "next/image";
import ACHIEVMENT from "../../constant/achievment.json";
import TitleSection from "../homepage/TitleSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

const MyAchievment = () => {
  return (
    <div className="w-full min-h-fit">
      <TitleSection title={"Achievment"} />
      <div className="grid md:grid-cols-2 gap-3">
        {ACHIEVMENT.map((item, index) => {
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
                    <Image
                      src={item.logo}
                      width={40}
                      height={40}
                      alt={`logo_${item.publisher}`}
                      className="rounded-md"
                    />
                  </div>
                  <CardDescription>{item.publisher}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between space-x-4 text-xs md:text-sm text-muted-foreground">
                    <div className="text-end">{item.id_credential}</div>
                    <div>
                      {item.date_publication} - {item.expiration_date}
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

export default MyAchievment;
