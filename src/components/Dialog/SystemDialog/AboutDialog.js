import React, { Component } from 'react';
import Dialog from '../Dialog';

export default class AboutDialog extends Component {
    render() {
        return (
            <Dialog
                visible={this.props.visible}
                title="关于"
                index={this.props.index}
                zIndex={this.props.zIndex}                                    
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div>
                        <div>
                            <span>装备备件管理服务软件&emsp;&emsp;&emsp;V1.0.0.0</span>
                        </div>
                        <div style={{height:'20px',textAlign:'right'}}>
                            <span>CEIEC</span>
                        </div>                     
                    </div>
                </div>
            </Dialog>
        )
    }
}
