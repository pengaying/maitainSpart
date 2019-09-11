import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Select, DatePicker, Form } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ dataManagement }) => ({ dataManagement }))
class ArtificialSummary extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

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
                title='拟制总结'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>
                        <Form className={styles.myBandForm}>

                            {/* 基本信息 */}
                            <div style={{ float: 'left', margin: '10px 0 0 0' }}>
                                <div className={styles.field}>
                                    <div className={styles.fieldTitle}>基本信息</div>
                                    <div className={styles.fieldContent}>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='总作总结编号:'>
                                                    {getFieldDecorator('sumId', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '200px' }} />
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
                                                        <Input style={{ width: '200px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='拟制站名称:'>
                                                    {getFieldDecorator('DraftStatName', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '200px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='拟制站编号:'>
                                                    {getFieldDecorator('DraftStatNum', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '200px' }} />
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
                                                        <Input style={{ width: '200px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.Datepicker} style={{ width: '20%' }}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='日期选择:'>
                                                    {getFieldDecorator('state', {
                                                        initialValue: '1',
                                                    })(
                                                        <Select style={{ width: '60px' }}>
                                                            <Option value='1'>月</Option>
                                                            <Option value='2'>季</Option>
                                                            <Option value='3'>年</Option>
                                                        </Select>
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.Datepicker} style={{ width: '30%' }}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout}>
                                                    {getFieldDecorator('time', {
                                                        // initialValue: '',
                                                    })(
                                                        <DatePicker
                                                            format="YYYY-MM-DD HH:mm:ss"
                                                            showTime
                                                            style={{ width: '160px' }}
                                                        // onChange={this.onChange} 
                                                        />
                                                    )}
                                                </Form.Item>
                                            </div>

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
                                                        <Input style={{ width: '200px' }} />
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
                                                        <Input style={{ width: '200px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='完成百分比:'>
                                                    {getFieldDecorator('sumCount1', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '200px' }} />
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
                                                        <Input style={{ width: '200px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='成功百分比:'>
                                                    {getFieldDecorator('sucessCount1', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '200px' }} />
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
                                                        <Input style={{ width: '200px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <Form.Item  {...formItemLayout} label='失败百分比:'>
                                                    {getFieldDecorator('failCount1', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '200px' }} />
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
                                            {getFieldDecorator('remarks', {
                                                initialValue: '',
                                            })(
                                                <TextArea rows={5} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>

                        </Form>
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickSave}>存为草稿</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickReport}>上报</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    ClickSave = () => {
        // let values = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, fieldsValue) => {
            let values = {
                ...fieldsValue,
                'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
            }
            console.log('values=====', values);
            this.props.dispatch({
                type: 'dataManagement/ArtificialSummarySave',
                payload: values
            })
        })
    }


    ClickReport = () => {
        // let values = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, fieldsValue) => {
            let values = {
                ...fieldsValue,
                'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
            }
            console.log('values=====', values);
            this.props.dispatch({
                type: 'dataManagement/ArtificialSummaryReport',
                payload: values
            })
        })
    }
}


ArtificialSummary = Form.create({

    mapPropsToFields(props) {
        console.log('props=====', props);
        // if (props.DetailView != null) {
        // return {
        //     actionEndTime: Form.createFormField({
        //         ...props,
        //         value: moment(data.actionEndTime, 'YYYY/MM/DD'),
        //     }),//datepicker 插件赋值必须转换格式
        // };
        // }
    }

})(ArtificialSummary);
export default connect()(ArtificialSummary);