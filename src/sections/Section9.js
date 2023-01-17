import Image from "next/image";
import styles from "../../styles/Section9.module.css";

export const Section9 = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>{strings.title}</h2>
            <h3>{strings.subttitle}</h3>
            <p>
              {strings.description} <br></br>
              {strings.description2}
            </p>
            <div className={styles.tag}>
              <Image
                src="/assets/img/section9/google-play.png"
                alt="google store tag"
                width={217}
                height={64}
              />
              <Image
                src="/assets/img/section9/app-store.png"
                alt="app store tag"
                width={217}
                height={64}
              />
            </div>
          </div>
          <div className={styles.phoneContent}>
            <Image
              src="/assets/img/section9/phone2.png"
              alt="ven app smartphone"
              width={694}
              height={1330}
              style={{ objectFit: "contain", maxWidth: "80%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const strings = {
  title: "!Empieza ya!",
  subttitle: "Seamos parte de la evolucion digital de Venezuela",
  description: "Dale un vistazo y descubre todo lo",
  description2: "que puedes hacer con VenApp",
};
