import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {" "}
        <Navbar />
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default layout;
