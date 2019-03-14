import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        isFocus: false,
        activeID: null,
        activeName: null
    }
    render() {
        return (
            <form>
                <div className={'col col-4'}>
                    <div className="select">
                        <select name="slct" id="slct">
                            <option>Марка</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Газ</option>
                        </select>
                    </div>
                </div>
                <div className={'col col-4'}>
                    <div className={`select-block ${this.state.focus ? 'focus' : ''} ${this.state.activeName ? 'added' : ''}`}>
                        <label>Марка</label>
                        <div className="custom-select">
                            <div className="active-list" onClick={() => this.setState({ focus: !this.state.focus })}>
                                {this.state.activeName ? this.state.activeName : ''}
                            </div>
                            <input type="text" className="list-field" value={this.state.activeName ? this.state.activeName : ''} />
                            <ul className="drop-down-list" style={{ display: this.state.focus ? 'block' : 'none' }} onClick={(e) => {
                                
                                this.setState({
                                    focus: false,
                                    activeID: e.target.dataset.id,
                                    activeName: e.target.innerText
                                })
                            }}>
                                <li data-id={1}>Audi</li>
                                <li data-id={2}>BMW</li>
                                <li data-id={3}>Toyota</li>
                                <li data-id={4}>Газ</li>
                                
                                <li data-id={11}>Audi 1</li>
                                <li data-id={22}>BMW 1</li>
                                <li data-id={33}>Toyota 1</li>
                                <li data-id={44}>Газ 1</li>

                                <li data-id={111}>Audi 2</li>
                                <li data-id={222}>BMW 2</li>
                                <li data-id={333}>Toyota 2</li>
                                <li data-id={444}>Газ 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'col col-4'}>lorem</div>
                <div className={'col col-4'}>lorem</div>
                <div className={'col col-4'}>lorem</div>
                <div className={'col col-4'}>lorem</div>
            </form>
        )
    }
}