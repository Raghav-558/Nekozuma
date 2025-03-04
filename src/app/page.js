import Hero from "@/components/Hero";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MySlider from "@/components/MySlider";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Footer from "@/components/common/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <MySlider />
      <Story />
      <Team />
      <Footer />
    </>
  );
}
