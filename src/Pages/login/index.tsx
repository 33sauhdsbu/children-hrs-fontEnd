import { Button, Card, Form, Input } from 'antd'
import React, { useState } from 'react'
import './index.less'

const { Item } = Form
const Login: React.FC = () => {
  const [isSign, setIsSign] = useState<boolean>(false)
  return isSign
    ? <Card style={{ width: 500, height: 350 }}>
    <strong style={{ fontSize: 20 }}>
     儿童医院预约挂号系统
    </strong>
    <Form style={{ marginTop: 50, marginBottom: 50 }} onFinish={() => {}}>
        <Item label='User' style={{ height: 30 }}>
           <Input></Input>
        </Item>
        <Item label='Phone' style={{ height: 30 }}>
           <Input></Input>
        </Item>
        <Item label='Password'>
            <Input></Input>
        </Item>
    </Form>
    <div>
        <Button type='primary' style={{ width: 100, height: 50, float: 'right' }} onClick={() => { setIsSign(false) }}>
            Sign Up
        </Button>
    </div>
    </Card>
    : <Card style={{ width: 500, height: 350 }}>
    <strong style={{ fontSize: 20 }}>
     儿童医院预约挂号系统
    </strong>
    <Form style={{ marginTop: 50, marginBottom: 50 }} onFinish={() => {}}>
        <Item label='User' style={{ height: 30 }}>
           <Input></Input>
        </Item>
        <Item label='Password'>
            <Input></Input>
        </Item>
    </Form>
    <Button type='primary' style={{ width: 100, marginRight: 100, height: 50 }} onClick={() => { setIsSign(true) }}>
        Sign Up
    </Button>
    <Button type='primary' style={{ width: 100, height: 50 }} onClick={() => { alert(2) }}>
        Login
    </Button>
    </Card>
}
export default Login
