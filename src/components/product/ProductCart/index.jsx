import './productcart.css';
import { useSpring, animated } from '@react-spring/web'



const ProductCart = ({ product }) => {
    const { 
        id,
        title,
        description,
        price,
        discount_price,
        image,
        stock
    } = product;

    //Через "@" нельзя доавлять пути в img
    return (
        <div className="product-cart flex flex-col gap-y-3 w-3/5 rounded-[30px] pb-3 ">
            <div className="product-image-container rounded-lg">
                <img src={product.image} className="rounded-[30px]"/> 
            </div>
            <div className="product-title-container text-center text-white">
                <h3>{product.title}</h3>
            </div>
            <div className="product-price-container text-center text-white">
                <h3>{product.price - product.discount_price}</h3>
            </div>
        </div>
    )
}

export default ProductCart;