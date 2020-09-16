import React from "react";
import _ from "lodash";

export class MapContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let options = this.getOptions();
    return (
      <div className="cxtmenu-options-list">
        {options}
      </div>
    )
  }

  getOptions() {
    let options = {};
    let optionEls = [];
    if (this.props.target.group() === "nodes") {
      options.edit = "Edit";
      options.delete = "Delete";
    }

    _.each(_.keys(options), (key) => {
      switch (key) {
        case "edit":
          optionEls.push(<div key={key} className="cxtmenu-option">{options[key]}</div>)
          break;
        case "delete":
          optionEls.push(<div key={key} className="cxtmenu-option">{options[key]}</div>)
      }
    });

    return optionEls;
  }
}

class MapContextMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
}