import React from "react"

import { Graph } from "react-d3-graph"

function App() {
  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: 'Series 1',
  //       data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
  //     },
  //     {
  //       label: 'Series 2',
  //       data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
  //     },
  //     {
  //       label: 'Series 3',
  //       data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
  //     }
  //   ],
  //   []
  // )

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: 'linear', position: 'bottom' },
  //     { type: 'linear', position: 'left' }
  //   ],
  //   []
  // )

  const data = {
    nodes: [
      {
        id: "Harry",
        svg:
          "http://marvel-force-chart.surge.sh/marvel_force_chart_img/marvel.png",
        size: 500,
        fontSize: 18,
      },
      { id: "Sally" },
      { id: "Alice" },
      { id: "dasd" },
    ],
    links: [
      { source: "Harry", label: "di", target: "Sally" },
      { source: "Alice", target: "Harry" },
    ],
  }

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    directed: true,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: 400,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    width: 800,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
      disableLinkForce: false,
    },
    node: {
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 10,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 14,
      highlightFontWeight: "bold",
      highlightStrokeColor: "red",
      highlightStrokeWidth: 1.5,
      mouseCursor: "crosshair",
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeColor: "none",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle",
    },
    link: {
      color: "lightgray",
      fontColor: "black",
      fontSize: 8,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 8,
      highlightFontWeight: "normal",
      labelProperty: "label",
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: true,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      markerHeight: 6,
      markerWidth: 6,
    },
  }

  // graph event callbacks
  const onClickGraph = function () {
    window.alert(`Clicked the graph background`)
  }

  const onClickNode = function (nodeId) {
    window.alert(`Clicked node ${nodeId}`)
  }

  const onDoubleClickNode = function (nodeId) {
    window.alert(`Double clicked node ${nodeId}`)
  }

  const onRightClickNode = function (event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`)
  }

  const onMouseOverNode = function (nodeId) {
    window.alert(`Mouse over node ${nodeId}`)
  }

  const onMouseOutNode = function (nodeId) {
    window.alert(`Mouse out node ${nodeId}`)
  }

  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`)
  }

  const onRightClickLink = function (event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`)
  }

  const onMouseOverLink = function (source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`)
  }

  const onMouseOutLink = function (source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`)
  }

  const onNodePositionChange = function (nodeId, x, y) {
    window.alert(
      `Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`
    )
  }

  return (
    // <div
    //   style={{
    //     width: '400px',
    //     height: '300px'
    //   }}
    // >
    //   <Chart data={data} axes={axes} />
    // </div>
    <div>
      <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onDoubleClickNode={onDoubleClickNode}
        onRightClickNode={onRightClickNode}
        onClickGraph={onClickGraph}
        onClickLink={onClickLink}
        onRightClickLink={onRightClickLink}
        onMouseOverNode={onMouseOverNode}
        onMouseOutNode={onMouseOutNode}
        onMouseOverLink={onMouseOverLink}
        onMouseOutLink={onMouseOutLink}
        onNodePositionChange={onNodePositionChange}
      />
    </div>
  )
}
export default App
