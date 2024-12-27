"use client";

import * as React from "react";

export function AccountSection() {
  return (
    <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
      <div className="flex flex-col self-stretch my-auto w-[100px]">
        <div className="self-center text-xs font-bold text-center">Account</div>
        <div className="flex gap-2 items-center w-full text-xs">
          <button
            className="self-stretch my-auto hover:text-gray-200 transition-colors"
            tabIndex={0}
            aria-label="Create Account"
          >
            Create
          </button>
          <button
            className="self-stretch my-auto hover:text-gray-200 transition-colors"
            tabIndex={0}
            aria-label="Login to Account"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}