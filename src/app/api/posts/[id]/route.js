import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";


export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    return  NextResponse.json(post, { status: 200 });
  } catch (err) {
    return new NextResponse.json("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return NextResponse.json("Post has been deleted", { status: 200 });
  } catch (err) {
    return  NextResponse.json("Database Error", { status: 500 });
  }
};