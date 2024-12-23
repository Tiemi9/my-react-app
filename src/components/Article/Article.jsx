import React from "react";
import Image from "../../assets/Rectangle30.png";
import "./style.css"

export class Article extends React.Component {
    render() {
        return (
            
            <article id="article">
                <img src={Image} alt="" />
                            
                <div className="article-description">

                    <h2> Designing Dashboards</h2>

                    <span>Nasa</span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint inventore ex laboriosam iste obcaecati, voluptatibus eligendi nam. Assumenda reiciendis itaque tempore accusantium atque earum quam repellat iusto aperiam veniam.
                    </p>
                
                </div>
            </article>
          
        )
    }
    
}