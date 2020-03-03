import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

class TopMenu extends React.Component {
  render() {
    return (

        <Menu borderless className="topmenu">
        <Container>
          <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/>
        <Menu.Item fitted>Home</Menu.Item>
          <Dropdown item text="About Us" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    <Menu.Item fitted>St.Patrick's Day</Menu.Item>
          <Dropdown item text="Menus" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>Lunch Menu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    <Menu.Item fitted>Bar</Menu.Item>
    <Menu.Item fitted><Icon name="search" /></Menu.Item>
    </Container>
  </Menu>
    )
  }
}

class MurphyLogo extends React.Component {
  render() {
    const gridStyle = {height:"500px"}
    return (
        <Menu borderless className="murphy-background">
          <Grid container verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
        <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" inverted>
                  A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu>
    )
  }
}


class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MurphyLogo/>
          {/*<MiddleMenu/>*/}
          {/*<FullWidthImage/>*/}
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<murphys-react/>, document.getElementById('root'));