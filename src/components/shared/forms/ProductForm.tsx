"use client";

import React from "react";

import { Label, Input, Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Inputs extends Product {}

interface IProps {}

const ProductForm: React.FC<IProps> = (props) => {
  const form = useForm<Inputs>();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = form;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
                  placeholder="Enter product name"
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
              </FormItem>
            )}
          />
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Input
                  id="category"
                  placeholder="Enter product category"
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
              </FormItem>
            )}
          />
          <FormField
            name="price"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <Input
                  id="category"
                  placeholder="Enter product price"
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
              </FormItem>
            )}
          />
          <FormField
            name="colors"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colors</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select product Colors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Red">Red</SelectItem>
                    <SelectItem value="Blue">Blue</SelectItem>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            name="sizes"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sizes</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select product sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="XS">XS</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="XXL">XXL</SelectItem>
                  </SelectContent>
                </Select>
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
