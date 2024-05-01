import NavBar from "./components/NavBar";
import SectionSearch from "./components/SectionSearch";
import ProductCard from "./components/ProductCard";

const Home: React.FC = () => {
  return <main>
    <NavBar />
    <SectionSearch />
    <ProductCard />
  </main>;
};
export default Home;