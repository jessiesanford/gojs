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

    this.data_ = [
      {
        data: {
          id: "J9KBKG8N",
          name: "Intro",
          type: "sequence",
          x: 0,
          y: 0,
        }
      },
      {
        data: {
          id: 'I02LAAS1',
          name: "Character Creation",
          type: "sequence",
          x: 300,
          y: 0,
        }
      },
      {
        data: {
          id: 'J9KBKG8N_I02LAAS1',
          source: 'J9KBKG8N',
          target: 'I02LAAS1'
        }
      }
    ];
    this.createGOJS();
  }

  get Network() {
    return this.network_;
  }

  createGOJS() {
    var $ = go.GraphObject.make;
    var myDiagram =
      $(go.Diagram, "myDiagramDiv");
    diagram.model = new go.GraphLinksModel(
      [{ key: "Hello" },   // two node data, in an Array
        { key: "World!" }],
      [{ from: "Hello", to: "World!"}]  // one link data, in an Array
    )
  }

  create() {
    this.network_ = cytoscape({
      container: document.getElementsByClassName('cytoscape-container'),

      elements: this.data_,

      style: [
        {
          selector: 'node',
          style: {
            'width': 'label',
            'height': 'label',
            'shape': "round-rectangle",
            'background-color': '#36afe2',
            'label': 'data(name)',
            'color': "#fff",
            'text-color': '#ffffff',
            'text-wrap': 'wrap',
            'text-halign': 'center',
            'text-valign': 'center',
            'padding': "10px",
            'border-radius': '5',
            'font-family': 'Lato'
          },
        },

        {
          selector: 'node:selected',
          style: {
            'border-width': 2,
            'border-color': '#000'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#a0a0a0',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        }
      ],

      layout: {
        name: 'grid',
        rows: 1
      }
    });

    this.updateNodePositions();
    this.network_.fit();

    this.Network.on("select", "node", (e) => {
      let node = e.target;
      // console.log(node);

      // ReactDOM.render(React.createElement(SequenceModal, {
      //   title: "Add Sequence",
      //   action: (state) => {},
      // }), BaseUtils.initReactModalEl());
    });

    // this.Network.on('tap', (e) => {
    //   this.Network.add([{
    //           group: "nodes",
    //           data: {id: BaseUtils.makeRandomID(), name: "Shit"},
    //           renderedPosition: {
    //               x: e.renderedPosition.x,
    //               y: e.renderedPosition.y,
    //           },
    //   }]);
    // });

    this.Network.on('cxttapend', '*', (e) => {
      let writingPane = document.querySelector('.writing-pane');
      !_.isNull(writingPane) ? ReactDOM.unmountComponentAtNode(window.document.querySelector('.writing-pane')) : null;

      if (!writingPane) {
        writingPane = crel("div", {class: 'writing-pane'});
        document.querySelector('.crisp-wrapper').appendChild(writingPane);
      }

      writingPane.style.top = e.renderedPosition.y + "px";
      writingPane.style.left = e.renderedPosition.x + "px";
      writingPane.style.position = "absolute";

      ReactDOM.render(React.createElement(MapContextMenu, {
        target: e.target,
        x: e.renderedPosition.x,
        y: e.renderedPosition.y
      }), writingPane);

      writingPane.addEventListener('contextmenu', (e => {
        e.preventDefault();
        return false;
      }));

    });
  }

  updateNodePositions() {
    _.each(this.data_, element => {
      let data = _.get(element, "data", {});
      if (data.id) {
        let node = this.network_.$(`#${data.id}`);
        node.position({x: data.x, y: data.y});
      }
    });
  }

  addSequence() {

  }
}