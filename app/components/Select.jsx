import React, { Component } from 'react';
import _ from 'lodash';

export default class Select extends Component {
    state = {
        isFocus: false,
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
        } = e.target;

        this.setState({ isFocus: false });
        this.props.onChange(id);
    };
    
    render() {
        const { 
            isFocus,
         } = this.state;
        const {
            title = '',
            value = null,
            disabled = false,
            options = [],
            showAll = true,
            required = false
        } = this.props;

        const is = options.length !== 0 && value;
        const activeName = _.find(options, { id: value }) || null;

        return (
            <div 
            className={`select-block ${disabled ? 'select-block__disabled' : ''} ${isFocus ? 'focus' : ''} ${is ? 'added' : ''}`} 
            ref={this.handleSelectRef}
            >
                <label>{title} {required && <span className={'select-block_label__required'}>*</span>}</label>
                <div className="custom-select">
                    <div 
                        className="active-list" 
                        onClick={this.handleFocus}
                    >
                        {is && activeName ? activeName.name : ''}
                    </div>
                    <input
                        type="text" 
                        className="list-field"
                        readOnly 
                        value={is && activeName ? activeName.name : ''} 
                    />
                    <ul 
                        className="drop-down-list" 
                        style={{ display: isFocus ? 'block' : 'none' }} 
                        onClick={this.handleClickList}
                    >
                        {showAll && <li data-id={null}>Все</li>}
                        {options.map((item) => (
                            <li 
                                key={item.id} 
                                className={String(value) === String(item.id) ? 'drop-down__active' : ''} 
                                data-id={item.id}>{item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}