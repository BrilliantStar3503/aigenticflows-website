"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const DAYS = [
  { label: "Mon", date: "10" },
  { label: "Tue", date: "11" },
  { label: "Wed", date: "12" },
  { label: "Thu", date: "13" },
  { label: "Fri", date: "14" },
];

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

export function DemoScheduler() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Book a demo</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            Pick a time that works for you — a member of our team will walk
            you through AIGENTIC Flows live.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[640px] rounded-2xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_rgba(17,17,17,0.03)]">
          <div className="flex items-center gap-2 text-[12.5px] font-semibold text-neutral-500">
            <Calendar size={14} />
            March 2026
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2.5">
            {DAYS.map((day, index) => (
              <button
                key={day.label}
                type="button"
                onClick={() => {
                  setSelectedDay(index);
                  setSelectedTime(null);
                }}
                className={
                  index === selectedDay
                    ? "flex flex-col items-center gap-1 rounded-xl bg-brand-red py-3 text-white"
                    : "flex flex-col items-center gap-1 rounded-xl border border-neutral-200 bg-white py-3 text-neutral-700 transition-colors hover:border-neutral-300"
                }
              >
                <span className="text-[10.5px] font-medium uppercase tracking-wide opacity-80">
                  {day.label}
                </span>
                <span className="text-[15px] font-bold">{day.date}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-[12.5px] font-semibold text-neutral-500">
            <Clock size={14} />
            Available times (PHT)
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedTime(slot)}
                className={
                  slot === selectedTime
                    ? "rounded-lg border border-brand-red bg-brand-pink py-2.5 text-[12.5px] font-semibold text-brand-red"
                    : "rounded-lg border border-neutral-200 bg-white py-2.5 text-[12.5px] font-medium text-neutral-700 transition-colors hover:border-neutral-300"
                }
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={!selectedTime}
            className="mt-7 h-11 w-full rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all enabled:hover:bg-brand-gold-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
          >
            {selectedTime ? `Confirm ${DAYS[selectedDay].label} at ${selectedTime}` : "Select a time"}
          </button>
        </div>
      </div>
    </section>
  );
}
