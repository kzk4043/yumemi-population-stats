import type { FC } from "react";
import styles from "./index.module.scss";

/**
 * OrganismsFooter
 */
export const OrganismsFooter: FC = () => {
  return (
    <footer className={styles.moduleRoot}>
      <span>
        &copy;2024 <a href="https://kzk4043-portfolio.netlify.app/">kzk4043</a>
      </span>
    </footer>
  );
};
