"use server"
import { revalidateTag } from "next/cache";
import { Product } from "../app/page"
import SuccessToast from "@/components/my_components/SuccessToast";


export const addDataToDB = async (values:any) => {
    if(!values.product_name || !values.product_price)
        return;
    const newProduct : Product = {
        product: values.product_name,
        price: values.product_price 
    }

    const res = await fetch('https://659eba6847ae28b0bd3692ce.mockapi.io/api/v1/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    console.log(res?.status) // 201
    
    revalidateTag("products") 

    // return (
    //     <>
    //     {
    //         res.status === 201 ? <SuccessToast/> : <></>
    //     }
    //     </>
    // )
  };