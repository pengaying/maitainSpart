
import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Input, Form } from 'antd';
import Detail from './../../Dialog/SpareDialog/PN/Detail';
import Create from './../../Dialog/SpareDialog/PN/Create';

import ChoisePNDialog from './../../Dialog/PublicDialog/ChoisePNDialog';
import { connect } from 'dva';
import ChoiceEquip from './../../Dialog/PublicDialog/ChoiceEquip';
import Advanced from './../../Dialog/SpareDialog/PN/Advanced';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class PNManagement extends Component {
    constructor() {
        super();
        this.state = {
            ViewState: false, // 表格 查看 弹窗标志位 false隐藏
            CreateState: false,// 表格 新建 弹窗标志位
            PNstate: false,//  选择PN 弹窗标志位
            AdvancedState: false,// 高级 弹窗标志位

        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'sparepartmodal/InitPnManagementTable'
        });
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            }, {
                title: '备件名称',
                width: '15%',
                dataIndex: 'sparepartname', key: 'sparepartname',
            },
            {
                title: '备件PN',
                dataIndex: 'sparepartPN', key: 'sparepartPN',
                width: '12%',
            }, {
                title: '备件品牌',
                width: '12%',
                dataIndex: 'sparebrand', key: 'sparebrand',
            },
            {
                title: '备件型号',
                width: '12%',
                dataIndex: 'sparetype', key: 'sparetype',
            }, {
                title: '备件级别',
                width: '12%',
                dataIndex: 'sparelevel', key: 'sparelevel',
            }, {
                title: '备件类别',
                width: '12%',
                dataIndex: 'sparecategory', key: 'sparecategory',
            }, {
                title: '详情',
                dataIndex: 'details', key: 'details',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.handleClickLook(record.sparepartPN)} >查看</span>
                )
            }];

        let PnManagementTableData = this.props.sparepartmodal.PnManagementTableData;
        let Tabledata = [];
        if (PnManagementTableData != null) {
            for (let i = 0; i < PnManagementTableData.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    sparepartPN: PnManagementTableData[i].pn,
                    sparepartname: PnManagementTableData[i].name,
                    sparebrand: PnManagementTableData[i].brand,
                    sparetype: PnManagementTableData[i].model,
                    sparelevel: PnManagementTableData[i].level,
                    sparecategory: PnManagementTableData[i].category,
                });
            }
        }

        const rowSelection = {//选择复选框
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        const { TextArea } = Input;
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
                        PN管理
                    </div>

                    <Form className={styles.myBandForm}>
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
                                        <div className={styles.contentPN_pnmanagement_input}>
                                            <div style={{ float: 'right' }}>
                                                <FormItem  {...formItemLayout} label='PN:'>
                                                    {getFieldDecorator('pn', {
                                                        // initialValue: "0",
                                                    })(
                                                        <Input
                                                            style={{ width: '200px' }}
                                                            autoComplete="off"
                                                        />
                                                    )}
                                                </FormItem>
                                            </div>
                                            <div style={{ float: 'right', marginTop: '10px' }}>
                                                <Input style={{ width: '200px' }} />
                                            </div>
                                        </div>

                                        <div className={styles.contentPN_pnmanagement_button}>
                                            <div style={{ float: 'left', margin: '0 0 0 10px' }}>
                                                <div style={{ display: 'inline-block', margin: '0 10px 0 0' }}>
                                                    <Button type="primary" onClick={() => this.ClickChoicePN('pnmanagement')}>选择PN</Button>
                                                </div>
                                                <div style={{ display: 'inline-block' }}>
                                                    <Button type="primary" onClick={this.ClickSearchPN}>搜索</Button>
                                                </div>
                                            </div>

                                            <div style={{ float: 'left', margin: '10px 0 0 10px' }}>
                                                <Button onClick={this.ClickAdvanced} type="primary">高级</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ float: 'right' }}>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button type="primary">全部预警关闭</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.bodyCss_PN}>
                                    <Table
                                        bordered
                                        columns={columns}
                                        dataSource={Tabledata}
                                        rowSelection={rowSelection}
                                        className={styles.mynoiseClass}
                                        pagination={{ pageSize: 10 }}
                                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                    />
                                </div>

                            </div>
                        </div>
                    </Form>
                </div>

                {/* 查看详情弹窗 */}
                {
                    this.state.ViewState ?
                        <Detail
                            index={12}
                            zIndex={12}
                            pnDetailData={this.props.sparepartmodal.PNManagementViewData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.handleCloseLook}
                            visible={this.state.ViewState}
                        />
                        : null
                }
                {/* 新建弹窗 */}
                {
                    this.state.CreateState ?
                        <Create
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseCreate}
                            visible={this.state.CreateState}
                        />
                        : null
                }

                {/* 选择PN弹窗 */}
                {
                    this.state.PNstate ?
                        <ChoisePNDialog
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseChoicePN}
                            visible={this.state.PNstate}
                        />
                        : null
                }
                {/* 点击高级弹窗 */}
                {
                    this.state.AdvancedState ?
                        <Advanced
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAdvanced}
                            visible={this.state.AdvancedState}
                        />
                        : null
                }

                {/* 添加所属装备弹窗 */}
                {
                    this.props.sparepartmodal.PnAddEquipState ?
                        <ChoiceEquip
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAddEquip}
                            visible={this.props.sparepartmodal.PnAddEquipState}
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
    handleClickLook = (pn) => {
        console.log('pn=====', pn);
        this.props.dispatch({
            type: 'sparepartmodal/PNManagementView',
            payload: pn
        })
        this.setState({
            ViewState: true
        });
    }
    handleCloseLook = () => {
        this.setState({
            ViewState: false
        })
    }

    // 新建  
    ClickCreate = () => {
        this.setState({
            CreateState: true
        })
    }
    CloseCreate = () => {
        this.setState({
            CreateState: false
        })
    }

    // 点击高级
    ClickAdvanced = () => {
        this.setState({
            AdvancedState: true
        })
    }
    CloseAdvanced = () => {
        this.setState({
            AdvancedState: false
        })
    }

    // 关闭所属装备
    CloseAddEquip = () => {
        this.props.dispatch({
            type: 'sparepartmodal/HideAddEquip',
        })
    }

    // 选择PN
    ClickChoicePN = (key) => {
        this.setState({
            PNstate: true
        });
        this.props.dispatch({
            type: 'sparepartmodal/savePNChoicesign',
            payload: key
        })
    }
    CloseChoicePN = () => {
        this.setState({
            PNstate: false
        })
        // 清除选择PN中的详情中的表格数据
        this.props.dispatch({
            type: 'sparepartmodal/ClosePNChoiceConfirm'
        })
    }

    ClickSearchPN = () => {
        let pn = this.props.form.getFieldValue('pn');
        console.log('pn=====', pn);
        if (pn !== '' && pn !== undefined && pn != null) {
            this.props.dispatch({
                type: 'sparepartmodal/SearchPN',
                payload: pn
            })
        }
    }

}

PNManagement = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'pnmanagement' ? props.choicePNDetail.PN : null,
                }),
            };
        }
    }

})(PNManagement);
export default connect()(PNManagement);
