import { useCallback, useState } from "react";
import { useAppDispatch } from "../../store";
import { CartItem, cartSlice } from "../../store/cart/cartSlice";

const productList = [
  {
    id: "abcd1",
    name: "Camisa",
    price: 95.64,
    imageURL:
      "https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["Azul", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "abcd2",
    name: "Calça",
    price: 78.32,
    imageURL:
      "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["Azul", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "abcd3",
    name: "Tênis",
    price: 27.81,
    imageURL:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["Azul", "Preto", "Branco"],
    sizes: ["38", "39", "40", "41"],
  },
];

export default function AddProduct() {
  const dispatch = useAppDispatch();

  const [productId, setProductId] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qtd, setQtd] = useState(1);

  const getCartItemInfo = useCallback(() => {
    const product = productList.find((product) => product.id === productId);

    if (!product) return;

    const cartItem: CartItem = {
      id: Math.random().toString(36).substring(2),
      productId,
      name: product!.name,
      imageURL: product!.imageURL,
      price: product!.price,
      qtd,
      color,
      size,
    };

    return cartItem;
  }, [productId, qtd, color, size]);

  return (
    <div className="w-full flex items-center gap-4">
      <div className="flex flex-col gap-1 min-w-57 w-full">
        <label htmlFor="product">Produto</label>
        <select
          id="product"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full border border-gray-300 py-2 px-2 outline-none "
        >
          <>
            <option key={"product-selecione"} value=""></option>
            {productList.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - {"$ " + product.price.toFixed(2)}
              </option>
            ))}
          </>
        </select>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="color">Cor</label>
        <select
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full border border-gray-300 py-2 px-2 outline-none"
        >
          <>
            <option key={"color-selecione"} value=""></option>
            {productList
              .find((product) => product.id === productId)
              ?.colors.map((color, i) => (
                <option key={color + "-" + i} value={color}>
                  {color}
                </option>
              ))}
          </>
        </select>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="size">Tamanho</label>
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border border-gray-300 py-2 px-2 outline-none"
        >
          <>
            <option key={"size-selecione"} value=""></option>
            {productList
              .find((product) => product.id === productId)
              ?.sizes.map((size, i) => (
                <option key={size + "-" + i} value={size}>
                  {size}
                </option>
              ))}
          </>
        </select>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="qtd">Quantidade</label>
        <input
          id="qtd"
          min={1}
          type="number"
          value={qtd}
          onChange={(e) => setQtd(Number(e.target.value))}
          className="w-full border border-gray-300 py-2 px-2 outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-1 h-full">
        <button
          onClick={() => {
            const cartItem = getCartItemInfo();
            if (cartItem) {
              setProductId("");
              setColor("");
              setSize("");
              setQtd(1);
              dispatch(cartSlice.actions.addItemToCart(cartItem));
            }
          }}
          type="button"
          className="mt-auto w-full py-2 bg-blue-500 text-white cursor-pointer"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
