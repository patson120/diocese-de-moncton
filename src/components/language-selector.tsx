"use client";

import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export function LanguageSelector() {
  const localActive = useLocale()
  const t = useTranslations();

  const changeLanguage = (lang: string) => {
    if (localActive === lang) return
    // set language to cookies
    document.cookie = `NEXT_LOCALE=${lang}`
    window.location.href = window.location.href.replace(`/${localActive}`, `/${lang}`)
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <div className='h-8 text-xs flex flex-row justify-center items-center'>
              <Globe className="mr-[5px] h-3 w-3 md:h-4 md:w-4" />
              <p className="text-xs md:text-sm lg:text-sm xl:text-base">Canada({ languages.find(l => l.code === localActive)?.name})</p>
              <ChevronDown className="ml-1 h-4 w-4 md:h-5 md:w-5" />
            </div>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-xs md:text-sm xl:text-base">{lang.flag}</span>
            <span className="text-xs md:text-sm lg:text-xl">{lang.name}</span>
            {localActive === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-auto h-2 w-2 rounded-full bg-primary"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}