"use client"

import Image from "next/image";

function Loading() {
  return (
    <div className="loading-container flex items-center h-[100vh] justify-center">
      <h1 className="text-9xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-600">Chargement...</h1>
    </div>
  );
}

export default Loading;
