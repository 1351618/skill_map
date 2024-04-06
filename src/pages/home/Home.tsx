import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper";
import { Canvas } from "../../widgets/canvas/ui/canvas";

export const Home = () => {
  return (
    <PageWrapper>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas />
      </div>
    </PageWrapper>
  );
};
