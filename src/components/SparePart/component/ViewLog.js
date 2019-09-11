
import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Select, DatePicker } from 'antd';
import OutStorageForm from './../../Dialog/PublicDialog/OutStorageForm';

import { connect } from 'dva';
import StorageFormIn from '../../Dialog/SpareDialog/ViewLog/StorageFormIn';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

export default class ViewLog extends Component {
    constructor(propps) {
        super(propps);
        this.state = {
            ReadState: false,
            DetailstateOut: false,
            DetailstateIn: false,
            typeValue: '入库',

            Time: ''
        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'sparepartmodal/ViewLogTableInit',
        })
    }
    render() {
        // const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
        const field = {
            position: 'relative',
            float: 'left',
            border: '1px solid #bdcddc',
            padding: '10px 10px',
            width: '98%',
            margin: '10px'
        }
        const fieldTitle = {
            padding: '0 5px',
            position: 'absolute',
            top: '-12px',
        }
        const fieldContent = {
            float: 'left',
            width: '100%',
            marginTop: '5px',
            display: 'inline-block'
        }
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '20%',
            },
            {
                title: '日志类型',
                width: '20%',
                dataIndex: 'Logtype', key: 'Logtype',
            }, {
                title: '经手人',
                width: '20%',
                dataIndex: 'HandlerName', key: 'HandlerName',
            }, {
                title: '时间',
                width: '25%',
                dataIndex: 'Time', key: 'Time',
            }, {
                title: '详情',
                dataIndex: 'operation', key: 'operation',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.ClickDetail(record)} >详情</span>
                )
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.ViewLogData;//查看日志表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: tabledata[i].id,
                    Logtype: tabledata[i].recordType,
                    HandlerName: tabledata[i].people,
                    Time: tabledata[i].time,
                });
            }
        }

        const Option = Select.Option;
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        查看日志
                    </div>

                    <div className={styles.layoutContent}>

                        <div style={field}>
                            <div style={fieldTitle}>查询筛选</div>
                            <div style={fieldContent}>
                                <div style={{ width: '100%', float: 'left' }}>
                                    <div className={styles.SupplementarySelect}>
                                        <span style={{ marginRight: '10px' }}>记录类型:</span>
                                        <Select onChange={this.ChangeType} value={this.state.typeValue} style={{ width: '50%' }}>
                                            <Option value='出库'>出库</Option>
                                            <Option value='入库'>入库</Option>
                                        </Select>
                                    </div>
                                    <div className={styles.SupplementaryDatepicker}>
                                        <span style={{ marginRight: '10px' }}>时间段:</span>
                                        <DatePicker showTime onChange={this.ChangeTime} />
                                    </div>
                                    <div className={styles.SupplementarySelect}>
                                        <span style={{ marginRight: '10px' }}>经手人:</span><Select style={{ width: '50%' }}></Select>
                                    </div>
                                </div>

                                <div style={{ width: '100%', float: 'left',textAlign: 'center' }}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">重置</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button onClick={this.clickChooice} type="primary">筛选</Button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>
                            <div style={{ marginRight: '10px', lineHeight: '30px', textAlign: 'center' }}>查询筛选列表</div>
                            <div className={styles.bodyCss_query}>
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
                    </div>

                </div>


                {/* 列表查看 出库 */}
                {
                    this.state.DetailstateOut ?
                        <OutStorageForm
                            index={12}
                            zIndex={12}
                            DetailView={this.props.sparepartmodal.ViewLogOutData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseDetailOut}
                            visible={this.state.DetailstateOut}
                        />
                        : null
                }

                {/* 列表查看  入库 */}
                {
                    this.state.DetailstateIn ?
                        <StorageFormIn
                            index={12}
                            zIndex={12}
                            DetailView={this.props.sparepartmodal.ViewLogInData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseDetailIn}
                            visible={this.state.DetailstateIn}
                        />
                        : null
                }
            </>
        )
    }

    // 改变弹窗层级事件控制对话框层级
    changeIndex = (e) => {
        // // let temp = this.state.zIndex;
        // let temp = this.props.CacheData.zIndex;
        // for(let i = 0; i < temp.length; i++){
        //     temp[i] = 1010;
        // }
        // temp[e] = 1020;
        // this.props.dispatch({
        //     type:'CacheData/changeZindex',
        //     payload:temp
        // });
    };
    // 点击表格详情
    ClickDetail = (record) => {

        if (record.Logtype === '出库') {
            this.setState({
                DetailstateOut: true
            })
            this.props.dispatch({
                type: 'sparepartmodal/ViewLogDetailOut',
                payload: record.key
            })
        }
        else if (record.Logtype === '入库') {
            this.setState({
                DetailstateIn: true
            })
            this.props.dispatch({
                type: 'sparepartmodal/ViewLogDetailIn',
                payload: record.key
            })
        }

    }
    CloseDetailOut = () => {
        this.setState({
            DetailstateOut: false
        })
    }
    CloseDetailIn = () => {
        this.setState({
            DetailstateIn: false
        })
    }

    //改变记录类型
    ChangeType = (value) => {
        this.setState({
            typeValue: value
        })
    }
    //改变申请时间
    ChangeTime = (date, dateString) => {
        this.setState({
            Time: dateString
        })
    }
    //筛选
    clickChooice = () => {
        let { Time, typeValue } = this.state;
        let obj = {
            "time": Time,
            "recordType": typeValue,
        }
        console.log("obj======", obj)
        this.props.dispatch({
            type: 'sparepartmodal/ViewLogChooice',
            payload: obj
        })
    }


}
