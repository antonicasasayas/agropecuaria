import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

const AboutUsBreadcrumb = {
  number: '01',
  title: 'Sobre nosaltres'
}

function App() {
  return (
    <div className="  ">
      <div className="bg-background px-6 py-6">
        <NavBar />
        <Hero />
      </div>
      <div className="px-6">
        <Section
          breadcrumb={AboutUsBreadcrumb}
          title={"Portem la pagesia a dins nostre"}
        />
      </div>
    </div>
  );
}

export default App;
