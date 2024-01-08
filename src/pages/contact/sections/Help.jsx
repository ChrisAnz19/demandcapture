import React, { useEffect } from "react";
import { AutoContainer } from "layouts/containers";

const Help = () => {
  const bgURL = process.env.PUBLIC_URL + "/images/contacts-bg.png";
  const shapeURL = process.env.PUBLIC_URL + "/images/contact_us.webp";
  const customSelect = () => {
    const customSelectInit = ({
      selectClassName,
      selectedClassName,
      optionsWrapperClassName,
      hideSelected = true,
      onStateChange = () => {},
    }) => {
      document.querySelectorAll(`.${selectClassName}`).forEach((select) => {
        const input = select.querySelector("input[type='hidden']");
        const selected = select.querySelector(`.${selectedClassName}`);
        const options = select.querySelector(`.${optionsWrapperClassName}`);

        const clickEventHandler = (event) => {
          if (!select.contains(event.target)) {
            closeSelect();
          }
        };

        const closeSelect = () => {
          select.classList.remove("active");
          window.removeEventListener("click", clickEventHandler);
        };
        const setSelected = (li) => {
          if (!li || !input) {
            console.log("no input or invalid selcted option");
            return;
          }
          input.value = li.getAttribute("data-value");
          selected.innerHTML = li.innerHTML;
          input.dispatchEvent(new Event("change"));
          if (hideSelected) {
            options.querySelectorAll("li").forEach((item, index) => {
              item.style = "";
            });
            li.style = "display: none";
          }
          select.classList.add("selected");
        };

        select.onclick = () => {
          const isOpen = select.classList.contains("active");
          onStateChange(!isOpen, select);

          if (isOpen) {
            closeSelect();
          } else {
            select.classList.add("active");
            window.addEventListener("click", clickEventHandler);
          }
        };

        options.querySelectorAll("li").forEach((li, index) => {
          if (select.getAttribute("data-default-index") === index)
            setSelected(li);
          if (li.dataset?.default !== undefined) {
            li.removeAttribute("data-default");
            setSelected(li);
          }

          li.onclick = () => setSelected(li);
        });
      });
    };

    customSelectInit({
      selectClassName: "input--select",
      selectedClassName: "input__selected",
      optionsWrapperClassName: "input__dropdown",
      hideSelected: true,
    });
  };
  useEffect(() => {
    customSelect();
  });
  return (
    <>
      <section className="contacts">
        <AutoContainer>
          <div className="contacts__inner">
            <div className="contacts__inner-content">
              <h2>We’re Here to Help</h2>
              <p>
                <strong>Reach Our Team - Fill Out the Form Today</strong>
                <br />
                Unlock personalized support and Pilot Options by sharing your
                details with us. We're here to assist you every step of the way!
              </p>
            </div>
            <div className="contacts__container">
              <div className="contacts__container-wrapper">
                <h5>Send us a message</h5>
                <div className="contacts__container-form">
                  <div className="input__wrapper">
                    <label htmlFor="input-1">
                      How can we best help you today?
                    </label>
                    <div className="input input--rounded input--select">
                      <input type="hidden" />
                      <div className="input__selected">
                        <span></span>
                      </div>
                      <ul className="input__dropdown">
                        <li className="input__dropdown-item" data-value="Sales">
                          <span>Sales Enquiry</span>
                        </li>
                        <li
                          className="input__dropdown-item"
                          data-value="Support"
                        >
                          <span>Support Enquiry</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="input-2">Name</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-2" />
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="input-3">Email</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-3" />
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="input-4">Phone</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-4" />
                    </div>
                  </div>
                  <div className="input__wrapper ">
                    <label htmlFor="input-5">Job Title</label>
                    <div className="input input--rounded">
                      <input type="text" id="input-5" />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="buttonPrimary buttonPrimary--default _shadow"
                >
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </AutoContainer>
        <div className="bg">
          <div className="bg__image">
            <img src={bgURL} alt="shape" />
          </div>
          <div className="bg__image-wrapper">
            <div className="bg__image">
              <img src={shapeURL} alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
