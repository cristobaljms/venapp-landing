import React, { useState } from "react";
import styles from "../../styles/Section10.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { submitForm } from "../services/services";
import useWindowSize from "./../hooks/useWindowSize";

export const Section10 = () => {
  const { isDesktop } = useWindowSize();
  const [status, setStatus] = useState("");
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid value").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setStatus("");
      try {
        await submitForm(values);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    },
  });

  return (
    <div id="section10" className={styles.formContainer}>
      <div
        className="container"
        style={{ position: "relative", height: "100vh" }}
      >
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <h2 className={styles.text1}>¡Danos tu idea!</h2>
            <p className={styles.text2}>
              Envíanos un mensaje y comparte con nosotros tus propuestas.
              ¡Juntos, mejor!
            </p>
            {status == "success" ? (
              <h2 className={styles.text3}>¡Gracias por tu aporte!</h2>
            ) : (
              <div>
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
                    name="phoneNumber"
                    type="text"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    placeholder="Teléfono*"
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
                    name="content"
                    type="text"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    placeholder="Mensaje*"
                    rows="5"
                  />
                </div>
                <button className="form-button" onClick={formik.submitForm}>
                  Enviar
                </button>
                {status == "error" && (
                  <h3 className={styles.text4}>
                    ¡Oops! Hemos tenido un error, puedes intentarlo más tarde.
                  </h3>
                )}
              </div>
            )}
          </div>
          <div></div>
        </div>
        {isDesktop && (
          <img
            src="/assets/img/section9/image.png"
            className={styles.image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};
