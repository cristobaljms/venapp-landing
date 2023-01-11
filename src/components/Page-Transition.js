import { TransitionGroup, CSSTransition } from "react-transition-group";

const duration = 1000;

const PageTransision = ({ children, route }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames="page" timeout={duration}>
          <div className="MainComponent">{children}</div>
        </CSSTransition>
      </TransitionGroup>

      <div className="wipe" />
    </>
  );
};

export default PageTransision;
