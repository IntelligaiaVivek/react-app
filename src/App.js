import React from 'react';
import TableComponent from './TableComponent';
import TimeComponent from './TimeComponent';
import UserList from './UserList';
import About from './About';
import Career from './Career';
import Error from './Error';
import Home from './Home';


import './index.css';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'

import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            showHideComponent1: false,
            showHideComponent2: false,
            persons: [],
            activeItem: 'home'
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

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.state.persons = res.data;
                console.log('THE PERSONS STAte', this.state.persons)
                this.setState({ persons: this.state.persons });
            })

        // logic to get CURRENT URL PATH to highlight routing menu link
        const pathName = window.location.pathname.substring(1).length ? window.location.pathname.substring(1) : 'home';

        this.setState({ activeItem: pathName })
    }




    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {


        const { showHideComponent1, showHideComponent2 } = this.state;
        const { activeItem } = this.state


        console.log('THE STATUW IN RENDED');
        return (



            <div>
                <div className="buttonComponent">
                    <button className="tableComponent" onClick={() => this.hideComponent("showHideComponent1")}>
                        Toggle Table component
              </button>
                    <br />
                    <br />
                    <button className="timeComponent" onClick={() => this.hideComponent("showHideComponent2")}>
                        Toggle Time component
              </button>
                    <div className="header">
                        <h1>
                            WELCOME TO REACT PLATE
                </h1>
                    </div>
                </div>



                <Segment inverted>
                    <Menu inverted pointing secondary>
                        <Menu.Item href='/home'
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item href='/about'
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item href='/career'
                            name='career'
                            active={activeItem === 'career'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Segment>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/career/:id" component={Career} />
                    <Route component={Error} />
                </Switch>



                {!showHideComponent1 && !showHideComponent2 && <UserList userList={this.state.persons}></UserList>}
                {showHideComponent1 && <TableComponent />}
                <hr />
                {showHideComponent2 && <TimeComponent />}

            </div>
        );
    }
}

export default App;