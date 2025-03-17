import { Minus, Plus, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartSlice } from "../../store/cart/cartSlice";

export default function CartListItems() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="flex flex-col w-full gap-2">
      {items?.map((item) => (
        <div className="flex w-full items-center justify-between" key={item.id}>
          <img
            src={item.imageURL}
            alt={item.name}
            className="w-14 h-14 object-cover"
          />
          <span className="text-xl">{item.name}</span>
          <span className="text-xl">{item.color}</span>
          <span className="text-xl">{item.size}</span>
          <span className="text-xl">$ {item.price.toFixed(2)}</span>
          <div className="flex items-center justify-between gap-8 border border-gray-300">
            <button
              onClick={() =>
                dispatch(cartSlice.actions.decrementQtdItem(item.id))
              }
              className="h-10 w-10 flex justify-center items-center  cursor-pointer"
            >
              <Minus size={18} />
            </button>
            <span>{item.qtd}</span>
            <button
              onClick={() =>
                dispatch(cartSlice.actions.incrementQtdItem(item.id))
              }
              className="h-10 w-10 flex justify-center items-center  cursor-pointer"
            >
              <Plus size={18} />
            </button>
          </div>
          <button
            onClick={() =>
              dispatch(cartSlice.actions.removeItemFromCart(item.id))
            }
            className="h-10 w-10 flex justify-center items-center bg-gray-100 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
