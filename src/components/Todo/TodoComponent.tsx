import React, { useState } from "react";
import { connect } from "react-redux";

//andesing
import { Tabs, Button, Row, Col, Form, Input } from "antd";
//iconos
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import todoreducer from "../../redux/reducers/todoReducer";
import TodoList from './TodoList';

interface IRecipeProps {
  todos?: any;
   addTodo: (payload: todo) => void ;
   deleteTodo: (payload: todo) => void ;
   updateTodo: (payload: todo) => void ;
}

interface todo {
  id: number;
  description: string;
  done: boolean;
}

const UseStateComponent: React.FC<IRecipeProps> = ({addTodo,todos,deleteTodo,updateTodo,}) => {
    
  const { TabPane } = Tabs;

  //const [todo, setTodo] = useState("");
  const [form] = Form.useForm();

   const agregarTodo = (values:any) => {
      console.log(values);
      
      addTodo({
         id: Math.random(),
         description: values.task.toUpperCase(),
         done: false
      });
      //setTodo("");
      form.resetFields();
   };

   const onFinishFailed = (errorInfo:any) => {
      console.log('Failed:', errorInfo);
   };

  const eliminarTodo = (obj: todo) => {
    deleteTodo(obj);
  };

  const editarTodo = (obj: todo) => {
    updateTodo(obj);
  };

  const realizadas = todos.filter( (obj:todo) => obj.done )
  const pendientes = todos.filter( (obj:todo) => !obj.done )

  return (
    <div style={{marginTop:"20px"}}>
      <Form
      form={form}
      name="basic"
      initialValues={{ task: "" }}
      onFinish={agregarTodo}
      onFinishFailed={onFinishFailed}
    >
         <Row style={{width:"100%"}}>
            <Col xs={16} md={16} style={{padding:"2px"}}>
               <Form.Item
                  name="task"
                  rules={[{ required: true, message: 'Uy! Se le olvidó esto' }]}
                  >
                  <Input placeholder="agregue tarea pendiente" autoComplete="off" />
               </Form.Item>
            </Col>
            <Col xs={8} md={8} style={{padding:"2px"}}>
               <Button block htmlType="submit" type='primary'>Agregar</Button>
            </Col>
         </Row>
      </Form>
      <div>
        <Tabs defaultActiveKey="1" centered>
            <TabPane key="1"
                tab={
                    <span>
                        <CloseOutlined style={{color:"red"}} />
                        Pendientes
                    </span>
                }
                >
                <TodoList todos={pendientes} eliminarTodo={eliminarTodo} editarTodo={editarTodo} ></TodoList>
            </TabPane>
            <TabPane key="2"
               tab={
                  <span>
                     <CheckOutlined style={{color:"green"}}/>
                     Terminados
                  </span>
               }
            >
            <TodoList todos={realizadas} eliminarTodo={eliminarTodo} editarTodo={editarTodo} ></TodoList>
            </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

const mapStateToProsp = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProsp = (dispatch: any) => ({
  addTodo: (payload: todo) => dispatch(todoreducer.actions.addTodo(payload)),
  deleteTodo: (payload: todo) =>
    dispatch(todoreducer.actions.deleteTodo(payload)),
  updateTodo: (payload: todo) =>
    dispatch(todoreducer.actions.updateTodo(payload)),
});

export default connect(mapStateToProsp, mapDispatchToProsp)(UseStateComponent);
