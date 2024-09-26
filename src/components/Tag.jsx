import "./Tag.css";
import { useState } from "react";

function Tag({ tagName, selectTag, selected }) {
  const [hovered, setHovered] = useState(false);

  const hoverStyles = {
    Morning: { backgroundColor: "#ffe9a6ad", color: "#000" },
    Afternoon: { backgroundColor: "#f8aa27ad", color: "#fff" },
    Evening: { backgroundColor: "#18467aad", color: "#fff5c1" },
    Anytime: { backgroundColor: "#8d8079ad", color: "#ffffff" },
    default: { backgroundColor: "#e3f2df", color: "#333333" },
  };

  const tagStyles = {
    Morning: { backgroundColor: "#ffdb77", color: "#000" },
    Afternoon: { backgroundColor: "#ff8c00", color: "#fff" },
    Evening: { backgroundColor: "#123456", color: "#fff5c1" },
    Anytime: { backgroundColor: "#776d64", color: "#ffffff" },
    default: { backgroundColor: "#f6fbf4", color: "#333333" },
  };

  const currentStyles = hovered
    ? hoverStyles[tagName] || hoverStyles.default
    : selected
    ? tagStyles[tagName] || tagStyles.default
    : tagStyles.default;

  return (
    <>
      <button
        type="button"
        className="tag"
        data={tagName}
        style={currentStyles}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => selectTag(tagName)}
      >
        {tagName}
      </button>
    </>
  );
}

export default Tag;
