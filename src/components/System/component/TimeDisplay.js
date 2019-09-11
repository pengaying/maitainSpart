import React, { Component } from 'react'
import styles from "./systemPublic.less";
import { Input, DatePicker } from 'antd';
import moment from 'moment';

export default class TimeDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    componentWillMount() {
        setInterval(() => {
            let today = new Date();
            let yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; //一月是0，一定要注意
            let dd = today.getDate();
            let hour = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();
            if (mm < 10) {
                mm = '0' + mm
            }
            if (dd < 10) {
                dd = '0' + dd
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + minutes + ":" + seconds;
            this.setState({
                time: today
            })
        }, 1000);

    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <div className={styles.Input_Two_Style} style={{ textAlign: "right" }}>

                <div className={styles.Two_Input_Top}>
                    <span>天文时间:</span>
                    <Input
                        // format="YYYY-MM-DD HH:mm:ss"
                        value={this.state.time}
                        // showTime showToday
                        style={{ width: '135px' }}
                        disabled
                    />
                </div>

                <div className={styles.Two_Input_Top} >
                    <span>作战时间:</span>
                    <Input
                        // format="YYYY-MM-DD HH:mm:ss"
                        style={{ width: '135px' }}
                    />
                </div>
            </div>
        )
    }



    Date = () => {
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; //一月是0，一定要注意
        let dd = today.getDate();
        let hour = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        if (mm < 10) {
            mm = '0' + mm
        }
        if (dd < 10) {
            dd = '0' + dd
        }
        today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + minutes + ":" + seconds;
        return today
    }
}
