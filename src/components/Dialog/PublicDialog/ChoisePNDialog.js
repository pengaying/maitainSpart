import React, { Component } from 'react';
import Dialog from '../Dialog';
import { Table, Form, Button, Select } from 'antd';
import styles from './PublicDialog.less';
import { Input } from 'antd';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

class ChoisePNDialog extends Component {
    constructor(props) {
        super();
        this.state = {
            pnsign: null
        }
    }

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
                // span: 8
            },
            wrapperCol: {
                span: 7
            },
        };
        const field = {
            position: 'relative',
            float: 'left',
            border: '1px solid #bdcddc',
            padding: '10px 10px',
            width: '98%',
            margin: '10px'
        }
        const fieldTitle = {
            padding: '0 5px',
            position: 'absolute',
            top: '-12px',
            fontSize: '12px',
            height: '21px',
            background: '#ffffff',
        }
        const fieldContent = {
            width: '100%',
            marginTop: '5px',
            display: 'inline-block'
        }

        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '10%',
            },
            {
                title: '名称',
                width: '18%',
                dataIndex: 'name', key: 'name',
            }, {
                title: 'PN',
                width: '18%',
                dataIndex: 'PN', key: 'PN',
            }, {
                title: '品牌',
                width: '15%',
                dataIndex: 'brand', key: 'brand',
            }, {
                title: '型号',
                width: '14%',
                dataIndex: 'type', key: 'type',
            }, {
                title: '备注',
                width: '18%',
                dataIndex: 'mark', key: 'mark',
            }
        ];
        let FilterPNData = this.props.sparepartmodal.FilterPNData;
        let Tabledata = [];
        if (FilterPNData != null) {
            for (let i = 0; i < FilterPNData.length; i++) {
                Tabledata.push({
                    key: i,
                    name: FilterPNData[i].name,
                    PN: FilterPNData[i].pn,
                    brand: FilterPNData[i].brand,
                    type: FilterPNData[i].model,
                    mark: FilterPNData[i].remarks,
                });
            }
        }

        const Option = Select.Option;
        const rowSelection = {//选择复选框
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                if (selectedRows != null && selectedRows.length !== 0) {
                    this.setState({
                        pnsign: selectedRows[0]
                    })
                }
            },
        };
        return (
            <Dialog
                visible={this.props.visible}
                title='PN选择'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className='popup_s_confirm_box'>
                    <div style={{ width: '700px' }}>
                        <div style={{ float: 'left', width: '100%' }}>
                            {/* 产品型号列表 */}
                            <div style={field}>
                                <div style={fieldTitle}>产品型号列表</div>
                                <div style={fieldContent}>
                                    <Form  className={styles.myBandForm}>
                                        <div className={styles.ChoisePNSelect}>
                                            <div style={{ float: 'right' }}>
                                                <Form.Item  {...formItemLayout} label='品牌'>
                                                    {getFieldDecorator('brand', {
                                                        // initialValue: '10',
                                                    })(
                                                        <Select style={{ width: '150px' }}>
                                                            {/**<Option value='10'>10</Option> */}
                                                        </Select>
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.ChoisePNSelect}>
                                            <div style={{ float: 'right' }}>
                                                <Form.Item  {...formItemLayout} label='名称'>
                                                    {getFieldDecorator('name', {
                                                        initialValue: '',
                                                    })(
                                                        <Input style={{ width: '150px' }} />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.ChoisePNSelect}>
                                            <div style={{ float: 'right' }}>
                                                <Form.Item  {...formItemLayout} label='类别'>
                                                    {getFieldDecorator('category', {
                                                        initialValue: '1',
                                                    })(
                                                        <Select style={{ width: '150px' }}>
                                                            <Option value='1'>专装</Option>
                                                            <Option value='2'>通装</Option>
                                                            <Option value='3'>电源</Option>
                                                            <Option value='4'>伺服</Option>
                                                            <Option value='5'>其他</Option>
                                                        </Select>
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className={styles.ChoisePNSelect}>
                                            <div style={{ float: 'right' }}>
                                                <Form.Item  {...formItemLayout} label='型号'>
                                                    {getFieldDecorator('model', {
                                                        // initialValue: '10',
                                                    })(
                                                        <Select style={{ width: '150px' }}>
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

                        <div style={{ width: '700px', float: 'left' }}>
                            <Table
                                bordered
                                columns={columns}
                                dataSource={Tabledata}
                                className={styles.mynoiseClass}
                                rowSelection={rowSelection}
                                pagination={{ pageSize: 6 }}
                                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                            />
                        </div>

                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type='primary' onClick={this.ClickOk}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }


    ClickFilter = () => {
        // let { brand, category,model, name } = this.state;
        let values = this.props.form.getFieldsValue();
        console.log("values=====", values)
        // if (values.pn != null && values.pn !== undefined && values.pn !== '') {
            this.props.dispatch({
                type: 'sparepartmodal/PNChoiceFilter',
                payload: values
            })
        // }
    }
    ClickOk = () => {
        if (this.state.pnsign != null && this.state.pnsign.length !== 0) {
            this.props.dispatch({
                type: 'sparepartmodal/PNChoiceConfirm',
                payload: this.state.pnsign
            })
        }
    }

}


ChoisePNDialog = Form.create({

    mapPropsToFields(props) {
        // console.log('props=====', props);
        // if (props.WaveData != null || props.WaveData !== undefined) {
        //     if (props.WaveData.length !== 0) {
        //         return {
        //             dopplerShift: Form.createFormField({
        //                 ...props,
        //                 value: props.WaveData.dopplerShift,
        //             }),
        //             frequency: Form.createFormField({
        //                 ...props,
        //                 value: props.WaveData.frequency,
        //             }),
        //         };
        //     }
        // }
    }

})(ChoisePNDialog);
export default connect()(ChoisePNDialog);

