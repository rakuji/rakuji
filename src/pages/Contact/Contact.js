import React from "react";
import { Form, Col, Row, Container, Select } from "react-bootstrap";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      select: "",
      subject: "",
      message: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const type = event.target.type;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <Container className="shadow p-3 mb-5 bg-white rounded d-grid gap-3 my-5 px-5">
        <Form onSubmit={this.handleSubmit}>
          <Row className="justify-content-center">
            <Col>
              <h2>聯絡我們</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>請填寫您的聯絡方式</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <label htmlfor="name">姓名</label>
                <input type="name" className="form-control" id="name" name="name" placeholder="姓名" value={this.state.name} onChange={this.handleInputChange}></input>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email</Form.Label>
                <input type="email" className="form-control" id="email" name="email" placeholder="xxxxxx@com" value={this.state.email} onChange={this.handleInputChange}></input>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>選擇項目</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select type="select" id="select" name="select" placeholder="" value={this.state.select} onChange={this.handleInputChange}>
                <option value="一般消費建議">一般消費建議</option>
                <option value="餐點回饋">餐點回饋</option>
                <option value="客訴">客訴</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>主旨</Form.Label>
                <input type="subject" className="form-control" id="subject" name="subject" placeholder="主旨" value={this.state.subject} onChange={this.handleInputChange}></input>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>留言</Form.Label>
                <textarea type="meessage" className="form-control" id="message" name="message" placeholder="內文" value={this.state.message} onChange={this.handleInputChange}></textarea>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <input type="submit" value="送出" className="btn1"></input>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Contact;
