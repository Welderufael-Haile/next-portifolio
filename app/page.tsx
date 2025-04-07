
import About from "./pages/about/About";
import HomePage from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
export default function Home() {
  return (
    <div className="h-full mt-10">
      <HomePage></HomePage>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
