import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../aboutStore.css";

const MyShopList = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
    <div className="row shopList">
        {/* 門市卡片 */}
        <div className="col-12 col-md-6 ">
            <h3 className="cardTitle">{props.listName}</h3>
            <p className="cardBody"><img src={require("../images/icon_address.png")} alt="Icon address"/> 高雄市左營區文守路196號 </p>
            <p className="cardBody"><img src={require("../images/icon_tel.png")} alt="Icon Tel"/> 07-963-5566 </p>
            <div className="cardBody">
                <img src={require("../images/icon_clock.png")} alt="Icon Clock" style={{display:"inline-flex"}}/>
                <div style={{display:"inline-flex"}}>午間 - 11:00 ~ 14:30 (最後點餐時間 14:00)<br/>晚間 - 17:30 ~ 21:30 (最後點餐時間 20:30)
                </div>
            </div>
        </div>
        {/* 門市按鈕 */}
        <div className="col-12 col-md-6 ">
            <div className="row">
                <div className="col d-flex justify-content-around">
                    <button type="button" className="btn myBtn "><Link to="/booking">線上訂位</Link></button>
                    <button type="button" className="btn myBtn "><Link to="/products">線上訂餐</Link></button>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-around">
                <button type="button" className="btn myBtn" onClick={() => setModalShow(true)}>其他資訊</button>
                <button type="button" className="btn myBtn "><a href="https://goo.gl/maps/9ox4Ep683FVEUjdn8">GoogleMap</a></button>
                </div>
            </div>    
        </div>
        <MyModal
        branch={props.listName}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </div>  
  );
};

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="cardTitle">{props.branch}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cardBody">鄰近河堤社區，座落在人文薈萃的文教區域，以和風雅緻的用餐環境，迎接每一位貴賓的蒞臨。用餐後還可以到河堤公園悠閒散步，感受住宅區靜懿悠閒的氣氛。
        <br/><br/>
        交通資訊<br/>鄰近捷運紅線生態園區站<br/><br/>
        停車資訊<br/>河堤路路邊收費停車格 $30/H </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyShopList;
 