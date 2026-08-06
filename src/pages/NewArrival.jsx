import { useMemo, useState } from "react";

import Breadcrumb from "../components/Breadcrumb";
import FilterSidebar from "../components/FilterSidebar";
import SizeFilter from "../components/SizeFilter";
import SortBar from "../components/SortBar";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";

import products from "../data/products";

const NewArrival = () => {
  const [price, setPrice] = useState(5000);
  const [availability, setAvailability] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [sortOption, setSortOption] = useState("latest");

  // Filter Products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Price Filter
    filtered = filtered.filter((product) => product.price <= price);

    // Availability Filter
    if (availability) {
      filtered = filtered.filter((product) => product.stock === true);
    }

    // Category Filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Size Filter
    if (selectedSize) {
      filtered = filtered.filter((product) =>
        product.sizes.includes(selectedSize)
      );
    }

    // Sorting
    switch (sortOption) {
      case "lowToHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "highToLow":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "nameAZ":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "nameZA":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [
    price,
    availability,
    selectedCategories,
    selectedSize,
    sortOption,
  ]);

  return (
    <>
    <Navbar />
      <Breadcrumb currentPage="New Arrival" />

      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar */}

          <div>
            <FilterSidebar
              price={price}
              setPrice={setPrice}
              availability={availability}
              setAvailability={setAvailability}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>

          {/* Products */}

          <div className="lg:col-span-3">

            <SizeFilter
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            <SortBar
              totalProducts={filteredProducts.length}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />

            <ProductGrid products={filteredProducts} />

          </div>

        </div>

      </section>
    </>
  );
};

export default NewArrival;