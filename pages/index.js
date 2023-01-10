import Wrapper from "../src/layout/Wrapper";
import { Scene1 } from "../src/scenes/Scene1";
import { Scene2 } from "../src/scenes/Scene2";
import { Scene3 } from "../src/scenes/Scene3";
import { Scene4 } from "../src/scenes/Scene4";
const IndexPage = () => (
  <Wrapper
    url=""
    title="VenApp"
    description=""
    twitter=""
    imageUrl=""
    imageAlt=""
  >
    <Scene1 />
    <Scene2 />
    <Scene3 />
    <Scene4 />
  </Wrapper>
);

export default IndexPage;
