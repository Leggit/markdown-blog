import React from "react";

function CodeBlock({ name, children }: any) {
  return (
    <div className="border">
      <h3 className="border-b p-3 font-mono">{name}</h3>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default CodeBlock;
