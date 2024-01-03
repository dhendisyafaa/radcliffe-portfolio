import { FaRegCopyright } from "react-icons/fa6";

const FooterComponent = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full py-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <FaRegCopyright />
        <p>
          <span className="text-primary">{year}</span> Dhendi Syafa Athallah
          Putra
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
