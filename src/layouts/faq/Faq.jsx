import React from "react";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";

const Faq = () => {
  const faqItems = [
    {
      title: "What Makes KnowledgeCore Special?",
      text: "KnowledgeCore harnesses the power of seven advanced deep learning models, including XGBoost for lead prioritization and a novel Tinder-inspired vector algorithm, introducing the first-of-its-kind user compatibility matrix designed to cater specifically to the needs of sales professionals.",
    },
    {
      title: "Does DemandCapture Offer A Pilot?",
      text: "Yes - please contact us to learn about our pilot program. DemandCapture operates on a performance-based model, where you only pay for meetings with top-tier prospects that surpass your predefined criteria. We are committed to collaborating with you to establish these criteria in a manner that aligns with your objectives.",
    },
    {
      title: "How Does DemandCapture Ensure A Positive Client Experience?",
      text: "We center our strategy on three key elements: crafting a precise ideal customer profile, providing comprehensive sales training (which we encourage your involvement in), and implementing robust system processes. Our approach involves a thorough understanding of your ideal customer profile, aligning it with premium data. Additionally, we conduct in-depth sales training sessions. Finally, our extensive automation and quality control systems play a crucial role in achieving our desired outcomes.",
    },
  ];
  return (
    <section className="faq">
      <AutoContainer>
        <div className="faq__inner">
          <div className="box box--secondary">
            <h6 className="_sm text--line">FAQ</h6>
            <h3>
              <span>Frequently</span>
              <br />
              <span> Asked</span>
              <br />
              <span> Questions</span>
            </h3>
            <p>
              Learn More About
              <br />
              DemandCapture
            </p>
          </div>
          <div className="faq__inner-column">
            {faqItems.map((item, i) => (
              <div className="faq__item" key={i}>
                <div className="faq__item-group">
                  <h6 className="_lg">{item.title}</h6>
                  <button className="faq__item-button"></button>
                </div>
                <div className="faq__item-content">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default Faq;
