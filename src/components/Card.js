import React, { Component } from "react";

class Card extends Component {


  openModal = () => {
    this.props.openModal();
  };

  closeModal = () => {
    this.props.closeModal();
  };

  goToManage = () => {
    this.props.goToManage();
  };

  lastName = () => {
  return (this.props.customerDetails.lastName === undefined)?"":"," + this.props.customerDetails.lastName

  }

  totalQuantity = () => {
    let total = 0;
    if (this.props.items.items === undefined) {
      total = 0;
    } else {
      total = this.props.items.items
        .map(item => {
          return item.quantity;
        })
        .reduce((previouVal, currentVal) => {
          return previouVal + currentVal;
        });
    }
    return total;
  };

  totalQuantityModal = () => {
    let total = this.props.items
      .map(item => {
        return item.quantity;
      })
      .reduce((previouVal, currentVal) => {
        return previouVal + currentVal;
      });
    return total;
  };

  totalAmount = ()=>{
    return (this.props.items.total / 100).toFixed(2)
  }

  ageVerification =()=>{
    let age ;
    if(this.props.items.items !== undefined){
      let result = this.props.items.items.filter((item)=>{
        return item.age_restricted === true
      })
      if(result.length>0){
        for(let i = 0; i <result.length; i++){
          if(result[i].tags.indexOf("Cigarettes") >= 0){
            age =  (<div className="age-restricted"><h2>18+</h2></div>)
          }else if(result[i].tags.indexOf("Beer") >=0){
            age = ( <div className="age-restricted"><h2>21+</h2></div>)
          }
        }
        return age;
      }
    }
  }

  render() {

    const { isModal, items,modalWidth } = this.props;

    return (
      <div className="card-container">
        {isModal ? (
          <div className="navbar" style={{modalWidth}}>
            <p>
            <div className="close" onClick={this.closeModal} />
              <span>
                <i className="fa fa-user"></i>
              </span>
            </p>
            <div className="creds">
              <p>{`${this.props.customerDetails.firstName} ${this.lastName()}`}</p>
              <p>{this.props.customerDetails.phone}</p>
            </div>
          </div>
        ) : (
          <div className="navbar flex-column">
            <p>
            {this.ageVerification()}
              <span>
                <i className="fa fa-user"></i>
              </span>
            </p>
            <div className="creds">
              <p>{`${this.props.customerDetails.firstName} ${this.lastName()}`}</p>
              <p>{this.props.customerDetails.phone}</p>
            </div>
          </div>
        )}
        <div className="horizontal-separator"></div>
        <div className="items">
          {isModal ? (
            items.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="desc">
                    <p>
                      <span>
                        {item.thumbnail === undefined ? null: 
                          <img
                            className="thumb-img"
                            alt={item.thumbnail}
                            src={item.thumbnail}
                          />
                        }{" "}
                        {item.quantity}
                      </span>
                      {item.name === undefined ? item.product_id : item.name}
                    </p>
                  </div>
                  <p className="price">
                    {item.price !== undefined ? `$ ${(item.price / 100).toFixed(2)}` : null}
                  </p>
                </div>
              );
            })
          ) : items.items !== undefined ? (
            items.items.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="desc">
                    <p>
                      <span>
                        {item.thumbnail === undefined ? null: (
                          <img
                            className="thumb-img"
                            alt={item.thumbnail}
                            src={item.thumbnail}
                          />
                        )}{" "}
                        {item.quantity}
                      </span>
                      {item.name === undefined ? item.product_id : item.name}
                    </p>
                  </div>
                  <p className="price">
                    {item.price !== undefined ? `$ ${(item.price / 100).toFixed(2)}`: null}
                  </p>
                </div>
              );
            })
          ) : null }
        </div>
        <div className="horizontal-separator-1"></div>
        <div className="total">
          <p className="total-items">
            <span>Items: </span>
            <span className="items">
              {!isModal ? this.totalQuantity() : this.totalQuantityModal()}
            </span>
          </p>
          <p className="total-price">
            <span>Total: </span>
            {!isModal ? (
              this.props.items.total !== undefined ? (
                <span className="items">
                  ${this.totalAmount()}
                </span>
              ) : this.props.items.grandTotal !== undefined ? (
                <span className="items">
                  ${(this.props.items.grandTotal / 100).toFixed(2)}
                </span>
              ) : (
                <span />
              )
            ) : (
              <span className="items">
                ${(this.props.total / 100).toFixed(2)}
              </span>
            )}
          </p>
        </div>
        <div className="button-pos">
          {isModal ? (
            <button
              className="details"
              onClick={this.goToManage}
            >
              Manage{" "}
            </button>
          ) : (
            <button className="details" onClick={this.openModal}>
              Details
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
