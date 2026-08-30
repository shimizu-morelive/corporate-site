"use client";

import { useState } from "react";

type JourneyStep = {
  title: string;
  icon: "product" | "plan" | "creator" | "live" | "purchase" | "analysis";
  detail?: {
    summary: string;
    points: string[];
  };
};

export default function JourneyExplorer({ steps }: { steps: JourneyStep[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedStep = selectedIndex === null ? null : steps[selectedIndex];

  return (
    <div className="journey-explorer">
      <ol role="tablist" aria-label="販売支援の工程">
        {steps.map((step, index) => {
          const selected = index === selectedIndex;
          return (
            <li className={selected ? "is-selected" : ""} key={step.title}>
              <button
                className="journey-step-button"
                type="button"
                role="tab"
                aria-selected={selected}
                aria-expanded={selected}
                onClick={() => setSelectedIndex(selected ? null : index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i className={`journey-icon journey-icon-${step.icon}`} aria-hidden="true"><b></b></i>
                <strong>{step.title}</strong>
              </button>
              {selected && (
                <div className="journey-detail journey-detail-mobile" role="tabpanel" aria-live="polite">
                  <div>
                    <span>STEP {String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.detail?.summary}</p>
                  </div>
                  <ul>{step.detail?.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {selectedStep && selectedIndex !== null && (
        <div className="journey-detail journey-detail-desktop" role="tabpanel" aria-live="polite">
          <div>
            <span>STEP {String(selectedIndex + 1).padStart(2, "0")}</span>
            <h3>{selectedStep.title}</h3>
            <p>{selectedStep.detail?.summary}</p>
          </div>
          <ul>{selectedStep.detail?.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
