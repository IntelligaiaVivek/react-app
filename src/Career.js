
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
// class Career extends React.Component {



//     render() {
//         const {fname} = useParams();
//         return (
//             <>
//             <div>CAREER {fname}</div>
//             </>
//         );
//     }
// }

const Career = () => {
    const { id } = useParams();
    useEffect(() => {
        async function getData() {
        const res = await axios.get('https://reqres.in/api/users/'+id);
        console.log('THIS IS MY API RESPONSE----->', res);
        }

        getData();
    })
    return (
        <>
            <div>CAREER {id} {}</div>
        </>

    )
}

export default Career;