import { useEffect, useRef, useState } from "react";
import cls from "./canvas.module.scss";
import * as d3 from "d3";

type CanvasType = {
  width: number;
  height: number;
};

const Canvas = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const [divSize, setDivSize] = useState<CanvasType>({ width: 0, height: 0 });

  useEffect(() => {
    d3Canv();
  }, [divSize]);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const { clientWidth, clientHeight } = divRef.current;
        setDivSize({
          width: clientWidth,
          height: clientHeight,
        });
      }
    };
    handleResize();
    globalThis.addEventListener("resize", handleResize);

    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={divRef} className={cls.canvas}>
      <svg id="svgCanvas" width={divSize.width} height={divSize.height}></svg>
    </div>
  );
};

export default Canvas;

//// =============================================================
/** перетаскивание элементов - права архитектора позволяет пользователю создавать свой контент */
const architect: boolean = true;
// const architect: boolean = false;

const userMapData = [
  {
    id: "regDate",
    title: "06.09.24",
    bcColor: "#048a5d",
    tcColor: "#ffffff",
    X: 0,
    Y: 0,
    studiedMaterial: 0,
    viewedMaterial: 0,
    star: false,
    content: [],
  },
  {
    id: "2",
    title: "JavaScript",
    bcColor: "#e4a700",
    tcColor: "#000000",
    X: 150,
    Y: 0,
    studiedMaterial: 50,
    viewedMaterial: 90,
    star: true,
    content: [],
  },

  {
    id: "add",
    title: "+",
    bcColor: "#4bce00",
    tcColor: "#000000",
    X: 300,
    Y: 0,
    studiedMaterial: 0,
    viewedMaterial: 0,
    star: false,
    content: [],
  },
];

//// =============================================================
/**
 * функция получает холст создает основную группу с контентом - центрирует ее и применяет зум
 */
function d3Canv() {
  const svgElement = d3
    .select<HTMLElement, unknown>("#svgCanvas")
    .style("background-color", "#7fffd4");

  svgElement.selectAll("*").remove();

  const canvasWidth: number = parseFloat(svgElement.attr("width"));
  const canvasHeight: number = parseFloat(svgElement.attr("height"));

  let groupContentCentr = { k: 1, x: canvasWidth / 2, y: canvasHeight / 2 };

  const groupContent: any = svgElement.append("g");

  drawLines(groupContent, userMapData);
  /** данные основной группы с контентом  */
  const groupBoundingBox = groupContent.node().getBBox();

  userMapData.forEach((groupData) => {
    group(groupContent, groupData);

    groupContent.attr(
      "transform",
      `translate(${groupContentCentr.x - groupBoundingBox.width / 2}, ${
        groupContentCentr.y - groupBoundingBox.height / 2
      }) scale(${groupContentCentr.k})`
    );
  });

  svgElement.call(
    d3.zoom<HTMLElement, unknown>().on("zoom", (event) => {
      const newTransform = event.transform.translate(
        groupContentCentr.x - groupBoundingBox.width / 2,
        groupContentCentr.y - groupBoundingBox.height / 2
      );

      groupContent.attr("transform", newTransform);
    })
  );
}

//// =============================================================

/** функция для отрисовки линий между группами
 * @param groupContent - название обшей группы
 * @param groupData - массив с данными */
function drawLines(groupContent: any, userMapData: any) {
  const line = d3
    .line()
    .x((d: any) => d.X) // Функция для определения координаты x точки
    .y((d: any) => d.Y); // Функция для определения координаты y точки

  // Добавляем линию к группе
  groupContent
    .append("path")
    .datum(userMapData) // Передаем данные точек
    .attr("fill", "none")
    .attr("stroke", "#36d73f")
    .attr("stroke-width", 3)
    .attr("d", line); // Применяем координаты точек к атрибуту "d" линии
}

//// =============================================================

/**
 * функция для отрисовки одной группы
 * @param groupContent - название обшей группы
 * @param groupData - массив с данными
 */
