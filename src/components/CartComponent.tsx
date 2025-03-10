const CartComponent = ({
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
}) => {
  return (
    <div
      className="border p-2 flex flex-col md:flex-row justify-between items-center md:gap-0 gap-5"
      key={id}
    >
      <div className="flex flex-row gap-5 items-center">
        <img src={img} className="w-40 h-40" />{" "}
        <div className="w-fit">
          <h4>{name}</h4>
          <p>Rs. {price}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:mr-7">
        <div className="flex flex-row gap-5 items-center justify-center border px-2 py-1 rounded">
          <span className="text-2xl cursor-pointer">-</span>
          <p>{quantity}</p>
          <span className="text-2xl cursor-pointer">+</span>
        </div>
        <button className="themebutton_delete">Delete</button>
      </div>
    </div>
  );
};

export default CartComponent;
