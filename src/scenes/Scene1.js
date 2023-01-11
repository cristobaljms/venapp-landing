import React, { useRef, useContext } from "react";
import { Box, Image } from "theme-ui";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import Header from "../components/Header";
import { Container } from "theme-ui";
import styles from "../../styles/Scene1.module.css";

export const Scene1 = () => {

  return (
    <Box className={styles.root} id="scene1">
      <Container px={4}>
        {/* <Header /> */}
        <Box className={styles.content}>
          <Image
            className={styles.imgNueva}
            src="/assets/img/scene1/la-nueva.png"
            alt=""
          />
          <Image
            className={styles.imgVenapp}
            src="/assets/img/scene1/venapp-landing-blanco.png"
            alt=""
          />
          <Image
            className={styles.imgVenappTrazo}
            src="/assets/img/scene1/venapp-landingtrazo.png"
            alt=""
          />
          <Image
            className={styles.img2}
            src="/assets/img/scene1/2.png"
            alt=""
          />
          <Image
            className={styles.imgGroup}
            src="/assets/img/scene1/group.png"
            alt=""
          />
        </Box>
      </Container>
    </Box>
  );
};
