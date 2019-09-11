import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

class CheckAbstract extends Component {
    constructor(props) {
        super();
        this.state = {

        }

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
        const formItemLayoutText = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 18
            },
        };

        return (
            <Dialog
                visible={this.props.visible}
                title='盘点分析摘要'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>
                        <Form className={styles.myBandForm}>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='盘点人:'>
                                        {getFieldDecorator('people', {
                                            initialValue: '',
                                        })(
                                            <Input style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='盘点比例:'>
                                        {getFieldDecorator('invRatio', {
                                            initialValue: '',
                                        })(
                                            <Input style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='异常率:'>
                                        {getFieldDecorator('unusualRatio', {
                                            initialValue: '',
                                        })(
                                            <Input style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='正常总数:'>
                                        {getFieldDecorator('usualNum', {
                                            initialValue: '',
                                        })(
                                            <Input style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='异常数:'>
                                        {getFieldDecorator('unusualNum', {
                                            initialValue: '',
                                        })(
                                            <Input style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='生成时间:'>
                                        {getFieldDecorator('time', {
                                            initialValue: '',
                                        })(
                                            <Input style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.TextAreaContent}>
                                <div className={styles.TextAreaStyle}>
                                    <FormItem  {...formItemLayoutText} label='备注:'>
                                        {getFieldDecorator('remarks')(
                                            <TextArea
                                                rows={7}
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

                        </Form>
                    </div>
                </div>
            </Dialog>
        )
    }
}

CheckAbstract = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.DetailData != null && props.DetailData !== undefined) {
            return {
                people: Form.createFormField({
                    ...props,
                    value: props.DetailData.people,
                }),
                invRatio: Form.createFormField({
                    ...props,
                    value: props.DetailData.invRatio,
                }),
                unusualRatio: Form.createFormField({
                    ...props,
                    value: props.DetailData.unusualRatio,
                }),
                usualNum: Form.createFormField({
                    ...props,
                    value: props.DetailData.usualNum,
                }),
                unusualNum: Form.createFormField({
                    ...props,
                    value: props.DetailData.unusualNum,
                }),
                time: Form.createFormField({
                    ...props,
                    value: props.DetailData.time,
                }),
                remarks: Form.createFormField({
                    ...props,
                    value: props.DetailData.remarks,
                }),
            };
        }
    }

})(CheckAbstract);
export default connect()(CheckAbstract);
