import React from "react";

type topLinkB_props = {
  label: string;
  url: string;
  className: string;
};

export const TopLinkButton: React.FC<topLinkB_props> = (props) => {
  return (
    <div>
      <a
        href={props.url}
        className={`${props.className}  font-noto inline-flex flex-row gap-[18px] items-center text-base md:text-xl pl-7 pr-7 md:pr-10 h-[70px] w-fit rounded-full`}
      >
        <div className="size-4 rounded-full bg-background flex-shrink-0" />
        {props.label}
      </a>
    </div>
  );
};
