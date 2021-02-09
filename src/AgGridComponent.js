import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class AgGridComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'ag grid'
        };
        


    }


    render() {
        return (
            <>
            <div>Add GRID TO React App {this.state.name}</div>
            </>
        );
    }
}

export default AgGridComponent;