
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class CreateSpareArea extends Component {
    constructor(props) {
        super();
        this.state = {
            Contain: false,
            CreateState: false,
        }

    }
    render() {
        return (
            <Dialog
                visible={this.props.visible}
                title='新建备件地点'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '250px' }}>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>柜号:</span>
                                <Input value={this.state.caseNum} onChange={this.ClickCaseNum} style={{ width: '150px' }} />
                            </div>
                        </div>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>格号:</span>
                                <Input value={this.state.containNum} onChange={this.ClickContainNum} style={{ width: '150px' }} />
                            </div>
                        </div>


                        {/* 确认 */}

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickCreate}>确认</Button>
                            </div>
                        </div>


                    </div>
                </div>
            </Dialog>
        )
    }

    ClickCaseNum = (e) => {
        this.setState({
            caseNum: e.target.value
        })
    }
    ClickContainNum = (e) => {
        this.setState({
            containNum: e.target.value
        })
    }
    ClickCreate = () => {
        let obj = {
            'cabinetNo': this.state.containNum,
            'latticeNo': this.state.caseNum
        }
        // console.log('obj====', obj)
        this.props.dispatch({
            type: 'sparepartmodal/StorageAreaCreat',
            payload: obj
        })
    }

}


