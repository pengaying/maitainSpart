
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

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='添加人:'>
                                    {getFieldDecorator('people', {
                                        initialValue: '',
                                    })(
                                        <Input disabled={this.state.modifyState ? false : true} style={{ width: '170px' }} />
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
                                        <Input disabled style={{ width: '170px' }} />
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
                                        <Input disabled={this.state.modifyState ? false : true} style={{ width: '170px' }} />
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
                                        <Input disabled={this.state.modifyState ? false : true} style={{ width: '170px' }} />
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
                                        <Input disabled={this.state.modifyState ? false : true} style={{ width: '170px' }} />
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
                                        <Input disabled={this.state.modifyState ? false : true} style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout} label='添加日期:'>
                                    {getFieldDecorator('time', {
                                        // initialValue: '',
                                    })(
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            showTime
                                            disabled={this.state.modifyState ? false : true}
                                            style={{ minWidth: '170px' }}
                                        />
                                    )}
                                </Form.Item>
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
                                <Button type="primary" onClick={this.ClickOK}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
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
            console.log(time)
            if (time !== '' && time !== undefined) {
                let values = {
                    ...fieldsValue,
                    'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
                }
                console.log(values);

                if (this.state.modifyState) {
                    this.props.dispatch({
                        type: 'sparepartmodal/ProductControlModify',
                        payload: values
                    })
                }
            }
            else {
                let values = {
                    ...fieldsValue,
                }
                delete values.time;//删除时间属性
                console.log(values);
                if (this.state.modifyState) {
                    this.props.dispatch({
                        type: 'sparepartmodal/ProductControlModify',
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
                    value: props.DetailView.brand,
                }),
                // time: Form.createFormField({
                //     ...props,
                //     value: props.DetailView.time,
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