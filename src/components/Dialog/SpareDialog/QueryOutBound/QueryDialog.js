import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Select, Form } from 'antd';
import styles from './Query.less';
import ChoisePNDialog from '../../PublicDialog/ChoisePNDialog';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class QueryDialog extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }
    render() {
        const Option = Select.Option;
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
        return (
            <Dialog
                visible={this.props.visible}
                title='备件查询'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '600px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='PN:'>
                                    {getFieldDecorator('pn', {
                                        // initialValue: "0",
                                    })(
                                        <Input
                                            style={{ width: '150px' }}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 10px' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>选择PN</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 0 0 0' }}>
                                <Button type="primary" >检测</Button>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='备件名称:'>
                                    {getFieldDecorator('name', {
                                        // initialValue: "0",
                                    })(
                                        <Input
                                            style={{ width: '150px' }}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='备件SN:'>
                                    {getFieldDecorator('sn', {
                                        // initialValue: "0",
                                    })(
                                        <Input
                                            style={{ width: '150px' }}
                                            autoComplete="off"
                                        />
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='备件状态:'>
                                    {getFieldDecorator('state', {
                                        initialValue: "1",
                                    })(
                                        <Select style={{ width: '150px' }}>
                                            <Option value="1">正常</Option>
                                            <Option value="2">故障</Option>
                                            <Option value="3">报废</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                        </div>
                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <FormItem  {...formItemLayout} label='备件类别:'>
                                    {getFieldDecorator('category', {
                                        initialValue: "1",
                                    })(
                                        <Select style={{ width: '150px' }}>
                                            <Option value="1">正常</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        <div className={styles.contentDiv}>
                            <div className={styles.EquipStyleSelect}>
                                <div className={styles.formSelect}>
                                    <FormItem  {...formItemLayout} label='所属装备:'>
                                        {getFieldDecorator('equip', {
                                            initialValue: "1",
                                        })(
                                            <Select style={{ width: '150px' }}>
                                                <Option value="1">整机</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                                <div className={styles.formSelect}>
                                    <FormItem  {...formItemLayout}>
                                        {getFieldDecorator('system1', {
                                            initialValue: "1",
                                        })(
                                            <Select style={{ width: '150px' }}>
                                                <Option value="1">子系统</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                                <div className={styles.formSelect}>
                                    <FormItem  {...formItemLayout}>
                                        {getFieldDecorator('system2', {
                                            initialValue: "1",
                                        })(
                                            <Select style={{ width: '150px' }}>
                                                <Option value="1">分机</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contentDiv} style={{ width: '73.5%' }}>
                            <div className={styles.EquipStyleSelect}>
                                <div className={styles.formSelect}>
                                    <FormItem  {...formItemLayout} label='存放位置:'>
                                        {getFieldDecorator('location1', {
                                            initialValue: "1",
                                        })(
                                            <Select style={{ width: '150px' }}>
                                                <Option value="1">柜号</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                                <div className={styles.formSelect}>
                                    <FormItem  {...formItemLayout}>
                                        {getFieldDecorator('location2', {
                                            initialValue: "1",
                                        })(
                                            <Select style={{ width: '150px' }}>
                                                <Option value="1">格号</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                        </div>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary">重置</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '10px 0 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoose}>筛选</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    // 选择PN
    ClickChoicePN = () => {
        console.log("aaaaaaaaa")
        this.props.dispatch({
            type: 'sparepartmodal/saveQueryPNChoice',
            payload: 'query'
        });
    }

    // 筛选出库中的关键信息
    ClickChoose = () => {
        let values = this.props.form.getFieldsValue();
        console.log('values=====', values);
        let pnsign = values.pn != null && values.pn !== undefined && values.pn !== '' ? values.pn : null;
        let snsign = values.sn != null && values.sn !== undefined && values.sn !== '' ? values.sn : null;
        if (pnsign != null && snsign != null) {
            console.log('values=====', values);
            this.props.dispatch({
                type: 'sparepartmodal/ChoosePNQuery',
                payload: values
            })
        }

    }

}



QueryDialog = Form.create({

    mapPropsToFields(props) {
        console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'query' ? props.choicePNDetail.PN : null,
                }),
            };
        }
    }

})(QueryDialog);
export default connect()(QueryDialog);