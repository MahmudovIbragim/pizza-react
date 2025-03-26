import scss from "./HomePage.module.scss";
import { useState } from "react";
import CardsContainer from "../../widgets/cardsContainer/CardsContainer";
import Checkbox from "../../shared/ui/checkbox/Checkbox";

const HomePage = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <>
      <section>
        <div className="container">
          <div className={scss.title_section}>
            <h1>Home</h1>
            <div className={scss.filter_content}>
              <Checkbox
                title="Лайки"
                checked={isFilter}
                onChange={() => setIsFilter(!isFilter)}
              />
            </div>
          </div>
          <CardsContainer filter={isFilter} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
