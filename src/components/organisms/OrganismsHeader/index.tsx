import { AtomsHeading } from "@/components/atoms/AtomsHeading";
import type { FC } from "react";
import styles from "./index.module.scss";

/**
 * OrganismsHeader
 */
export const OrganismsHeader: FC = () => {
  return (
    <header className={styles.header}>
      <AtomsHeading
        level="h1"
        text="都道府県別人口推移"
        subtext="POPULATION STATS for YUMEMI inc."
      />
    </header>
  );
};
