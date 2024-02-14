import { Button, Card, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './index.less'

const { Item } = Form
const Login: React.FC = () => {
  const [isSign, setIsSign] = useState<boolean>(false)
  const { t } = useTranslation()
  return isSign
    ? <Card style={{ width: 500, height: 400 }}>
    <strong style={{ fontSize: 20 }}>
     {t('login title')}
    </strong>
    <Form style={{ marginTop: 30, marginBottom: 50 }} onFinish={() => {}}>
        <Item label={t('User')} style={{ height: 30 }}>
           <Input></Input>
        </Item>
        <Item label={t('Phone')} style={{ height: 30 }}>
            <Input addonAfter={<div>{t('Get Verification Code')}</div>}/>
        </Item>
        <Item label={t('Password')}>
            <Input></Input>
        </Item>
        <Item label={t('Confirm Password')}>
            <Input></Input>
        </Item>
    </Form>
    <div style={{ float: 'right' }}>
        <Button style={{ width: 100, height: 50, marginRight: 10 }} onClick={() => { setIsSign(false) }}>
            {t('Back Login')}
        </Button>
        <Button type='primary' style={{ width: 100, height: 50 }} onClick={() => { setIsSign(false) }}>
            {t('Sign Up')}
        </Button>
    </div>
    </Card>
    : <Card style={{ width: 500, height: 350 }}>
    <strong style={{ fontSize: 20 }}>
        {t('login title')}
    </strong>
    <Form style={{ marginTop: 50, marginBottom: 50 }} onFinish={() => {}}>
        <Item label={t('User')} style={{ height: 30 }}>
           <Input></Input>
        </Item>
        <Item label={t('Password')}>
            <Input></Input>
        </Item>
    </Form>
    <Button type='primary' style={{ width: 100, marginRight: 100, height: 50 }} onClick={() => { setIsSign(true) }}>
        {t('Sign Up')}
    </Button>
    <Button type='primary' style={{ width: 100, height: 50 }} onClick={() => { alert(2) }}>
        {t('Login')}
    </Button>
    </Card>
}
export default Login
