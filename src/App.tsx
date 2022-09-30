import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./UniversalComponents/Button";


type DataPropsType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {
    const [data, setData] = useState<DataPropsType[]>([])

    const getMeData = () => {
        setData([])
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    },[])

    return (
        <>
            <Button name={'Clean Data'} callback={getMeData}/>
            <ul>
                {data.map(el => {
                    return (
                        <li key={el.id}>{el.title}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default App;
