"use client"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { revalidateTag } from "next/cache";
import { addDataToDB } from "@/actions/serverActions";

const formSchema = z.object({
  product_name: z.string(),
  product_price: z.string(),
});

const AddProducts = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        product_name: "",
        product_price: "",
    },
  });

  

  return (
    <div className="w-full flex justify-center py-8">
        <Form {...form}>
        <form
          action={form.handleSubmit(addDataToDB)}
        //   onSubmit={form.handleSubmit(addDataToDB)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="product_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          
          <FormField
            control={form.control}
            name="product_price"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          
          <Button type="submit" className="w-full text-sm bg-purple-500 hover:bg-purple-700">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProducts;
