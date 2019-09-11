
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form, DatePicker } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';
import moment from 'moment';


class LendMessage extends Component {
    constructor(props) {
        super();
        this.state = {
            LendState: false
        }

    }
    render() {
        const { TextArea } = Input;

        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
            },
            wrapperCol: {
                span: 7
            },
        };
        const formItemLayoutRemark = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            },
        };
        return (
            <Dialog
                visible={this.props.visible}
                title='出借信息'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '500px' }}>

                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>出借信息</div>
                            <div className={styles.fieldContent}>

                                <div style={{width:'100%',float:'left'}}>
                                    <div style={{ float: 'left' }}>
                                        <span style={{ marginRight: '10px' }}>出借状态:</span>
                                        <Button onClick={this.ChangeLend} type='primary'>
                                            {this.state.LendState === false ? '出借' : '在库'}
                                        </Button>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div style={{ float: 'right' }}>
                                        <Form.Item  {...formItemLayout} label='出借人:'>
                                            {getFieldDecorator('user', {
                                                initialValue: '',
                                            })(
                                                <Input style={{ width: '170px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div style={{ float: 'right' }}>
                                        <Form.Item  {...formItemLayout} label='sn:'>
                                            {getFieldDecorator('sn', {
                                                initialValue: '',
                                            })(
                                                <Input style={{ width: '170px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='出借日期:'>
                                            {getFieldDecorator('outTime', {
                                                // initialValue: '',
                                            })(
                                                <DatePicker
                                                    disabled
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    showTime
                                                    style={{ minWidth: '170px' }}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='归还日期:'>
                                            {getFieldDecorator('inTime', {
                                                // initialValue: '',
                                            })(
                                                <DatePicker
                                                    disabled
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    showTime
                                                    style={{ minWidth: '170px' }}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <Form.Item  {...formItemLayoutRemark} label='备注:'>
                                    {getFieldDecorator('remark', {
                                        initialValue: '',
                                    })(
                                        <TextArea rows={7} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOk}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    // 改变 出借状态
    ChangeLend = () => {
        this.setState({
            LendState: !this.state.LendState
        });
        setTimeout(() => {
            if (this.state.LendState) {
                this.props.form.setFieldsValue({
                    inTime: moment()
                })
            }
            else if (this.state.LendState === false) {
                this.props.form.setFieldsValue({
                    outTime: moment()
                })
            }
        }, 100)

    }

    ClickOk = () => {
        let outTime = this.props.form.getFieldValue('outTime');//出借日期
        let inTime = this.props.form.getFieldValue('inTime');//归还日期

        this.props.form.validateFields((err, fieldsValue) => {
            console.log("22222222222", this.state.LendState, inTime, outTime)
            if (this.state.LendState && inTime !== '' && inTime !== undefined) {//在库状态
                let values = {
                    ...fieldsValue,
                    'inTime': fieldsValue['inTime'].format('YYYY-MM-DD HH:mm:ss'),
                }
                delete values.outTime;//删除时间属性
                values.state = '在库';
                console.log('在库====', values);

                this.props.dispatch({
                    type: 'sparepartmodal/IndividualModify',
                    payload: values
                })
            }
            else if (this.state.LendState === false && outTime !== '' && outTime !== undefined) {//出库状态
                let values = {
                    ...fieldsValue,
                    'outTime': fieldsValue['outTime'].format('YYYY-MM-DD HH:mm:ss'),
                }
                delete values.inTime;//删除时间属性
                values.state = '出借';
                console.log('出借====', values);
                this.props.dispatch({
                    type: 'sparepartmodal/IndividualModify',
                    payload: values
                })

            }

        })
    }



}

LendMessage = Form.create({
    mapPropsToFields(props) {
        console.log('props=====', props);
        if (props.DetailView != null) {
            return {
                // outTime: Form.createFormField({
                //     ...props,
                //     value: props.DetailView.outTime,
                // }),
                user: Form.createFormField({
                    ...props,
                    value: props.DetailView.user,
                }),
                sn: Form.createFormField({
                    ...props,
                    value: props.DetailView.sn,
                }),
                // inTime: Form.createFormField({
                //     ...props,
                //     value: props.DetailView.inTime,
                // }),
                remark: Form.createFormField({
                    ...props,
                    value: props.DetailView.remark,
                }),
            };
        }
    }

})(LendMessage);
export default connect()(LendMessage);