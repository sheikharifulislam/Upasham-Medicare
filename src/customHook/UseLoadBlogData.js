import {useEffect, useState} from 'react';

const useLoadBlogData = () => {
    const [blogData, setBlogData] = useState([]);
    
    useEffect(() => {
        fetch('/blogData.json')
        .then((response) => response.json())
        .then((data) => setBlogData(data))
        .catch((error) => console.log(error.message))
    }, [])
    
    return [blogData]
} 

export default useLoadBlogData;