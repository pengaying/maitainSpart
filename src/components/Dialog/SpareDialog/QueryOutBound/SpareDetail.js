import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Table, Form } from 'antd';
import styles from './Query.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

class SpareDetail extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const EColumns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '所属分机名称',
                dataIndex: 'Extensionname', key: 'Extensionname',
                width: '19%',
            },
            {
                title: '所属分机型号',
                width: '13%',
                dataIndex: 'Extensiontype', key: 'Extensiontype',
            }, {
                title: '状态所属子系统名称',
                width: '19%',
                dataIndex: 'Subsystemname', key: 'Subsystemname',
            }, {
                title: '所属子系统型号',
                width: '13%',
                dataIndex: 'Subsystemmodel', key: 'Subsystemmodel',
            }, {
                title: '所属整机名称',
                width: '18%',
                dataIndex: 'Machinename', key: 'Machinename',
            }, {
                title: '所属整机型号',
                //   width: '18%',
                dataIndex: 'Machinemodel', key: 'Machinemodel',
            }
        ];

        const SNColumns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '备件SN',
                dataIndex: 'SprreSN', key: 'SprreSN',
                width: '19%',
            },
            {
                title: '状态',
                width: '13%',
                dataIndex: 'state', key: 'state',
            }, {
                title: '申请维修',
                width: '19%',
                dataIndex: 'supplyMaintain', key: 'supplyMaintain',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.TableClickMA(record.num)}>申请维修</span>
                )
            }, {
                title: '维修记录',
                width: '13%',
                dataIndex: 'supplyRecord', key: 'supplyRecord',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.TableClickMR(record.num)}>维修记录</span>
                )
            }, {
                title: '检测记录',
                width: '18%',
                dataIndex: 'detectionRecord', key: 'detectionRecord',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.TableClickDR(record.num)}>检测记录</span>
                )
            }, {
                title: '存放位置',
                width: '18%',
                dataIndex: 'saveLocation', key: 'saveLocation',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.TableClickCC(record.num)}>格号/柜号</span>
                )
            }
        ];


        let ETabledata = [];
        let SNTabledata = [];

        for (let i = 0; i < 10; i++) {
            ETabledata.push({
                key: i + 1,
                Extensionname: '信号处理分机',
                Extensiontype: 'S816-1',
                Subsystemname: '信号处理分系统',
                Subsystemmodel: 'S86-6',
                Machinemodel: 'S86',
                Machinename: '信号处理',
            });
        }

        let sndata = this.props.sparepartmodal.ViewSnTableData;
        if (sndata != null && sndata.length !== 0) {//获取到的SN列表值
            for (let i = 0; i < sndata.length; i++) {
                SNTabledata.push({
                    key: i + 1,
                    SprreSN: sndata[i].name,
                    state: sndata[i].name,
                });
            }
        }
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
            <Dialog
                visible={this.props.visible}
                title='备件详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>
                        <Form className={styles.myBandForm}>
                            <div className={styles.layoutContent}>

                                <div className={styles.field}>
                                    <div className={styles.fieldTitle}>基本信息</div>
                                    <div className={styles.fieldContent}>
                                        <div style={{ float: 'left', width: '100%' }}>
                                            <div className={styles.contentPN}>
                                                <div className={styles.InputStyle}>
                                                    <Form.Item  {...formItemLayout} label='备件PN'>
                                                        {getFieldDecorator('pn', {
                                                            initialValue: '',
                                                        })(
                                                            <Input style={{ width: '200px' }} />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className={styles.contentPN}>
                                                <div className={styles.InputStyle}>
                                                    <Form.Item  {...formItemLayout} label='备件名称'>
                                                        {getFieldDecorator('name', {
                                                            initialValue: '',
                                                        })(
                                                            <Input style={{ width: '200px' }} />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ float: 'left', width: '100%' }}>
                                            <div className={styles.contentPN}>
                                                <div className={styles.InputStyle}>
                                                    <Form.Item  {...formItemLayout} label='备件品牌'>
                                                        {getFieldDecorator('brand', {
                                                            initialValue: '',
                                                        })(
                                                            <Input style={{ width: '200px' }} />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className={styles.contentPN}>
                                                <div className={styles.InputStyle}>
                                                    <Form.Item  {...formItemLayout} label='备件型号:'>
                                                        {getFieldDecorator('model', {
                                                            initialValue: '',
                                                        })(
                                                            <Input style={{ width: '200px' }} />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ float: 'left', width: '100%' }}>
                                            <div className={styles.contentPN}>
                                                <div className={styles.InputStyle}>
                                                    <Form.Item  {...formItemLayout} label='数量:'>
                                                        {getFieldDecorator('quantity', {
                                                            initialValue: '',
                                                        })(
                                                            <Input style={{ width: '200px' }} />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className={styles.contentPN}>
                                                <div className={styles.InputStyle}>
                                                    <Form.Item  {...formItemLayout} label='备件规格:'>
                                                        {getFieldDecorator('sparecategory', {
                                                            initialValue: '',
                                                        })(
                                                            <Input style={{ width: '200px' }} />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.layoutContent}>
                                <div className={styles.field}>
                                    <div className={styles.fieldTitle}>所属装备列表</div>
                                    <div className={styles.fieldContent}>
                                        <div className={styles.bodyCss}>
                                            <Table
                                                bordered
                                                columns={EColumns}
                                                dataSource={ETabledata}
                                                pagination={false}
                                                className={styles.mynoiseClass}
                                                scroll={{ y: 107 }}
                                                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.layoutContent}>
                                <div className={styles.field}>
                                    <div className={styles.fieldTitle}>备件SN列表</div>
                                    <div className={styles.fieldContent}>
                                        <div className={styles.bodyCss}>
                                            <Table
                                                bordered
                                                columns={SNColumns}
                                                dataSource={SNTabledata}
                                                pagination={{ pageSize: 6 }}
                                                className={styles.mynoiseClass}
                                                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>备件补充</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    TableClickMA = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ClickMaintainApply'
        })
    }
    TableClickMR = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ClickMaintainRercord'
        })
    }

    TableClickDR = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ClickDetectionRecord'
        })
    }

    TableClickCC = () => {
        //     this.props.dispatch({
        //         type: 'sparepartmodal/ClickContain'
        //     })
    }

    // TableCloseCC = () => {
    //     this.props.dispatch({
    //         type: 'sparepartmodal/CloseContain'
    //     })
    // }



}


SpareDetail = Form.create({

    mapPropsToFields(props) {
        console.log('props=====', props);
        if (props.DetailView != null) {
            return {
                name: Form.createFormField({
                    ...props,
                    value: props.DetailView.sparepartname,
                }),
                quantity: Form.createFormField({
                    ...props,
                    value: props.DetailView.quantity,
                }),
                pn: Form.createFormField({
                    ...props,
                    value: props.DetailView.sparepartpn,
                }),
                brand: Form.createFormField({
                    ...props,
                    value: props.DetailView.sparebrand,
                }),
                model: Form.createFormField({
                    ...props,
                    value: props.DetailView.sparetype,
                }),
                sparecategory: Form.createFormField({
                    ...props,
                    value: props.DetailView.sparecategory,
                }),
            };
        }
    }

})(SpareDetail);
export default connect()(SpareDetail);