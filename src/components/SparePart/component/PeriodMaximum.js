import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Select, DatePicker, message } from 'antd';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

export default class PeriodMaximum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateString: '',//  日期选择 
            cycle: '1',
        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'sparepartmodal/PeriodMaximumTableInit',
        })
    }

    render() {
        // const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
        const Option = Select.Option;

        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '备件名称',
                dataIndex: 'sparename', key: 'sparename',
                width: '22%',
            },
            {
                title: 'PN',
                width: '22%',
                dataIndex: 'PN', key: 'PN',
            }, {
                title: '型号',
                width: '22%',
                dataIndex: 'type', key: 'type',
            }, {
                title: '规格',
                width: '15%',
                dataIndex: 'standard', key: 'standard',
            }, {
                title: '消耗总量',
                dataIndex: 'consumption', key: 'consumption',
            }];

        //默认显示页数
        //   const paginationProps = {
        //     pageSize: 3
        //   }

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.PeriodMaximumData;//周期表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    sparename: tabledata[i].spName,
                    PN: tabledata[i].spPn,
                    type: tabledata[i].spModel,
                    standard: tabledata[i].spSpecs,
                    consumption: tabledata[i].conCount,
                });
            }
        }

        return (
            <div className={styles.CenterContent}>
                <div className={styles.CenterContentTitle}>
                    周期-最多
                </div>

                <div className={styles.tableContent}>
                    <div className={styles.tableStyle}>
                        <div>
                            <div style={{ textAlign: 'center', height: '32px', margin: '0 0 10px 0' }}>
                                <div style={{ float: 'left', width: '75%' }}>
                                    <div className={styles.Datepicker}>
                                        <span style={{ marginRight: '10px' }}>日期选择:</span>
                                        <span style={{ marginRight: '10px' }}>
                                            <Select onChange={this.ChangeCheckState} defaultValue={1} style={{ width: '20%' }}>
                                                <Option value={1}>月</Option>
                                                <Option value={2}>季</Option>
                                                <Option value={3}>年</Option>
                                            </Select>
                                        </span>

                                        <DatePicker showTime onChange={this.ChangeTime} />
                                    </div>
                                    <div className={styles.Datepicker}>
                                        <span style={{ marginRight: '10px' }}>显示数量:</span>
                                        <Select defaultValue='10' style={{ width: '50%' }}>
                                            <Option value='10'>10</Option>
                                            {/** 
                                                <Option value='50'>50</Option>
                                                <Option value='100'>100</Option>
                                            */}
                                        </Select>
                                    </div>
                                </div>
                                <div style={{ float: 'right', margin: '0 12px 0 0 ' }}>
                                    <Button onClick={this.Statistics} type="primary">统计</Button>
                                </div>
                            </div>
                        </div>

                        {/* 库存信息列表 */}
                        <div className={styles.bodyCss_query}>
                            <Table
                                bordered
                                columns={columns}
                                dataSource={Tabledata}
                                pagination={{ pageSize: 12 }}
                                className={styles.mynoiseClassQuery}
                                scroll={{ x: 950 }}
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

                        <div className={styles.period_Button}>
                            <div style={{ display: 'inline-block', margin: '10px 0 0 0px' }}>
                                <Button type="primary">打印</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    // 日期选择 筛选表格
    ChangeTime = (date, dateString) => {
        this.setState({
            dateString: dateString
        })
    }
    // 周期下拉选择
    ChangeCheckState = (value) => {
        this.setState({
            cycle: value
        })
    }

    // 统计
    Statistics = () => {
        let data = {
            cycle: this.state.cycle,
            time: this.state.dateString
        };
        console.log(data)
        if (this.state.dateString != null) {
            this.props.dispatch({
                type: 'sparepartmodal/PeriodMaximumStatistics',
                payload: data
            })
        }
        else {
            alert('时间不能为空')
        }

    }
}
