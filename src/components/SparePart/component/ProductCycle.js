
import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Input, Select, Form } from 'antd';
import ChoisePNDialog from './../../Dialog/PublicDialog/ChoisePNDialog';

import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class ProductCycle extends Component {
    constructor(propps) {
        super(propps);
        this.state = {
            PNstate: false,
            period: 1,
            Num: '10',

        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'sparepartmodal/ProductCycleInitTable'
        })
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
        }
        const fieldContent = {
            float: 'left',
            width: '100%',
            marginTop: '5px',
            display: 'inline-block'
        }

        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '周期段时间',
                width: '20%',
                dataIndex: 'periodtime', key: 'periodtime',
            }, {
                title: 'PN',
                width: '20%',
                dataIndex: 'PN', key: 'PN',
            }, {
                title: '名称',
                width: '20%',
                dataIndex: 'name', key: 'name',
            }, {
                title: '型号',
                width: '17%',
                dataIndex: 'type', key: 'type',
            }, {
                title: '消耗总量',
                dataIndex: 'consumption', key: 'consumption',
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.ProductCycleData;//产品表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: i + 1,
                    periodtime: tabledata[i].cycle,
                    PN: tabledata[i].spPn,
                    name: tabledata[i].spName,
                    type: tabledata[i].spModel,
                    consumption: tabledata[i].spSpecs,
                });
            }
        }

        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        产品-最多
                    </div>

                    <Form className={styles.myBandForm}>
                        <div className={styles.layoutContent}>

                            <div style={field}>
                                <div style={fieldTitle}>筛选列表</div>
                                <div style={fieldContent}>
                                
                                    <div style={{ float: 'left', width: '100%' }}>

                                        <div className={styles.WarningrySelect_PC}>

                                            <div style={{ float: 'left', width: '50%' }}>
                                                <div style={{ float: 'right' }}>
                                                    <FormItem  {...formItemLayout} label='PN号:'>
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

                                            <div style={{ float: 'left', width: '40%', textAlign: 'left' }}>
                                                <div style={{ display: 'inline-block', margin: '0 10px 0 10px' }}>
                                                    <Button type="primary" onClick={() => this.ClickChoicePN('productcycle')}>选择PN</Button>
                                                </div>
                                                <div style={{ display: 'inline-block' }}>
                                                    <Button type="primary" >检测</Button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className={styles.pruduct_Select}>
                                            <span style={{ marginRight: '10px' }}>周期段:</span>
                                            <Select onChange={this.ChangePeriod} value={this.state.period} style={{ width: '50%' }}>
                                                <Option value={1}>月</Option>
                                                <Option value={2}>季</Option>
                                                <Option value={3}>年</Option>
                                            </Select>
                                        </div>
                                        <div className={styles.pruduct_Select}>
                                            <span style={{ marginRight: '10px' }}>显示数量:</span>
                                            <Select onChange={this.ChangeNum} value={this.state.Num} style={{ width: '50%' }}>
                                                <Option value='10'>10</Option>
                                                {/** 
                                                        <Option value='50'>50</Option>
                                                        <Option value='100'>100</Option>
                                                    */}
                                            </Select>
                                        </div>
                                    </div>

                                    <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button type="primary">重置</Button>
                                        </div>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button onClick={this.clickChooice} type="primary">筛选</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Form>

                    <div className={styles.tableContent_delivery}>
                        <div className={styles.tableStyle}>
                            <div style={{ marginRight: '10px', lineHeight: '30px', textAlign: 'center' }}>
                                <span>筛选查询结果</span>
                            </div>

                            <div className={styles.bodyCss_query}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 9 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>

                            <div className={styles.period_Button}>
                                <div style={{ display: 'inline-block', margin: '10px 0 0 0px' }}>
                                    <Button type="primary">打印</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 选择PN弹窗 */}
                {
                    this.state.PNstate ?
                        <ChoisePNDialog
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.closeChoisePN}
                            visible={this.state.PNstate}
                        />
                        : null
                }

            </>
        )
    }

    // 改变弹窗层级事件控制对话框层级
    changeIndex = (e) => {
        // // let temp = this.state.zIndex;
        // let temp = this.props.CacheData.zIndex;
        // for(let i = 0; i < temp.length; i++){
        //     temp[i] = 1010;
        // }
        // temp[e] = 1020;
        // this.props.dispatch({
        //     type:'CacheData/changeZindex',
        //     payload:temp
        // });
    };
    // 选择PN
    ClickChoicePN = (key) => {
        this.setState({
            PNstate: true
        });
        this.props.dispatch({
            type: 'sparepartmodal/savePNChoicesign',
            payload: key
        })
    }
    closeChoisePN = () => {
        this.setState({
            PNstate: false
        });
        // 清除选择PN中的详情中的表格数据
        this.props.dispatch({
            type: 'sparepartmodal/ClosePNChoiceConfirm'
        })
    }


    // 周期下拉选择
    ChangePeriod = (value) => {
        this.setState({
            period: value
        })
    }
    // 数量下拉选择
    ChangeNum = (value) => {
        this.setState({
            Num: value
        })
    }

    //筛选结果
    clickChooice = () => {
        let { period, Num } = this.state;
        let obj = {
            'cycle': this.state.period,
            'pn': this.props.form.getFieldValue('pn')
        }
        // this.props.dispatch({
        //     type: 'sparepartmodal/Chooic eApplyResult',
        //     payload: obj
        // })
    }

}

ProductCycle = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'productcycle' ? props.choicePNDetail.PN : null,
                }),
            };
        }
    }

})(ProductCycle);
export default connect()(ProductCycle);