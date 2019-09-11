import React, { Component } from 'react';
import Dialog from '../Dialog';
import { Checkbox, Input, Form } from 'antd';
import styles from './SystemDialog.less'
import { connect } from 'dva';

class ConditionSearch extends Component {
    render() {
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
                title="条件检索"
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '300px' }}>

                        <div className={styles.table_content}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout}>
                                    {getFieldDecorator('taskname', {
                                        initialValue: '',
                                    })(
                                        <Input disabled autoComplete='off' style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                            <div className={styles.InputStyle}>
                                <Form.Item>
                                    {getFieldDecorator('Ctaskname', { initialValue: false, })(
                                        <Checkbox checked={this.props.form.getFieldValue("checkedStart")}>
                                            任&ensp;务&ensp;名:
                                        </Checkbox>
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.table_content}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout}>
                                    {getFieldDecorator('username', {
                                        initialValue: '',
                                    })(
                                        <Input disabled autoComplete='off' style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                            <div className={styles.InputStyle}>
                                <Form.Item>
                                    {getFieldDecorator('Cusername', { initialValue: false, })(
                                        <Checkbox checked={this.props.form.getFieldValue("checkedStart")}>
                                            用&ensp;户&ensp;名:
                                        </Checkbox>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout}>
                                    {getFieldDecorator('signalType', {
                                        initialValue: '',
                                    })(
                                        <Input disabled autoComplete='off' style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                            <div className={styles.InputStyle}>
                                <Form.Item>
                                    {getFieldDecorator('CsignalType', { initialValue: false, })(
                                        <Checkbox checked={this.props.form.getFieldValue("checkedStart")}>
                                            信息类别:
                                        </Checkbox>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout}>
                                    {getFieldDecorator('sendStation', {
                                        initialValue: '',
                                    })(
                                        <Input disabled autoComplete='off' style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                            <div className={styles.InputStyle}>
                                <Form.Item>
                                    {getFieldDecorator('CsendStation', { initialValue: false, })(
                                        <Checkbox checked={this.props.form.getFieldValue("CsendStation")}>
                                            发&ensp;件&ensp;站:
                                        </Checkbox>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout}>
                                    {getFieldDecorator('people', {
                                        initialValue: '',
                                    })(
                                        <Input disabled autoComplete='off' style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                            <div className={styles.InputStyle}>
                                <Form.Item>
                                    {getFieldDecorator('checkedStart', { initialValue: false, })(
                                        <Checkbox checked={this.props.form.getFieldValue("checkedStart")}>
                                            日期时间:
                                        </Checkbox>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.InputStyle}>
                                <Form.Item  {...formItemLayout}>
                                    {getFieldDecorator('people', {
                                        initialValue: '',
                                    })(
                                        <Input disabled autoComplete='off' style={{ width: '170px' }} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>


                    </div>
                </div>
            </Dialog>
        )
    }
}



ConditionSearch = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.DetailData != null && props.DetailData !== undefined) {
        //     return {
        //         people: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.people,
        //         }),
        //         invRatio: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.invRatio,
        //         }),
        //         unusualRatio: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.unusualRatio,
        //         }),
        //         usualNum: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.usualNum,
        //         }),
        //         unusualNum: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.unusualNum,
        //         }),
        //         time: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.time,
        //         }),
        //         remarks: Form.createFormField({
        //             ...props,
        //             value: props.DetailData.remarks,
        //         }),
        //     };
        // }
    }

})(ConditionSearch);
export default connect()(ConditionSearch);