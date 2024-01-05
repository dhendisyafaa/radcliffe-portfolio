import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronBackOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

const NavbarComponent = () => {
  const { pathname, back } = useRouter();
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        "bg-transparent flex justify-between items-center p-3 fixed top-0 w-full z-50"
      }
    >
      {pathname !== "/" && (
        <Button
          className={cn(
            "flex items-center gap-2 p-2 text-white hover:bg-black/90",
            scrollPosition > 0 ? "bg-black" : "bg-transparent"
          )}
          onClick={() => back()}
        >
          <IoChevronBackOutline />
          <p>Back</p>
        </Button>
      )}
      {pathname != "/dhensjournal/blog/[title]" ? (
        <div className="flex w-full justify-end">
          <Button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=dhendisyafa@gmail.com",
                "_blank"
              )
            }
            variant="outline"
            className={cn(
              "text-white border-white/35 hover:bg-white/20 hover:text-white uppercase",
              scrollPosition > 5
                ? "bg-white/5 backdrop-blur-md duration-300"
                : "bg-transparent"
            )}
          >
            dhendisyafa@gmail.com
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarComponent;
