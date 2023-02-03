import Wrapper from "../src/layout/Wrapper";
import styles from "../styles/c2p.module.css";
import Header from "./../src/components/Header";
import Footer from "./../src/components/Footer";

const C2pPage = () => {
  return (
    <Wrapper
      url=""
      title="VenApp"
      description=""
      twitter=""
      imageUrl=""
      imageAlt=""
    >
      <Header />
      <div className="container" style={{ color: "#000" }}>
        <br />
        <br />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <img
            src="/assets/img/VenApp_Logotipo_Dark.svg"
            alt=""
            style={{ width: 250 }}
          />
        </div>
        <br />
        <br />
        <h1 className={styles.text1}>
          ¿Cómo solicito la clave temporal para hacer un pago móvil C2P?
        </h1>
        <br />
        <p>
          Aquí te explicamos cómo conseguir la clave de tu banco para realizar
          tu recarga Pago Móvil C2P:
        </p>
        <br />
        <img
          alt="C2P TABLA"
          className="richtext-image full-width"
          height={706}
          width={800}
          src="/assets/img/C2P_TABLA_F6DX6IY.width-800.png"
        />
        <br />
        <p>
          También podrás realizarlo en la página o aplicación móvil de tu Banco:
        </p>
        <br />
        <ul className={styles.list}>
          <li>
            <b>Banco de Venezuela:</b> Ingresar en PuntoYABDV. Ingresa con tu
            usuario y contraseña registrado en banca en línea. El banco enviará
            un código de sms afiliado al banco con un código de autenticación,
            se agrega y se confirma. Luego de ingresar seleccionamos -Opciones-.
            Luego seleccionamos -Configuración-. Seleccionamos -Configurar-. Por
            último, seleccionamos el código de los 8 dígitos.
          </li>
          <li>
            <b>Banco Bicentenario:</b> Se debe ingresar a la aplicación “Tu
            Banca Móvil” introduce el número de identificación e ingresa la
            contraseña de acceso (Misma contraseña utilizada para ingresar a
            Bicentenario en Linea). Selecciona la opción ‘Ir a Pago Móvil’. En
            el menú principal haz clic en ‘Clave’ de la opción ‘Pago C2P’. El
            sistema te mostrara el codigo que debes suministrar al comercio para
            finalizar tu ‘Pago C2P’
          </li>
          <li>
            <b>Banco Mercantil:</b> Llego en menos de 5 segundos. Envía un SMS
            al número 24024 con las siglas SCP. Llegará a tu dispositivo móvil
            una clave que podrás usar por las próximas 6 horas para pagar
          </li>
          <li>
            <b>Banesco:</b> El proceso tarda aproximadamente 5 min si hay que
            descargar la aplicación y se cuenta con un internet rápido. Descarga
            el aplicativo Banesco Token desde la tienda de aplicaciones de tu
            dispositivo móvil. Ingresa a la aplicación Banesco Token con tu
            usuario de acceso a BanescOnline. Ingresa la clave de operaciones
            especiales enviada a tu teléfono o correo electrónico registrado.
          </li>
          <li>
            <b>Banco del Caribe:</b> accede a la APP Mi Pago Bancaribe, te
            autenticas y seleccionas la opción de “Generar Clave Dinámica”. Si
            aún tienes dudas haz clic aquí para dirigirte al paso a paso de tu
            banco.
          </li>
          <li>
            <b> Banco Exterior:</b> envía un SMS al número 278 con la palabra
            CLAVE seguida de un espacio y luego el identificador (V para
            venezolano, E para Extranjero y J para Jurídico), colocas nuevamente
            un espacio y tu Cédula de Identidad o RIF dependiendo del caso.
            Quedando de la siguiente: forma CLAVE (espacio) identificador
            (espacio) Cédula de identidad o RIF. Por ejemplo: CLAVE V 11162718.
            Si aún tienes dudas haz clic aquí para dirigirte al paso a paso de
            tu banco.
          </li>
          <li>
            <b>BOD:</b> envía un SMS al 263 con la palabra COMERCIO (espacio)
            Cédula de Identidad. Por ejemplo: COMERCIO 11162718 .
          </li>
        </ul>
        <br />
        <p>
          En caso de que no ubiques la información necesaria en esta
          publicación, te invitamos a que contactes con tu entidad bancaria, ya
          que gestionan la solicitud de clave temporal de forma distinta uno de
          otro.
        </p>
        <br />
        <br />
      </div>
      <Footer/>
    </Wrapper>
  );
};

export default C2pPage;
