import React from "react";
import { Box } from "theme-ui";
import { Container } from "theme-ui";
import styles from "../../styles/Scene2.module.css";

export const Scene2 = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.content}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </div>
  );
};
