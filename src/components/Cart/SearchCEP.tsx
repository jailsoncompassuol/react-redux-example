import { Search, Loader } from "lucide-react";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../../store";
import { cartSlice } from "../../store/cart/cartSlice";

export default function SearchCEP() {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [cep, setCep] = useState("");

  const handleGetCEP = useCallback(() => {
    setIsLoading(true);
    const cepFormated = cep.replace(/\D/gi, "");
    if (cepFormated.length !== 8) return;
    fetch(`https://viacep.com.br/ws/${cepFormated}/json/`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(cartSlice.actions.updateTax(Number(data.siafi / 100)));
        setIsLoading(false);
      });
  }, [cep, dispatch]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-700 ">CEP</span>
      <input
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        type="text"
        placeholder="12345-678"
        className="w-full outline-none border border-gray-300 px-2 py-1 rounded text-sm text-center"
      />
      <button
        onClick={handleGetCEP}
        disabled={isLoading}
        type="button"
        className="cursor-pointer bg-blue-500 text-white px-2 py-2 rounded"
      >
        {isLoading ? <Loader className="animate-spin" /> : <Search size={16} />}
      </button>
    </div>
  );
}
