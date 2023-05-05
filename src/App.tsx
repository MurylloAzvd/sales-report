import React, { useState } from "react";

const categories = [
  {
    label: "Comida",
    value: "food",
    products: [
      {
        label: "Cereal",
        value: "cereal",
        brands: [
          {
            label: "Cereal1",
            value: "cereal1",
          },
          {
            label: "Cereal2",
            value: "cereal2",
          },
        ],
      },
      {
        label: "Banana",
        value: "banana",
        brands: [
          {
            label: "Banana1",
            value: "banana1",
          },
          {
            label: "Banana2",
            value: "banana2",
          },
        ],
      },
      {
        label: "Sorvete",
        value: "ice-cream",
        brands: [
          {
            label: "Sorvete1",
            value: "ice-cream1",
          },
          {
            label: "Sorvete2",
            value: "ice-cream2",
          },
        ],
      },
    ],
  },
  {
    label: "Roupas",
    value: "clothes",
    products: [
      {
        label: "Vestido",
        value: "dress",
        brands: [
          {
            label: "Vestido1",
            value: "dress1",
          },
          {
            label: "Vestido2",
            value: "dress2",
          },
        ],
      },
      {
        label: "Terno",
        value: "suit",
        brands: [
          {
            label: "Terno1",
            value: "suit1",
          },
          {
            label: "Terno2",
            value: "suit2",
          },
        ],
      },
      {
        label: "Camisa",
        value: "shirt",
        brands: [
          {
            label: "Camisa1",
            value: "shirt1",
          },
          {
            label: "Camisa2",
            value: "shirt2",
          },
        ],
      },
    ],
  },
  {
    label: "Eletrodoméstico",
    value: "appliances",
    products: [
      {
        label: "TV",
        value: "tv",
        brands: [
          {
            label: "TV1",
            value: "tv1",
          },
          {
            label: "TV2",
            value: "tv2",
          },
        ],
      },
      {
        label: "Airfryer",
        value: "airfryer",
        brands: [
          {
            label: "Airfryer1",
            value: "airfryer1",
          },
          {
            label: "Airfryer2",
            value: "airfryer2",
          },
        ],
      },
    ],
  },
];

const firstCategory = categories[0];
const firstProduct = firstCategory.products[0];
const firstBrand = firstProduct.brands[0];

function App() {
  const [filter, setFilter] = useState({
    category: firstCategory.value,
    product: firstProduct.value,
    brand: firstBrand.value,
  });

  const findCategory = (value: string) =>
    categories.find((category) => category.value === value);

  const products = findCategory(filter.category)?.products;

  const findProduct = (value: string) =>
    products?.find((product) => product.value === value);

  const brands = findProduct(filter.product)?.brands;

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = findCategory(event.target.value);
    const newProduct = newCategory?.products[0];
    const newBrand = newProduct?.brands[0];

    if (newCategory && newProduct && newBrand) {
      setFilter({
        category: newCategory.value,
        product: newProduct?.value,
        brand: newBrand?.value,
      });
    }
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newProduct = findProduct(event.target.value);
    const newBrand = newProduct?.brands[0];

    if (newProduct && newBrand) {
      setFilter({
        ...filter,
        product: newProduct.value,
        brand: newBrand?.value,
      });
    }
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      brand: event.target.value,
    });
  };

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <label htmlFor="categories">Categorias</label>
        <select
          id="categories"
          value={filter.category}
          onChange={handleCategoryChange}
        >
          {categories.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="products">Produtos</label>
        <select
          id="products"
          value={filter.product}
          onChange={handleProductChange}
        >
          {products?.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="brands">Marca</label>
        <select id="brands" value={filter.brand} onChange={handleBrandChange}>
          {brands?.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
