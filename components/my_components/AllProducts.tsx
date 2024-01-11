import { Product } from "../../app/page";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Button
} from "@/components/ui/button";
import Link from "next/link";

interface AllProductsProps {
  products: Product[];
}

const AllProducts: React.FC<AllProductsProps> = ({ products }) => {
  console.log(" from ", products);
  return (
    <div>
      <h1 className="text-2xl font-semibold py-2">All Products</h1>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.product}</CardTitle>
              <CardDescription>Rs. {product.price}</CardDescription>
              <Link href={`/product/${product.id}`}>
                <Button variant="outline">View</Button>
              </Link>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
