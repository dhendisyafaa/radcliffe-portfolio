import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import PROJECTS from "../../constant/projects.json";
import TitleSection from "../homepage/TitleSection";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";

const MyProject = () => {
  return (
    <div className="w-full min-h-fit">
      <TitleSection
        title={"Projects"}
        description={"Some of my best projects"}
      />
      <div className="grid md:grid-cols-2 gap-3">
        {PROJECTS.map((item, index) => {
          const stack = item.stack;
          return (
            <Card
              key={index}
              className="dark flex flex-col justify-between hover:border-primary duration-300 group"
            >
              <CardHeader className="items-start gap-4 space-y-0">
                <div className="flex w-full justify-between items-start gap-3">
                  <CardTitle className="text-white group-hover:text-primary duration-300">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center justify-end space-x-3 text-white text-2xl">
                    {item.repository != "private" && (
                      <Link
                        href={item.repository}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="border p-1 rounded-lg group-hover:bg-black/40 hover:scale-110 duration-300"
                      >
                        <FaCode className="cursor-pointer group-hover:text-primary duration-300" />
                      </Link>
                    )}
                    {item.url !== "" && (
                      <Link
                        href={item.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="border p-1 rounded-lg group-hover:bg-black/40 hover:scale-110 duration-300"
                      >
                        <PiGlobe className="cursor-pointer group-hover:text-primary duration-300" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between space-x-4 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center">{stack.join(" - ")}</div>
                  <div className="text-end">
                    {item.start} - {item.end}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="flex w-full justify-center my-8">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://github.com/dhendisyafaa?tab=repositories"}
        >
          <Button className="gap-2 flex">
            View More <FaGithub />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyProject;
