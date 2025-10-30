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

type Product = {
    _id: string
    name: string
    category: string
    price: number
    image: string
    inventory: number,
    lastUpdated: Date
}

const DashboardPage = ({ totalProduct, totalData, lowStock }: { totalProduct: Product[], totalData: number, lowStock: number }) => {

    console.log('checking product', totalProduct)

    return (
        <div>
            <div className="flex items-center justify-center gap-10 my-5">
                <div className="border w-52 h-32 flex flex-col justify-center items-center gap-3 rounded-2xl">
                    <p className="text-xl">Total Products</p>
                    <p className="text-5xl">{totalData || 0}</p>
                </div>
                <div className="border w-52 h-32 flex flex-col justify-center items-center gap-3 rounded-2xl">
                    <p className="text-xl">Low Stock</p>
                    <p className="text-5xl">{lowStock || 0}</p>
                </div>
            </div>
            <div className="my-10">
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
                        {totalProduct.map((product) => (
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
        </div>
    );
};

export default DashboardPage;