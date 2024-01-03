import { useScrollPosition } from "@/hooks/useScrollPosition";
import FooterComponent from "./FooterComponent";
import { ListSosmedComponent } from "./ListSosmedComponent.jsx";
import NavbarComponent from "./NavbarComponent";

const HomepageLayout = ({ children }) => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className="flex items-center">
        <NavbarComponent />
        <ListSosmedComponent />
        <div className="mx-4 w-full md:ml-52">{children}</div>
      </div>
      <FooterComponent />
    </>
  );
};

export default HomepageLayout;
