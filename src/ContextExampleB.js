import React, {useContext} from 'react';
import { FirstName } from './AgGridComponent';

const ContextExampleB = () => {
    const fname = useContext(FirstName);
    return (
        <>
        <div>Context B with user name {fname} Dip</div>
        {/* <FirstName.Consumer>
            {(fname) =>{
                return (
                    <div>Context B with user name {fname} Dip</div>
                )
            }}
        </FirstName.Consumer> */}
       
        </>
    );
}


export default ContextExampleB;