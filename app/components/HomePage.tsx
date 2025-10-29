"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";


type Product = {
    _id: string,
    name: string,
    category: string,
    price: number,
    image: string
}

const HomePage = ({ products }: { products: Product[] }) => {


    

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                    products.map(product => (
                        <div className="border p-2 space-y-2">
                            <div className="flex justify-center items-center">
                                <img className="w-32" src={product.image} alt="" />
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-xl">{product.name}</h2>
                                <div className="flex items-center justify-between">
                                    <p>{product.category}</p>
                                    <p>${product.price}</p>
                                </div>
                                <Link href={`/products/${product._id}`}>
                                    <Button className="w-full" variant="outline">Details</Button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default HomePage;