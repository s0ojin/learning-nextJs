"use client";

import { useEffect, useState } from "react";

export default function DarkMode() {
  const isDark = () => {
    let mode = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    return mode === "dark" ? true : false;
  };
  const [dark, setDark] = useState(isDark());

  useEffect(() => {
    let mode = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    if (
      mode === "dark" ||
      (mode === "" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <span
      className="text-[32px] cursor-pointer"
      onClick={() => {
        if (dark) {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        } else {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
        }
        setDark((state) => !state);
      }}
    >
      {dark ? "🌞" : "🌙"}
    </span>
  );
}
