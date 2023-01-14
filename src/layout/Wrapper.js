import Layout from "./Layout";

const Wrapper = (props) => {
  // Want Google Analytics? --> https://github.com/react-ga/react-ga --> add your UI code below
  // ReactGA.initialize("UA-1234567-89")
  // ReactGA.set({ anonymizeIp: true })
  // if (typeof window !== "undefined") {
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }

  return <Layout {...props} />;
};

export default Wrapper;
