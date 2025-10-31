import { Product } from "@/app/models/Product";
import { connectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";


export async function GET(request: NextRequest, context: { params: Promise<{ slug: string }> }
) {
    try {
        await connectDB();
        const { slug } = await context.params as { slug: string };

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