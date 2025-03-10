const ProductCard = ({
  name,
  price,
  img,
}: {
  name: string;
  price: number;
  img: string;
}) => {
  return (
    <div className="product-card flex flex-col items-center gap-2">
      <div className="product-img">
        <img src={img} alt="productImage" />
      </div>
      <div className="text-center">
        <h2 className="product-name text-lg">{name}</h2>
        <p className="product-price text-sm text-textgray">₹ {price}</p>
      </div>
      <button className="themebutton w-full">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
