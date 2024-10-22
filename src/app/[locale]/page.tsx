import LocalSwitcher from "@/components/LocalSwitcher";
import { Link } from '@/i18n/routing';
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index")
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <div className="w-20"> <LocalSwitcher /> </div>
      <p className="mt-5">{t('hello')}</p>
      <Link href={`/about`} className='text-blue-600'>About</Link>
    </main>
  );
}
