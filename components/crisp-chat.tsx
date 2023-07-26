"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9380172c-38db-4e71-b83d-208f0880f39b");
  }, []);

  return null;
};
