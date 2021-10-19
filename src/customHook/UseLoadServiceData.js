import {useEffect, useState} from 'react';


const UseLoadServiceData = () => {

    const [allTest, setTests] = useState([])

    useEffect(() => {
        fetch('/serviceData.json')
        .then((response) => response.json())
        .then((data) => setTests(data))
    }, [])

    return [allTest];
};

export default UseLoadServiceData;