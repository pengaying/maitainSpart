
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button,Input} from 'antd';
import styles from '../SpareDialog.less';

export default class AddEquipent extends Component {
    constructor(props){
        super();
        this.state={

        }

    }
    render() {
        return (
            <Dialog
            visible={this.props.visible}
            title='添加装备'
            index={this.props.index}
            zIndex={this.props.zIndex}                                    
            changeIndex={this.props.changeIndex}
            close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ height: '200px',width:'700px'}}>
                        

                        

                        {/* 确认 */}
                        <div className={styles.ButtonStyle} >
                            <Button type="primary" htmlType="submit">确认</Button>
                        </div>
                        
                    </div>
                </div>
            </Dialog>
        )
    }
}


