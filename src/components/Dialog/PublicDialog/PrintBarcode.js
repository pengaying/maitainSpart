import React, { Component } from 'react';
import Dialog from '../../Dialog/Dialog';
import { Button, Input, Form } from 'antd';
import styles from './PublicDialog.less';
import Barcode from './../../Dialog/PublicDialog/Barcode';
import { connect } from 'dva';

class PrintBarcode extends Component {
    constructor(props) {
        super();
        this.state = {
            pnname: '',
            pn: '',
            sn: '',
            BarcodeValue: null,
        }
    }

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
                title='打印条码'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>
                        <div style={{ float: 'left', width: '50%' }}>
                            {/* 标签详情 */}
                            <div className={styles.labelStyle}>标签详情</div>

                            <div className={styles.labelStyleBorder}>
                                <div className={styles.AutoCreatInput}>
                                    <div style={{ float: 'right' }}>
                                        <span style={{ marginRight: '10px' }}>备件名称:</span>
                                        <Input value={this.state.pnname} autoComplete="off" name="pnname"
                                            onChange={this.changePNInput} style={{ width: '200px' }} />
                                    </div>
                                </div>

                                <div className={styles.AutoCreatInput} style={{ margin: '10px 0' }}>
                                    <div style={{ float: 'right' }}>
                                        <FormItem  {...formItemLayout} label='备件PN:'>
                                            {getFieldDecorator('pn', {
                                                rules: [{
                                                    message: '',
                                                    pattern: /^\d{1,10}$/     //校验输入规则(只能输入整数）
                                                }],
                                                getValueFromEvent: (event) => {
                                                    return event.target.value.replace(/\D/g, '')
                                                },
                                                // initialValue: "2",
                                            })(
                                                <Input
                                                    style={{ width: '200px' }}
                                                    autoComplete="off" />
                                            )}
                                        </FormItem>

                                    </div>
                                </div>

                                <div className={styles.AutoCreatInput}>
                                    <div style={{ float: 'right' }}>
                                        <FormItem  {...formItemLayout} label='备件SN:'>
                                            {getFieldDecorator('sn', {
                                                // rules: [{
                                                //     message: '',
                                                //     // pattern: /^[0-9]$/     //校验输入规则(只能输入整数）
                                                // }],
                                                getValueFromEvent: (event) => {
                                                    return event.target.value.replace(/\D/g, '')
                                                },
                                                // initialValue: "2",
                                            })(
                                                <Input
                                                    style={{ width: '200px' }}
                                                    autoComplete="off" />
                                            )}
                                        </FormItem>

                                    </div>
                                </div>

                                <div className={styles.ButtonStyle} >
                                    <Button onClick={this.CilickPreView} type="primary" htmlType="submit">预览</Button>
                                </div>

                            </div>
                        </div>

                        <div style={{ float: 'left', width: '49%', marginLeft: '1%' }}>
                            {/* 标签详情 */}
                            <div className={styles.labelStyle}>标签预览</div>

                            <div className={styles.labelStyleBorder}>
                                <div style={{ margin: '25px 0', textAlign: 'center' }}>
                                    <Barcode value={this.state.BarcodeValue} />
                                </div>
                            </div>

                        </div>

                        {/* 打印 */}
                        <div className={styles.ButtonStyle} >
                            <Button type="primary" htmlType="submit">打印</Button>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    CilickPreView = () => {
        let sn = this.props.form.getFieldValue('sn');
        this.setState({
            BarcodeValue: sn
        })
    }

    // 打印条码 input值
    changePNInput = (e) => {
        switch (e.target.name) {
            case "pnname":
                this.setState({
                    pnname: e.target.value
                });
                break;
            case "pn":
                this.setState({
                    pn: e.target.value
                })
                break;
            case "sn":
                this.setState({
                    sn: e.target.value
                })
                break;
            default:
                break;
        }
    }
}


PrintBarcode = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        // if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
        //     return {
        //         pn: Form.createFormField({
        //             ...props,
        //             value: props.pnsign != null && props.pnsign === 'pnmanagement' ? props.choicePNDetail.PN : null,
        //         }),
        //     };
        // }
    }

})(PrintBarcode);
export default connect()(PrintBarcode);