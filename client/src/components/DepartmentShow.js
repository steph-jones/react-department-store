import React from 'react';
import axios from 'axios';
import {Link, } from 'react-router-dom';
import ItemIndex from './ItemIndex.js';
import {Header, Divider, Icon, Button, Segment, Container, } from 'semantic-ui-react';

class DepartmentShow extends React.Component {
  state = {department: {},}

  componentDidMount(){
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({department: res.data})
      })
  }

  removeDepartment = () => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then(this.props.history.goBack)
  }

  render() {
    const {department} = this.state
    const {remove} = this.props.location
    return(
      <>
      <Container centered>
        <Segment raised textAlign="center" inverted color='pink' tertiary>
          <Header as="h1" color='white'>{ this.state.department.name } Department </Header>
        </Segment>
        <br />
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='shopping cart' />
            { this.state.department.name } Items
          </ Header>
        </Divider>
        <br />
        <ItemIndex 
          dId={department.id}
        />
        <br />
        <br />
        <Divider horizontal>
          <Header as='h4'>
            <Button.Group>
              <Button color="inverted blue"  as={Link}to={{
                  pathname: '/departments/new/',
                  dInfo: {department}}}
                    > Edit Department 
              </Button > 
              <Button color="inverted blue" onClick={this.removeDepartment}>Delete Department</Button> 
              <Button color="inverted blue"  onClick={this.props.history.goBack}>Go back</Button>
            </Button.Group>
          </Header>
        </Divider>
        <br />
        <br />
      </Container>
      </>
      )
    }
}


export default DepartmentShow;