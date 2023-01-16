import styles from "../../styles/Section9.module.css";

export const Section9 = () => {
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>
        <h2>{strings.title}</h2>
        <h4>{strings.subttitle}</h4>
        <p>
          {strings.description} <br></br>
          {strings.description2}
        </p>
        <div className={styles.tag}>
          <img 
            src="/assets/img/section9/google-play.png"
            alt="google store tag"
          />
          <img 
            src="/assets/img/section9/app-store.png"
            alt="app store tag"
          />
        </div>
      </div>

      <img
        src="/section_4/smartphone.png"
        alt="ven app smartphone"
        className={styles.phone}
      />
    </div>
  );
};

const strings = {
  title: "!Empieza ya!",
  subttitle: "Seamos parte de la evolucion digital de Venezuela",
  description: "Dale un vistazo y descubre todo lo",
  description2: "que puedes hacer con VenApp",
};
