import { AutoContainer } from "layouts/containers";
import React from "react";
import * as SVGs from "../assets/SVG";

const Onboarding = () => {
  return (
    <section className="oboarding">
      <AutoContainer style={{ maxWidth: 1060 }}>
        <div className="oboarding__inner">
          <h2>Oboarding</h2>
          <div className="oboarding__inner-list">
            <OnboardingItem icon={SVGs.icon1}>
              Discovery Meeting (Inclusive Of Your ICP, Value Proposition &
              Sales Workflows)
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon2}>
              Based on Discover Meeting Learnings Our Data Science Team Runs
              KnowledgeCore
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon3}>
              Review KnowledgeCore Findings With Your Organization And Our Sales
              Leaders
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon4}>
              Outbound marketing communication crafted and optimized
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon5}>
              Our Sales Team begins outreach and schedules meetings on Your
              behalf
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon6}>
              Bi-weekly joint meeting to review latest progress and proposed
              next steps
            </OnboardingItem>
            <div className="oboarding__inner-list-bg">{SVGs.jointsSVG}</div>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const OnboardingItem = ({ icon, children }) => {
  return (
    <div className="oboardingItem">
      <div className="oboardingItem__content">
        <p className="_xlg">{children}</p>
      </div>
      <div className="oboardingItem__circle">
        <div className="oboardingItem__circle-icon">{icon}</div>
        <div className="oboardingItem__circle-bg">{SVGs.circleSVG}</div>
      </div>
      <div className="oboardingItem-bg">{SVGs.frameSVG}</div>
    </div>
  );
};
export default Onboarding;
