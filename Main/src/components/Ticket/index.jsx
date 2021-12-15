import React from "react";
import "./styles.scss";

function Ticket(props) {
    const {item}=props;
  return (
    <div className="Sale_Card">
      <div className="img_Card">
        <img src={item.link_img} alt="" />
      </div>
      <div className="contend_card">
          <div>

        <div className="title">
          <p>{item.title}</p>
          <p>{item.text_size}</p>
        </div>

        <p className="due_date">{item.due_to}</p>

        <p className="use_now">Sử dụng ngay</p>
          </div>
      </div>
    </div>
  );
}

export default Ticket;
