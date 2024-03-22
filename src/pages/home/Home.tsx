import { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";
import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper";

const initialNodes = [
  { id: "1", position: { x: 100, y: 0 }, data: { label: "10.08.24" } },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "+" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const Home = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  setNodes;
  return (
    <PageWrapper>
      <div style={{ width: "500px", height: "500px" }}>
        Home
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        />
      </div>
    </PageWrapper>
  );
};
