import axios from 'axios';
import {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom';

function Products() {
    const [data, setData] = useState([]);
    const params=useParams()
    const {id}=params
    useEffect(()=>{
        const productsData= async ()=>{
            const response=await axios.get('https://jsonplaceholder.typicode.com/comments');
            setData(response.data)
        }
        productsData()
    })
  return (
    <div>
      {data.map((product) => {
        return(
          <div key={product.id}>
            <h3>{product.title}</h3>
            <Link to={`/products/${id}`} style={{"color":"red"}}>View Details</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Products
