
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Table, Form } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';
class Detail extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const { TextArea } = Input;
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
                title: '所属子系统名称',
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
                dataIndex: 'Machinemodel', key: 'Machinemodel',
            }
        ];

        const FormItem = Form.Item;
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
            },
            wrapperCol: {
                span: 5
            },
        };

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
            <Dialog
                visible={this.props.visible}
                title='详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件名称:</span>
                                <Input style={{ width: '150px' }} />

                                <FormItem  {...formItemLayout} label='备件名称:'>
                                    {getFieldDecorator('name', {
                                        // initialValue: "0",
                                    })(
                                        <Input
                                            style={{ width: '150px' }}
                                            // onFocus={e => this.handleFocus(e)}
                                            // onKeyUp={e => this.FloatDoppleValidator(e, e.target.value, -100, 100)}
                                            // onBlur={e => this.FloatDoppleBlur(e, e.target.value, -100, 100)}
                                            // disabled={getFieldValue("cwControlModel") === "1" ? true : false}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件PN:</span>
                                <Input style={{ width: '150px' }} />

                                <FormItem  {...formItemLayout} label='备件PN:'>
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

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件品牌:</span>
                                <Input style={{ width: '150px' }} />

                                <FormItem  {...formItemLayout} label='备件品牌:'>
                                    {getFieldDecorator('brand', {
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
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件型号:</span>
                                <Input style={{ width: '150px' }} />

                                <FormItem  {...formItemLayout} label='备件型号:'>
                                    {getFieldDecorator('model', {
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
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件级别:</span>
                                <Input style={{ width: '150px' }} />

                                <FormItem  {...formItemLayout} label='备件级别:'>
                                    {getFieldDecorator('level', {
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
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>备件类别:</span>
                                <Input style={{ width: '150px' }} />
                                <FormItem  {...formItemLayout} label='备件类别:'>
                                    {getFieldDecorator('category', {
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
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>预警开关:</span>
                                <Button type="primary">ON</Button>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>预警数量:</span>
                                <Input style={{ width: '150px' }} />
                                <FormItem  {...formItemLayout} label='预警数量:'>
                                    {getFieldDecorator('threshold', {
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

                        <div className={styles.TextArea_note_Content}>
                            <span style={{ marginRight: '10px', lineHeight: '30px' }}>所属装备列表:</span>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    pagination={false}
                                    className={styles.mynoiseClass}
                                    scroll={{ y: 107 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                        </div>


                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <span style={{ marginRight: '10px', lineHeight: '114px' }}>备注:</span>
                                <FormItem  {...formItemLayout} label='备注:'>
                                    {getFieldDecorator('remarks')(
                                        <TextArea
                                            rows={7}
                                            style={{ width: '79%' }}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
}

Detail = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.pnDetailData != null || props.pnDetailData !== undefined) {
            return {
                brand: Form.createFormField({
                    ...props,
                    value: props.pnDetailData.dopplerShift,
                }),
                category: Form.createFormField({
                    ...props,
                    value: props.pnDetailData.frequency,
                }),
                level: Form.createFormField({
                    ...props,
                    value: props.pnDetailData.position,
                }),
                model: Form.createFormField({
                    ...props,
                    value: String(props.pnDetailData.cwControlModel),
                }),
                name: Form.createFormField({
                    ...props,
                    value: String(props.pnDetailData.cwControlModel),
                }),
                pn: Form.createFormField({
                    ...props,
                    value: String(props.pnDetailData.cwControlModel),
                }),
                remarks: Form.createFormField({
                    ...props,
                    value: String(props.pnDetailData.cwControlModel),
                }),
                threshold: Form.createFormField({
                    ...props,
                    value: String(props.pnDetailData.cwControlModel),
                }),
            };
        }
    }

})(Detail);
export default connect()(Detail);


