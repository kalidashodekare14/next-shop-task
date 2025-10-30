import { Product } from "@/app/models/Product";
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        await connectDB();
        const { slug } = await params;
        const query = { _id: new ObjectId(slug) }
        const product = await Product.findOne(query);
        return NextResponse.json({
            success: true,
            data: product
        })
    } catch (error) {
        console.log(error);
    }
}