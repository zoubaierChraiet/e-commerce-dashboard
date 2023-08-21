"use client";

import React from "react";

import { Input, Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { Category } from "@/lib/types";
import { v4 } from "uuid";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase";

interface Inputs extends Category {}

interface IProps {}

const ProductForm: React.FC<IProps> = (props) => {
  const form = useForm<Inputs>();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = form;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await addDoc(collection(db, "categories"), {
        id: v4(),
        name: data.name,
        description: data.description,
        timestamp: serverTimestamp(),
      });
      reset({ description: "", name: "" });
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Enter category name"
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <Input
                  id="description"
                  placeholder="Enter category description"
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
