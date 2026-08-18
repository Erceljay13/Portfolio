import { useState } from "react";

const TRUNCATE_LENGTH = 180;

function ProjectDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > TRUNCATE_LENGTH;

  return (
    <div className="mb-4">
      <p
        className={`text-slate-400 ${
          isLong && !expanded ? "line-clamp-3" : ""
        }`}
      >
        {text}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default ProjectDescription;
