import {React, Component} from "component";
import style from "./style.css";

export default class AutoFocusInput extends Component {
  handleMount = (el) => {
    if(el) el.focus()
  };

  render() {
    return (
      <input ref={this.handleMount} {...this.props}/>
    );
  }
}
