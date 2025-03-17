import AddProduct from "./components/Cart/AddProduct";
import CartCounter from "./components/Cart/CartCounter";
import CartListItems from "./components/Cart/CartListItems";
import OrderSummary from "./components/Cart/OrderSummary";
import SearchCEP from "./components/Cart/SearchCEP";

function App() {
  return (
    <div className="w-270 h-screen mx-auto p-10 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">React Redux Example</h1>
      <header className="px-8 flex items-center justify-between h-14 bg-gray-100 text-gray-600">
        <span className="text-lg font-bold">Logo</span>
        <CartCounter />
      </header>
      <AddProduct />
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl border-b border-b-gray-300 py-4 w-full">
          Seu Carrinho!
        </h2>
        <div className="flex gap-20">
          <CartListItems />
          <div className="flex flex-col gap-2">
            <SearchCEP />
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
