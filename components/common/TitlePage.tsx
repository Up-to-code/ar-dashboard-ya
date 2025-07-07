import React from "react";

export default function TitlePage({ title }: { title: string }) {
  return (
    <div className="font-lama font-bold text-secondary text-right text-lg">
      {title}
    </div>
  );
}
