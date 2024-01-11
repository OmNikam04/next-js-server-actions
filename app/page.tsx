import AddProducts from "@/components/my_components/AddProducts";
import AllProducts from "@/components/my_components/AllProducts";
import Image from "next/image";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  const res = await fetch(
    "https://659eba6847ae28b0bd3692ce.mockapi.io/api/v1/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"]
      }
    }
  );

  const products: Product[] = await res.json();


  return (
    <main className="min-h-screen w-full flex justify-center">
      <div className=" flex justify-start w-4/5 flex-col">
        {/* Form to get new product */}
        <AddProducts/>
        {/* Listing all products here */}
        <AllProducts products={products}/>
      </div>
    </main>
  );
}
