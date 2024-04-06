import { useRef, useEffect, useState } from "react";
import cls from "./canvas.module.scss";

import * as d3 from "d3";

// Данные для графика
const width = 500;
const height = 500;

interface chartType {
  svgRef: React.MutableRefObject<SVGSVGElement | null>;
  width: number;
  height: number;
}

const chart = ({ svgRef, width, height }: chartType) => {
  const svg = d3.select(svgRef.current).attr("viewBox", [0, 0, width, height]);
  svg.selectAll("*").remove();

  const mainGroup = svg.append("g").attr("cursor", "grab");

  // Массив для хранения всех групп
  const groups: any[] = [];

  // Создаем группы и добавляем их в массив
  for (let i = 0; i < 5; i++) {
    const group = mainGroup
      .append("g")
      .attr("transform", `translate(${100 * i}, 100)`)
      .attr("cursor", "grab")
      .call(
        d3
          .drag<SVGGElement, unknown>()
          .on("start", dragstarted)
          .on("drag", draggedGroup)
          .on("end", dragended)
      );

    groups.push(group);
  }

  // Добавляем элементы в каждую группу
  groups.forEach((group, index) => {
    group
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 5) // Пример радиуса
      .attr("fill", "blue")
      .attr("transform", `translate(${10 * index}, 0)`);

    group
      .append("text")
      .attr("x", 0)
      .attr("y", -5)
      .text(`Group ${index + 1}`)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .attr("transform", `translate(${10 * index}, 0)`);
  });

  if (svg) {
    const zoomBehavior = d3
      .zoom<SVGSVGElement, unknown>()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([0.1, 8])
      .on("zoom", zoomed) as any;

    svg.call(zoomBehavior);
  }

  function dragstarted(this: Element) {
    d3.select(this).raise().attr("cursor", "grabbing");
  }

  function draggedGroup(this: SVGGElement, event: DragEvent) {
    const currentTransform = d3.select(this).attr("transform");
    const currentX = parseInt(currentTransform.split("(")[1].split(",")[0]);
    const currentY = parseInt(
      currentTransform.split("(")[1].split(",")[1].split(")")[0]
    );
    // TODO пофиксить тип
    //@ts-expect-error
    const newX = currentX + event.dx;
    // TODO пофиксить тип
    //@ts-expect-error
    const newY = currentY + event.dy;

    d3.select(this).attr("transform", `translate(${newX},${newY})`);
  }

  function dragended(this: SVGElement) {
    d3.select(this).attr("cursor", "grab");
  }

  function zoomed({ transform }: { transform: d3.ZoomTransform }) {
    mainGroup.attr("transform", transform.toString());
  }

  return svg.node();
};

// ! канвас ================================================================================
export const Canvas = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [initialCoords, setInitialCoords] = useState({
    x: 500,
    y: 100,
    scale: 1,
  });
  const [isSvgCentrWind, setSvgCentrWind] = useState({ x: 0, y: 0 });

  //// определение центра холста
  useEffect(() => {
    const initializeSvgCentrWind = () => {
      if (svgRef.current)
        setSvgCentrWind({
          x: svgRef.current.clientWidth / 2,
          y: svgRef.current.clientHeight / 2,
        });
    };
    initializeSvgCentrWind();
    globalThis.addEventListener("resize", initializeSvgCentrWind);
    return () =>
      globalThis.removeEventListener("resize", initializeSvgCentrWind);
  }, [svgRef]);

  useEffect(() => {
    if (svgRef.current) {
      chart({ svgRef, width, height });
    }
  }, [svgRef.current]);

  return <svg className={cls.canvas} ref={svgRef}></svg>;
};
