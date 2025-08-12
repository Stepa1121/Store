import ProductCart from "@components/product/ProductCart";
import products from "@/data/products.json"

const ProductList = () => {
    return(
        <div className="flex flex-wrap col-span-full justify-center gap-y-20 py-10">
            {products.map((product) => (
                <div 
                    key={product.id}
                    className="w-[32%] tablet:w-[48%] phone:w-full flex justify-center"
                >
                    <ProductCart product={product} />
                </div>
            ))}
        </div>
    )
}

export default ProductList;