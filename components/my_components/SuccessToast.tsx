"use client";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";

const SuccessToast = () => {
  const { toast } = useToast();
  return (
    <div>
      <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>

    </div>
  );
};

export default SuccessToast;
