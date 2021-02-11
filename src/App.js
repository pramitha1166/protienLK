import React , {Component} from "react"
import {TopHeader,MainHeader,BottumHeader} from './Components/Header/index'
import './App.css'
import HeroArea from './Components/HeroArea/HeroArea'
import {Feature,Brand,BreakingAdd2} from './Components/HomePageBody/index'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return(
      <div>
        <TopHeader />
        {/* <MainHeader /> */}
        <BottumHeader / >
        <HeroArea />
        <div className="mt-3">
          <Feature headerName={'Feature Products'} />
          <Feature headerName={'Recomend Products'} />
        </div>
        <div className="breakingAdd">
          <h3>Island Delivery Available</h3>
        </div>
        <Brand />
        <BreakingAdd2 />
        <Footer />
      </div>
    )
  }
}

export default App;
