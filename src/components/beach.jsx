import React, { Component } from 'react';

class Beach extends Component {
  handleClick = () => {
    this.props.selectBeach(this.props.index);
  }

  render() {
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.beach.imageUrl}')` }}>
        <div className="card-category">{this.props.beach.price} {this.props.beach.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.beach.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Beach;
