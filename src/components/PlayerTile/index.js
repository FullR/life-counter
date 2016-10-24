import ReactDOM from "react-dom";
import {React, Component} from "component";
import RaisedButton from "material-ui/RaisedButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentRemove from "material-ui/svg-icons/content/remove";
import FloatingActionButton from "material-ui/FloatingActionButton";
import AutoFocusInput from "components/AutoFocusInput";
import style from "./style.css";

export default class PlayerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingName: false,
      editName: props.player.name
    };
  }

  handleEditName = () => {
    this.setState({editingName: true});
  };

  handleChangeEditName = (event) => {
    this.setState({editName: event.target.value});
  };

  handleChangeName = () => {
    this.setState({
      editingName: false
    });
    this.props.player.setName(this.state.editName);
  };

  handleHoldIncrement = (event) => {
    event.preventDefault();
    this.props.player.life.add(5);
  };

  handleHoldDecrement = (event) => {
    event.preventDefault();
    this.props.player.life.subtract(5);
  };

  render() {
    const {editingName, editName} = this.state;
    const {player} = this.props;

    return (
      <div className={style.root}>
        <div className={style.name}>
          {editingName ?
            <AutoFocusInput value={editName} onChange={this.handleChangeEditName} onBlur={this.handleChangeName}/> :
            <span onClick={this.handleEditName}>{player.name}</span>
          }
        </div>
        <div className={style.lifeCounter}>
          <FloatingActionButton secondary onClick={player.life.decrement} onContextMenu={this.handleHoldDecrement}>
            <ContentRemove/>
          </FloatingActionButton>
          <div className={style.life}>{player.life.value}</div>
          <FloatingActionButton primary onClick={player.life.increment} onContextMenu={this.handleHoldIncrement}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}
