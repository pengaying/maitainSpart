import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input } from 'antd';
import styles from '../SpareDialog.less';
import axios from 'axios';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class CheckSetting extends Component {
    constructor(props) {
        super();
        this.state = {
            person: '',
            rate: '',
        }

    }
    render() {
        return (
            <Dialog
                visible={this.props.visible}
                title='盘点设置'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '500px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>盘点人:</span>
                                <Input name='person' onChange={this.ChangeInput} value={this.state.person} style={{ width: '120px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>盘点比例(%):</span>
                                <Input name='rate' onChange={this.ChangeInput} value={this.state.rate} style={{ width: '120px' }} />
                            </div>
                        </div>

                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOk}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
    ChangeInput = (e) => {
        switch (e.target.name) {
            case 'person':
                this.setState({
                    person: e.target.value
                });
                break;
            case 'rate':
                this.setState({
                    rate: e.target.value
                });
                break;
            default:
                break;
        }
    }
    // 盘点设置确认
    ClickOk = () => {
        let person = this.state.person;
        let rate = this.state.rate;
        console.log('person====', person)
        console.log('rate====', rate)
        let obj = {
            "people": person,
            "propertion": rate,
        }
        if (person !== '' && rate !== '') {
            this.props.dispatch({
                type: 'sparepartmodal/CheckSetting',
                payload: obj
            })
        }
    }
}


