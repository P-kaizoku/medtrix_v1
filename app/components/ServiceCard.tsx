import React from "react";

type ServiceCardProp = {
  title: String;
  content: String;
  buttonText: String;
};

const ServiceCard = ({ title, content, buttonText }: ServiceCardProp) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <p>{content}</p>
      <div>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceCard;
