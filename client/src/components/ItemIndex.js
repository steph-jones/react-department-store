import React, {useState, useEffect} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import {Link, } from 'react-router-dom';
// import {IndexGroup, } from '../Styles/Styles';
import styled from 'styled-components';
import axios from 'axios';

// class ItemIndex extends React.Component {
//     state = {
//       items: [{ }],
//     }

const ItemIndex = (props) => {
  const [items, setItems] = useState([])
  

  
  useEffect(() => {
    axios.get(`/api/departments/${props.dId}/items`)
    .then( res => {setItems(res.data)})}, [props])
  

    // <Button  as={Link}to={{
    //   pathname: '/departments/new/',
    //   dInfo: {department}}}
    
    // const IndexGroup = styled.div`
    //     display: grid;
    //     grid-template-columns: repeat(3, 1fr);
    //     grid-gap: 10px;
    //     justify-items: center;
    //     `;
  
  const renderItems = () => {
    // const {items, } = this.state
    if (items.length <= 0) return <h2>No Items</h2>
    return items.map(i => (
      <Link 
      to={{
        pathname: `/departments/${props.dId}/items/${i.id}`,
      item: i,}}
      key={i.id}
      >
      <Card color='pink' style={{padding: '10px', margin: '20px'}}>
        <Card.Content>
          <Card.Header as="h3" color='blue'>{i.name}</Card.Header>
          <Card.Description color="grey">{i.description}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
    ));
  };
  console.log(props)
  return(
    <Grid centered>
      {renderItems()}
    </Grid>
  );
}

export default ItemIndex;