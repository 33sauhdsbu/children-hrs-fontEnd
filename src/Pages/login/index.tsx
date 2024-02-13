import { Button } from 'antd'
import React from 'react'

const Login: React.FC = () => {
  return <div>
        <Button onClick={() => { alert(1) }}>
            Login
        </Button>
    </div>
}

export default Login
