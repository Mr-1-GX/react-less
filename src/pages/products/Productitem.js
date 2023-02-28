
export const ProductItem = ({ product }) => {
    return (
        <div>
            <h4>{product.name},  ფასი: {product.price}$</h4>
            <h3>
                კატეგორია - {product.category},
            </h3>
            <h4>{product.stock ? 'მარაგშია' : 'არარის'}</h4>
        </div>
    )
}