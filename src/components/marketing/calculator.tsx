"use client";

import { useMemo, useState } from "react";
import { BookingCta } from "./booking-cta";
import { trackEvent } from "@/lib/analytics";

const treatmentValues = [200, 300, 400, 500, 750, 1000];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

type RevenueCalculatorProps = {
  compact?: boolean;
};

export function RevenueCalculator({ compact = false }: RevenueCalculatorProps) {
  const [missed, setMissed] = useState(8);
  const [treatmentValue, setTreatmentValue] = useState(400);
  const monthlyLeakage = useMemo(() => missed * treatmentValue * 30, [missed, treatmentValue]);
  const annualLeakage = monthlyLeakage * 12;

  const trackCalculatorChange = () => {
    trackEvent("CalculatorStart", {
      customData: { missed_enquiries_per_day: missed, average_treatment_value: treatmentValue },
      custom: true,
    });
  };

  const trackComplete = () => {
    trackEvent("CalculatorComplete", {
      customData: {
        value: monthlyLeakage,
        currency: "USD",
        missed_enquiries_per_day: missed,
        average_treatment_value: treatmentValue,
      },
      custom: true,
    });
  };

  return (
    <div className="calculator-card reveal reveal-delay-1">
      <div className="calculator-field">
        <label className="calculator-label" htmlFor="missed-enquiries">
          Missed calls or enquiries per day
          <span className="calculator-value">{missed}</span>
        </label>
        <input
          id="missed-enquiries"
          className="calculator-range"
          type="range"
          min="0"
          max="30"
          value={missed}
          onBlur={trackComplete}
          onChange={(event) => {
            setMissed(Number(event.target.value));
            trackCalculatorChange();
          }}
        />
      </div>

      <div className="calculator-field">
        <label className="calculator-label" htmlFor="treatment-value">
          Average treatment value
          <span className="calculator-value">{formatCurrency(treatmentValue)}</span>
        </label>
        <select
          id="treatment-value"
          className="calculator-select"
          value={treatmentValue}
          onBlur={trackComplete}
          onChange={(event) => {
            setTreatmentValue(Number(event.target.value));
            trackCalculatorChange();
          }}
        >
          {treatmentValues.map((value) => (
            <option value={value} key={value}>
              {value === 1000 ? "$1,000+" : formatCurrency(value)}
            </option>
          ))}
        </select>
      </div>

      <div className="calculator-output" aria-live="polite">
        <div className="calculator-kicker">Estimated monthly leakage</div>
        <div className="calculator-number">{formatCurrency(monthlyLeakage)}</div>
        <div className="calculator-annual">Approximately {formatCurrency(annualLeakage)} per year.</div>
      </div>

      <p className="calculator-note">
        {compact
          ? "This is only missed inbound demand. It does not include reactivation, reviews, social DMs, no-show recovery, or retention."
          : "This estimate only measures missed inbound demand. ClinovaAI also helps recover dormant clients, capture social enquiries, automate reviews, reduce no-shows, and follow up with leads until they book."}
      </p>

      <BookingCta className="btn-primary" source="calculator">
        Show Me How To Fix This
      </BookingCta>
    </div>
  );
}
