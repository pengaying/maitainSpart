import React, { Component } from 'react';
import Dialog from '../Dialog';
import { Button, Input, Table, Form } from 'antd';
import styles from './PublicDialog.less';

import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class OutStorageForm extends Component {
    constructor(props) {
        super();
        this.state = {

        }

    }

    
    render() {
        const { TextArea } = Input;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '10%',
            },
            {
                title: 'PN',
                dataIndex: 'PN', key: 'PN',
                width: '20%',
            },
            {
                title: '名称',
                width: '15%',
                dataIndex: 'name', key: 'name',
            }, {
                title: '型号',
                width: '20%',
                dataIndex: 'type', key: 'type',
            }, {
                title: '数量',
                width: '15%',
                dataIndex: 'Num', key: 'Num',
            }
            , {
                title: 'SN',
                width: '20%',
                dataIndex: 'SN', key: 'SN',
            }
        ];
        let Tabledata = [];
        let data = this.props.sparepartmodal.OutStorageTableData;//获取所有待出库列表数据
        if (data != null && data.length !== 0) {//获取到的SN列表值
            for (let i = 0; i < data.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    PN: data[i].sparepartpn,
                    name: data[i].sparepartname,
                    type: data[i].sparetype,
                    Num: data[i].count,
                    SN: data[i].sn,
                });
            }
        }

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
                title='出库表单'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>

                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>基本信息</div>
                            <div className={styles.fieldContent}>
                                <div style={{ float: 'left', width: '100%' }}>
                                    <div className={styles.contentPN}>
                                        <div className={styles.InputStyle}>
                                            <Form.Item  {...formItemLayout} label='经手人'>
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
                                            <Form.Item  {...formItemLayout} label='领用人'>
                                                {getFieldDecorator('people', {
                                                    initialValue: '',
                                                })(
                                                    <Input style={{ width: '200px' }} />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.TextAreaContent}>
                                    <div className={styles.TextAreaStyle}>
                                        <Form.Item  {...formItemLayoutRemark} label='说明:'>
                                            {getFieldDecorator('explain', {
                                                initialValue: '',
                                            })(
                                                <TextArea rows={7} />
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.table_content} style={{ textAlign: 'center' }}>
                            <span style={{ marginRight: '10px', lineHeight: '30px' }}>出库信息</span>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    pagination={false}
                                    className={styles.mynoiseClass}
                                    scroll={{ y: 107 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>


                        <div style={{ float: 'left', textAlign: 'center', width: '100%', marginTop: '10px' }}>
                            <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                <Button type="primary" onClick={this.Click}>出库</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                <Button type="primary">打印</Button>
                            </div>
                            <div style={{ display: 'inline-block', margin: '0px 0 0 0' }}>
                                <Button type="primary">出库打印</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
}




OutStorageForm = Form.create({

    mapPropsToFields(props) {
      console.log('props=====', props);
    //   if (props.DetailView != null) {
    //     return {
    //       people: Form.createFormField({
    //         ...props,
    //         value: props.DetailView.people,
    //       }),
    //       reason: Form.createFormField({
    //         ...props,
    //         value: props.DetailView.reason,
    //       }),
    //       remarks: Form.createFormField({
    //         ...props,
    //         value: props.DetailView.remarks,
    //       }),
    //     };
    //   }
    }
  
  })(OutStorageForm);
  export default connect()(OutStorageForm);