import "reactflow/dist/style.css";
import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper";
import Canvas from "../../entities/canvas/ui/Canvas";

export const Home = () => {
  return (
    <PageWrapper>
      <Canvas />
    </PageWrapper>
  );
};
