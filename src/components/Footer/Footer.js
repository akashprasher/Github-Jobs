import React from "react";
import { connect } from "react-redux";
import GitHubButton from "react-github-btn";

import heart from "../../assets/icons/heart.svg";

function Footer({ dark }) {
  return (
    <footer
      className={`${
        dark ? "text-gray-300 bg-blue-800" : "text-gray-800 bg-gray-100"
      } w-full flex justify-center items-center p-4`}
    >
      <section className="w-full lg:w-1/2">
        <nav>
          <ul className="w-full flex flex-wrap justify-between pt-4 pb-6 text-sm">
            <li>
              <a
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/akashprasher/Github-Jobs"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/akashprasher/Github-Jobs/issues"
              >
                Report a bug
              </a>
            </li>
            <li>
              <GitHubButton
                href="https://github.com/akashprasher/Github-Jobs"
                data-color-scheme={`no-preference: light; light: ${
                  dark ? "dark" : "light"
                }; dark: dark;`}
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Star/akashprasher/Github-Jobs on GitHub"
              >
                Star
              </GitHubButton>
            </li>
          </ul>
        </nav>
        <p className="font-mono text-xs text-center">
          Made with{" "}
          <img
            className="inline"
            src={heart}
            alt="heart"
            width={14}
            height={14}
          />{" "}
          by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/akashprashar"
            className={`${dark ? "text-blue-400" : "text-blue-600"} italic`}
          >
            Sumit Chahar | Akash Prasher | Juma Ramadhani Sinare
          </a>
        </p>
      </section>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(Footer);
