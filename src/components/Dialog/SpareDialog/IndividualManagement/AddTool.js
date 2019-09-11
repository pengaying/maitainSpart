import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form, DatePicker } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class AddTool extends Component {
    constructor(props) {
        super();
        this.state = {

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
                title='添加工具'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '600px' }}>

                        <Form className={styles.myBandForm}>

                            <div className={styles.field}>
                                <div className={styles.fieldTitle}>基本信息</div>
                                <div className={styles.fieldContent}>

                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='录入人:'>
                                                {getFieldDecorator('people', {
                                                    initialValue: '',
                                                })(
                                                    <Input style={{ width: '195px' }} />
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
                                                    <Input style={{ width: '195px' }} />
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
                                                    <Input style={{ width: '195px' }} />
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
                                                    <Input style={{ width: '195px' }} />
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
                                                    <Input style={{ width: '195px' }} />
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
                                                    <Input style={{ width: '195px' }} />
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
                                                    <Input style={{ width: '195px' }} />
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

                        </Form>
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

    ClickOK = () => {
        // let values = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, fieldsValue) => {
            let time = this.props.form.getFieldValue('time');
            console.log(time)
            if (time !== '' && time !== undefined) {
                let values = {
                    ...fieldsValue,
                    'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
                }
                console.log(values);

                this.props.dispatch({
                    type: 'sparepartmodal/IndividualAddTool',
                    payload: values
                })
            }
            else {
                let values = {
                    ...fieldsValue,
                }
                delete values.time;//删除时间属性
                console.log(values);
                this.props.dispatch({
                    type: 'sparepartmodal/IndividualAddTool',
                    payload: values
                })
            }
        })

    }
}

AddTool = Form.create({

    mapPropsToFields(props) {
        // console.log('props=====', props);
        // if (props.DetailViewData != null) {
        //     return {

        //     };
        // }
    }

})(AddTool);
export default connect()(AddTool);
