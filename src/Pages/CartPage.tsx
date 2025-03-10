import { Link } from "react-router-dom";
import CartComponent from "../components/CartComponent";

const CartPage = () => {
  const cart: {
    id: number;
    img: string;
    name: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 1,
      img: "./4.jpg",
      name: "Gucci T-Shirt",
      price: 100,
      quantity: 1,
    },
  ];

  return (
    <section className="py-11">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bold text-xl uppercase text-center">CART</h2>
        <div id="cart-items" className="mt-16">
          <div className="flex flex-col gap-5">
            {cart.length > 0 ? (
              cart.map(
                ({
                  id,
                  img,
                  name,
                  price,
                  quantity,
                }: {
                  id: number;
                  img: string;
                  name: string;
                  price: number;
                  quantity: number;
                }) => (
                  <CartComponent
                    id={id}
                    img={img}
                    name={name}
                    price={price}
                    quantity={quantity}
                  />
                )
              )
            ) : (
              <div className="flex flex-col gap-5 items-center bg-themegray p-8 rounded">
                <p className="text-center text-lg">Your Cart is Empty.</p>
                <Link to={"/"}>
                  <button className="themebutton w-fit ">
                    Continue Shoppingg
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
