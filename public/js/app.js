import _ from "lodash";
import {Visualization} from "../../src/rendering/visualization";

function initCrisp() {
    window.visualization = new Visualization();
    buildNavigation();

}

function buildNavigation() {
    let navEl = _.first(document.getElementsByClassName('crisp-nav'));
}

function main() {
    initCrisp();
}

main();

