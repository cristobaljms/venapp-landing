import styles from "../../styles/Section6.module.css";

export const Section6 = () => {
  return (
    <div  id="section6" className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.badge}>
          {strings.ven}<span>U</span>
        </div>
        <h2>{strings.title}</h2>
        <p>{strings.descriptions}</p>
      </div>
    </div>
  );
};

const strings = {
  title: "Cursos, cursos y mas cursos",
  ven: "Ven",
  descriptions:
    "Encuentra un amplio abanico de contenido educativo para que sigas preparandote y aprendiendo sobre los temas que mas te interesan. Accede a los mejores cursos online totalmente gratis y en tu propio tiempo.",
};
