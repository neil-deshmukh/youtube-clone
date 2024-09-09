"use client"
import { useState } from "react";
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  const [category, setCategory] = useState(0)
  const [query, setQuery] = useState("")
  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <div className="flex">
        <Sidebar category={category} setCategory={setCategory} />
        <Feed category={category} query={query} />
      </div>
    </>
  );
}
