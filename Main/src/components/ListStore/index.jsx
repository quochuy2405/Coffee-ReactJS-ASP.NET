import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss";
import data from"../../data"
import { memo } from "react";
const List_Store = data.Stores;

function ListStore(props) {
  // const [Filter, SetFilter] = useState("");
  //   const [List_Fillter, SetList_Fillter] = useState("");
  function ChangeActive(index, filter) {
    const Loaiactive = document.querySelector(".Store.active");
    const listLoai = document.querySelectorAll(".Store");
    if (Loaiactive) {
      Loaiactive.classList.remove("active");
    }
    listLoai[index].classList.add("active");
    // SetFilter(filter);
  }
  //   useEffect(() => {
  //     // const Temp = [];
  //     // SetList_Fillter(Temp);
  //   }, [Filter]);
  return (
    <div className="List_Store">
      <div className="List_country">
        <div className="Title">
          <img src="https://www.thecoffeehouse.com/_nuxt/img/store-icon.eb4e4fc.svg" alt="" />
          <h3>Hệ thống 180 cửa hàng TCH</h3>
        </div>
      </div>
      <div className="List_country">
        <ul>
          <Row id="center_item">
            {List_Store.map((item, index) => (
              <Col key={index} className="Center_Item" xs={12} sm={6} lg={3}>
                {" "}
                <li className="Store" onClick={() => ChangeActive(index)}>
                  {item.City_Name}({item.count})
                </li>{" "}
              </Col>
            ))}
          </Row>
        </ul>
      </div>
    </div>
  );
}

export default memo(ListStore);
