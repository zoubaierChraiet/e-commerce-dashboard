"use client";

import CategoriesTable from "@/components/shared/Tables/categories/CategoriesTable";
import { columns } from "@/components/shared/Tables/categories/defs";
import { Button } from "@/components/ui";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";

interface IProps {}

const Categories: React.FC<IProps> = (props) => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "categories"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setCategories(snapshot.docs.map((each) => each.data()));
      }
    );
  }, []);

  return (
    <div>
      <h2 className="mb-2 px-4 text-2xl font-semibold tracking-tight">
        Categories
      </h2>
      <span className="space-y-8" />
      <CategoriesTable columns={columns} data={categories || []} />
      <div className="mb-8" />
      <Button>
        <Link href="categories/add">Add category</Link>
      </Button>
    </div>
  );
};

export default Categories;
