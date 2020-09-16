import cytoscape from "cytoscape";
import {BaseUtils} from "../utils/baseUtils";
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import {ReactModal} from "./reactModal";
import {SequenceModal} from "./sequenceModal";
import crel from "crel";
import {MapContextMenu} from "./mapContextMenu";
import * as go from "gojs";


export class Visualization {

  constructor() {
    this.create();
  }

  get Network() {
    return this.network_;
  }

  create() {
    let $ = go.GraphObject.make;
    let diagram =
      $(go.Diagram, "myDiagramDiv");
    diagram.model = new go.GraphLinksModel(
      [{ key: "Hello" },   // two node data, in an Array
        { key: "World!" }],
      [{ from: "Hello", to: "World!"}]  // one link data, in an Array
    )
  }

  updateNodePositions() {
  }

  addSequence() {
  }
}