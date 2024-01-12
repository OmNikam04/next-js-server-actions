"use client"

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"

const AddProductButton = () => {
    const { toast } = useToast()
  return (
    <Button
      type="submit"
      className="w-full text-sm bg-purple-500 hover:bg-purple-700"
      onClick={() => {
        toast({
          title: "Adding product to DB",
          description: "Scroll down to see added product",
        })
      }}
    >
      Submit
    </Button>
  );
};

export default AddProductButton;
