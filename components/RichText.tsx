import React from "react";

type RichTextProps = {
  children: string;
};

const RichText = ({ children }: RichTextProps) => {
  const lines = children.split(/<br\s*\/?>/g);

  return (
    <>
      {lines.map((line, lineIndex) => {
        const parts = line.split(/<deco>(.*?)<\/deco>/g);

        return (
          <React.Fragment key={lineIndex}>
            {lineIndex > 0 && <br />}
            {parts.map((part, index) => {
              if (index % 2 === 1) {
                return (
                  <span key={index} className="font-deco font-normal">
                    {part}
                  </span>
                );
              }
              return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default RichText;
