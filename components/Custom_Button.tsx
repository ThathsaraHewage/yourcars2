"use client";

import React from "react";
import Image from "next/image";

import { CustomButtonProps } from "@/types";

const Custom_Button = ({
  title,
  containerStyle,
  handleClick,
  textStyles,
  isDisabled,
  rightIcon,
  btnType,
}: CustomButtonProps) => {
  return (
    <div>
      <div>
        {" "}
        <button
          disabled={false}
          type={btnType || "button"}
          className={`custom-btn ${containerStyle}`}
          onClick={handleClick}
        >
          <span className={`flex-1 ${textStyles}`}>{title}</span>
        </button>
      </div>
    </div>
  );
};

export default Custom_Button;
