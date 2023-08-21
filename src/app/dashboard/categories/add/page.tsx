import React from "react";

import CategoryForm from "@/components/shared/forms/CategoryForm";

interface IProps {}

const AddProduct: React.FC<IProps> = (props) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-8">Add Category</h2>
      <CategoryForm />
    </div>
  );
};

export default AddProduct;
