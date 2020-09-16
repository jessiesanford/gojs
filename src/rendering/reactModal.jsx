import React from "react";
import {BaseUtils} from "../utils/baseUtils";

export class ReactModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.doAction = this.doAction.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.handleAfterOpen();
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-mask" />
        <div className="modal-container">
          {this.renderModalHeader()}
          {this.renderModalClose()}
          {this.renderModalBody()}
          {this.renderModalControls()}
        </div>
      </div>
    );
  }

  renderModalHeader() {
    return (
      <div className="modal-container__heading">
        <div className="modal-heading__title">
          {this.props.title}
        </div>
      </div>
    );
  }

  renderModalClose() {
    return (
      <div className="modal-close" onClick={this.handleCloseModal}><i className="fa fa-times" /></div>
    )
  }

  renderModalBody() {
    return (
      <div className="modal-container__body">
        Content Goes Here
      </div>
    );
  }

  renderModalControls() {
    return (
      <div className="modal-container__controls">
        <button className="btn btn--alt push-right-5" onClick={this.handleCloseModal}>{this.props.cancelBtnText || "Cancel"}</button>
        <button className="btn" onClick={this.doAction}>{this.props.confirmBtnText || "OK"}</button>
      </div>
    );
  }

  handleCloseModal() {
    BaseUtils.unmountReactModal();
  }

  handleAfterOpen() {
    BaseUtils.makeDraggable('.modal-container', 'modal-container__heading');
    let h = window.innerHeight;
    let d = document.querySelector(".modal-container");
    let dh = d.clientHeight;
    let dw = d.clientWidth;
    if (d) {
      d.style.top = (h / 2) - (dh / 2) + "px";
    }
  }

  doAction() {
    this.handleCloseModal();
    this.props.action(this.state);
  }

}