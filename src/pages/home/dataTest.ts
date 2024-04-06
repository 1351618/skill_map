const initialNodes = [
  {
    id: "1",
    position: { x: 300, y: 400 },
    data: { label: "10.08.24" },
  },
  {
    id: "2",
    position: { x: 500, y: 400 },
    data: { label: "+" },
  },
  {
    id: "3",
    position: { x: 700, y: 400 },
    data: { label: "333" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, type: "step" },
  { id: "e2-3", source: "2", target: "3", animated: true, type: "step" },
];
