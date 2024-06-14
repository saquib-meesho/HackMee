import { products } from "../../../constants/products";
import { NextResponse } from "next/server";

const GET = async (req: Request) => {
    try {
        const res = await fetch('http://localhost:5000//getAll');
        const data = await res.json();
        
        return NextResponse.json({data: data.result}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Server error"}, {status: 500});
    }
}

module.exports = {
    GET
}