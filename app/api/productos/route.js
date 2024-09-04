import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { NextResponse } from "next/server";

export async function GET() {
  const productosRef = collection(db, "productos");

  const q = query(productosRef);

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
