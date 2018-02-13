import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./types";
import Links from "./Links";
import Nodes from "./Nodes";
import Labels from "./Labels";
import "./App.css";

interface Props {
  width: number;
  height: number;
  graph: d3Types.d3Graph;
}
class App extends React.Component<Props, {}> {
  ref: SVGSVGElement;
  simulation: any;
  constructor(props: Props) {
    super(props);
    this.simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3
          .forceLink()
          .id(function(d: d3Types.d3Node) {
            return d.id;
          })
          .distance(function(d: any) {
            return 500;
          })
      )
      .force(
        "collision",
        d3.forceCollide().radius(function(d: any) {
          return 30;
        })
      )
      .force("charge", d3.forceManyBody)
      .force(
        "center",
        d3.forceCenter(this.props.width / 2, this.props.height / 2)
      )

      .nodes(this.props.graph.nodes);
    this.simulation.force("link").links(this.props.graph.links);
  }
  componentDidMount() {
    const link = d3.selectAll(".link");
    const node = d3.selectAll(".node");
    const label = d3.selectAll(".label");
    this.simulation.nodes(this.props.graph.nodes).on("tick", ticked);

    function ticked() {
      link
        .attr("x1", function(d: any) {
          return d.source.x;
        })
        .attr("y1", function(d: any) {
          return d.source.y;
        })
        .attr("x2", function(d: any) {
          return d.target.x;
        })
        .attr("y2", function(d: any) {
          return d.target.y;
        });
      node
        .attr("cx", function(d: any) {
          return d.x;
        })
        .attr("cy", function(d: any) {
          return d.y;
        });
      label
        .attr("x", function(d: any) {
          return d.x - 5;
        })
        .attr("y", function(d: any) {
          return d.y - 5;
        });
    }
  }
  render() {
    const { width, height, graph } = this.props;
    return (
      <svg className="container" width={width} height={height}>
        <Links links={graph.links} />
        <Nodes nodes={graph.nodes} simulation={this.simulation} />
        <Labels nodes={graph.nodes} />
      </svg>
    );
  }
}

export default App;
