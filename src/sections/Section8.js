import styles from "../../styles/Section8.module.css";

export const Section8 = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles["inner-container"]}>
          <div className={styles["videos-container"]}>
            {videos.map((video, index) => {
              return (
                <div key={index}>
                  <div className={styles.square}></div>
                  <p>{video.text}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.content}>
            <h2 className={styles.text1}>{strings.title}</h2>
            <p className={styles.text2}>{strings.description}</p>
            <button className={styles.button}>{strings.watchAllTutorials}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const strings = {
  title: "Video Tutoriales",
  watchAllTutorials: "Ver todos los tutoriales",
  description:
    "Conoce todo lo que puedes hacer con tu VenApp y sacale provecho.",
};

const videos = [
  {
    text: "Lorem ipsum dolor sit amet",
    image: "/section_3/smartphone.png",
  },
  {
    text: "Lorem ipsum dolor sit amet",
    image: "/section_3/smartphone.png",
  },
  {
    text: "Lorem ipsum dolor sit amet",
    image: "/section_3/smartphone.png",
  },
];
