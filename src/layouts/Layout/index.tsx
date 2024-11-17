import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";

/**
 * props
 */
type LayoutProps = {
  children: ReactNode;
};

/**
 * Layout
 *
 * @param {LayoutProps} props - props
 */
export const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className={styles.mainLayout}>{children}</main>;
};
