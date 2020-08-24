import React from 'react'
import { Form, Input, Button,Row } from 'antd';
import '../contactForm/contactform.css'


export default function ContactForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      

    const onFinish = values => {
        console.log('Success:', values);
    };
 
    return (
        <div className="form-container" id="contactme">
            <Row justify= "center" align="middle"className="form-filter">
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="contact-form"
            >
            <Form.Item
                
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input 
                className="contact-form"
                    name="firstName"
                    placeholder="First Name"
                />
            </Form.Item>

            <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input
                    name="lastName"
                    placeholder="Last Name"
                />
            </Form.Item>

            <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.TextArea
                    name="message"
                    placeholder="Hey Nicole..."
                />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
            </Row>
        </div>
    )
}
