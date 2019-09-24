import React, {Component} from 'react';

const Button = props =>{
    return (
        <button className="btn digits" onClick={(e)=>props.handleClick(e.target.value)} value={props.children}>
                {props.children}
        </button>)
}

const Screen = props => {
    return (
        <div className="screen digits ">
            {props.children}
        </div>
    )

}

class AgeVerification extends Component {

    state = {
        screen: '',
        success:false,
        isValid: '',
        password: ''
    }

    getId = val => {
        this.setState({
            screen : this.state.screen + val
        })
    }

    onClear = () =>{
        this.setState({
            screen: ''
        })
    }

    onSubmit = () =>{
        if(this.state.screen === "1234" ){
            this.setState({
                success:true,
                isValid:'Login Id is correct'
            })
        }else{
            this.setState({
                success:false,
                isValid:'Access denied'
            })
        }
    }
    
    // pin = '1234';

    // validadePassword = (getId, pin) => {
    //   //return getId === pin ? this.state.screen.type === 'password' : this.state.screen.type === 'number';
    //     console.log(pin);
    // }
    render() {
        const { screen  } = this.state;
        return (
        <div className="age-container">
            <div className="age-content">
                <div className="login-text">
                    <div className="login">
                        <span>Login</span>
                    </div>
                    <div className="employee">
                        <span>Enter your Employee ID.</span>
                    </div>
                </div>
                <Screen>
                    {screen}
                </Screen>
                <div>
                    <Button handleClick={this.getId}>7</Button>
                    <Button handleClick={this.getId}>8</Button>
                    <Button handleClick={this.getId}>9</Button>
                </div>
                <div>
                    <Button handleClick={this.getId}>4</Button>
                    <Button handleClick={this.getId}>5</Button>
                    <Button handleClick={this.getId}>6</Button>
                </div>
                <div>
                    <Button handleClick={this.getId}>1</Button>
                    <Button handleClick={this.getId}>2</Button>
                    <Button handleClick={this.getId}>3</Button>
                </div>
                <div>
                    <Button handleClick={this.onClear}>Clear</Button>
                    <Button handleClick={this.getId}>0</Button>
                    <Button handleClick={this.onSubmit}>Enter</Button>
                </div>
            </div>
            <div>
                {/* {(success)? isValid: isValid} */}
            </div>
        </div>
    );
    }
}

export default AgeVerification;