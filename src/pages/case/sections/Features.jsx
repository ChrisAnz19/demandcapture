import React from "react";
import { AutoContainer } from "layouts/containers";

const imagesUrl = process.env.PUBLIC_URL + "/images/features/";

const Features = () => {
  const featursItems = [
    {
      image: "features-1.webp",
      alt: "about",
      subTitle: "ABOUT",
      title: "DEMANDCAPTURE",
      text: "DemandCapture, a New York-based technology company, is a leading provider of sales and marketing solutions designed to help businesses maximize their revenue potential. Leveraging advanced technology, data-driven insights, intent data capabilities, and human ingenuity, DemandCapture empowers organizations to effectively engage their target audiences, optimize lead generation efforts, and accelerate sales growth. DemandCapture was born out of a vision to create a revenue-generating stopgap between technology and service.",
    },
    {
      image: "features-2.webp",
      alt: "Sales",
      subTitle: "Sales",
      title: "OPPORTUNITY",
      text: "The founding partners of DemandCapture set out on a mission to eliminate appointment setting as a service, and instead focus on capturing the engagement and of in-market prospects. They had worked with a number of data providers to access account and contact-level data based on content consumption, buying behaviors, and intent signals. They would then use their Vision Deep Learning Intent Algorithm to run complex analysis on the data to identify patterns across multiple buying signals, but pieces of their tech puzzle were still missing: automation that would enable the team to take action at scale.",
      text2:
        "“We were pulling from multiple data sources, but recognized early on that we were missing the real time intent metrics and automation to actually make the data actionable,” shared Chris Anzalone, Co-Founder of DemandCapture. In order to deliver on the goal of providing a quality experience for Mid Market and Enterprise technology sales teams, DemandCapture needed to find a way to connect with sales-ready prospects at exactly the right time.",
      order: "_order",
    },
    {
      image: "features-3.webp",
      alt: "ACTION",
      subTitle: "ZoomInfo | DemandCapture",
      title: "ACTION",
      text: "Through the relationship built with ZoomInfo’s sales team, DemandCapture was introduced to MarketingOS as the missing puzzle piece of their tech stack. The automation provided in the platform allowed the team to connect with engaged prospects at a much faster and higher-quality rate. ",
      text2:
        "“We like to say that we deliver problem-aware, solution seeking prospects while they're in-market. I think the specific timing was the piece that we were missing, and that's really what ZoomInfo is able to provide for us” states Anzalone. “When working with such a large data set, you can unlock new possibilities when your data streams in real-time, and that’s exactly what MarketingOS allows us to do.”",
      button: "Read More",
      href: "https://www.zoominfo.com/b2b/customer-success/DemandCapture",
    },
    {
      image: "features-4.webp",
      alt: "IMPACT",
      subTitle: "innovative",
      title: "IMPACT",
      text: "With this innovative process in place, DemandCapture is sprinting ahead of its competitors. “The automation that Workflows provides on the backend helps us be really effective on the frontend. We are extremely proud of our consistent 90-second SLA with prospects who’s buying signals break our algorithms’ predetermined threshold,'' shared Anzalone. On the whole, the company has experienced exponential revenue growth month over month, and expects that this will continue to grow with time. And while these metrics consider the entire tech stack in play, MarketingOS will continue to serve as a key component in DemandCapture’s winning game.",
      order: "_order",
    },
  ];
  return (
    <section className="features">
      <AutoContainer>
        <div className="features__inner">
          {featursItems.map((item, i) => (
            <div
              className={`features__item ${item.order ? item.order : ""}`}
              key={i}
            >
              <div className="features__item-image">
                <div className="ratioImage">
                  <img src={imagesUrl + item.image} alt={item.alt} />
                </div>
              </div>
              <div className="features__item-content">
                <div className="box box--secondary">
                  <h6 className="_sm text--line">{item.subTitle}</h6>
                  <h3>{item.title}</h3>
                  <div className="features__item-info">
                    <p>{item.text}</p>
                    {item.text2 ? <p>{item.text2}</p> : ""}
                  </div>
                </div>
                {item.button ? (
                  <a
                    className="buttonText"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Read More</span>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </AutoContainer>
    </section>
  );
};

export default Features;
