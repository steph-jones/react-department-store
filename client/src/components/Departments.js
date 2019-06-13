import React, {useState, useEffect} from 'react';
import {Card, Divider, Header, Button, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Departments = (props) => {
    const [departments, setDepartments] = useState([]);

    useEffect( () => {
        axios.get('api/departments')
            .then( res => {
                setDepartments(res.data);
        })
    }, []);

    const renderDepartments = () => {
        if (departments.length <= 0) return <h2>No Departments</h2>
        return departments.map(d => (
            <Link 
            to={`/departments/${d.id}`}
            key={d.id}
            >
            <Card color='blue' style={{padding:'10px', margin: '20px'}}>
                <Card.Content>
                    <Card.Header textAlign='center' style={{color:'#297ca0'}}>{d.name}</Card.Header>
                    <Card.Description>{d.description}</Card.Description>
                </Card.Content>
            </Card>
            </Link>
        ))
    };

    return (
        <>
        {/* <Header as="h1" color='inverted blue' >Departments</Header> */}
        <Segment textAlign='center' raised inverted color='blue' tertiary>
          <Header as="h1" color='white'>Departments</Header>
        </Segment>
        <Segment vertical >
            <Card.Group centered>
            {renderDepartments()}
            </Card.Group>
            <Divider horizontal>
            <Header as='h4'>
                <Button as={Link} color=" inverted blue" to="/departments/new">
                    Add Department
                </Button>
            </Header>
            </Divider>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Segment>
        </>
    )
}

export default Departments