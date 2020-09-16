import React from "react";
import {BaseUtils} from "../utils/baseUtils";
import {ReactModal} from "./reactModal";

export class SequenceModal extends ReactModal {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderModalBody() {
    return (
      <div className="modal-container__body">
        Content Goes Here
      </div>
    );
  }
}