import {React, Component} from "component";
import {Provider} from "mobx-react";
import {StickyContainer, Sticky} from "react-sticky";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ContentAdd from "material-ui/svg-icons/content/add";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import PlayerTile from "components/PlayerTile";
import {playerList} from "store";
import style from "./style.css";

export default class Application extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <StickyContainer className={style.stickyContainer}>
          <Sticky className={style.sticky}>
            <AppBar
              title="Life Counter"
              iconElementLeft={<IconButton onClick={playerList.addPlayer}><ContentAdd/></IconButton>}
            />
          </Sticky>
          <div className={style.content}>
            {playerList.players.map((player) =>
              <PlayerTile key={player.id} player={player}/>
            )}
          </div>
        </StickyContainer>
      </MuiThemeProvider>
    );
  }
}
