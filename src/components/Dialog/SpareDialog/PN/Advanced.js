
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Form, DatePicker, Select } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

class Advanced extends Component {
    constructor(props) {
        super();
        this.state = {

        }

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
                span: 5
            },
            wrapperCol: {
                span: 19
            },
        };
        return (
            <Dialog
                visible={this.props.visible}
                title='高级搜索'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '300px' }}>

                        <div style={{ float: 'left', width: '100%' }}>
                            {/* 产品型号列表 */}
                            <Form className={styles.myBandForm}>
                                <div className={styles.ChoisePNSelectDiv}>
                                    <div style={{ float: 'right' }}>
                                        <Form.Item  {...formItemLayout} label='备件名称:'>
                                            {getFieldDecorator('brand', {
                                                initialValue: '1',
                                            })(
                                                // <Select style={{ width: '150px' }}>
                                                //     <Option value='1'>所属整机</Option>
                                                //     <Option value='2'>所属子系统</Option>
                                                //     <Option value='3'>所属分机</Option>
                                                // </Select>
                                                <Input autoComplete='off' style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.ChoisePNSelectDiv}>
                                    <div style={{ float: 'right' }}>
                                        <Form.Item  {...formItemLayout} label='备件型号:'>
                                            {getFieldDecorator('name', {
                                                initialValue: '1',
                                            })(
                                                <Input autoComplete='off' style={{ width: '150px' }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className={styles.ChoisePNSelectDiv}>
                                    <div style={{ float: 'right' }}>
                                        <Form.Item  {...formItemLayout} label='备件类别:'>
                                            {getFieldDecorator('category', {
                                                initialValue: '1',
                                            })(
                                                <Select style={{ width: '150px' }}>
                                                    <Option value='1'>单装</Option>
                                                    <Option value='2'>通装</Option>
                                                    <Option value='3'>专装</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button type='primary'>重置</Button>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                        <Button onClick={this.ClickFilter} type='primary'>筛选</Button>
                                    </div>
                                </div>

                            </Form>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    ClickFilter = () => {
        // this.props.dispatch({

        // })
    }
}


Advanced = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
    }

})(Advanced);
export default connect()(Advanced);