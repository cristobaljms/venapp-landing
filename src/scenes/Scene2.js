import React, { useRef, useContext } from "react";
import { Box } from "theme-ui";
import { Container } from "theme-ui";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { TransitionContext } from "../context/TransitionContext";
import styles from "../../styles/Scene2.module.css";

export const Scene2 = () => {
  return (
    <Box className={styles.root}>
      <Container px={4}>
        <Box className={styles.content}></Box>
      </Container>
    </Box>
  );
};
