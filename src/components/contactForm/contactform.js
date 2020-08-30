import React, {useState} from 'react'
import { Form, Input, Button,Row, notification } from 'antd';
import '../contactForm/contactform.css'


export default function ContactForm() {
    const [formInput, setFormInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value })
    }

    const onFinish = values => {
        console.log('Success:', values);
        const args = {
            message: 'Thanks for the email - I will get back to you shortly!',
            duration: 2,
          };
          notification.open(args);
          setFormInput({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          })
    };
 
    return (
        <div className="form-container" id="contactme">
 
            <Row justify= "center" align="middle" className="form-filter">
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="contact-form"
            >
            <Form.Item
                
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input 
                    value={formInput.firstName}
                    onChange={handleInputChange}
                    name="firstName"
                    placeholder="Jane"
                    type="text"
                />
            </Form.Item>

            <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name' }]}
            >
                <Input
                    value={formInput.lastName}
                    onChange={handleInputChange}
                    name="lastName"
                    placeholder="Doe"
                    type="text"
                />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input
                    value={formInput.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="jane@doe.com"
                    type="email"
                />
            </Form.Item>

            <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please include a message!' }]}
            >
                <Input.TextArea
                    value={formInput.message}
                    onChange={handleInputChange}
                    name="message"
                    placeholder="Hey Nicole..."
                    
                />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="submit" justify= "center" align="middle">
                Submit
                </Button>
            </Form.Item>
            </Form>
            </Row>
        </div>
    )
}
