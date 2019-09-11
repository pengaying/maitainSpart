import React, { Component } from 'react'
import styles from "./systemPublic.less";
import { Input, Select } from 'antd';

export default class WorkState extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const Option = Select.Option;
        return (
            <div className={styles.Input_Two_Style_WorkState} style={{ textAlign: "right" }}>
                <div className={styles.Two_Input_TopWork}>
                    <span>工作状态:</span>
                    <Input
                        // value={this.state.InputEndValue}
                        placeholder="0.00~360.00"
                    // onChange={this.handleGetEndInputValue} 
                    />
                </div>

                <div className={styles.Two_Input_Top}>
                    <span>技术状态:</span>
                    <Select>
                        <Option value='normal'>正常</Option>
                        <Option value='fault'>故障</Option>
                    </Select>
                </div>

            </div>
        )
    }
}
