import { ReactNode } from "react";
export interface HeaderProps {
    headerLeft?: ReactNode;
    headerRight?: ReactNode;
    title?: string;
    headerBottom?: ReactNode;
}
