import React from "react";

import ProductForm from "@/components/shared/forms/ProductForm";

interface IProps {}

const AddProduct: React.FC<IProps> = (props) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-8">Add Product</h2>
      <ProductForm />
    </div>
  );
};

export default AddProduct;
