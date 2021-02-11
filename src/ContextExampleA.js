import React from 'react';
import ContextExampleB from './ContextExampleB';

class ContextExampleA extends React.Component {
    render() {
        return (
            <>
            <div>Context A calling b <ContextExampleB/></div>
            </>
        );
    }
}

export default ContextExampleA;