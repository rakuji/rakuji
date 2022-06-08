import React from 'react'
import { Form } from 'react-bootstrap';
 
class BootstrapDatePicker extends React.Component{
 
    render(){
 
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <Form.Group controlId="dob">
                            <Form.Label>出生日期</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
     
}
 
export default BootstrapDatePicker;