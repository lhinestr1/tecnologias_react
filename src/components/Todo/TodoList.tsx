import React from "react";
//andt
import { List, Row, Col, Button, Tooltip } from 'antd'
//iconos
import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

interface IRecipeProps {
  todos?: any;
  eliminarTodo(payload: todo): any;
  editarTodo(payload: todo): any;
}

interface todo {
  id: number;
  description: string;
  done: boolean;
}

const TodoList: React.FC<IRecipeProps> = ({todos, eliminarTodo, editarTodo}) => {

  return (
    <List
        dataSource={todos}
        bordered
        renderItem={(item:todo) => {
            return (
                <List.Item >
                    <Row style={{width:"100%"}}>
                        <Col xs={18} md={20}>
                            {item.description}
                        </Col>
                        <Col xs={3} md={2} style={{padding:"2px"}}>
                            <Button onClick={()=>editarTodo(item)} type="primary" block icon={<CheckCircleOutlined />}></Button>
                        </Col>
                        <Col xs={3} md={2} style={{padding:"2px"}}>
                            <Button onClick={()=>eliminarTodo(item)} type="primary" block  danger icon={<DeleteOutlined />}></Button>
                        </Col>
                    </Row>
                </List.Item>
            )
        }}
    />
  );

 

};


export default TodoList;
