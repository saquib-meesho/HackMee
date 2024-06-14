import { products } from "../../../constants/products";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
    try {
        const id = await req.nextUrl.searchParams.get("product_id");
        
        // const res = await fetch(`http://localhost:5000/getById?product_id=${id}`);
        // const data = await res.json();
        
        // return NextResponse.json({data: data.result}, {status: 200})
        
        return NextResponse.json({data: products[0]}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Server error"}, {status: 500});
    }
}

module.exports = {
    GET
}