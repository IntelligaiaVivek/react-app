
import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './TableComponent';
import TimeComponent from './TimeComponent';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './index.css';


export default function SimpleMenu(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log('OPEN', event);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

class MainComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideComponent1: false,
      showHideComponent2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);

    
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideComponent1":
        this.setState({ showHideComponent1: !this.state.showHideComponent1 });
        break;
      case "showHideComponent2":
        this.setState({ showHideComponent2: !this.state.showHideComponent2 });
        break;
    }
  }

  render() {
    const { showHideComponent1, showHideComponent2 } = this.state;
    
    return (
      <div>
        
        {/* <div className="MuiSvgIcon-root">
          <AppBar position="static">
            <Toolbar>
            <SimpleMenu/>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div> */}


        <div className="buttonComponent">
          <button className="tableComponent" onClick={() => this.hideComponent("showHideComponent1")}>
           Toggle Table component
          </button>
          <br/>
          <br/>
          <button className="timeComponent" onClick={() => this.hideComponent("showHideComponent2")}>
            Toggle Time component
          </button>
          <div className="header">
            <h1>
              WELCOME TO REACT PLATE
            </h1>
          </div>
        </div>
        {showHideComponent1 && <TableComponent />}
        <hr />
        {showHideComponent2 && <TimeComponent />}
       
      </div>
    );
  }
}
ReactDOM.render(<> <MainComponent /></>, document.getElementById('root'));

