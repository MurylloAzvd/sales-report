import React, { useState } from "react";
import { SalesChart } from "./components/SalesChart";
import { SalesSelect } from "./components/SalesSelect";
import "./App.css";

type Option = {
  label: string;
  value: string;
  salesData?: number[];
};

type SelectOptions = {
  [key: string]: Option[];
};

const categories: Option[] = [
  {
    label: "Comida",
    value: "food",
  },
  {
    label: "Roupas",
    value: "clothes",
  },
  {
    label: "Eletrodoméstico",
    value: "appliances",
  },
];

const products: SelectOptions = {
  food: [
    {
      label: "Cereal",
      value: "cereal",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Sorvete",
      value: "icecream",
    },
  ],
  clothes: [
    {
      label: "Vestido",
      value: "dress",
    },
    {
      label: "Terno",
      value: "suit",
    },
    {
      label: "Camisa",
      value: "shirt",
    },
  ],
  appliances: [
    {
      label: "TV",
      value: "tv",
    },
    {
      label: "Airfryer",
      value: "airfryer",
    },
  ],
};

const brands: SelectOptions = {
  cereal: [
    {
      label: "Cereal1",
      value: "cereal1",
      salesData: [539, 256, 383, 12, 491, 228, 513, 41, 144, 87, 486, 72],
    },
    {
      label: "Cereal2",
      value: "cereal2",
      salesData: [442, 306, 187, 300, 528, 178, 407, 323, 214, 293, 307, 146],
    },
  ],
  banana: [
    {
      label: "Banana1",
      value: "banana1",
      salesData: [277, 530, 218, 215, 568, 369, 594, 42, 22, 220, 143, 237],
    },
    {
      label: "Banana2",
      value: "banana2",
      salesData: [309, 265, 99, 585, 117, 435, 437, 234, 397, 356, 177, 253],
    },
  ],
  icecream: [
    {
      label: "Sorvete1",
      value: "icecream1",
      salesData: [191, 357, 217, 121, 577, 287, 358, 80, 192, 72, 312, 146],
    },
    {
      label: "Sorvete2",
      value: "icecream2",
      salesData: [141, 598, 133, 446, 128, 33, 317, 15, 235, 250, 496, 380],
    },
  ],
  dress: [
    {
      label: "Vestido1",
      value: "dress1",
      salesData: [391, 363, 40, 326, 307, 110, 65, 245, 189, 139, 233, 583],
    },
    {
      label: "Vestido2",
      value: "dress2",
      salesData: [545, 265, 300, 216, 487, 554, 130, 329, 449, 81, 590, 17],
    },
  ],
  suit: [
    {
      label: "Terno1",
      value: "suit1",
      salesData: [224, 433, 99, 560, 115, 67, 551, 65, 524, 264, 145, 345],
    },
    {
      label: "Terno2",
      value: "suit2",
      salesData: [472, 392, 85, 487, 417, 36, 360, 522, 277, 117, 208, 259],
    },
  ],
  shirt: [
    {
      label: "Camisa1",
      value: "shirt1",
      salesData: [94, 442, 39, 115, 328, 491, 563, 508, 169, 566, 442, 250],
    },
    {
      label: "Camisa2",
      value: "shirt2",
      salesData: [432, 228, 144, 533, 427, 388, 68, 465, 399, 337, 161, 569],
    },
  ],
  tv: [
    {
      label: "TV1",
      value: "tv1",
      salesData: [578, 98, 496, 80, 277, 150, 563, 114, 368, 308, 399, 290],
    },
    {
      label: "TV2",
      value: "tv2",
      salesData: [537, 45, 546, 408, 421, 37, 359, 60, 433, 312, 150, 518],
    },
  ],
  airfryer: [
    {
      label: "Airfryer1",
      value: "airfryer1",
      salesData: [33, 45, 179, 84, 499, 109, 114, 157, 362, 108, 480, 452],
    },
    {
      label: "Airfryer2",
      value: "airfryer2",
      salesData: [187, 36, 225, 312, 313, 91, 365, 106, 214, 596, 88, 325],
    },
  ],
};

const firstCategory = categories[0].value;
const firstProduct = products[firstCategory][0].value;
const firstBrand = brands[firstProduct][0].value;

function App() {
  const [filter, setFilter] = useState({
    category: firstCategory,
    product: firstProduct,
    brand: firstBrand,
  });

  const availableProducts = products[filter.category];

  const availableBrands = brands[filter.product];

  const selectedBrand = availableBrands?.find(
    (brand) => brand.value === filter.brand
  );

  const handleCategoryChange = (value: string) => {
    const newCategory = categories.find(
      (category) => category.value === value
    )?.value;

    if (!newCategory) {
      return;
    }

    const newProduct = products[newCategory][0].value;
    const newBrand = brands[newProduct][0].value;

    setFilter({
      category: newCategory,
      product: newProduct,
      brand: newBrand,
    });
  };

  const handleProductChange = (value: string) => {
    const newProduct = availableProducts?.find(
      (product) => product.value === value
    )?.value;

    if (!newProduct) {
      return;
    }

    setFilter((prevState) => ({
      ...prevState,
      product: newProduct,
      brand: brands[newProduct][0].value,
    }));
  };

  const handleBrandChange = (value: string) => {
    setFilter((prevState) => ({
      ...prevState,
      brand: value,
    }));
  };

  return (
    <>
      <div className="header">
        <h1>Sales Report</h1>
      </div>
      <div className="selects-container">
        <SalesSelect
          label="Categoria"
          onChange={handleCategoryChange}
          options={categories}
          value={filter.category}
        />

        <SalesSelect
          label="Produto"
          onChange={handleProductChange}
          options={availableProducts}
          value={filter.product}
        />

        <SalesSelect
          label="Marca"
          onChange={handleBrandChange}
          options={availableBrands}
          value={filter.brand}
        />
      </div>
      {selectedBrand?.salesData && (
        <SalesChart data={selectedBrand.salesData} />
      )}
    </>
  );
}

export default App;
