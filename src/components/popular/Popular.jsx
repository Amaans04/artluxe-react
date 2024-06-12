import React, {useState,useEffect} from 'react'
import './Popular.css';
import data_product from '../assets/data'
import Item from '../items/Item';
// import p5_img from '../assets/product_5.png'
const Popular = () => {
//   return (
    // <div className='popular'>
    //   <h1>HOLD ALLS</h1>
    //   <hr/>
    //   <div className="popular-item">
    //     {data_product.map((item,i)=>{
    //         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

    //     })}
    //   </div>
    // </div>
//   )
    const [products, setProducts] = useState([]);

      useEffect(() => {
        setProducts(data_product);
      }, []);

      return (
        <div className='popular'>
            <div className="product-list">
                {products.map(item => (
                  <Item key={item.id} item={item} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              ))}
            </div>
            {/* <div className="promotional-image">
            <img src={p5_img} alt="Promotional" />
                <div className="promotional-text">
                  <h2>LIFETIME PROMISE</h2>
                  <p>Our confidence in our products is absolute</p>
                  <a href="#" className="read-more">READ MORE</a>
                </div>
          </div> */}
        </div>
        
      );
}

export default Popular
