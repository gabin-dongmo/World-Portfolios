import React, { FC } from "react";

import "./../styles/footer.scss";

const Footer: FC = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer-container">
          <p> &copy; 2022 - Cameroon Portfolios. All rights reserved.</p>
          <a
            href="https://github.com/ln-dev7/cameroon-portfolios"
            target="_blank"
          >
            <img src="assets/images/github-fill.svg" alt="github" />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
