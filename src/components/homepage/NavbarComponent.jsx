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
      className={cn(
        "flex justify-between items-center p-3 fixed top-0 w-full z-50",
        scrollPosition > 5 && pathname !== "/"
          ? "bg-white/5 backdrop-blur-md duration-300"
          : "bg-transparent"
      )}
    >
      {pathname !== "/" && (
        <Button
          variant="ghost"
          className="text-primary flex items-center gap-2 p-2"
          onClick={() => back()}
        >
          <IoChevronBackOutline />
          <p>Back</p>
        </Button>
      )}
      <div className="flex w-full justify-end">
        <Button
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=dhendisyafa@gmail.com",
              "_blank"
            )
          }
          variant="outline"
          className="bg-transparent text-white border-white/35 hover:bg-white/20 hover:text-white uppercase"
        >
          dhendisyafa@gmail.com
        </Button>
      </div>
    </div>
  );
};

export default NavbarComponent;
