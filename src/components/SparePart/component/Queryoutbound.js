
import React, { Component } from 'react';
import { Button, Table, Form, Input } from 'antd';
import styles from './Storage.less';
import QueryDialog from '../../Dialog/SpareDialog/QueryOutBound/QueryDialog';
import SpareAddApply from '../../Dialog/SpareDialog/QueryOutBound/SpareAddApply';
import OutStorageForm from '../../Dialog/PublicDialog/OutStorageForm';
import OutStorageRecord from './../../Dialog/SpareDialog/QueryOutBound/OutStorageRecord';
import SpareDetail from '../../Dialog/SpareDialog/QueryOutBound/SpareDetail';
import MaintainRecord from './../../Dialog/SpareDialog/QueryOutBound/MaintainRecord';
import ApplyMaintain from '../../Dialog/SpareDialog/QueryOutBound/ApplyMaintain';
import DetectionRecord from './../../Dialog/SpareDialog/QueryOutBound/DetectionRecord';
import ChoiceSNDetail from './../../Dialog/SpareDialog/QueryOutBound/ChoiceSNDetail';
import ChoisePNDialog from './../../Dialog/PublicDialog/ChoisePNDialog';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class Queryoutbound extends Component {
    constructor(props) {
        super(props);
        this.state = {

            QueryState: false,
            AddSupplyState: false,
            // OutStorageState: false,
            OutStorageRecordState: false,
            ViewState: false,
            SNState: false,
            PNstate: false,

            selectRowData: null,
            OutStorageTable: null,

        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化请求表格数据
            type: 'sparepartmodal/OutStorageTableDataAsync'
        })
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            },
            {
                title: '备件PN',
                dataIndex: 'sparepartpn', key: 'sparepartpn',
                width: '12%',
            },
            {
                title: '备件名称',
                width: '15%',
                dataIndex: 'sparepartname', key: 'sparepartname',
            }, {
                title: '备件类别',
                width: '12%',
                dataIndex: 'sparecategory', key: 'sparecategory',
            }, {
                title: '备件品牌',
                width: '12%',
                dataIndex: 'sparebrand', key: 'sparebrand',
            }, {
                title: '备件型号',
                width: '12%',
                dataIndex: 'sparetype', key: 'sparetype',
            }, {
                title: '库存数量',
                width: '12%',
                dataIndex: 'quantity', key: 'quantity',
            }, {
                title: '详情',
                dataIndex: 'details', key: 'details',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.TableClickView(record)} >查看</span>
                )
            }
        ];

        const columns2 = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            },
            {
                title: '名称',
                width: '15%',
                dataIndex: 'name', key: 'name',
            }, {
                title: 'PN',
                width: '17%',
                dataIndex: 'PN', key: 'PN',
            }, {
                title: 'SN',
                width: '17%',
                dataIndex: 'SN', key: 'SN',
            }, {
                title: '备件型号',
                width: '17%',
                dataIndex: 'sparetype2', key: 'sparetype2',
            }, {
                title: '出库数量',
                width: '10%',
                dataIndex: 'delivery', key: 'delivery',
            }, {
                title: '操作',
                dataIndex: 'operation', key: 'operation',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.ChoiseSN(record.PN, record.key)} >选择SN</span>
                        <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDelete(record.key)} >删除</span>
                    </div>
                )
            }
        ];

        //默认显示页数
        //   const paginationProps = {
        //     pageSize: 3
        //   }

        let Tabledata = [];
        let Tabledata2 = [];
        let storagedata = this.props.sparepartmodal.outStorageTableData;// 库存信息列表数据
        // 库存信息列表
        if (storagedata != null && storagedata.length !== 0) {
            for (let i = 0; i < storagedata.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    sparepartpn: storagedata[i].pn,
                    sparepartname: storagedata[i].name,
                    sparecategory: storagedata[i].category,
                    sparebrand: storagedata[i].brand,
                    sparetype: storagedata[i].model,
                    quantity: storagedata[i].count,
                });
            }
        }
        // for (let i = 0; i < 12; i++) {
        //     Tabledata.push({
        //         key: i + 1,
        //         sparepartpn: 11,
        //         sparepartname: 11,
        //         sparecategory: 11,
        //         sparebrand: 11,
        //         sparetype: 11,
        //         quantity: 11,
        //     });
        // }
        // 待出库列表
        let data = this.props.sparepartmodal.OutStorageTableData;
        if (data != null && data.length !== 0) {
            for (let i = 0; i < data.length; i++) {
                Tabledata2.push({
                    key: i + 1,
                    name: data[i].sparepartname,
                    PN: data[i].sparepartpn,
                    SN: data[i].SN,
                    sparetype2: data[i].sparetype,
                    delivery: data[i].count,
                });
            }
        }

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    selectRowData: selectedRows
                })
            },
        };
        const FormItem = Form.Item;
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
            },
            wrapperCol: {
                span: 7
            },
        };
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        查询与出库
                    </div>

                    <div className={styles.tableContent}>
                        <div className={styles.tableStyle}>
                            <Form className={styles.myBandForm}>
                                <div style={{ textAlign: 'center', float: 'left', width: '100%' }}>
                                    <div style={{ float: 'right', width: '100%', margin: '0 10px 0 0' }}>
                                        <div className={styles.QBButton}>
                                            <Button onClick={this.ClickQuery} type="primary">高级</Button>
                                        </div>

                                        <div className={styles.QBButton} style={{ margin: '0 10px' }}>
                                            <Button onClick={this.ClickSearch} type="primary">搜索</Button>
                                        </div>

                                        <div className={styles.WarningrySelect_PN} style={{ float: 'right' }}>
                                            <div className={styles.contentPN_warning_input}>
                                                <div style={{ float: 'right' }}>
                                                    <FormItem  {...formItemLayout} label='PN号:'>
                                                        {getFieldDecorator('pn', {
                                                            // initialValue: "0",
                                                        })(
                                                            <Input
                                                                style={{ width: '150px' }}
                                                                autoComplete="off"
                                                            />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <div className={styles.contentPN_warning_button}>
                                                <div style={{ display: 'inline-block' }}>
                                                    <Button type="primary" onClick={() => this.ClickChoicePN('QB')}>选择PN</Button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{ display: 'inline-block', padding: '10px 0' }}>库存信息列表</div>
                                </div>
                            </Form>

                            {/* 库存信息列表 */}
                            <div className={styles.bodyCss_query}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    rowSelection={rowSelection}
                                    pagination={{ pageSize: 8 }}
                                    className={styles.mynoiseClassQuery}
                                    scroll={{ x: 950, y: 140 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                            <div style={{ float: 'right', margin: Tabledata != null && Tabledata.length !== 0 ? '-40px 0 0 0' : null }}>
                                <div style={{ display: 'inline-block', margin: '10px 0 0 0' }}>
                                    <Button onClick={this.ClickAddSupply} type="primary">备件补充申请</Button>
                                </div>
                                <div style={{ display: 'inline-block', margin: '10px 10px 0 10px' }}>
                                    <Button type="primary" onClick={this.CreateOutStorage}>创建出库单</Button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px', lineHeight: '30px' }}>待出库列表</div>

                            <div className={styles.bodyCss_query}>
                                <Table
                                    bordered
                                    columns={columns2}
                                    dataSource={Tabledata2}
                                    pagination={false}
                                    className={styles.mynoiseClass}
                                    scroll={{ y: 100 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>
                    </div>


                    <div className={styles.TextArea_note_Content}>
                        <div style={{ display: 'inline-block'}}>
                            <Button onClick={this.ClickOutStorageForm} type="primary">生成出库表单</Button>
                        </div>
                        <div style={{ display: 'inline-block', margin: '0px 10px' }}>
                            <Button onClick={this.ClickOutStorageRecord} type="primary">出库记录</Button>
                        </div>
                    </div>

                </div>


                {/* 选择PN弹窗 */}
                {
                    this.state.PNstate ?
                        <ChoisePNDialog
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseChoisePN1}
                            visible={this.state.PNstate}
                        />
                        : null
                }
                {/* 点击高级 */}
                {
                    this.state.QueryState ?
                        <QueryDialog
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseQuery}
                            visible={this.state.QueryState}
                        />
                        : null
                }

                {/* 选择PN弹窗 */}
                {
                    this.props.sparepartmodal.pnshowstate ?
                        <ChoisePNDialog
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseChoisePN}
                            visible={this.props.sparepartmodal.pnshowstate}
                        />
                        : null
                }

                {/* 备件补充申请 */}
                {
                    this.state.AddSupplyState ?
                        <SpareAddApply
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAddSupply}
                            visible={this.state.AddSupplyState}
                        />
                        : null
                }
                {/* 出库记录 */}
                {
                    this.state.OutStorageRecordState ?
                        <OutStorageRecord
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseOutStorageRecord}
                            visible={this.state.OutStorageRecordState}
                        />
                        : null
                }
                {/* 生成出库表单 */}
                {
                    this.props.sparepartmodal.OutStorageState ?
                        <OutStorageForm
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseOutStorageForm}
                            visible={this.props.sparepartmodal.OutStorageState}
                        />
                        : null
                }
                {/* 库存信息列表查看 */}
                {
                    this.state.ViewState ?
                        <SpareDetail
                            index={12}
                            zIndex={12}
                            DetailView={this.props.sparepartmodal.ViewTableDetailData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.TableCloseView}
                            visible={this.state.ViewState}
                        />
                        : null
                }

                {/* 待出库列表列表 选择SN */}
                {
                    this.state.SNState ?
                        <ChoiceSNDetail
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseChoiseSN}
                            visible={this.state.SNState}
                        />
                        : null
                }

                {/* 申请维修 */}
                {
                    this.props.sparepartmodal.MaintainApplyState ?
                        <ApplyMaintain
                            index={12}
                            zIndex={12}
                            Clickdata={this.props.sparepartmodal.ViewTableDetailData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.TableCloseMA}
                            visible={this.props.sparepartmodal.MaintainApplyState}
                        />
                        : null
                }
                {/* 维修记录 */}
                {
                    this.props.sparepartmodal.MaintainRercordState ?
                        <MaintainRecord
                            index={12}
                            zIndex={12}
                            Clickdata={this.props.sparepartmodal.ViewTableDetailData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.TableCloseMR}
                            visible={this.props.sparepartmodal.MaintainRercordState}
                        />
                        : null
                }
                {/* 检测记录 */}
                {
                    this.props.sparepartmodal.DetectionRecordState ?
                        <DetectionRecord
                            index={12}
                            zIndex={12}
                            Clickdata={this.props.sparepartmodal.ViewTableDetailData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.TableCloseDR}
                            visible={this.props.sparepartmodal.DetectionRecordState}
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
    // 选择PN
    ClickChoicePN = (key) => {
        this.props.dispatch({
            type: 'sparepartmodal/savePNChoicesign',
            payload: key
        });
        this.setState({
            PNstate: true
        });
    }
    CloseChoisePN1 = () => {
        this.setState({
            PNstate: false
        });
        // 清除选择PN中的详情中的表格数据
        this.props.dispatch({
            type: 'sparepartmodal/ClosePNChoiceConfirm'
        })
    }
    // 点击搜索
    ClickSearch = () => {
        this.setState({
            // QueryState: true
        })
    }

    // 点击高级
    ClickQuery = () => {
        this.setState({
            QueryState: true
        })
    }
    CloseQuery = () => {
        this.setState({
            QueryState: false
        })
    }

    // 点击备件申请
    ClickAddSupply = () => {
        this.setState({
            AddSupplyState: true
        })
    }
    CloseAddSupply = () => {
        this.setState({
            AddSupplyState: false
        })
    }

    // 点击生成出库表单
    ClickOutStorageForm = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ClickOutStorageForm'
        })
    }
    CloseOutStorageForm = () => {
        this.props.dispatch({
            type: 'sparepartmodal/CloseOutStorageForm'
        })
    }

    // 点击出库记录
    ClickOutStorageRecord = () => {
        this.setState({
            OutStorageRecordState: true
        })
        this.props.dispatch({
            type: 'sparepartmodal/OutStorageRecordAsync'
        })
    }
    CloseOutStorageRecord = () => {
        this.setState({
            OutStorageRecordState: false
        })
    }


    // 表格查看
    TableClickView = (pn) => {
        // console.log('pn=====', pn)
        this.setState({
            ViewState: true
        });
        this.props.dispatch({
            type: 'sparepartmodal/ViewSpareDetail',
            payload: pn
        })
    }
    TableCloseView = () => {
        this.setState({
            ViewState: false
        })
    }

    // 关闭 维修申请 弹窗
    TableCloseMA = () => {
        this.props.dispatch({
            type: 'sparepartmodal/CloseMaintainApply'
        })
    }
    // 关闭 维修记录 弹窗
    TableCloseMR = () => {
        this.props.dispatch({
            type: 'sparepartmodal/CloseMaintainRercord'
        })
    }
    // 关闭 检修记录 弹窗
    TableCloseDR = () => {
        this.props.dispatch({
            type: 'sparepartmodal/CloseDetectionRecord'
        })
    }

    // 选择SN
    ChoiseSN = (pn, key) => {
        this.setState({
            SNState: true
        });
        this.props.dispatch({//选择SN请求数据
            type: 'sparepartmodal/TableChooseSN',
            payload: pn
        })
        this.props.dispatch({//获取SN行号 将数量赋值过去
            type: 'sparepartmodal/TableChooseSNKey',
            payload: key
        })
    }
    CloseChoiseSN = () => {
        this.setState({
            SNState: false
        })
    }

    // 删除SN
    ClickDelete = (key) => {
        let newData = this.props.sparepartmodal.OutStorageTableData;//获取所有待出库列表数据
        const index = newData.findIndex((item) => key === item.key);
        newData.splice(index, 1);
        console.log(newData);
        this.props.dispatch({
            type: 'sparepartmodal/ClickQueryTable',
            payload: newData
        })
    }

    CloseChoisePN = () => {
        // 清除选择PN中的详情中的表格数据
        this.props.dispatch({
            type: 'sparepartmodal/ClosePNChoiceConfirm'
        })
    }

    // 创建出库单
    CreateOutStorage = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ClickQueryTable',
            payload: this.state.selectRowData
        })
    }
}


Queryoutbound = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'QB' ? props.choicePNDetail.PN : null,
                }),
            };
        }
    }

})(Queryoutbound);
export default connect()(Queryoutbound);