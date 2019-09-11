import React, { Component } from 'react';
import { Input, Button, Table, Select, Form } from 'antd';
import styles from './Storage.less';
import ChoisePNDialog from '../../Dialog/PublicDialog/ChoisePNDialog';
import PrintBarcode from '../../Dialog/PublicDialog/PrintBarcode';
import ChoiceEquip from './../../Dialog/PublicDialog/ChoiceEquip';

import { connect } from 'dva';
@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class Storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PNstate: false, //选择PN弹窗
            AutoCreatestate: false, //选择自动生成弹窗
            AddEquiptate: false, //选择添加所属装备
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'sparepartmodal/StorageTableDataAsync'
        })
    }

    render() {
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
        const formItemLayouttext = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 18
            },
        };
        const columns = [
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


        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            Tabledata.push({
                key: i + 1,
                Extensionname: '信号处理分机',
                Extensiontype: 'S816-1',
                Subsystemname: '信号处理分系统',
                Subsystemmodel: 'S86-6',
                Machinemodel: 'S86',
                Machinename: '信号处理',
            });
        }
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        入库
                    </div>
                    <Form className={styles.myBandForm}>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='PN:'>
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
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='名称:'>
                                    {getFieldDecorator('name', {
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

                        <div className={styles.contentPN}>
                            <div style={{ display: 'inline-block', margin: '10px' }}>
                                <Button type="primary" onClick={() => this.ClickChoicePN('storage')}>选择PN</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 0 0 0' }}>
                                <Button type="primary" >检测</Button>
                            </div>
                        </div>

                        <div className={styles.contentSN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='SN号:'>
                                    {getFieldDecorator('sn', {
                                        // initialValue: "0",
                                    })(
                                        <Input
                                            style={{ width: '150px' }}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='备件状态:'>
                                    {getFieldDecorator('state', {
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
                        <div className={styles.contentAuto}>
                            <div style={{ display: 'inline-block', margin: '10px' }}>
                                <Button onClick={this.CLickAutoCreate} type="primary" >自动生成</Button>
                            </div>
                        </div>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <FormItem  {...formItemLayouttext} label='故障原因:'>
                                    {getFieldDecorator('reason', {
                                        // initialValue: "0",
                                    })(
                                        <TextArea
                                            rows={4}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        <div style={{float:'left',margin:'10px 0 0 10px'}}>
                                <Button onClick={this.ClickAddEquip} type="primary" icon="plus">添加所属装备弹窗</Button>
                        </div>

                        <div className={styles.TextArea_note_Content}>
                            <div className={styles.TextArea_note_Style}>
                                <span style={{ marginRight: '10px', lineHeight: '73px' }}>所属装备列表:</span>
                                <div className={styles.bodyCss}>
                                    <Table
                                        bordered
                                        columns={columns}
                                        dataSource={Tabledata}
                                        pagination={false}
                                        className={styles.mynoiseClass}
                                        scroll={{ y: 94 }}
                                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.layoutContent}>
                            <div className={styles.contentPeople}>
                                <div className={styles.InputStyle}>
                                    <FormItem  {...formItemLayout} label='经手人:'>
                                        {getFieldDecorator('people', {
                                            // initialValue: "0",
                                        })(
                                            <Select style={{ width: '150px' }}></Select>
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                        </div>

                        <div className={styles.layoutContent}>
                            <div className={styles.contentPosition}>
                                <div className={styles.InputStyle}>
                                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                        <FormItem  {...formItemLayout} label='存放位置:'>
                                            {getFieldDecorator('location1', {
                                                // initialValue: "0",
                                            })(
                                                <Select style={{ width: '150px' }}></Select>

                                            )}
                                        </FormItem>
                                    </div>
                                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                        <FormItem  {...formItemLayout}>
                                            {getFieldDecorator('location2', {
                                                // initialValue: "0",
                                            })(
                                                <Select style={{ width: '150px' }}></Select>
                                            )}
                                        </FormItem>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea_note_Content}>
                            <div className={styles.TextArea_note_Style}>
                                <FormItem  {...formItemLayouttext} label='备注:'>
                                    {getFieldDecorator('remarks', {
                                        // initialValue: "0",
                                    })(
                                        <TextArea
                                            rows={4}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                            <div style={{ display: 'inline-block', margin: '40px 10px 0 20px' }}>
                                <Button onClick={this.StorageSave} type="primary" >入库</Button>
                            </div>
                        </div>

                    </Form>
                </div>

                {/* 选择PN弹窗 */}
                {
                    this.state.PNstate ?
                        <ChoisePNDialog
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.closeChoisePN}
                            visible={this.state.PNstate}
                        />
                        : null
                }
                {/* 选择自动生成弹窗 */}
                {
                    this.state.AutoCreatestate ?
                        <PrintBarcode
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.closeAutoCreate}
                            visible={this.state.AutoCreatestate}
                        />
                        : null
                }
                {/* 添加所属装备弹窗 */}
                {
                    this.state.AddEquiptate ?
                        <ChoiceEquip
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAddEquip}
                            visible={this.state.AddEquiptate}
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
        })
        this.setState({
            PNstate: true
        });
    }
    closeChoisePN = () => {
        this.setState({
            PNstate: false
        });
        // 清除选择PN中的详情中的表格数据
        this.props.dispatch({
            type: 'sparepartmodal/ClosePNChoiceConfirm'
        })
    }

    // 点击自动生成
    CLickAutoCreate = () => {
        this.setState({
            AutoCreatestate: true
        })
    }
    closeAutoCreate = () => {
        this.setState({
            AutoCreatestate: false
        });
    }


    // 点击自动生成
    ClickAddEquip = () => {
        this.setState({
            AddEquiptate: true
        })
    }
    CloseAddEquip = () => {
        this.setState({
            AddEquiptate: false
        });
    }

    // 点击入库
    StorageSave = () => {
        let values = this.props.form.getFieldsValue();
        // let time = this.Date();//获取当前时间

        // values.recordType = '入库';
        // values.time = time;
        console.log("values========", values);
        let { dispatch } = this.props;
        dispatch({
            type: 'sparepartmodal/StorageData',
            payload: values
        })
    }

    // Date = () => {
    //     let today = new Date();
    //     let yyyy = today.getFullYear();
    //     let mm = today.getMonth() + 1; //一月是0，一定要注意
    //     let dd = today.getDate();
    //     let hour = today.getHours();
    //     let minutes = today.getMinutes();
    //     let seconds = today.getSeconds();
    //     if (mm < 10) {
    //         mm = '0' + mm
    //     }
    //     if (dd < 10) {
    //         dd = '0' + dd
    //     }
    //     today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + minutes + ":" + seconds;
    //     return today
    // }
}

Storage = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'storage' ? props.choicePNDetail.PN : null,
                }),
                name: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'storage' ? props.choicePNDetail.name : null,
                })
            };
        }
    }

})(Storage);
export default connect()(Storage);