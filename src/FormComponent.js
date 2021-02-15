import React from 'react';

class FormComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fname: ''
        };
    }

    render(){
        return (
            <>
            <div>FILL FORMS</div>
            </>
        )
    }
}

export default FormComponent;