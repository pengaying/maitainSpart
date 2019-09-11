import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Input } from 'antd';
import Detail from './../../Dialog/SpareDialog/ProductControl/Detail';
import AddTool from './../../Dialog/SpareDialog/ProductControl/AddTool';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class ProductControl extends Component {
    constructor() {
        super();
        this.state = {
            ViewState: false,
            AddState: false,
            Searchtext: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'sparepartmodal/ProductControlTableInit',
        })
    }

    render() {
        // const Option = Select.Option;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            },
            {
                title: '工具名',
                width: '16%',
                dataIndex: 'toolname', key: 'toolname',
            }, {
                title: 'PN',
                width: '16%',
                dataIndex: 'PN', key: 'PN',
            }, {
                title: '型号',
                width: '16%',
                dataIndex: 'type', key: 'type',
            }, {
                title: '品牌',
                width: '15%',
                dataIndex: 'brand', key: 'brand',
            }, {
                title: '添加日期',
                width: '18%',
                dataIndex: 'addtime', key: 'addtime',
            }, {
                title: '详情',
                dataIndex: 'details', key: 'details',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0 ', cursor: 'pointer' }} onClick={() => this.ClickLook(record.key)} >详情</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.ProductControlData;// 产品管理 表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: tabledata[i].id,
                    toolname: tabledata[i].name,
                    PN: tabledata[i].pn,
                    type: tabledata[i].specs,
                    brand: tabledata[i].brand,
                    addtime: tabledata[i].time,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        产品管理
                    </div>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>

                            <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                                <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button onClick={this.ClickAdd} type="primary" icon="plus">添加</Button>
                                    </div>
                                </div>

                                <div className={styles.Individual_Input}>
                                    <span style={{ marginRight: '10px' }}>搜索:</span>
                                    <Input onChange={this.ChangeSearchInput} value={this.state.Searchtext} style={{ width: '200px' }} />
                                    <span style={{ marginLeft: '10px' }}>
                                        <Button onClick={this.ChangeSearch} type="primary">搜索</Button>
                                    </span>
                                </div>

                                <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
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
                            </div>

                            <div className={styles.bodyCss_PN}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 8 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>
                    </div>
                </div>



                {/* 列表  添加 */}
                {
                    this.state.AddState ?
                        <AddTool
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAdd}
                            visible={this.state.AddState}
                        />
                        : null
                }

                {/* 列表查看 */}
                {
                    this.state.ViewState ?
                        <Detail
                            DetailView={this.props.sparepartmodal.ProductControlViewDataSource}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseLook}
                            visible={this.state.ViewState}
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

    // 点击 添加
    ClickAdd = () => {
        this.setState({
            AddState: true
        })

    }

    CloseAdd = () => {
        this.setState({
            AddState: false
        })
    }
    // 获取搜索内容
    ChangeSearchInput = (e) => {
        this.setState({
            Searchtext: e.target.value
        })
    }

    // 点击 搜索
    ChangeSearch = () => {
        if (this.state.Searchtext !== '') {
            this.props.dispatch({
                type: 'sparepartmodal/ProductControlSearch',
                payload: this.state.Searchtext
            })
        }
    }
    // 点击详情
    ClickLook = (key) => {
        this.setState({
            ViewState: true,
        })
        this.props.dispatch({
            type: 'sparepartmodal/ProductControlView',
            payload: key
        })
    }
    CloseLook = () => {
        this.setState({
            ViewState: false
        })
    }

    // 点击删除
    ClickDelete = (key) => {
        this.props.dispatch({
            type: 'sparepartmodal/ProductControlDelete',
            payload: key
        })
    }
}
