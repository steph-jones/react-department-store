import React, { Fragment, } from 'react';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import DepartmentShow from './components/DepartmentShow';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment> 
    {/*    can also do a fragment by <> then ending with </>    */}
    <Navbar />
    <br />
    <br />
    <Container>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        {/* <Route exact path="/departments/new" component={DepartmentsForm} /> */}
        <Route exact path="/departments/:id" component={DepartmentShow} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
