import ProductCard from "./ProductCard";

import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";
import product5 from "../assets/products/product5.jpg";
import product6 from "../assets/products/product6.jpg";
import product7 from "../assets/products/product7.jpg";
import product8 from "../assets/products/product8.jpg";

const products = [
  {
    id: 1,
    image: product1,
    name: "Women's Black Dress",
    category: "Dress",
    price: 799,
    oldPrice: 999,
    badge: "-20%",
  },
  {
    id: 2,
    image: product2,
    name: "Pink Casual Top",
    category: "Top",
    price: 699,
    oldPrice: 899,
    badge: "New",
  },
  {
    id: 3,
    image: product3,
    name: "Party Dress",
    category: "Dress",
    price: 1299,
    oldPrice: 1599,
    badge: "Hot",
  },
  {
    id: 4,
    image: product4,
    name: "Women's Jacket",
    category: "Jacket",
    price: 1499,
    oldPrice: 1799,
    badge: "Sale",
  },
  {
    id: 5,
    image: product5,
    name: "Blue Denim",
    category: "Denim",
    price: 999,
    oldPrice: 1299,
    badge: "-15%",
  },
  {
    id: 6,
    image: product6,
    name: "Summer Dress",
    category: "Dress",
    price: 899,
    oldPrice: 1099,
    badge: "New",
  },
  {
    id: 7,
    image: product7,
    name: "Men's Hoodie",
    category: "Hoodie",
    price: 1399,
    oldPrice: 1699,
    badge: "Hot",
  },
  {
    id: 8,
    image: product8,
    name: "White Sneakers",
    category: "Shoes",
    price: 1899,
    oldPrice: 2199,
    badge: "-10%",
  },
];

function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;