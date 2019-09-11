import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Select, DatePicker } from 'antd';
import SpareAddApply from '../../Dialog/SpareDialog/QueryOutBound/SpareAddApply';


import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class SpareSupplementary extends Component {
    constructor(propps) {
        super(propps);
        this.state = {
            DetailState: false,
            ApplyTime: '',
            ApplyState: '未处理',
            ApplyResult: '批准',
        }
    }

    componentDidMount() {
        //初始化表格数据
        this.props.dispatch({
            type: 'sparepartmodal/SapreApplyTableInit',
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
            fontSize: '12px',
            height: '21px',
        }
        const fieldContent = {
            width: '100%',
            marginTop: '5px',
            display: 'inline-block'
        }
        const Option = Select.Option;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            },
            {
                title: '申请单号',
                width: '15%',
                dataIndex: 'applicationnum', key: 'applicationnum',
            }, {
                title: '申请人',
                width: '12%',
                dataIndex: 'proposer', key: 'proposer',
            }, {
                title: '申请时间',
                width: '18%',
                dataIndex: 'ApplicationTime', key: 'ApplicationTime',
            }, {
                title: '申请状态',
                width: '12%',
                dataIndex: 'applicationstatus', key: 'applicationstatus',
            }, {
                title: '批准结果',
                width: '9%',
                dataIndex: 'Approval', key: 'Approval',
            }, {
                title: '期望时间',
                width: '18%',
                dataIndex: 'expectedtime', key: 'expectedtime',
            }, {
                title: '详情',
                dataIndex: 'operation', key: 'operation',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.ClickDetail(record.key)} >详情</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.ChooiceApplyTableData;//备件申请表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: tabledata[i].id,
                    applicationnum: tabledata[i].formNum,
                    proposer: tabledata[i].people,
                    ApplicationTime: tabledata[i].begintime,
                    applicationstatus: tabledata[i].state,
                    Approval: tabledata[i].result,
                    expectedtime: tabledata[i].time,
                });
            }
        }
        // for (let i = 0; i < 16; i++) {
        //     Tabledata.push({
        //         key: i,
        //         applicationnum: 11,
        //         proposer:11,
        //         ApplicationTime: 11,
        //         applicationstatus: 11,
        //         Approval: 11,
        //         expectedtime: 11,
        //     });
        // }
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        备件申请记录
                    </div>

                    <div className={styles.layoutContent}>

                        <div style={field}>
                            <div style={fieldTitle}>筛选信息</div>
                            <div style={fieldContent}>
                                <div>
                                    <div style={{ width: '100%' }}>
                                        <div className={styles.SupplementaryDatepicker}>
                                            <span style={{ marginRight: '10px' }}>申请时间:</span>
                                            <DatePicker onChange={this.onChangeTime} />
                                        </div>
                                        <div className={styles.SupplementarySelect}>
                                            <span style={{ marginRight: '10px' }}>申请状态:</span>
                                            <Select value={this.state.ApplyState} onChange={this.changeState} style={{ width: '50%' }}>
                                                <Option value='已处理'>已处理</Option>
                                                <Option value='未处理'>未处理</Option>
                                            </Select>
                                        </div>
                                        <div className={styles.SupplementarySelect}>
                                            <span style={{ marginRight: '10px' }}>审批结果:</span>
                                            <Select value={this.state.ApplyResult} onChange={this.onChangeResult} style={{ width: '50%' }}>
                                                <Option value='已处理'>批准</Option>
                                                <Option value='未处理'>待审核</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button onClick={this.clickChooice} type="primary">筛选</Button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>
                            <div className={styles.bodyCss_query}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    // scroll={{y: 100 }}
                                    pagination={{ pageSize: 9 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>
                    </div>

                </div>

                {/* 点击详情 */}
                {
                    this.state.DetailState ?
                        <SpareAddApply
                            DetailViewData={this.props.sparepartmodal.ApplyFormlData}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseDetail}
                            visible={this.state.DetailState}
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


    // 点击表格详情查看
    ClickDetail = (key) => {
        this.setState({
            DetailState: true
        })
        this.props.dispatch({
            type: 'sparepartmodal/ClickApplyDetailAsync',
            payload: key
        })
    }
    CloseDetail = () => {
        this.setState({
            DetailState: false
        })
    }
    // 点击删除
    ClickDelete = (key) => {
        this.props.dispatch({ 
          type: 'sparepartmodal/DeleteApplyDetailAsync',
          payload: key
        })
    }

    //改变申请时间
    onChangeTime = (date, dateString) => {
        this.setState({
            ApplyTime: dateString
        })
    }
    //改变申请状态
    changeState = (value) => {
        this.setState({
            ApplyState: true
        })
    }
    //改变申请结果
    onChangeResult = (value) => {
        this.setState({
            ApplyResult: value
        })
    }
    //筛选结果
    clickChooice = () => {
        let { ApplyTime, ApplyState, ApplyResult } = this.state;
        let obj = {
            "begintime": ApplyTime,
            "state": ApplyState,
            "result": ApplyResult
        }
        this.props.dispatch({
            type: 'sparepartmodal/ChooiceApplyResult',
            payload: obj
        })
    }



}
