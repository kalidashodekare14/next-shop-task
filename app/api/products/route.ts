import { Product } from "@/app/models/Product";
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";



export async function GET() {
    await connectDB();
    const products = await Product.find();
    console.log('checking data', products);
    return NextResponse.json({
        success: true,
        message: "All Project Successfully",
        data: products
    });
}

export async function POST(request: any) {
    const productData = await request.json();
    console.log('checking insert data', productData);
    try {
        await connectDB();
        const saveData = await Product.create(productData)
        return NextResponse.json({
            success: true,
            message: "Product Created",
            data: saveData
        }, { status: 201 })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}