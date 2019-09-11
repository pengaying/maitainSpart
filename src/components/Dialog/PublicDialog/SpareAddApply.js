import React, { Component } from 'react';
import Dialog from './Dialog';
import { Table,Input, Button} from 'antd';
import styles from './SpareDialog.less';

export default class SpareAddApply extends Component {
    constructor(props){
        super();
        this.state={

        }

    }
    render() {
        const { TextArea } = Input;
        const columns = [
            {
              title: '序号',
              dataIndex: 'key',key:'key',
              width: '20%',
            },
            {
              title: '备件名称',
              dataIndex: 'SpareName',key:'SpareName',
              width: '25%',
            },
            {
              title: '备件PN',
              width: '30%',
              dataIndex: 'sparePN',key:'sparePN',
            }, {
              title: '备件数量',
              width: '25%',
              dataIndex: 'spareNum',key:'spareNum',
            }
        ];
      
        
        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            Tabledata.push({
                key: i + 1,
                SpareName: '',
                sparePN: '',
                spareNum: '',
            });
        }
        return (
            <Dialog
            visible={this.props.visible}
            title='备件申请表单'
            index={this.props.index}
            zIndex={this.props.zIndex}                                    
            changeIndex={this.props.changeIndex}
            close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ height: '200px',width:'700px'}}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{marginRight:'10px'}}>申请单号:</span><Input  style={{width:'200px'}}/>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{marginRight:'10px'}}>期望时间:</span><Input  style={{width:'200px'}}/>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{marginRight:'10px'}}>申请人:</span><Input  style={{width:'200px'}}/>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{marginRight:'10px'}}>申请时间:</span><Input  style={{width:'200px'}}/>
                            </div>
                        </div>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <span style={{marginRight:'10px',lineHeight: '73px'}}>说明:</span><TextArea  rows={3}  style={{width:'760px'}}/>
                            </div>
                        </div>

                        <div className={styles.TextArea_note_Content}>
                            <div className={styles.TextArea_note_Style}>
                                <div className={styles.bodyCss}>
                                    <Table
                                        bordered
                                        columns={columns}
                                        dataSource={Tabledata}
                                        pagination={false}
                                        className={styles.mynoiseClass}
                                        scroll={{y: 107 }}
                                        onRow={(record) => {
                                            return {
                                                onContextMenu: (event) => {
                                                    this.rightClickMenu(event, record)
                                                },       // 点击右键
                                            };
                                        }}
                                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                    />
                                </div>                      
                            </div>
                        </div>
                        
                        <div className={styles.TextArea_note_Content}>
                            <Button>
                                确认
                            </Button>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
}


