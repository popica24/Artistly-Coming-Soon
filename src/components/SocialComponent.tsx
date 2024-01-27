import React, { CSSProperties } from "react";

type Props = {
  svglogo: React.ReactNode;
  svgContainer: React.ReactNode;
  extraSvg?: React.ReactNode;
  text: string;
  link: string;
  color: string;
  left: string;
};

const SocialComponent = (props: Props) => {
  const textColor: CSSProperties = {
    color: props.color,
    fontStyle: "italic",
    left: props.left,
  };

  return (
    <a
      className="relative xs:px-1 px-3 py-10 cursor-pointer"
      href={props.link}
      target="_blank"
    >
      {props.svgContainer}
      <span className="absolute top-[34%] xs:left-[5.7%] left-[9.2%]">
        {props.extraSvg && (
          <span className="absolute top-[18%] left-[20%]">
            {props.extraSvg}
          </span>
        )}
        {props.svglogo}
      </span>
      <span
        className="absolute top-[40%] font-medium text-[0.8rem]"
        style={textColor}
      >
        {props.text}
      </span>
    </a>
  );
};

export default SocialComponent;
