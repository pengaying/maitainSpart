import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form, DatePicker } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';
import moment from 'moment';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class WarningDetail extends Component {
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
        let timedata = this.props.DetailViewData != null ? this.props.DetailViewData : null;
        return (
            <Dialog
                visible={this.props.visible}
                title='预警列表详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ height: '200px', width: '700px' }}>
                        <Form className={styles.myBandForm}>

                            <div className={styles.ButtonDIv}>
                                <div className={styles.TextAreaStyle} style={{ margin: '0' }}>
                                    <Button type="primary" onClick={this.ClickModify}>
                                        {this.state.modifyState === false ? '修改参数' : '正在修改'}
                                    </Button>
                                </div>
                            </div>

                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='预警触发日期:'>
                                        {getFieldDecorator('triggerTime', {
                                            initialValue: timedata != null && timedata.triggerTime != null ? moment(timedata.triggerTime, 'YYYY-MM-DD HH:mm:ss') : null,
                                        })(
                                            <DatePicker
                                                disabled={this.state.modifyState ? false : true}
                                                format="YYYY-MM-DD HH:mm:ss"
                                                showTime
                                                style={{ minWidth: '200px' }}
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='触发人:'>
                                        {getFieldDecorator('people', {
                                            initialValue: '',
                                        })(
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
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
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='型号:'>
                                        {getFieldDecorator('model', {
                                            initialValue: '',
                                        })(
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='状态:'>
                                        {getFieldDecorator('state', {
                                            initialValue: '',
                                        })(
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='规格:'>
                                        {getFieldDecorator('category', {
                                            initialValue: '',
                                        })(
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='阈值:'>
                                        {getFieldDecorator('VPT', {
                                            initialValue: '',
                                        })(
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='库存量:'>
                                        {getFieldDecorator('stock', {
                                            initialValue: '',
                                        })(
                                            <Input disabled={this.state.modifyState ? false : true} style={{ width: '200px' }} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.contentPN}>
                                <div className={styles.InputStyle}>
                                    <Form.Item  {...formItemLayout} label='接收时间:'>
                                        {getFieldDecorator('receiveTime', {
                                            initialValue: timedata != null && timedata.receiveTime != null ? moment(timedata.receiveTime, 'YYYY-MM-DD HH:mm:ss') : null,
                                        })(
                                            <DatePicker
                                                disabled={this.state.modifyState ? false : true}
                                                format="YYYY-MM-DD HH:mm:ss"
                                                showTime
                                                style={{ minWidth: '200px' }}
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles.TextAreaContent}>
                                <div className={styles.TextAreaStyle}>
                                    <Form.Item  {...formItemLayoutRemark} label='备注:'>
                                        {getFieldDecorator('explain', {
                                            initialValue: '',
                                        })(
                                            <TextArea disabled={this.state.modifyState ? false : true} rows={7} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                        </Form>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary"  onClick={this.ClickAddApply}>备件补充</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" disabled={this.state.modifyState ? false : true} onClick={this.ClickConfirm}>确认</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>预警关闭</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    // 修改参数
    ClickModify = () => {
        this.setState({
            modifyState: !this.state.modifyState
        });
    }
    // 备件补充
    ClickAddApply = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ShowAddApply',
        })
    }
    // 确认
    ClickConfirm = () => {
        this.props.form.validateFields((err, fieldsValue) => {
            // let applyTime = this.props.form.getFieldValue('applyTime');
            // let values = this.props.form.getFieldsValue();
            // let id = this.props.DetailViewData != null ? this.props.DetailViewData.id : null;
            // if (id != null) {//判断id是否为空
            //     values.id = id;
            // }
            // if (applyTime !== '' && applyTime !== undefined && applyTime !== null) {
            //     let values = {
            //         ...fieldsValue,
            //         'applyTime': fieldsValue['applyTime'].format('YYYY-MM-DD HH:mm:ss'),
            //     }
            //     console.log('values==========', values);
            //     this.props.dispatch({
            //         type: 'dataManagement/MaintainApplyModify',
            //         payload: values
            //     })
            // }
            // else {
            //     delete values.applyTime;
            //     console.log('values==========', values);
            //     this.props.dispatch({
            //         type: 'dataManagement/MaintainApplyModify',
            //         payload: values
            //     })
            // }
        })
    }
}


WarningDetail = Form.create({

    mapPropsToFields(props) {
        console.log('props=====', props);
        if (props.DetailViewData != null) {
            return {
                // triggerTime: Form.createFormField({
                //     ...props,
                //     value: props.DetailViewData.triggerTime,
                // }),
                people: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.people,
                }),
                name: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.name,
                }),
                model: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.model,
                }),
                state: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.state,
                }),
                category: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.spec,
                }),
                VPT: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.VPT,
                }),
                stock: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.stock,
                }),
                explain: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.explain,
                }),
            };
        }
    }

})(WarningDetail);
export default connect()(WarningDetail);