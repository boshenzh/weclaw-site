import type { Metadata } from "next";
import "../globals.css";
import RootHtml from "@/components/RootHtml";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = siteMetadata;

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="zh-CN">{children}</RootHtml>;
}
