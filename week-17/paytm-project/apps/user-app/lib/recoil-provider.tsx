"use client";

import { RecoilRoot } from "recoil";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
