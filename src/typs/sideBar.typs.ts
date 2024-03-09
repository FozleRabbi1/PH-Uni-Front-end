import { ReactNode } from "react";

export type TRouts = { path: string; element: ReactNode };

export type TSideBarItem = {
  key: string;
  label: ReactNode;
  children?: TSideBarItem[];
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TRole = {
  role: string;
};

export type TUserRole = {
  ADMIN: string;
  FACULTY: string;
  STUDENT: string;
};
