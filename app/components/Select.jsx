import React, { Component } from 'react';
import { prefixed } from 'eventemitter3';

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

    handleFocus = () => {
        if (this.props.disabled) return;

        this.setState({ isFocus: !this.state.isFocus });
    }

    handleClickList = (e) => {
        const { 
            dataset: {
                id
            },
            innerText
        } = e.target;

        this.setState({
            isFocus: false,
            activeID: id,
            activeName: innerText
        });
        this.props.onChange(id);
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

        const is = options.length !== 0;

        return (
            <div 
            className={`select-block ${disabled ? 'select-block__disabled' : ''} ${isFocus ? 'focus' : ''} ${is && activeName ? 'added' : ''}`} 
            ref={this.handleSelectRef}
            >
                <label>{title}</label>
                <div className="custom-select">
                    <div 
                        className="active-list" 
                        onClick={this.handleFocus}
                    >
                        {is && activeName ? activeName : ''}
                    </div>
                    <input
                        type="text" 
                        className="list-field"
                        readOnly 
                        value={is && activeName ? activeName : ''} 
                    />
                    <ul 
                        className="drop-down-list" 
                        style={{ display: isFocus ? 'block' : 'none' }} 
                        onClick={this.handleClickList}
                    >
                        <li data-id={-1}>Все</li>
                        {options.map((item) => (
                            <li 
                                key={item.id} 
                                className={String(activeID) === String(item.id) ? 'drop-down__active' : ''} 
                                data-id={item.id}>{item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}