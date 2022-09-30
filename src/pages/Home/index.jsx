import Banner from "../../components/Banner";
import Card from "../../components/Card";
import "./Home.css";
import Data from '../../assets/data/logements.json'

function Home() {
  return (
    <div>
      <Banner />
      <article className="container">
        {Data.map((appart) => (
          <Card
            key={appart.id}
            title={appart.title}
            picture={appart.cover}
            id={appart.id}
          />
        ))}
      </article>

    </div>
  );
}

export default Home;
