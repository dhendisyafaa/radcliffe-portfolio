import React from "react";
import TitleSection from "../homepage/TitleSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import EXPERIENCE from "../../constant/experience.json";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const MyExperience = () => {
  return (
    <div className="w-full min-h-fit">
      <TitleSection title={"Experience"} />
      <div className="grid md:grid-cols-2 gap-3">
        {EXPERIENCE.map((item, index) => {
          const skills = item.skills;
          return (
            <Card
              key={index}
              className="dark flex flex-col justify-between hover:border-primary duration-300 group min-h-48"
            >
              <CardHeader className="items-start gap-4 space-y-0">
                <div className="flex w-full justify-between items-center gap-3">
                  <CardTitle className="text-white group-hover:text-primary duration-300">
                    {item.job_title} | {item.job_type}
                  </CardTitle>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={item.company_website}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Image
                            src={item.logo}
                            width={40}
                            height={40}
                            alt={`logo_${item.company}`}
                            className="rounded-md"
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{`Go to ${item.company}'s website`}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <CardDescription>
                  {item.company} <br /> {item.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between space-x-4 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center">{skills.join(" - ")}</div>
                  <div className="text-end">
                    {item.start} - {item.end}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MyExperience;
