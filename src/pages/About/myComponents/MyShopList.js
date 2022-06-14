import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../aboutStore.css";

const MyShopList = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
    <div className="row my shopList" id={props.shopid}>
        {/* 門市卡片 */}
        <div className="col-12 col-md-6 ">
            <div className="cardTitle my my-3">{props.name}</div>
            <p className="cardBody my"><img src={require("../images/icon_address.png")} alt="Icon address"/> {props.address} </p>
            <p className="cardBody my"><img src={require("../images/icon_tel.png")} alt="Icon Tel"/> {props.tel} </p>
            <div className="cardBody my">
                <img src={require("../images/icon_clock.png")} alt="Icon Clock" style={{display:"inline-flex"}}/>
                <div style={{display:"inline-flex"}}>{props.day} <br/>{props.night}
                </div>
            </div>
        </div>
        {/* 門市按鈕 */}
        <div className="col-12 col-md-6 ">
            <div className="row my">
                <div className="col d-flex justify-content-around">
                    <button type="button" className="btn myBtn "><Link to="/booking">線上訂位</Link></button>
                    <button type="button" className="btn myBtn "><Link to="/products">線上訂餐</Link></button>
                </div>
            </div>
            <div className="row my">
                <div className="col d-flex justify-content-around">
                <button type="button" className="btn myBtn" onClick={() => setModalShow(true)}>其他資訊</button>
                <button type="button" className="btn myBtn "><a href={"https://maps.google.com/?q="+ props.address } target="_blank" rel="noreferrer">GoogleMap</a></button>
                </div>
            </div>    
        </div>
        <MyModal
        name={props.name}
        detail={props.detail}
        traffic={props.traffic}
        parking={props.parking}
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
          <div className="cardTitle">{props.name}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cardBody">{props.detail}
        <br/><br/>
        交通資訊<br/>{props.traffic}<br/><br/>
        停車資訊<br/>{props.parking}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyShopList;
 