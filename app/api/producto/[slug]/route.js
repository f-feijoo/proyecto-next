import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request, { params }) {
  const { slug } = params;

  const productoRef = doc(db, "productos", slug);

  const docSnapshot = await getDoc(productoRef)

  return NextResponse.json(docSnapshot.data())
}
