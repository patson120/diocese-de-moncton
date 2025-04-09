"use client";
import { useLocale, useTranslations } from "next-intl";
import { HTMLContent } from "./html-content";

interface TextProps {
  labelFr?: string;
  labelEn?: string;
  keyString?: string;
}

export default function Text({ labelFr, labelEn, keyString, }: TextProps) {
  const t = useTranslations("app");
  const localActive = useLocale();
  if (keyString) {
    return <HTMLContent html={t(keyString)} className="prose max-w-none" />
  }
  const label = localActive === "fr" ? labelFr : labelEn;
  return <HTMLContent html={label!} className="prose max-w-none" />
}