import CircularBars from "@/components/CircularBars";
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Snippets from "@/components/Snippets";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Intro />
      <CircularBars />
      <Projects />
      <Footer />
      <Snippets />
    </>
  );
}
