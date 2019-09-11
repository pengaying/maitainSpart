import React, { Component } from 'react';
import Dialog from '../../../Dialog';
import { Button,Input} from 'antd';
import styles from './SpareDialog.less';

export default class SpareSupport extends Component {
    constructor(props){
        super();
        this.state={

        }

    }

    render() {
        return (
            <Dialog
            visible={this.props.visible}
            title='备件支持任务'
            index={this.props.index}
            zIndex={this.props.zIndex}                                    
            changeIndex={this.props.changeIndex}
            close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ height: '200px',width:'700px'}}>
                        地方的故事
                    </div>
                </div>
                
            </Dialog>
        )
    }
}
