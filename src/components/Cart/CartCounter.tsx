import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../../store";

export default function CartCounter() {
  const count = useAppSelector((state) => state.cart.count);

  return (
    <button className="cursor-pointer relative">
      <ShoppingCart size={22} />

      {count > 0 && (
        <span className="bg-red-600 text-white text-xs absolute rounded-full flex items-center justify-center -bottom-4 -right-4 w-5 h-5">
          {count}
        </span>
      )}
    </button>
  );
}