function group(groupContent: any, groupData: any) {
  let GroupX = groupData.X;
  let GroupY = groupData.Y;
  // console.log(groupData.group);
  const group = groupContent
    .append("g")
    .attr("transform", `translate(${GroupX}, ${GroupY})`);

  if (architect) {
    group.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );
  }

  group
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", groupData.id === "add" ? 30 : 50)
    .attr("fill", groupData.bcColor)
    .style("opacity", 0) // начальная прозрачность
    .transition() // начать анимацию
    .duration(500) // продолжительность в миллисекундах
    .style("opacity", 1); // конечная прозрачность

  group
    .append("text")
    .text(groupData.title)
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "middle") // Выравниваем текст по центру
    .attr("dominant-baseline", "middle") // Выравниваем текст по вертикали по центру
    .style("fill", groupData.tcColor)
    .style("font-size", groupData.id === "add" ? "40px" : "15px");

  /** желтый полукруг */
  group
    .append("path")
    .attr("fill", "#ef0")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(42) // внутренний радиус
        .outerRadius(50) // внешний радиус (чуть больше внутреннего)
        .startAngle(Math.PI) // начальный угол дуги в радианах (180 градусов)
        .endAngle(Math.PI + (groupData.viewedMaterial * Math.PI * 2) / 100) // конечный угол дуги в радианах
    );

  /**зеленый полукруг */
  group
    .append("path")
    .attr("fill", "#18ff00")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(42) // внутренний радиус
        .outerRadius(50) // внешний радиус (чуть больше внутреннего)
        .startAngle(Math.PI) // начальный угол дуги в радианах (180 градусов)
        .endAngle(Math.PI + (groupData.studiedMaterial * Math.PI * 2) / 100) // конечный угол дуги в радианах
    );
  if (architect && groupData.id === "regDate") {
    group
      .append("path")
      .attr(
        "d",
        "M10.368 298.206L34.5 314.138l23.765 57.37-5.803 28.339c-1.559 7.599.811 15.473 6.306 20.949l32.427 32.427c5.48 5.495 13.357 7.862 20.958 6.298l28.339-5.794 57.37 23.765 15.94 24.132c4.264 6.481 11.502 10.381 19.26 10.377h45.875c7.756.006 14.994-3.891 19.26-10.368l15.94-24.132 57.37-23.765 28.331 5.794c7.601 1.575 15.484-.793 20.958-6.298l32.427-32.427c5.492-5.478 7.859-13.351 6.298-20.949l-5.794-28.339 23.765-57.37 24.141-15.94c6.48-4.267 10.377-11.509 10.368-19.268v-45.875c.009-7.759-3.888-15.001-10.368-19.268l-24.133-15.934-23.765-57.37 5.803-28.339c1.559-7.599-.811-15.473-6.306-20.949l-32.427-32.427c-5.48-5.495-13.357-7.862-20.958-6.298l-28.339 5.794-57.37-23.773-15.94-24.132c-4.266-6.477-11.505-10.374-19.26-10.368h-45.875c-7.756-.006-14.994 3.891-19.26 10.368l-15.941 24.132-57.37 23.765-28.331-5.794c-7.601-1.564-15.478.803-20.958 6.298l-32.425 32.427c-5.492 5.478-7.859 13.351-6.298 20.949l5.794 28.339-23.774 57.378-24.141 15.94c-6.474 4.268-10.367 11.506-10.359 19.26v45.875c-.009 7.759 3.888 15.002 10.368 19.269zM17.067 233.062c-.008-2.021 1.007-3.909 2.697-5.018l26.317-17.374c1.424-.941 2.532-2.288 3.183-3.866l25.762-62.199c.655-1.573.822-3.306.478-4.975l-6.323-30.899c-.408-1.987.211-4.046 1.647-5.478l32.427-32.427c1.43-1.429 3.48-2.048 5.461-1.647l30.899 6.323c1.668.349 3.403.182 4.975-.478l62.199-25.771c1.575-.652 2.918-1.761 3.857-3.183l17.382-26.317c1.114-1.692 3.009-2.704 5.035-2.688h45.875c2.021-.008 3.909 1.007 5.018 2.697l17.382 26.317c.939 1.422 2.282 2.531 3.857 3.183l62.199 25.771c1.573.655 3.306.822 4.975.478l30.908-6.323c1.983-.404 4.036.211 5.47 1.638l32.427 32.427c1.431 1.429 2.049 3.48 1.647 5.461l-6.323 30.899c-.344 1.669-.177 3.402.478 4.975l25.762 62.199c.651 1.578 1.759 2.924 3.183 3.866l26.317 17.365c1.689 1.115 2.705 3.003 2.705 5.026v45.875c.008 2.021-1.007 3.909-2.697 5.018l-26.325 17.391c-1.424.941-2.532 2.288-3.183 3.866l-25.762 62.199c-.655 1.573-.822 3.306-.478 4.975l6.323 30.899c.402 1.981-.216 4.033-1.647 5.461l-32.427 32.427c-1.424 1.439-3.479 2.059-5.461 1.647l-30.899-6.323c-1.669-.344-3.402-.177-4.975.478l-62.199 25.771c-1.575.652-2.918 1.761-3.857 3.183l-17.382 26.317c-1.109 1.69-2.997 2.704-5.018 2.697h-45.892c-2.021.008-3.909-1.007-5.018-2.697l-17.382-26.308c-.939-1.422-2.282-2.531-3.857-3.183l-62.199-25.771c-1.036-.431-2.147-.651-3.268-.649-.573.002-1.145.059-1.707.171l-30.908 6.323c-1.983.417-4.043-.2-5.47-1.638l-32.427-32.427c-1.431-1.429-2.049-3.48-1.647-5.461l6.323-30.899c.344-1.669.177-3.402-.478-4.975l-25.754-62.217c-.651-1.578-1.759-2.924-3.183-3.866l-26.317-17.365c-1.688-1.115-2.705-3.003-2.705-5.026z"
      )
      .attr("fill", "#000")
      .attr("transform", "translate(-25, -63) scale(0.028)");

    group
      .append("path")

      .attr(
        "d",
        "M209.63 428.894c1.004.497 2.098.788 3.217.853 28.306 7.293 58 7.293 86.306 0 1.119-.066 2.213-.356 3.217-.853 86.867-23.271 143.033-107.321 131.297-196.482-11.735-89.161-87.737-155.815-177.667-155.815s-165.932 66.654-177.668 155.815 44.431 173.211 131.298 196.482zm12.237-14.447v-66.799c0-3.444-2.07-6.55-5.248-7.876-34.269-14.263-58.13-45.963-62.355-82.841s11.848-73.153 42.003-94.797v94.891c-.033 6.441 3.611 12.337 9.387 15.189l42.445 21.222c4.836 2.62 10.658 2.661 15.531.111l42.487-21.248c5.882-2.812 9.623-8.755 9.617-15.275l.213-94.788c30.057 21.708 46.033 57.967 41.767 94.797s-28.108 68.477-62.332 82.739c-3.178 1.326-5.248 4.432-5.248 7.876v66.799c-22.491 4.915-45.777 4.915-68.267 0zm34.133-320.58c79.522-.034 147.321 57.635 160.046 136.133 12.724 78.497-33.385 154.63-108.846 179.72v-56.525c38.163-18.091 63.939-54.988 67.794-97.046s-14.782-83.026-49.021-107.754c-5.229-3.872-12.198-4.454-17.997-1.502-5.743 2.903-9.348 8.806-9.31 15.241v94.848l-42.666 21.333-42.667-21.333v-94.848c.025-6.422-3.578-12.309-9.31-15.206-5.77-2.936-12.701-2.372-17.92 1.459-34.248 24.715-52.902 65.677-49.062 107.736 3.84 42.06 29.602 78.967 67.759 97.072v56.525c-75.461-25.09-121.57-101.223-108.846-179.721s80.524-136.166 160.046-136.132z"
      )
      .attr("fill", "#000")
      .attr("transform", "translate(-25, -63) scale(0.028)");
  }

  if (groupData.star) {
    group
      .append("polygon")
      .attr("points", "20,0 24,8 33,8 26,14 30,24 20,18 10,24 14,14 7,8 16,8") // Координаты вершин
      .attr("fill", "yellow") // Цвет звездочки
      .attr("stroke", "black") // Цвет контура
      .attr("stroke-width", 1) // Толщина контура
      .attr("transform", "scale(0.5) translate(70, -110) rotate(40)"); // Масштабирование, смещение и поворот звездочки
  }

  /** переменная - разница курсора и начала квадрата по X */
  let GPointX: any;
  /** переменная - разница курсора и начала квадрата по Y */
  let GPointY: any;

  /**
   * Функция для обработки начала перетаскивания,
   * event.x - курсор по Х,
   * this.getAttribute("x") - начала квадрата,
   * @param {*} event
   */
  function dragstarted(event: any) {
    GPointX = event.x - GroupX;
    GPointY = event.y - GroupY;
  }

  /**
   * Функция для обработки перетаскивания,
   * записывает координаты курсора в координаты квадрата,
   * учитыва разницу
   * @param {*} event
   */
  function dragged(event: any) {
    const newX = event.x - GPointX;
    const newY = event.y - GPointY;
    group.attr("transform", `translate(${newX},${newY})`);
    GroupX = newX;
    GroupY = newY;
  }

  /**
     *  Функция для обработки окончания перетаскивания, сбрасывает переменные  GPointX = 0;
      GPointY = 0; (разницу курсора и квадрата)
     */
  function dragended() {
    GPointX = 0;
    GPointY = 0;
  }
}
