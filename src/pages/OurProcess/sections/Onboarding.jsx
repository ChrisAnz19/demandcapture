import { AutoContainer } from "layouts/containers";
import React from "react";
import * as SVGs from "../assets/SVG";

const Onboarding = () => {
  return (
    <section className="oboarding">
      <AutoContainer style={{ maxWidth: 1060 }}>
        <div className="oboarding__inner">
          <h2>Onboarding </h2>
          <div className="oboarding__inner-list">
            <OnboardingItem icon={SVGs.icon1}>
              <span>Discovery Meeting</span>
              <br />
              <span>(Inclusive Of Your ICP,</span>
              <br />
              <span>Value Proposition &</span>
              <br />
              <span>Sales Workflows)</span>
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon2}>
              <span>Based on Discovery</span>
              <br />
              <span>Meeting Learnings Our</span>
              <br />
              <span>Data Science Team</span>
              <br />
              <span>Runs KnowledgeCore</span>
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon3}>
              <span>Review KnowledgeCore</span>
              <br />
              <span>Findings With Your</span>
              <br />
              <span>Organization And Our</span>
              <br />
              <span>Sales Leaders</span>
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon4}>
              <span>Outbound marketing</span>
              <br />
              <span>communication crafted</span>
              <br />
              <span>and optimized</span>
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon5}>
              <span>Our Sales Team</span>
              <br />
              <span>begins outreach and</span>
              <br />
              <span>schedules meetings</span>
              <br />
              <span>on Your behalf</span>
            </OnboardingItem>
            <OnboardingItem icon={SVGs.icon6}>
              <span>Weekly joint</span>
              <br />
              <span>meeting to review</span>
              <br />
              <span>latest progress and </span>
              <br />
              <span>proposed next steps</span>
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
