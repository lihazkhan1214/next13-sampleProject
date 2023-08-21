import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
export const GET = async (request) => {
    const url = new URL(request.url);
  
    const username = url.searchParams.get("username");
  
    try {
      await connect();
  
      const posts = await Post.find(username && { username });
  
      return NextResponse.json(posts, { status: 200 });
    } catch (err) {
      return NextResponse.json("Database Error", { status: 500 });
    }
  };
  
  export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return NextResponse.json("Post has been created", { status: 201 });
    } catch (err) {
      return NextResponse.json("Database Error", { status: 500 });
    }
  };