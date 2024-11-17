import type { FC } from "react";
import styles from "./index.module.scss";

/**
 * props
 */
type AtomsHeadingProps =
  | {
      /** heading level */
      level: "h1";
      /** テキスト */
      text: string;
      /** 副題 */
      subtext?: string;
    }
  | {
      /** heading level */
      level: "h2";
      /** テキスト */
      text: string;
    };

/**
 * AtomsHeading
 *
 * @param {AtomsHeadingProps} props - props
 */
export const AtomsHeading: FC<AtomsHeadingProps> = (props) => {
  if (props.level === "h1") {
    return (
      <hgroup>
        <h1 className={styles.heading1}>{props.text}</h1>
        {props.subtext && <p>{props.subtext}</p>}
      </hgroup>
    );
  }

  if (props.level === "h2") {
    return <h2 className={styles.heading2}>{props.text}</h2>;
  }
};
