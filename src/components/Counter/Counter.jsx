import React from "react"
import "./style.css"


export class Counter extends React.Component {
    constructor(){
        super()
        this.state = { contador: 0, name: '', password: ''};
    }
    render() {
        return (
            <div id="counter">
                <h2>{this.state.contador}</h2>

                <div className="counter-button">
                    <button 
                        onClick={(event) => {
                            this.setState({contador: this.state.contador -1});
                            console.log(this.state)
                        }}>
                        Less
                    </button>

                    <button 
                        onClick={(event) => {
                            this.setState({contador: this.state.contador +1});
                            console.log(this.state)
                        }}>
                        More
                    </button>
                </div>

                <div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="Login" 
                            value={this.state.name}
                            onChange={(event) => {
                                this.setState({ name: event.target.value })
                                console.log(this.state.name)
                            }}
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={this.state.password}
                            onChange={(event) => {
                                this.setState({ password: event.target.value })
                            }}
                        />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}