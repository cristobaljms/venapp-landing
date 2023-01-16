import styles from "../../styles/Section7.module.css";
import Image from "next/image";

export const Section7 = () => {
  return (
    <div className={styles["outer-container"]}>
      <Image
        src="/section_1/background.png"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2> {strings.title} </h2>
          <p> {strings.description} </p>
        </div>
        <div className={styles["phone-container"]}>
          <div className={styles.phone}>
            <Image
              src="/section_1/phone.png"
              alt="phone"
              width={655}
              height={1259}
              style={{ objectFit: "contain", maxHeight: "100%" }}
            />
            <div className={styles.overlay}></div>
            <div className={styles["overlay-text"]}>{strings.number}</div> 
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
