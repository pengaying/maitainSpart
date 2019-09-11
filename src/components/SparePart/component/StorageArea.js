import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Input } from 'antd';
import CreateSpareArea from './../../Dialog/SpareDialog/StorageArea/CreateSpareArea';

import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class StorageArea extends Component {
    constructor() {
        super();
        this.state = {
            CreateState: false,
            searchValue: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'sparepartmodal/StorageAreaTableInit',
        })
    }

    render() {
        // const Option = Select.Option;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '30%',
            }, {
                title: '柜号',
                width: '35%',
                dataIndex: 'containernumber', key: 'containernumber',
            }, {
                title: '格号',
                width: '35%',
                dataIndex: 'gridnumber', key: 'gridnumber',
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.StorageAreaData;//备件存放地 表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    gridnumber: tabledata[i].cabinetNo,
                    containernumber: tabledata[i].latticeNo,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        管理备件存放地
                    </div>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>

                            <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                                <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button onClick={this.ClickCreate} type="primary" icon="plus">新建</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">导入</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">导出</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">模板下载</Button>
                                    </div>

                                </div>

                                <div className={styles.PN_Input}>
                                    <span style={{ marginRight: '10px' }}>搜索:</span><Input value={this.state.searchValue} onChange={this.changeInput} style={{ width: '200px' }} />
                                    <span style={{ marginLeft: '10px' }}><Button onClick={this.Search} type="primary">搜索</Button></span>
                                </div>

                            </div>

                            <div className={styles.bodyCss_PN}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 12 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* 点击新建 */}
                {
                    this.state.CreateState ?
                        <CreateSpareArea
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseCreate}
                            visible={this.state.CreateState}
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
    // 点击新建
    ClickCreate = () => {
        this.setState({
            CreateState: true
        });
    }
    CloseCreate = () => {
        this.setState({
            CreateState: false
        })
    }
    // 获取Input值
    changeInput = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    // 搜索
    Search = () => {
        let obj = {
            'cabinetNo': this.state.searchValue,
        }
        this.props.dispatch({
            type: 'sparepartmodal/StorageAreaSearch',
            payload: obj
        })
    }
}
