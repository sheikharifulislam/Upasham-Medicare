import {useEffect, useState} from 'react';

const UseLoadDoctorData = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorData.json')
        .then((response) => response.json())
        .then((data) => setDoctors(data))
    }, [])

    return [doctors];
};

export default UseLoadDoctorData;