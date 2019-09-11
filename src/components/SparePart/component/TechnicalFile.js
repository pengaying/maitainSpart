

import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table, Select, Input, Form } from 'antd';
import ChoisePNDialog from './../../Dialog/PublicDialog/ChoisePNDialog';
import AddTechnicalFile from '../../Dialog/SpareDialog/TechnicalFile/AddTechnicalFile';
import AddEquipent from './../../Dialog/SpareDialog/PN/AddEquipent';
import OpenFile from '../../Dialog/SpareDialog/TechnicalFile/OpenFile';
import Advanced from './../../Dialog/SpareDialog/PN/Advanced';
import { TechnicalFileDeleteCache } from '../../../services/services';

import { connect } from 'dva';
@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class TechnicalFile extends Component {
    constructor() {
        super();
        this.state = {
            PNstate: false,
            CreateState: false,
            OpenState: false,
            AdvancedState: false,
        }
    }

    componentDidMount() {
        this.props.dispatch({//初始化表格数据
            type: 'sparepartmodal/TechnicalFileTableInit',
        })
    }

    render() {
        const Option = Select.Option;
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '6%',
            }, {
                title: '名称',
                width: '22%',
                dataIndex: 'name', key: 'name',
            }, {
                title: '文件大小',
                width: '15%',
                dataIndex: 'filesize', key: 'filesize',
            }, {
                title: '上传日期',
                width: '20%',
                dataIndex: 'uploadtime', key: 'uploadtime',
            }, {
                title: '版本',
                width: '20%',
                dataIndex: 'version', key: 'version',
            }, {
                title: '打开文件',
                dataIndex: 'openfile', key: 'openfile',
                render: (text, record) => (
                    <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.handleClickOpen(record.key)} >打开</span>
                )
            }
        ];

        let Tabledata = [];
        let tabledata = this.props.sparepartmodal.TechnicalFileData;//技术文档 表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < tabledata.length; i++) {
                Tabledata.push({
                    key: tabledata[i].id,
                    name: tabledata[i].name,
                    filesize: tabledata[i].filesize,
                    uploadtime: tabledata[i].time,
                    version: tabledata[i].edition,
                });
            }
        }

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
        const formItemLayouttext = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 18
            },
        };
        return (
            <>
                <div className={styles.CenterContent}>
                    <div className={styles.CenterContentTitle}>
                        技术文档
                    </div>

                    <Form className={styles.myBandForm}>
                        <div className={styles.tableContent_delivery}>
                            <div className={styles.tableStyle}>

                                <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                                    <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button onClick={this.ClickCreate} type="primary" icon="plus">新建</Button>
                                        </div>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button type="primary">导入</Button>
                                        </div>
                                        <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                            <Button type="primary">导出</Button>
                                        </div>
                                    </div>

                                    <div className={styles.PN_Input}>
                                        <div className={styles.contentPN_pnmanagement_input}>
                                            <div style={{ float: 'right' }}>
                                                <FormItem  {...formItemLayout} label='PN:'>
                                                    {getFieldDecorator('pn', {
                                                        // initialValue: "0",
                                                    })(
                                                        <Input
                                                            style={{ width: '200px' }}
                                                            autoComplete="off"
                                                        />
                                                    )}
                                                </FormItem>
                                            </div>
                                            <div style={{ float: 'right', marginTop: '10px' }}>
                                                <Input style={{ width: '200px' }} />
                                            </div>
                                        </div>

                                        <div className={styles.contentPN_pnmanagement_button}>
                                            <div style={{ float: 'left', margin: '0 0 0 10px' }}>
                                                <div style={{ display: 'inline-block', margin: '0 10px 0 0' }}>
                                                    <Button type="primary" onClick={() => this.ClickChoicePN('file')}>选择PN</Button>
                                                </div>
                                                <div style={{ display: 'inline-block' }}>
                                                    <Button type="primary" onClick={this.ClickSearchPN}>搜索</Button>
                                                </div>
                                            </div>

                                            <div style={{ float: 'left', margin: '10px 0 0 10px' }}>
                                                <Button onClick={this.ClickAdvanced} type="primary">高级</Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.bodyCss_PN}>
                                    <Table
                                        bordered
                                        columns={columns}
                                        dataSource={Tabledata}
                                        className={styles.mynoiseClass}
                                        pagination={{ pageSize: 11 }}
                                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                    />
                                </div>

                            </div>
                        </div>
                    </Form>

                </div>

                {/* 选择PN弹窗 */}
                {
                    this.state.PNstate ?
                        <ChoisePNDialog
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseChoisePN}
                            visible={this.state.PNstate}
                        />
                        : null
                }

                {/* 点击新建 */}
                {
                    this.state.CreateState ?
                        <AddTechnicalFile
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseCreate}
                            visible={this.state.CreateState}
                        />
                        : null
                }

                {/* 新建中的添加装备弹窗 */}
                {
                    this.state.EquipState ?
                        <AddEquipent
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseEquip}
                            visible={this.state.EquipState}
                        />
                        : null
                }
                {/* 点击高级弹窗 */}
                {
                    this.state.AdvancedState ?
                        <Advanced
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseAdvanced}
                            visible={this.state.AdvancedState}
                        />
                        : null
                }

                {/* 打开文件 */}
                {
                    this.state.OpenState ?
                        <OpenFile
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.handleCloseOpen}
                            visible={this.state.OpenState}
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
    CloseChoisePN = () => {
        this.setState({
            PNstate: false
        })
    }

    // 点击新建
    ClickCreate = () => {
        this.setState({
            CreateState: true
        })
    }

    CloseCreate = () => {
        this.setState({
            CreateState: false
        });

        TechnicalFileDeleteCache();
    }

    // 点击表格打开
    handleClickOpen = (key) => {
        this.setState({
            OpenState: true
        });
        this.props.dispatch({
            type: 'sparepartmodal/TechnicalFileOpen',
            payload: {
                id: key,
                ip: 'localhost'
            }
        })
    }
    handleCloseOpen = () => {
        this.setState({
            OpenState: false
        })
    }

    ClickSearchPN = () => {
        let pn = this.props.form.getFieldValue('pn');
        console.log('pn=====', pn);
        if (pn !== '' && pn !== undefined && pn != null) {
            this.props.dispatch({
                type: 'sparepartmodal/TechnicalFileSearch',
                payload: pn
            })
        }
    }
    // 点击高级
    ClickAdvanced = () => {
        this.setState({
            AdvancedState: true
        })
    }
    CloseAdvanced = () => {
        this.setState({
            AdvancedState: false
        })
    }

    // 关闭 添加装备弹窗
    CloseEquip = () => {
        // this.props.dispatch({

        // })
    }
}


TechnicalFile = Form.create({

    mapPropsToFields(props) {
        // console.log("props=====", props);
        if (props.choicePNDetail != null && props.choicePNDetail !== undefined) {
            return {
                pn: Form.createFormField({
                    ...props,
                    value: props.pnsign != null && props.pnsign === 'file' ? props.choicePNDetail.PN : null,
                }),
            };
        }
    }

})(TechnicalFile);
export default connect()(TechnicalFile);
