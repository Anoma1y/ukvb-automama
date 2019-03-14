import React, { Component } from 'react';

export default class Select extends Component {
    state = {
        isFocus: false,
        activeID: null,
        activeName: null
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    
      handleClickOutside = (event) => {
        if (this.selectRef && !this.selectRef.contains(event.target)) {
          this.setState({ isFocus: false });
        }
      };
      
      handleSelectRef = (node) => {
        this.selectRef = node;
      };

    render() {
        const { 
            isFocus,
            activeID,
            activeName
         } = this.state;
        const {
            title = '',
            disabled = false,
            options = []
        } = this.props;

        return (
            <div className={`select-block ${isFocus ? 'focus' : ''} ${activeName ? 'added' : ''}`} ref={this.handleSelectRef}>
                <label>{title}</label>
                <div className="custom-select">
                    <div className="active-list" onClick={() => this.setState({ isFocus: !isFocus })}>
                        {activeName ? activeName : ''}
                    </div>
                    <input type="text" className="list-field" readOnly value={activeName ? activeName : ''} />
                    <ul className="drop-down-list" style={{ display: isFocus ? 'block' : 'none' }} onClick={(e) => {
                        this.setState({
                            isFocus: false,
                            activeID: e.target.dataset.id,
                            activeName: e.target.innerText
                        });
                        this.props.onChange(e.target.dataset.id);
                    }}>
                        <li data-id={-1}>Все</li>
                        {options.map((item) => <li key={item.id} className={String(activeID) === String(item.id) ? 'drop-down__active' : ''} data-id={item.id}>{item.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}