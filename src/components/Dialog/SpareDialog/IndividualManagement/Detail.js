
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form, DatePicker } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

class Detail extends Component {
    constructor(props) {
        super();
        this.state = {
            modifyState: false,
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
                title='详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '600px' }}>
                    
                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <Button type="primary" onClick={this.ClickModify}>
                                    {this.state.modifyState === false ? '修改参数' : '正在修改'}
                                </Button>
                            </div>
                        </div>


                        {/* 基本信息 */}
                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>基本信息</div>
                            <div className={styles.fieldContent}>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='录入人:'>
                                            {getFieldDecorator('people', {
                                                initialValue: '',
                                            })(
                                                <Input disabled={this.state.modifyState ? false : true} style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='PN:'>
                                            {getFieldDecorator('pn', {
                                                initialValue: '',
                                            })(
                                                <Input disabled style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='名称:'>
                                            {getFieldDecorator('name', {
                                                initialValue: '',
                                            })(
                                                <Input disabled={this.state.modifyState ? false : true} style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='规格:'>
                                            {getFieldDecorator('specs', {
                                                initialValue: '',
                                            })(
                                                <Input disabled={this.state.modifyState ? false : true} style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='型号:'>
                                            {getFieldDecorator('type', {
                                                initialValue: '',
                                            })(
                                                <Input disabled={this.state.modifyState ? false : true} style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='品牌:'>
                                            {getFieldDecorator('brand', {
                                                initialValue: '',
                                            })(
                                                <Input disabled={this.state.modifyState ? false : true} style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='录入日期:'>
                                            {getFieldDecorator('time', {
                                                // initialValue: '',
                                            })(
                                                <DatePicker
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    showTime
                                                    disabled
                                                    style={{ minWidth: '150px' }}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <Form.Item  {...formItemLayout} label='SN:'>
                                            {getFieldDecorator('sn', {
                                                initialValue: '',
                                            })(
                                                <Input disabled style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* 出借信息 */}
                        <div style={{ float: 'left', margin: '10px 0 0 0' }}>
                            <div className={styles.field}>
                                <div className={styles.fieldTitle}>出借信息</div>
                                <div className={styles.fieldContent}>
                                    <div className={styles.contentPN}>
                                        <div style={{ float: 'left' }}>
                                            <span style={{ marginRight: '10px' }}>出借状态:</span>
                                            <Button onClick={this.ChangeLend} disabled={this.state.modifyState ? false : true} type='primary'>
                                                {this.state.LendState === false ? '出借' : '在库'}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='出借日期:'>
                                                {getFieldDecorator('outTime', {
                                                    // initialValue: '',
                                                })(
                                                    <DatePicker
                                                        disabled={this.state.modifyState ? false : true}
                                                        format="YYYY-MM-DD HH:mm:ss"
                                                        showTime
                                                        style={{ minWidth: '150px' }}
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className={styles.contentPN}>
                                        <div style={{ float: 'left' }}>
                                            <Form.Item  {...formItemLayout} label='出 借 人:'>
                                                {getFieldDecorator('user', {
                                                    initialValue: '',
                                                })(
                                                    <Input disabled={this.state.modifyState ? false : true} style={{ width: '150px' }} />
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
                                                        disabled={this.state.modifyState ? false : true}
                                                        format="YYYY-MM-DD HH:mm:ss"
                                                        showTime
                                                        style={{ minWidth: '150px' }}
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
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
                                        <TextArea disabled={this.state.modifyState ? false : true} rows={7} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOK}>
                                    确认
                                </Button>
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
        })
    }

    ClickModify = () => {
        this.setState({
            modifyState: !this.state.modifyState
        });
    }

    // 修该参数
    ClickOK = () => {
        this.props.form.validateFields((err, fieldsValue) => {

            let time = this.props.form.getFieldValue('time');
            let inTime = this.props.form.getFieldValue('inTime');
            let outTime = this.props.form.getFieldValue('outTime');

            console.log(time)
            if (time !== '' && time !== undefined && inTime !== '' && inTime !== undefined && outTime !== '' && outTime !== undefined) {
                let values = {
                    ...fieldsValue,
                    'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
                    'inTime': fieldsValue['inTime'].format('YYYY-MM-DD HH:mm:ss'),
                    'outTime': fieldsValue['outTime'].format('YYYY-MM-DD HH:mm:ss'),
                }
                values.state = this.state.LendState ? '在库' : '出借';
                console.log(values);

                if (this.state.modifyState) {
                    this.props.dispatch({
                        type: 'sparepartmodal/IndividualModify',
                        payload: values
                    })
                }
            }
            else {
                let values = {
                    ...fieldsValue,
                }
                delete values.time;//删除时间属性
                delete values.inTime;//删除时间属性
                delete values.outTime;//删除时间属性
                values.state = this.state.LendState ? '在库' : '出借';

                console.log(values);
                if (this.state.modifyState) {
                    this.props.dispatch({
                        type: 'sparepartmodal/IndividualModify',
                        payload: values
                    })
                }
            }
        })

        this.setState({
            modifyState: false
        });

    }
}



Detail = Form.create({

    mapPropsToFields(props) {
        console.log('props=====', props);
        if (props.DetailView != null) {
            return {
                people: Form.createFormField({
                    ...props,
                    value: props.DetailView.people,
                }),
                pn: Form.createFormField({
                    ...props,
                    value: props.DetailView.pn,
                }),
                name: Form.createFormField({
                    ...props,
                    value: props.DetailView.name,
                }),
                specs: Form.createFormField({
                    ...props,
                    value: props.DetailView.specs,
                }),
                type: Form.createFormField({
                    ...props,
                    value: props.DetailView.type,
                }),
                brand: Form.createFormField({
                    ...props,
                    value: props.DetailView.spec,
                }),
                // time: Form.createFormField({
                //     ...props,
                //     value: props.DetailView.time,
                // }),
                sn: Form.createFormField({
                    ...props,
                    value: props.DetailView.sn,
                }),
                // outTime: Form.createFormField({
                //     ...props,
                //     value: props.DetailView.outTime,
                // }),
                user: Form.createFormField({
                    ...props,
                    value: props.DetailView.user,
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

})(Detail);
export default connect()(Detail);