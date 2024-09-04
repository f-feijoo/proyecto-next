import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params }) {
  const { categoria } = params;

  const productosRef = collection(db, "productos");

  const q =
    categoria === "all"
      ? query(productosRef)
      : query(productosRef,where("category", "==", categoria));

  const querySnapshot = await getDocs(q)
  const docs = querySnapshot.docs.map(doc => doc.data())

  return NextResponse.json(docs)
}
