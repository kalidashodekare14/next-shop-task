"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import { Textarea } from "../ui/textarea"
import { useState } from "react"



const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


type Inputs = {
    name: string,
    category: string,
    price: number,
    inventory: number,
    description: string,
    lastUpdate: Date
}

type Product = {
    _id: string
    name: string
    category: string
    price: number
    image: string
    inventory: number,
    lastUpdated: Date
}

export function AdminPage({ products }: { products: Product[] }) {

    const [createOpen, setCreateOpen] = useState<boolean>(false)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const {
        register: register1,
        handleSubmit: handleSubmit1,
        formState: { errors: errors1 },
    } = useForm<Inputs>()

    // Create
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        const createData = {
            name: data.name,
            category: data.category,
            price: Number(data.price),
            inventory: Number(data.inventory),
            description: data.description,
            lastUpdate: new Date().toISOString(),
            slug: Math.random()
        }
        console.log('checking data', createData)
        const res = await axios.post('http://localhost:3000/api/products', createData);
        if (res.status === 201) {
            setCreateOpen(false);
        }

    }
    // Edit
    const onSubmit1: SubmitHandler<Inputs> = (data) => {
        console.log(data)

    }

    return (
        <div>
            <Dialog open={createOpen} onOpenChange={setCreateOpen}>
                <DialogTrigger asChild>
                    <Button className="cursor-pointer">Create Post</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Product</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                                <div>
                                    <Input {...register("name")} type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <Input {...register("category")} type="text" placeholder="Category" />
                                </div>
                                <div>
                                    <Input {...register("price")} type="text" placeholder="Price" />
                                </div>
                                <div>
                                    <Input  {...register("inventory")} type="text" placeholder="Inventory" />
                                </div>
                                <div>
                                    <Textarea {...register("description")} placeholder="Description" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Inventory</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Last Update</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product._id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.inventory}</TableCell>
                            <TableCell className="text-right">{product.price}</TableCell>
                            <TableCell className="text-right">{new Date(product.lastUpdated).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}
