import { useAppSelector } from "../../store";

export default function OrderSummary() {
  const subtotal = useAppSelector((state) => state.cart.subTotal);
  const tax = useAppSelector((state) => state.cart.tax);

  return (
    <div className="flex flex-col border border-gray-300 px-2 py-1 w-85 h-fit gap-1">
      <h3 className="text-gray-500 font-semibold text-2xl">Resumo</h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-700 ">Sub Total</span>
        <span className="text-gray-800 font-semibold">
          $ {subtotal.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-700 ">Frete</span>
        <span className="text-gray-800 font-semibold">$ {tax.toFixed(2)}</span>
      </div>
      <div className="border-b border-gray-400 w-full my-5"></div>
      <div className="flex items-center justify-between">
        <span className="text-gray-700 ">Total</span>
        <span className="text-gray-800 font-semibold">
          $ {(subtotal + tax).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
