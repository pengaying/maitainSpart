
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Table } from 'antd';
import styles from './Query.less';

export default class MaintainRecord extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '10%',
            },
            {
                title: '维修日期',
                dataIndex: 'maintainData', key: 'maintainData',
                width: '25%',
            },
            {
                title: '维修单位',
                width: '25%',
                dataIndex: 'maintainUnit', key: 'maintainUnit',
            }, {
                title: '维修人',
                width: '20%',
                dataIndex: 'maintainMan', key: 'maintainMan',
            }, {
                title: '维修结果',
                width: '20%',
                dataIndex: 'maintenanceResults', key: 'maintenanceResults',
            }
        ];


        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            Tabledata.push({
                key: i + 1,
                maintainData: '',
                maintainUnit: '',
                maintainMan: '',
                maintenanceResults: '',
            });
        }
        return (
            <Dialog
                visible={this.props.visible}
                title='维修记录'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{  width: '700px' }}>

                        <div className={styles.table_content}>
                            <span>
                                <Button type="primary" icon="plus">新建</Button>
                            </span>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    pagination={false}
                                    className={styles.mynoiseClass}
                                    scroll={{ y: 107 }}
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

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
}


