import React, { FC } from "react";

import "./../styles/section.scss";

const Section: FC = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="section-intro">
          <div className="section-intro__text">
            <h1>Cameroon IT Portfolios</h1>
            <p>An open source registry of Cameroonian IT professionals</p>
            <a href="https://github.com/ln-dev7/cameroon-porfolios">
              Contribute on github
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Section;
