import React, { Component } from 'react'
import styles from "./systemPublic.less";
import { Input, DatePicker, } from 'antd';

export default class DeploySet extends Component {
    render() {
        return (
            <div className={styles.Input_Two_Style} style={{ textAlign: "right" }}>
                <div className={styles.Two_Input_Top}>
                    <span>部署完成时间:</span>
                    <DatePicker showTime style={{ minWidth: '150px' }} />
                </div>
                <div className={styles.Two_Input_Top} >
                    <span>站名:</span>
                    <Input
                        value='备品备件车'
                        disabled
                    // onChange={this.handleGetEndInputValue} 
                    />
                </div>
            </div>
        )
    }
}
