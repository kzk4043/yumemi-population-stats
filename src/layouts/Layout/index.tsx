import { OrganismsHeader } from "@/components/organisms/OrganismsHeader";
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
  return (
    <>
      <OrganismsHeader />
      <main className={styles.mainLayout}>{children}</main>
    </>
  );
};
