
import React, { Component, Fragment } from 'react';
import {  Icon } from 'antd';
import Draggable from 'react-draggable';
import styles from './index.less';
// import DockArea from './DockArea';
import TabToggle from './TabToggle';

import { connect } from 'dva';

@connect(({ windowModal }) => ({ windowModal }))
export default class Message extends Component {
    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <Fragment>
                <Draggable bounds="#spare" handle="strong" {...dragHandlers}>
                    <div className={styles.jam_content}
                        hidden={!(this.props.windowModal.showReceiveMessage || this.props.windowModal.showSendMessage)}
                    >
                        <div style={{ float: "left" }}>
                            <strong>
                                <div className={styles.messageIcon}>
                                    <div className={styles.iconColor} />
                                    <div className={styles.messageTitle}>通信信息</div>
                                    <div style={{ float: 'right', padding: '5px 10px' }}>
                                        {/* <div style={{ display: 'inline-block', padding: '0 10px', color: '#404444a6' }} onClick={this.handleControlDrag} >
                                            <Icon type="pushpin" theme="filled" />
                                        </div> */}
                                        <div style={{ display: 'inline-block' }} onClick={this.CloseDockerArea} >
                                            <Icon type="close" />
                                        </div>
                                    </div>
                                </div>
                            </strong>
                        </div>


                        <TabToggle />
                    </div>
                </Draggable>
            </Fragment >
        )
    }
    CloseDockerArea = ()=>{
        this.props.dispatch({
            type:'windowModal/closeDockerArea'
        })
     }
}

