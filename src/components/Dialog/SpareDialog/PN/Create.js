import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Select, Table } from 'antd';
import styles from '../SpareDialog.less';
// import axios from 'axios';
import { connect } from 'dva';
@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class Create extends Component {
    constructor(props) {
        super();
        this.state = {
            pn: '',// pn
            name: '',// 名称
            brand: '',// 品牌
            model: '',// 型号
            level: '',// 级别
            category: '',// 类别
            remarks: '',//备注
            threshold: '',//阈值
        }

    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        const { TextArea } = Input;
        const Option = Select.Option;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '所属分机名称',
                dataIndex: 'Extensionname', key: 'Extensionname',
                width: '19%',
            },
            {
                title: '所属分机型号',
                width: '13%',
                dataIndex: 'Extensiontype', key: 'Extensiontype',
            }, {
                title: '所属子系统名称',
                width: '19%',
                dataIndex: 'Subsystemname', key: 'Subsystemname',
            }, {
                title: '所属子系统型号',
                width: '13%',
                dataIndex: 'Subsystemmodel', key: 'Subsystemmodel',
            }, {
                title: '所属整机名称',
                width: '18%',
                dataIndex: 'Machinename', key: 'Machinename',
            }, {
                title: '所属整机型号',
                dataIndex: 'Machinemodel', key: 'Machinemodel',
            }
        ];

        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            Tabledata.push({
                key: i + 1,
                Extensionname: '信号处理分机',
                Extensiontype: 'S816-1',
                Subsystemname: '信号处理分系统',
                Subsystemmodel: 'S86-6',
                Machinemodel: 'S86',
                Machinename: '信号处理',
            });
        }

        return (
            <Dialog
                visible={this.props.visible}
                title='新建'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '600px' }}>

                        <div className={styles.field}>
                            <div className={styles.fieldTitle}>基本信息</div>
                            <div className={styles.fieldContent}>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>备件名称:</span>
                                        <Input value={this.state.name} autoComplete="off" name="name" onChange={this.changePNInput} style={{ width: '150px' }} />
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>备件PN:</span>
                                        <Input value={this.state.pn} autoComplete="off" name="pn" onChange={this.changePNInput} style={{ width: '150px' }} />
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>备件品牌:</span>
                                        <Input value={this.state.brand} autoComplete="off" name="brand" onChange={this.changePNInput} style={{ width: '150px' }} />
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>备件型号:</span>
                                        <Input value={this.state.model} autoComplete="off" name="model" onChange={this.changePNInput} style={{ width: '150px' }} />
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>备件级别:</span>
                                        <Select defaultValue='1' onChange={this.ChangeLevel} style={{ width: '150px' }}>
                                            <Option value='1'>系统</Option>
                                            <Option value='2'>分系统</Option>
                                            <Option value='3'>分机</Option>
                                            <Option value='4'>模块</Option>
                                            <Option value='5'>零件</Option>
                                        </Select>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>备件类别:</span>
                                        <Select defaultValue='1' onChange={this.ChangeModal} style={{ width: '150px' }}>
                                            <Option value='1'>专装</Option>
                                            <Option value='2'>通装</Option>
                                            <Option value='3'>电源</Option>
                                            <Option value='4'>伺服</Option>
                                            <Option value='5'>其他</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className={styles.contentPN}>
                                    <div style={{ float: 'left', width: '71%' }}>
                                        <div className={styles.InputStyle}>
                                            <span style={{ marginRight: '10px' }}>预警开关:</span>
                                            <Button type="primary" htmlType="submit">使能</Button>
                                        </div>
                                    </div>
                                    <div style={{ float: 'left', width: '71%', margin: '10px 0 0 0' }}>
                                        <div className={styles.InputStyle}>
                                            <span style={{ marginRight: '10px' }}>所属装备:</span>
                                            <Button type="primary" htmlType="submit">添加</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.contentPN}>
                                    <div className={styles.InputStyle}>
                                        <span style={{ marginRight: '10px' }}>预警数量:</span>
                                        <Input value={this.state.threshold} autoComplete="off" name="threshold" onChange={this.changePNInput} style={{ width: '150px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea_note_Content}>
                            <span style={{ marginBottom: '10px', lineHeight: '30px', float: 'left',}}>
                                <Button onClick={this.ClickAddEquip} type="primary" icon="plus">添加所属装备弹窗</Button>
                            </span>
                            {/* <span style={{ marginRight: '10px', lineHeight: '30px' }}>所属装备列表:</span> */}
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

                        <div className={styles.TextAreaContent}>
                            <div className={styles.TextAreaStyle}>
                                <span style={{ marginRight: '10px', lineHeight: '114px' }}>备注:</span>
                                <TextArea
                                    value={this.state.remarks} autoComplete="off" name="remarks" onChange={this.changePNInput}
                                    rows={7} style={{ width: '79%' }} />
                            </div>
                        </div>

                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOK}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    //新建PN方案
    changePNInput = (e) => {
        switch (e.target.name) {
            case "name":
                this.setState({
                    name: e.target.value
                });
                break;
            case "pn":
                this.setState({
                    pn: e.target.value
                })
                break;
            case "brand":
                this.setState({
                    brand: e.target.value
                })
                break;
            case "model":
                this.setState({
                    model: e.target.value
                })
                break;
            case "remarks":
                this.setState({
                    remarks: e.target.value
                })
                break;
            case "threshold":
                this.setState({
                    threshold: e.target.value
                })
                break;
            default:
                break;
        }
    }
    //选择备件级别
    ChangeLevel = (value) => {
        this.setState({
            level: value
        })
    }
    //选择备件类别
    ChangeModal = (value) => {
        this.setState({
            category: value
        })
    }
    // 点击自动生成
    ClickAddEquip = () => {
        this.props.dispatch({
            type: 'sparepartmodal/ShowAddEquip',
        })
    }
    // 确认新增
    ClickOK = () => {
        let { brand, category, level, model, name, pn, remarks, threshold } = this.state;
        let data = {
            "brand": brand,
            "category": category,
            "level": level,
            "model": model,
            "name": name,
            "pn": pn,
            "remarks": remarks,
            "threshold": threshold
        }

        this.props.dispatch({
            type: 'sparepartmodal/AddPnManagementTable',
            payload: data
        })
        // axios({
        //     method: 'post',
        //     url: "http://192.168.1.1:1003/papi/insert",
        //     data: {
        //         "brand": brand,
        //         "category": category,
        //         "level": level,
        //         "model":model ,
        //         "name": name,
        //         "pn": pn,
        //         "remarks": remarks,
        //         "threshold": threshold
        //       }
        // }).then((res) => {
        //     console.log(res)
        //     //从后端数据库获取数据显示在表格
        //     // if (res.data.msg === "2") {
        //     //     this.props.dispatch({
        //     //         type: 'CacheData/JamStyleShowErrorDialog'
        //     //     });
        //     // }
        //     // else if (res.data.msg === "1") {
        //     //     this.props.dispatch({
        //     //         type: 'statecheck/JamStyleShowData',
        //     //         payload: res.data.iStyleSchemes
        //     //     });
        //     // }
        // }).catch(error => console.log('error is', error));
    }
}


