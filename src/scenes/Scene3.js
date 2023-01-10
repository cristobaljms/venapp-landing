import React from "react";
import { Box } from "theme-ui";
import { Container } from "theme-ui";
import styles from "../../styles/Scene3.module.css";

export const Scene3 = () => {
  return (
    <Box className={styles.root}>
      <Container px={4}>
        <Box className={styles.content}></Box>
      </Container>
    </Box>
  );
};
