import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Table } from 'antd';
import styles from './Query.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

export default class ChoiceSNDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            sncount: null,//选择的数据量
        }
    }

    render() {

        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '20%',
            },
            {
                title: 'SN',
                dataIndex: 'SN', key: 'SN',
                width: '30%',
            },
            {
                title: '状态',
                width: '30%',
                dataIndex: 'state', key: 'state',
            }, {
                title: '存放位置',
                dataIndex: 'saveLocation', key: 'saveLocation',
                width: '20%',
            }
        ];

        let Tabledata = [];

        let sndata = this.props.sparepartmodal.ViewSnCountTableData;
        if (sndata != null && sndata.length !== 0) {//获取到的SN列表值
            for (let i = 0; i < sndata.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    SN: sndata[i].sn,
                    state: sndata[i].state,
                    saveLocation: sndata[i].location,
                });
            }
        }

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                if (selectedRows.length !== 0) {
                    this.setState({
                        sncount: selectedRows,
                    });
                }

            },
            // getCheckboxProps: record => ({
            //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
            //     name: record.name,
            // }),
        };
        return (
            <Dialog
                visible={this.props.visible}
                title='出库表单SN详情'
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
                                    rowSelection={rowSelection}
                                    pagination={{ pageSize: 8 }}
                                    className={styles.mynoiseClass}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOK}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    ClickOK = () => {
        if (this.state.sncount != null && this.state.sncount !== 0) {
            let snCount = this.state.sncount;
            console.log(snCount)
            let snCountkey = this.props.sparepartmodal.snCountkey;//选择待出库列表的当前行号
            let data = this.props.sparepartmodal.OutStorageTableData;//获取所有待出库列表数据

            data[snCountkey - 1].count = snCount.length;//选择SN后，从弹窗中选择数据获取数量后，填充至待出库列表的数量一栏
            data[snCountkey - 1].SN = snCount[0].SN;//选择SN后，从弹窗中选择数据获取数量后，填充至待出库列表的数量一栏
            console.log("data====",data);
            this.props.dispatch({
                type: 'sparepartmodal/ClickQueryTable',
                payload: data
            })
        }

        this.props.closeWinodow();
        // if (this.state.sncount != null && this.state.sncount !== 0) {
        //     this.props.dispatch({
        //         type: 'sparepartmodal/SnCount',
        //         payload: this.state.sncount
        //     })
        // }
    }

}


