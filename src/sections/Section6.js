import styles from "../../styles/Section6.module.css";

export const Section6 = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2> {strings.title} </h2>
          <p> {strings.description} </p>
        </div>

        <div className={styles["phone-container"]}>
          <div>
            <img
              src="/section_1/phone.png"
              alt="phone"
              className={styles.phone}
            />
            <div className={styles.overlay}></div>
            <div className={styles["overlay-text"]}>
              {strings.number}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const strings = {
  number: "12758K",
  title: "Conecta Comparte y expande tu mundo",
  description:
    "Podras compartir contenido, eventos, imagenes, videos y mucho mas.",
};
