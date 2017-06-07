import React from 'react'
import './Tip.scss'

class Tip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <span className='tip'>
              <i className='fa fa-exclamation-triangle' />
              {this.props.info}
          </span>
    );
  }

}

export default Tip;
