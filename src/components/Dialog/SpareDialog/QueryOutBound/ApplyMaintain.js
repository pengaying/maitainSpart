import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input } from 'antd';
import styles from './Query.less';

export default class ApplyMaintain extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const { TextArea } = Input;

        return (
            <Dialog
                visible={this.props.visible}
                title='申请维修'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{width: '700px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件名称:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件PN:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件名称:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件SN:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件类别:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件型号:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>


                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>申请人:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>申请时间:</span><Input style={{ width: '200px' }} />
                            </div>
                        </div>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <span style={{ marginRight: '10px', lineHeight: '114px' }}>申请原因:</span><TextArea rows={7} style={{ width: '79%' }} />
                            </div>
                        </div>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>申请</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
}


