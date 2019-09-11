import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Select, DatePicker, Input, Form } from 'antd';
import ChoisePNDialog from './../../Dialog/PublicDialog/ChoisePNDialog';
import WarningDetail from './../../Dialog/SpareDialog/Warning/WarningDetail';
import { connect } from 'dva';
import SpareAddApply from './../../Dialog/SpareDialog/QueryOutBound/SpareAddApply';
@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class Warning extends Component {
    constructor(propps) {
        super(propps);
        this.state = {
            PNstate: false,
            ViewState: false,
            OpenState: '使能',
            Time: '',
            Deleteid: null,// 预警选择删除
        }
    }

    componentDidMount() {
        //初始化表格数据
        this.props.dispatch({
            type: 'sparepartmodal/WarningTableInit',
        })
    }
    render() {
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
            float: 'left',
            width: '100%',
            marginTop: '5px',
            display: 'inline-block'
        }
        const Option = Select.Option;
        let readState = '未读';
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            },
            {
                title: '预警触发日期',
                width: '16%',
                dataIndex: 'triggerdate', key: 'triggerdate',
            }, {
                title: 'PN',
                width: '15%',
                dataIndex: 'PN', key: 'PN',
            }, {
                title: '名称',
                width: '12%',
                dataIndex: 'name', key: 'name',
            }, {
                title: '型号',
                width: '12%',
                dataIndex: 'type', key: 'type',
            }, {
                title: '状态',
                width: '8%',
                dataIndex: 'state', key: 'state',
                render: (text, record) => (
                    <div style={{ display: 'inline-block' }}>
                        {
                            readState === '未读' ?
                                <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.ClickLook(record.key)} >未读</span>
                                :
                                <span style={{ color: '#666666' }}>已读</span>
                        }
                    </div>
                )
            }, {
                title: '接收时间',
                width: '16%',
                dataIndex: 'receivetime', key: 'receivetime',
            }, {
                title: '详情',
                dataIndex: 'details', key: 'details',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.ClickLook(record.key)} >详情</span>
                )
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.warningTableData;//库存预警表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: tabledata[i].id,
                    triggerdate: tabledata[i].triggerTime,
                    PN: tabledata[i].pn,
                    name: tabledata[i].name,
                    type: tabledata[i].model,
                    state: tabledata[i].state,
                    receivetime: tabledata[i].receiveTime,
                });
            }
        }
        // for (let i = 0; i < 22; i++) {
        //     Tabledata.push({
        //         key: i,
        //         triggerdate: 22,
        //         PN: 22,
        //         name: 22,
        //         type: 22,
        //         state: 22,
        //         receivetime: 22,
        //     });
        // }
        const rowSelection = {//选择复选框
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    Deleteid: selectedRowKeys
                })
            },
            // getCheckboxProps: record => ({
            //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
            //     name: record.name,
            // }),
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
                        库存预警记录
                    </div>

                    <Form className={styles.myBandForm}>
                        <div className={styles.layoutContent}>
                            <div style={field}>
                                <div style={fieldTitle}>筛选列表</div>
                                <div style={fieldContent}>
                                    <div style={{ float: 'left', width: '100%' }}>
                                        <div className={styles.WarningDatepicker}>
                                            <span style={{ marginRight: '10px' }}>预警触发日期:</span>
                                            <DatePicker showTime onChange={this.ChangeTime} />
                                        </div>

                                        <div className={styles.WarningrySelect_PN}>
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
                                                    <Button type="primary" onClick={() => this.ClickChoicePN('warning')}>选择PN</Button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className={styles.WarningSelect_Open}>
                                            <span style={{ marginRight: '10px' }}>预警开关:</span>
                                            <Select value={this.state.OpenState} onChange={this.ChangeOpenState} style={{ width: '50%' }}>
                                                <Option value='使能'>使能</Option>
                                                <Option value='关闭'>关闭</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
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
                    </Form>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>

                            <div style={{ float: 'left', width: '100%', marginRight: '10px', lineHeight: '30px', textAlign: 'center' }}>
                                <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">已读</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button onClick={this.ClickDelete} type="primary">删除</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">一键清空</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">一键已读</Button>
                                    </div>
                                </div>

                                <div style={{ float: 'right' }}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type="primary">预警全部关闭</Button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.bodyCss_query}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    rowSelection={rowSelection}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 8 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

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
                            closeWinodow={this.CloseChoisePN}
                            visible={this.state.PNstate}
                        />
                        : null
                }
                {/* 列表查看 */}
                {
                    this.state.ViewState ?
                        <WarningDetail
                            DetailViewData={this.props.sparepartmodal.warningViewData}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseLook}
                            visible={this.state.ViewState}
                        />
                        : null
                }
                {/* 备件申请表单 */}
                {
                    this.props.sparepartmodal.ShowAddApplyState ?
                        <SpareAddApply
                            index={12}
                            zIndex={12}
                            // Clickdata={this.props.sparepartmodal.ViewTableDetailData}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseSpareApply}
                            visible={this.props.sparepartmodal.ShowAddApplyState}
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
    CloseChoisePN = () => {
        this.setState({
            PNstate: false
        });
        // 清除选择PN中的详情中的表格数据
        this.props.dispatch({
            type: 'sparepartmodal/ClosePNChoiceConfirm'
        })
    }
    
    // 隐藏备件补充
    CloseSpareApply = () => {
        this.props.dispatch({
            type: 'sparepartmodal/HideAddApply',
        })
    }
    //改变申请时间
    ChangeTime = (date, dateString) => {
        this.setState({
            Time: dateString
        })
    }
    // //预警开关 改变
    ChangeOpenState = (value) => {
        this.setState({
            OpenState: value
        })
    }
    //筛选结果
    clickChooice = () => {
        let { Time, OpenState } = this.state;
        let obj = {
            "triggerTime": Time,
            "state": OpenState,
            "pn": this.props.form.getFieldValue('pn')
        }
        console.log("obj======", obj)
        this.props.dispatch({
            type: 'sparepartmodal/WarningChooice',
            payload: obj
        })
    }
    // 点击删除(多行删除)
    ClickDelete = () => {
        let data = this.state.Deleteid;
        console.log('data=======', data)
        if (data != null && data.length !== 0) {
            this.props.dispatch({
                type: 'sparepartmodal/DeleteWarningMulti',
                payload: data
            })
        }

    }

    // 点击详情查看
    ClickLook = (key) => {
        this.setState({
            ViewState: true
        });
        this.props.dispatch({
            type: 'sparepartmodal/WarningViewDataAsync',
            payload: key
        })
    }
    CloseLook = () => {
        this.setState({
            ViewState: false
        })
    }


}


Warning = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'warning' ? props.choicePNDetail.PN : null,
                }),
            };
        }
    }

})(Warning);
export default connect()(Warning);