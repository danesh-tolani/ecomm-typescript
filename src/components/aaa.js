const data = [
  {
    category: "men's clothing",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    id: 3,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    quantity: 1,
    rating: { rate: 4.7, count: 500 },
    title: "Mens Cotton Jacket",
  },
  {
    category: "men's clothing",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 2,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    quantity: 1,
    rating: { rate: 4.1, count: 259 },
    title: "Mens Casual Premium Slim Fit T-Shirts ",
  },
  {
    category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    quantity: 2,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
];

const lol = data.map((item) => {
  // const storeItem = storeItems.get(item.id);
  return {
    price_data: {
      currency: "usd",

      name: item.title,

      unit_amount: item.price * item.quantity * 100,
    },
    quantity: item.quantity,
  };
});

console.log(lol);
