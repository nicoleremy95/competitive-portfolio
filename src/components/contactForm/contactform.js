import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


export default function ContactForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
    //   const Demo = () => {
        const onFinish = values => {
          console.log('Success:', values);
        };
      
    //     const onFinishFailed = errorInfo => {
    //       console.log('Failed:', errorInfo);
    //     };
    //   }
    return (
        <div>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input 
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
        </div>
    )
}
