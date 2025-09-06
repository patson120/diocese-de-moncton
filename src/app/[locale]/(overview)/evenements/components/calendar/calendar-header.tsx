"use client";

import { Button } from "@/components/ui/shared/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

interface CalendarHeaderProps {
  currentDate: Date;
  view: "day" | "week" | "month";
  onDateChange: (date: Date) => void;
  onViewChange: (view: "day" | "week" | "month") => void;
}

export function CalendarHeader({ currentDate, view, onDateChange, onViewChange }: CalendarHeaderProps) {
  const localActive = useLocale()
  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    switch (view) {
      case "day":
        newDate.setDate(currentDate.getDate() - 1);
        break;
      case "week":
        newDate.setDate(currentDate.getDate() - 7);
        break;
      case "month":
        newDate.setMonth(currentDate.getMonth() - 1);
        break;
    }
    onDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    switch (view) {
      case "day":
        newDate.setDate(currentDate.getDate() + 1);
        break;
      case "week":
        newDate.setDate(currentDate.getDate() + 7);
        break;
      case "month":
        newDate.setMonth(currentDate.getMonth() + 1);
        break;
    }
    onDateChange(newDate);
  };

  return (
    <Tabs value={view} className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
      <div className="flex justify-between items-center">
        <TabsList className="justify-start h-12 p-0 bg-[#F1F3F6] rounded-md px-3 py-2">
          <TabsTrigger
            value="day"
            onClick={() => {
              onViewChange('day')
            }}
            className="h-8 px-2.5 py-2.5 rounded-none data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:shadow-none data-[state=active]:text-blue data-[state=active]:font-bold data-[state=inactive]:text-gray">
            <span className="font-body-3 text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)]">
              {localActive === 'fr' ? "Jours": "Days"}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="week"
            onClick={() => onViewChange('week')}
            className="h-8 px-2.5 py-2.5 rounded-none data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:shadow-none data-[state=active]:text-blue data-[state=active]:font-bold data-[state=inactive]:text-gray"
          >
            <span className="font-body-3 text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)]">
              {localActive === 'fr' ? "Semaines": "Weeks"}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="month"
            onClick={() => onViewChange('month')}
            className="h-8 px-2.5 py-2.5 rounded-none data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:shadow-none data-[state=active]:text-blue data-[state=active]:font-bold data-[state=inactive]:text-gray"
          >
            <span className="font-body-3 text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)]">
              {localActive === 'fr' ? "Mois": "Months"}
            </span>
          </TabsTrigger>
        </TabsList>
      </div>
      <h2 className="text-xl font-semibold text-blue">
        {format(currentDate, "dd MMMM yyyy", { locale: localActive === 'fr' ? fr : enUS })}
      </h2>
      <div className="flex items-center gap-2">
        <Button variant={'outline'} className="" onClick={() => {
          onViewChange('day')
          onDateChange(new Date())
        }}>{localActive === 'fr' ? "Aujourd'hui": "Today"}</Button>
        <Button variant="outline" size="icon" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Tabs>
  );
}