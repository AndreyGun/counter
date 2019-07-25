import React, { Component  } from 'react';

import './counter.css';

export default class Counter extends Component  {
    state = {
        count: 0
    }
    onMinus() {
        this.setState(({ count }) => {
            return {
                count: --count
            }
        })
    }
    onPlus() {
        this.setState(({ count }) => {
            return {
                count: ++count
            }
        })
    }
    render() {

        const { count } = this.state;

        return (
            <div className="counter-block">
                <button className="btn btn-minus"
                    onClick={() => this.onMinus()}>
                    Minus
                </button>
                <div className="counter-item">
                    {count}
                </div>
                <button className="btn btn-plus"
                    onClick={() => this.onPlus()}>
                    Plus
                </button>
            </div>
        );
    }
}