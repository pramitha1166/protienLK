import React , {Component} from "react"
import {TopHeader,MainHeader,BottumHeader} from './Components/Header/index'
import './App.css'
import HeroArea from './Components/HeroArea/HeroArea'
import {Feature,Brand,BreakingAdd2} from './Components/HomePageBody/index'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './Home'
import ItemPage from './Components/ItemPage/ItemPage'
import ListingPage from './Components/ListingPage/ListingPage'

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <TopHeader />
          <MainHeader />
          <BottumHeader />
         
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/item">
              <ItemPage />
            </Route>
            <Route exact path="/list">
              <ListingPage />
            </Route>
          </Switch>

          

          <Footer />

        </Router>
      </div>
    )
  }
}

export default App;
