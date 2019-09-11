import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Table } from 'antd';
import styles from './Query.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

export default class OutStorageRecord extends Component {
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
                width: '15%',
            },
            {
                title: '时间',
                dataIndex: 'time', key: 'time',
                width: '35%',
            },
            {
                title: '经办人',
                width: '30%',
                dataIndex: 'operator', key: 'operator',
            }, {
                title: '详情',
                dataIndex: 'details', key: 'details',
                render: (text, record) => (
                    <span style={{ color: '#2376c1' }} onClick={() => this.handleClickLook(record.key)} >详情</span>
                )
            }
        ];


        let Tabledata = [];
        let data = this.props.sparepartmodal.outStorageRecordTableData;//出库历史记录数据
        if (data != null && data.length !== 0) {
            for (let i = 0; i < data.length; i++) {
                Tabledata.push({
                    key: data[i].id,
                    time: data[i].time,
                    operator: data[i].people,
                });
            }
        }

        return (
            <Dialog
                visible={this.props.visible}
                title='出库历史记录'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '500px' }}>

                        <div className={styles.table_content}>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 9 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%', marginTop: '10px' }}>
                            <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                <Button type="primary" onClick={this.Click}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    handleClickLook = (key) => {
        this.props.dispatch({
            type: 'sparepartmodal/ClickOutStorageFormAsync',
            payload: key
        })
    }
}


