import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'
import logo from './imgs/1.png'

class Login extends Component {
  
  render () {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
        {/*  表单函数组件*/}
         <NormalLoginForm/>
        </section>
      </div>
    )
  }
}


  const NormalLoginForm = () => {
    const onFinish = values => {//提交表单且数据验证成功后回调事件
      console.log('Received values of form: ', values);
    };

    return (
      <Form
        onFinish ={onFinish} className="login-form"
        initialValues={{
          username:'admin',//默认值
        }}
      >
        <Form.Item
          name="username"
          rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
            { required: true, whitespace: true, message: '用户名必须输入' },
            { min: 4, message: '用户名至少4位' },
            { max: 12, message: '用户名最多12位' },
            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, whitespace: true, message: '用户名必须输入' },
            { min: 4, message: '用户名至少4位' },
            { max: 12, message: '用户名最多12位' },
            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
}


export default Login
