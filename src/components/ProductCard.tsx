import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions";
import { toast } from "react-toastify";

const ProductCard = ({
  id,
  name,
  price,
  img,
}: {
  id: number;
  name: string;
  price: number;
  img: string;
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const product = { id, name, price, img };
    dispatch(addToCart(product));

    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      style: {
        background: "#f8f7f2",
        fontFamily: "inherit",
      },
    });
  };

  return (
    <div className="product-card flex flex-col items-center gap-2">
      <div className="product-img">
        <img src={img} alt="productImage" />
      </div>
      <div className="text-center">
        <h2 className="product-name text-lg">{name}</h2>
        <p className="product-price text-sm text-textgray">₹ {price}</p>
      </div>
      <button className="themebutton w-full" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
