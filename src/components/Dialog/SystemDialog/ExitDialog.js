import React, { Component } from 'react';
import Dialog from '../Dialog';
import styles from './SystemDialog.less'
import {Icon, Button } from 'antd';

export default class ExitDialog extends Component {
    render() {
        return (
            <Dialog
                visible={this.props.visible}
                title="退出"
                index={this.props.index}
                zIndex={this.props.zIndex}                                    
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div>
                        <div>
                        <span><Icon type="exclamation-circle"  style={{ fontSize: '18px', color: 'red'}} /></span><span>&emsp;是否退出软件?</span>
                        </div>
                        <div className={styles.btnStyle}>
                            <span style={{marginRight:'10px'}}><Button type="primary">确定</Button></span>
                            <span><Button type="primary">取消</Button></span>
                        </div>                     
                    </div>
                </div>
            </Dialog>
        )
    }
}
