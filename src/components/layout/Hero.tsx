import { ReactNode } from "react";
import "@/components/layout/Hero.css";

export default function Hero({ children }: { children: ReactNode }) {
  return <section className="hero">{children}</section>;
}
