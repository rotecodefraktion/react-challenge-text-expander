import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import "./index.css";

import { useState, React } from "react";

export default function App() {
  return (
    <div>
      <TextExpander className="boxEven">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Show less"
        buttonColor="#f42d8a"
        className="boxOdd"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="boxEven">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

const TextExpander = ({
  collapsedNumWords = 10,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#4daffa",
  className = "",
  children,
}) => {
  const [collapsed, setCollapsed] = useState(expanded);
  const toggleCollapsed = () => {
    setText(
      !collapsed
        ? children.concat(" ")
        : children
            .split(" ")
            .slice(0, collapsedNumWords)
            .join(" ")
            .concat("... ")
    );
    setCollapsed(!collapsed);
  };

  const buttonText = collapsed ? collapseButtonText : expandButtonText;

  const [text, setText] = useState(
    expanded
      ? children.concat(" ")
      : children.split(" ").slice(0, collapsedNumWords).join(" ").concat("... ")
  );

  return (
    <div className={className}>
      <span>{text}</span>
      <span
        role="button"
        style={{ color: buttonColor, cursor: "pointer" }}
        onClick={() => toggleCollapsed()}
      >
        {buttonText}
      </span>
    </div>
  );
};
