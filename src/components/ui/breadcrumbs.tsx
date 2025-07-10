import { Link } from '@/i18n/routing';
import { clsx } from 'clsx';
import { ChevronRight } from 'lucide-react';
import Text from '../Text';
import { useLocale } from 'next-intl';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
  data?: {
    labelEn: string;
    labelFr: string;
  };
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {

  const localActive = useLocale()
  return (
    <nav aria-label="Breadcrumb" className="block">
      <ol className='flex justify-center items-center body-2'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'font-semibold hidden md:inline-block' : 'text-gray', "flex justify-center items-center"
            )}
          >
            <Link className='' href={breadcrumb.href}>
              <Text className='cursor-none text-sm md:text-base' labelEn={breadcrumb.data?.labelEn} labelFr={breadcrumb.data?.labelFr} />
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <ChevronRight className="h-5 w-5 inline-block " />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
