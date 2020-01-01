import React from "react";
import useIllustration from "hooks/useIllustration";
import styles from "./style.module.css";
import classNames from "classnames";

const Illustrations = () => {
  const [title, path, next, previous] = useIllustration();
  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.button, styles.previous)}
        onClick={previous}
      >
        previous
      </button>
      <img
        className={styles.image}
        src={path}
        alt={title}
        style={{
          maxWidth: "100vw"
        }}
      />
      <button className={classNames(styles.button, styles.next)} onClick={next}>
        next
      </button>
    </div>
  );
};

export default Illustrations;
