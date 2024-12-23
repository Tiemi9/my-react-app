import React from "react";
import  { Navbar } from "./components/Navbar/Navbar"
import { Article } from "./components/Article/Article";
import ArticleImg1 from "../src/assets/Rectangle30.png";
import ArticleImg2 from "./assets/Rectangle32.png";
import ArticleImg3 from "./assets/Rectangle34.png"
import ArticleImg4 from "./assets/Rectangle36.png"

import './styles/App.css'

class App extends React.Component {

  render() {
   return (
      <>
        <Navbar/>

        <section id="articles">
          <Article 
            img = ""
            title = "Designing Dashboard"
            provider = "NASA"
            description = "Inventore suscipit totam quasi dicta ipsam laborum libero veritatis nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est itaque asperiores perspiciatis possimus veniam numquam ipsum eligendi suscipit maiores quibusdam. "
            thumbnail={ArticleImg1}
          />

          <Article 
            title = "Vibrant portraits of 2024"
            provider = "SpaceNews"
            description = "Amet consectetur adipisicing elit. Est itaque asperiores perspiciatis possimus veniam numquam ipsum eligendi suscipit maiores quibusdam. Inventore suscipit totam quasi dicta ipsam laborum libero veritatis nobis."
            thumbnail={ArticleImg2}
          />

          <Article 
            title = "36 Dsays of Malayalam Typer"
            provider = "SpaceFlight Now"
            description = "Est itaque asperiores perspiciatis possimus veniam numquam ipsum eligendi suscipit maiores quibusdam. Inventore suscipit totam quasi dicta ipsam laborum libero veritatis nobis."
            thumbnail={ArticleImg3}
          />

          <Article 
            title = "Whatever"
            provider = "Something"
            description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est itaque asperiores perspiciatis possimus veniam numquam ipsum eligendi suscipit maiores quibusdam. Inventore suscipit totam quasi dicta ipsam laborum libero veritatis nobis."
            thumbnail={ArticleImg4}
          />

        </section>
       
      </>
    )
  }
}

export default App
