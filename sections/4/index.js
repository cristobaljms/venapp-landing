import  styles from '../../styles/Section4.module.css';

const FourthSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <h2>
          {strings.title}
        </h2>
        <h4>
          {strings.subttitle}
        </h4>
        <p>
          {strings.description} <br></br>
          {strings.description2}
        </p>
      </div>

      <img 
        src="/section_4/smartphone.png"
        alt="ven app smartphone"
        className={styles.phone}
      />
    </div>
  )
}

const strings = {
  title: '!Empieza ya!',
  subttitle: 'Seamos parte de la evolucion digital de Venezuela',
  description: 'Dale un vistazo y descubre todo lo',
  description2: 'que puedes hacer con VenApp'
}
export default FourthSection