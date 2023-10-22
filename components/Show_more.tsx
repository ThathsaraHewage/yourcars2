"use client";

import React from "react";
import { Custom_Button } from ".";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utilities";

function Show_more({ pageNo, isShowMore }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    // calculate the new limit and update params
    const newLoadingLimit = (pageNo + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLoadingLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isShowMore && (
        <Custom_Button
          btnType="button"
          title="Show More"
          containerStyle="bg-button-orange rounded-full text-white"
          handleClick={handleNavigation}
        ></Custom_Button>
      )}
    </div>
  );
}

export default Show_more;
