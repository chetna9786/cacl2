import React ,{useEffect,useState}from 'react';
import {dummyApi} from './Api'
const Home = (props) => {
    const [data1,setData1] = useState({})


    const data = async() =>{
        const res = await dummyApi()
        setData1(res)
        console.log('renew',res)
    }
    useEffect(()=>{
        data()
    },[])
    console.log(data1)
  return (
    <div>
        {data1.description}
    </div>
  )
}

export default Home;
