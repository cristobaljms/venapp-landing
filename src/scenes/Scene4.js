import React from "react";
import { Box } from "theme-ui";
import { Container } from "theme-ui";
import styles from "../../styles/Scene4.module.css";

export const Scene4 = () => {
  return (
    <Box className={styles.root} id="scene4">
      <Container px={4}>
        <Box className={styles.content}></Box>
      </Container>
    </Box>
  );
};
