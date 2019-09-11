
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Select, Form } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

class SpareTaskSummary extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {

    //     }

    // }
    render() {
        const { TextArea } = Input;
        const Option = Select.Option;

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
                // span: 6
            },
            wrapperCol: {
                span: 24
            },
        };
        return (
            <Dialog
                visible={this.props.visible}
                title='备件任务总结'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '600px' }}>
                        <Form className={styles.myBandForm}>

                            {/* 基本信息 */}
                            <div className={styles.field}>
                                <div className={styles.fieldTitle}>基本信息</div>
                                <div className={styles.fieldContent}>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='工作总结编号:'>
                                                {getFieldDecorator('sumId', {
                                                    initialValue: '',
                                                })(
                                                    <Input style={{ width: '150px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='拟制人:'>
                                                {getFieldDecorator('people', {
                                                    initialValue: '',
                                                })(
                                                    <Input style={{ width: '150px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='上报站编号:'>
                                                {getFieldDecorator('reportId', {
                                                    initialValue: '',
                                                })(
                                                    <Input style={{ width: '150px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='周期段:'>
                                                {getFieldDecorator('time', {
                                                    initialValue: '1',
                                                })(
                                                    // <Input style={{ width: '150px' }} />
                                                    <Select style={{ width: '150px' }}>
                                                        <Option value='1'>月</Option>
                                                        <Option value='2'>季</Option>
                                                        <Option value='3'>年</Option>
                                                    </Select>
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* 拟制信息 */}
                            <div style={{ float: 'left', margin: '10px 0 0 0' }}>
                                <div className={styles.field}>
                                    <div className={styles.fieldTitle}>拟制信息</div>
                                    <div className={styles.fieldContent}>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='维修任务下达次数:'>
                                                    {getFieldDecorator('num', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='完成数:'>
                                                    {getFieldDecorator('sumCount', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='完成百分比:'>
                                                    {getFieldDecorator('sumRatio', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='成功数:'>
                                                    {getFieldDecorator('sucessCount', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='成功百分比:'>
                                                    {getFieldDecorator('sucessRatio', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='失败数:'>
                                                    {getFieldDecorator('failCount', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='失败百分比:'>
                                                    {getFieldDecorator('failRatio', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 备注 */}
                            <div style={{ float: 'left', width: '100%', margin: '10px 0 0 0' }}>
                                <div className={styles.field}>
                                    <div className={styles.fieldTitle}>备注</div>
                                    <div className={styles.fieldContent}>
                                        <Form.Item  {...formItemLayoutRemark}>
                                            {getFieldDecorator('remark', {
                                                initialValue: '',
                                            })(
                                                <TextArea rows={5} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>


                        </Form>

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



SpareTaskSummary = Form.create({

    mapPropsToFields(props) {
        // console.log('props=====', props);
        if (props.DetailViewData != null) {
            return {
                sumId: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.sumId,
                }),
                people: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.people,
                }),
                reportId: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.reportId,
                }),
                time: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.time,
                }),

                num: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.num,
                }),
                sumCount: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.sumCount,
                }),
                sumRatio: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.sumRatio,
                }),
                sucessCount: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.sucessCount,
                }),
                sucessRatio: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.sucessRatio,
                }),
                failCount: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.failCount,
                }),
                failRatio: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.failRatio,
                }),
                remark: Form.createFormField({
                    ...props,
                    value: props.DetailViewData.remark,
                }),
            };
        }
    }

})(SpareTaskSummary);
export default connect()(SpareTaskSummary);