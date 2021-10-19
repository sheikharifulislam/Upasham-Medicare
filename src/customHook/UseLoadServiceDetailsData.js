import { useEffect, useState } from "react"

const UseServiceDetailsData = () => {
    const [detailsData, setDetailsData] = useState([]);
    useEffect(() => {
        fetch('/serviceDetailsData.json')
        .then((response) => response.json())
        .then((data) => setDetailsData(data))
        .catch((error) => console.log(error.message));
    }, []);

    return [detailsData];
} 


export default UseServiceDetailsData;