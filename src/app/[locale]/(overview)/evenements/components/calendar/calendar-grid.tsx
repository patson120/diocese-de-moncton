'use client'

import { useRouter } from "@/i18n/routing";
import { holidays } from "@/lib/holidays";
import { cn } from "@/lib/utils";
import { TypeEvent } from "@/types";
import {
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  getHours,
  isSameDay,
  isSameMonth,
  isToday,
  isWithinInterval,
  parseISO,
  setHours,
  setMinutes,
  startOfMonth,
  startOfWeek
} from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";

interface CalendarGridProps {
  currentDate: Date;
  events: TypeEvent[];
  view: "day" | "week" | "month";
}

export function CalendarGrid({ 
  currentDate, 
  events, 
  view
}: CalendarGridProps) {

  const router = useRouter()

  const days = (() => {
    if (view === "month") {
      const start = startOfMonth(currentDate);
      const end = endOfMonth(currentDate);      
      return eachDayOfInterval({ start, end });
    } else if (view === "week") {
      const start = startOfWeek(currentDate, { weekStartsOn: 1 });
      const end = endOfWeek(currentDate, { weekStartsOn: 1 });
      return eachDayOfInterval({ start, end });
    } else {
      return [currentDate];
    }
  })();

  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handleEventClick = (event: TypeEvent) => {
    router.push(`/evenements/${event.id}`)
  };

  const getEventStyle = (event: TypeEvent) => {
    return cn(
      "rounded-md shadow-sm cursor-pointer transition-colors",
      "bg-gradient-to-r",
      'bg-[#F4F4E6]'
    );
  };

  const isMultiDayEvent = (event: TypeEvent) => {
    return differenceInDays(new Date(event.date_event), new Date(event.date_event)) > 0;
  };

  const getEventDurationLabel = (event: TypeEvent) => {
    const days = differenceInDays(new Date(event.date_event), new Date(event.date_event)) + 1;
    return days > 1 ? `(${days} jours)` : '';
  };

  const getDayEvents = (date: Date) => {
    return events.filter(event => {
      let start = new Date(`${event.date_event!}T00:00:00`);
      let end = new Date(`${event.date_event!}T23:59:59`);
      return isWithinInterval(date, { start, end });
    });
  };

  const isHoliday = (date: Date) => {
    return holidays.some(holiday => isSameDay(parseISO(holiday.date), date));
  }

  const getHolidayName = (date: Date) => {
    return holidays.find(holiday => isSameDay(parseISO(holiday.date), date))?.name;
  }

  if ( view === 'day') {
    return (
      <>
        <div className="h-[600px] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            {hours.map((hour) => {
              const currentHourEvents = events.filter(event => {
                const eventDate = new Date(`${event.date_event}T${event.heure_event}`);
                return isSameDay(eventDate, currentDate) && getHours(eventDate) === hour;
              });
              

              return (
                <div key={hour} className="min-h-[60px] grid grid-cols-[80px_1fr] border-b">
                  <div className="p-2 text-sm text-muted-foreground">
                    {format(setHours(setMinutes(new Date(), 0), hour), "HH:mm")}
                  </div>
                  <div className="p-1">
                    {currentHourEvents.map((event) => (
                      <div
                        key={event.id}
                        className={cn("text-sm p-2 mb-1", getEventStyle(event))}
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="flex flex-col items-center">
                          <p className="w-full overflow-hidden truncate">
                            <span className="truncate text-base">{event.titre_fr}</span> <br />
                            <span className="truncate text-base font-bold">{event.heure_event}</span>
                          </p>
                          {isMultiDayEvent(event) && (
                            <span className="text-xs opacity-75">{getEventDurationLabel(event)}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    )
  }

  if ( view === 'week') {
    return (
      <>
        <div className="h-[600px] overflow-y-auto">
          <div className="grid grid-cols-[80px_repeat(7,1fr)]">
            <div className="sticky top-0 z-10 bg-background" />
            {days.map((day) => (
              <div
                key={day.toISOString()}
                className={cn(
                  "sticky top-0 z-10 p-2 text-center border-b bg-background",
                  isToday(day) && "bg-blue-50 dark:bg-blue-900/20"
                )}
              >
                <div className="font-medium">{format(day, "EEE", { locale: fr })}</div>
                <div className="text-sm text-muted-foreground">{format(day, "d", { locale: fr })}</div>
              </div>
            ))}

            { hours.map((hour, index) => (
              <React.Fragment key={index}>
                <div key={`hour-${hour}`} className="p-2 text-sm text-muted-foreground border-b">
                  {format(setHours(setMinutes(new Date(), 0), hour), "HH:mm")}
                </div>
                {days.map((day) => {
                  const dayEvents = events.filter(event => {
                    const eventDate = new Date(`${event.date_event}T${event.heure_event}`);
                    return isSameDay(eventDate, day) && getHours(eventDate) === hour;
                  });

                  return (
                    <div key={`${day.toISOString()}-${hour}`} className="border-b border-r p-1">
                      {dayEvents.map((event) => (
                          <div
                          key={event.id}
                          className={cn("text-xs p-1 truncate", getEventStyle(event))}
                          onClick={() => handleEventClick(event)}
                        >
                          <div className="flex flex-col items-center">
                            <p className="w-full overflow-hidden truncate">
                              <span className="truncate text-base">{event.titre_fr}</span> <br />
                              <span className="truncate text-base font-bold">{event.heure_event} </span>
                            </p>
                            {isMultiDayEvent(event) && (
                              <span className="text-xs opacity-75">{getEventDurationLabel(event)}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </>
    )
  }

  const EmptyBox = () => {
    const valsOfDay = [1, 2, 3, 4, 5, 6, 0]
    const index = valsOfDay.findIndex(v => v === getDay(days[0]))
    return valsOfDay.slice(0, index).map((_, i) =>(
      <div key={i} className="p-2 border transition-colors bg-[#f7f7f8]"></div>
    ))
  }
  
  return (
    <>
      <div className="grid grid-cols-7">
        {
          ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
            <div key={day} className="p-2 text-center font-semibold bg-muted">
              {day}
            </div>
          ))
        }
        { EmptyBox() }
        {
          days.map((day) => {
            const dayEvents = getDayEvents(day);
            const holiday = isHoliday(day);
            const holidayName = getHolidayName(day);

            return (
              <div
                key={day.toISOString()}
                className={cn(
                  "min-h-[120px] p-2 border border-[#F1F3F6] transition-colors",
                  isToday(day) && "bg-teal-100/40 dark:bg-green-900/20",
                  !isSameMonth(day, currentDate) && "opacity-50",
                  holiday && "bg-red-50 dark:bg-red-900/20"
                )}>
                <div className="font-medium flex items-center justify-between">
                  <span>{format(day, "d", { locale: fr })}</span>
                  {holiday && (
                  <span className="text-xs text-red-600 dark:text-red-400">
                    {holidayName}
                  </span>
                  )}
                </div>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={cn("text-xs p-1.5 min-h-[80px]", getEventStyle(event))}
                      onClick={() => handleEventClick(event)}
                    >
                      <div className="flex flex-col items-center">
                        <p className="w-full overflow-hidden truncate">
                          <span className="truncate text-base">{event.titre_fr}</span> <br />
                          <span className="truncate text-base font-bold">{event.heure_event}</span>
                        </p>
                        {isMultiDayEvent(event) && (
                          <span className="text-xs opacity-75 ml-1 shrink-0">
                            {getEventDurationLabel(event)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
        })}
      </div>   
    </>
  );
}