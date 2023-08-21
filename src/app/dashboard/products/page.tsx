import ProductsTable from "@/components/shared/Tables/Products/ProductsTable";
import { columns } from "@/components/shared/Tables/Products/defs";
import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

interface IProps {}

const Products: React.FC<IProps> = (props) => {
  return (
    <div>
      <h2 className="mb-2 px-4 text-2xl font-semibold tracking-tight">
        Products
      </h2>
      <span className="space-y-8" />
      <ProductsTable columns={columns} data={[]} />
      <div className="mb-8" />
      <Button>
        <Link href="products/add">Add product</Link>
      </Button>
    </div>
  );
};

export default Products;
