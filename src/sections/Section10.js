import styles from "../../styles/Section10.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";

export const Section10 = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid value").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <section>
      <div className={styles.formContainer}>
        <div className="container" style={{ position: "relative" }}>
          <div className={styles.wrapper}>
            <div className={styles.form}>
              <h2 className={styles.text1}>¡Danos tu idea!</h2>
              <p className={styles.text2}>
                Envíanos un mensaje y comparte con nosotros tus propuestas.
                ¡Juntos, mejor!
              </p>
              <form>
                <div className="form-group">
                  <input
                    className="form-input"
                    name="firstname"
                    type="text"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    placeholder="Nombre*"
                  />
                  <input
                    className="form-input"
                    name="lastname"
                    type="text"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    placeholder="Apellido*"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    name="phone"
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    placeholder="Telefono*"
                  />
                  <input
                    className="form-input"
                    name="email"
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Correo*"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-input"
                    name="message"
                    type="text"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    placeholder="Mensaje*"
                    rows="5"
                  />
                </div>
                <button className="form-button">Enviar</button>
              </form>
            </div>
            <div></div>
          </div>
          <img
            src="/assets/img/section9/image.png"
            className={styles.image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};