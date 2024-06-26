import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
