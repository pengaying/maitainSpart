import React, { Component } from 'react';
import Dialog from '../Dialog';
import { Button, Tree, Icon, Table, Dropdown, Menu } from 'antd';
import styles from './SystemDialog.less'
import { connect } from 'dva';

@connect(({ windowModal }) => ({ windowModal }))
export default class DataBaseDialog extends Component {
    constructor() {
        super();
        this.state = {
            receiveBox: false,  //是否展开侧边 收件箱 属性选择器  true 展开
            sendBox: false,  //是否展开侧边 发件箱 属性选择器  true 展开
            spareDatabase: false,//是否展开 备品数据库 侧边属性选择器  true 展开
            equipDatabase: false,//是否展开侧边 装备数据库 属性选择器  true 展开
            selfCheckDatabase: false,//是否展开侧边 自检数据库 属性选择器  true 展开
        }
    }

    // componentDidMount

    onSelect = (selectedKeys, info) => {
        // console.log('selected', selectedKeys, info);
        // console.log('selected', info);
        console.log('selected===info====', info.node.props.eventKey);
        let key = info.node.props.eventKey;
        if (selectedKeys != null && key != null) {
            if (key === '0-0-0') {//点击了收件箱
                this.setState({
                    receiveBox: true,
                    sendBox: false,
                    spareDatabase: false,
                    equipDatabase: false,
                    selfCheckDatabase: false,
                });
                this.props.dispatch({//初始化 收件箱 表格
                    type: 'windowModal/receiveTableInit'
                })
            }
            else if (key === '0-0-1') {//点击了  发件箱
                this.setState({
                    receiveBox: false,
                    sendBox: true,
                    spareDatabase: false,
                    equipDatabase: false,
                    selfCheckDatabase: false,
                })
                this.props.dispatch({//初始化 发件箱 表格
                    type: 'windowModal/sendTableInit'
                })
            }
            else if (key === '0-0-2') {//点击了  备品备件数据库
                this.setState({
                    receiveBox: false,
                    sendBox: false,
                    spareDatabase: true,
                    equipDatabase: false,
                    selfCheckDatabase: false,
                })
                // this.props.dispatch({//初始化 备品备件数据库 表格
                //     type:'windowModal/spareTableInit'
                // })
            }
            else if (key === '0-0-3') {//点击了  装备控制数据库
                this.setState({
                    receiveBox: false,
                    sendBox: false,
                    spareDatabase: false,
                    equipDatabase: true,
                    selfCheckDatabase: false,
                });
                this.props.dispatch({//初始化 装备控制数据库 表格
                    type: 'windowModal/equipTableInit'
                })
            }
            else if (key === '0-0-4') {//点击了  自检数据库
                this.setState({
                    receiveBox: false,
                    sendBox: false,
                    spareDatabase: false,
                    equipDatabase: false,
                    selfCheckDatabase: true,
                });
                this.props.dispatch({//初始化 自检数据库 表格
                    type: 'windowModal/selfTableInit'
                })
            }
        }
    };

    render() {
        const { TreeNode } = Tree;

        // 收件箱
        const receiveColumn = [
            {
                title: '',
                dataIndex: 'key', key: 'key', align: 'center',
                width: '5%',
            },
            {
                title: '任务名',
                dataIndex: 'taskId', key: 'taskId', align: 'center',
                width: '10%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username', align: 'center',
                width: '10%',
            },
            {
                title: '信息类别号',
                dataIndex: 'messagenum', key: 'messagenum', align: 'center',
                width: '15%',
            }, {
                title: "信息类别",
                dataIndex: 'messagetype', key: 'messagetype', align: 'center',
                width: '15%',
            }, {
                title: '发件站',
                dataIndex: 'Sendstation', key: 'Sendstation', align: 'center',
                width: '15%',
            }, {
                title: '日期时间',
                dataIndex: 'date', key: 'date', align: 'center',
                width: '20%',
            }, {
                title: '状态',
                dataIndex: 'state', key: 'state', align: 'center',
                width: '10%',
            }
        ];
        // 发件箱
        const sendColumn = [
            {
                title: '',
                dataIndex: 'key', key: 'key', align: 'center',
                width: '7%',
            },
            {
                title: '任务名',
                dataIndex: 'taskId', key: 'taskId', align: 'center',
                width: '10%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username', align: 'center',
                width: '10%',
            },
            {
                title: '信息类别号',
                dataIndex: 'messagenum', key: 'messagenum', align: 'center',
                width: '15%',
            }, {
                title: "信息类别",
                dataIndex: 'messagetype', key: 'messagetype', align: 'center',
                width: '15%',
            }, {
                title: '收件站',
                dataIndex: 'receivestation', key: 'receivestation', align: 'center',
                width: '15%',
            }, {
                title: '日期时间',
                dataIndex: 'date', key: 'date', align: 'center',
                width: '20%',
            }, {
                title: '状态',
                dataIndex: 'state', key: 'state', align: 'center',
                width: '10%',
            }
        ];

        // 备品备件  暂时无模型
        const spareColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key', align: 'center',
                width: '10%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username', align: 'center',
                width: '15%',
            },
            {
                title: '信息类别号',
                dataIndex: 'messagenum', key: 'messagenum', align: 'center',
                width: '15%',
            }, {
                title: "信息类别",
                dataIndex: 'messagetype', key: 'messagetype', align: 'center',
                width: '15%',
            }, {
                title: '发件站',
                dataIndex: 'Sendstation', key: 'Sendstation', align: 'center',
                width: '15%',
            }, {
                title: '日期时间',
                dataIndex: 'date', key: 'date', align: 'center',
                width: '20%',
            }, {
                title: '状态',
                dataIndex: 'state', key: 'state', align: 'center',
                width: '10%',
            }
        ];
        // 装备控制
        const equipColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key', align: 'center',
                width: '20%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username', align: 'center',
                width: '20%',
            },
            {
                title: '操作步骤',
                dataIndex: 'operationStep', key: 'operationStep', align: 'center',
                width: '30%',
            }, {
                title: "操作时间",
                dataIndex: 'operationTime', key: 'operationTime', align: 'center',
                width: '30%',
            }
        ];
        // 自检数据库
        const selfCheckColumn = [
            {
                title: '任务名',
                dataIndex: 'key', key: 'key', align: 'center',
                width: '20%',
            },
            {
                title: '用户名',
                dataIndex: 'username', key: 'username', align: 'center',
                width: '20%',
            },
            {
                title: '自检过程',
                dataIndex: 'selfCheckProcess', key: 'selfCheckProcess', align: 'center',
                width: '30%',
            }, {
                title: "自检时间",
                dataIndex: 'selfCheckTime', key: 'selfCheckTime', align: 'center',
                width: '30%',
            }
        ];

        let receiveData = [];
        let rtData = this.props.windowModal.receiveTableInitDataSource; // 收件箱
        if (rtData != null && rtData.length !== 0) {
            for (let i = 0; i < rtData.length; i++) {
                receiveData.push({
                    key: i + 1,
                    taskId: rtData[i].taskId,
                    username: rtData[i].userName,
                    messagenum: rtData[i].code,
                    // messagetype: rtData[i].taskId,
                    Sendstation: rtData[i].stationName,
                    date: rtData[i].time,
                    state: rtData[i].state,
                });
            }
        }

        let sendData = [];
        let stData = this.props.windowModal.sendTableInitDataSource; // 发件箱
        if (stData != null && stData.length !== 0) {
            for (let i = 0; i < stData.length; i++) {
                sendData.push({
                    key: i + 1,
                    taskId: stData[i].taskId,
                    username: stData[i].userName,
                    messagenum: stData[i].code,
                    // messagetype: rtData[i].taskId,
                    Sendstation: stData[i].stationName,
                    date: stData[i].time,
                    state: stData[i].state
                });
            }
        }

        let spareData = [];
        let sptData = this.props.windowModal.spareTableInitDataSource; // 备品备件数据库
        if (sptData != null && sptData.length !== 0) {
            for (let i = 0; i < sptData.length; i++) {
                spareData.push({
                    key: i,
                    // username: "",
                    // messagenum: "",
                    // messagetype: "",
                    // receivestation: "",
                    // date: "",
                    // state: "",
                });
            }
        }

        let equipData = [];
        let etData = this.props.windowModal.equipTableInitDataSource; // 装备控制数据库
        if (etData != null && etData.length !== 0) {
            for (let i = 0; i < etData.length; i++) {
                equipData.push({
                    key: i + 1,
                    username: etData[i].userName,
                    operationStep: etData[i].operaSteps,
                    operationTime: etData[i].time,
                });
            }
        }

        let selfCheckData = [];
        let sctData = this.props.windowModal.selfTableInitDataSource; // 自检数据库
        if (sctData != null && sctData.length !== 0) {
            for (let i = 0; i < sctData.length; i++) {
                selfCheckData.push({
                    key: i,
                    username: sctData[i].userName,
                    selfCheckProcess: sctData[i].selfProcess,
                    selfCheckTime: sctData[i].time,
                });
            }
        }

        let { receiveBox, sendBox, spareDatabase, equipDatabase, selfCheckDatabase, conditionSearch, allSearch, allDelete, signalDelete } = this.state;
        const menuSearch = (
            <Menu className={styles.menuItem} onClick={this.handleClick}>
                <Menu.Item key='conditionSearch'>
                    条件检索
                </Menu.Item>

                <Menu.Item key='allSearch'>
                    全部检索
                </Menu.Item>
            </Menu>
        )
        const menuDelete = (
            <Menu onClick={this.handleClick}>
                <Menu.Item key='signalDelete'>
                    单行删除
                </Menu.Item>
                <Menu.Item key='allDelete'>
                    全部删除
                </Menu.Item>
            </Menu>
        )

        return (
            <Dialog
                visible={this.props.visible}
                title="数据库管理界面"
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '900px', height: '468px' }}>
                        <div className={styles.Database}>
                            <span style={{ margin: '0 10px 0 0' }}><Button type='primary'>备份</Button></span>
                            <span style={{ margin: '0 10px 0 0' }}><Button type='primary'>还原</Button></span>
                            <span style={{ margin: '0 10px 0 0' }}>
                                <Dropdown overlay={menuSearch} placement="bottomLeft">
                                    <Button type='primary'>检索</Button>
                                </Dropdown>
                            </span>
                            <span style={{ margin: '0 10px 0 0' }}>
                                <Dropdown overlay={menuDelete} placement="bottomLeft">
                                    <Button type='primary'>删除</Button>
                                </Dropdown>
                            </span>
                            <span style={{ margin: '0 0px 0 0' }}><Button type='primary'>清除</Button></span>
                        </div>

                        <div style={{ float: 'left', margin: '10px 0 0 0', width: '100%' }}>
                            <div style={{ float: 'left', width: '25%' }}>
                                <div className={styles.treeNode}>
                                    <Tree showLine icon={<Icon type={this.state.unfold ? "plus-square" : "minus-square"} />} onSelect={this.onSelect}>
                                        <TreeNode title="装备数据库" key="0-0">
                                            <TreeNode title="收件箱" key="0-0-0" />
                                            <TreeNode title="发件箱" key="0-0-1" />
                                            <TreeNode title="备品备件数据库" key="0-0-2" />
                                            <TreeNode title="装备控制数据库" key="0-0-3" />
                                            <TreeNode title="自检数据库" key="0-0-4" />
                                        </TreeNode>
                                    </Tree>
                                </div>
                            </div>
                            <div style={{ float: 'left', width: '74%', margin: '0 0 0 1%' }}>
                                {
                                    receiveBox || sendBox || spareDatabase || equipDatabase || selfCheckDatabase ?
                                        <div className={styles.bodyCss}>
                                            <Table
                                                bordered
                                                columns={
                                                    receiveBox ? receiveColumn :
                                                        sendBox ? sendColumn :
                                                            // spareDatabase ? spareColumn :
                                                            equipDatabase ? equipColumn :
                                                                selfCheckDatabase ? selfCheckColumn :
                                                                    null
                                                }
                                                dataSource={
                                                    receiveBox ? receiveData :
                                                        sendBox ? sendData :
                                                            // spareDatabase ? spareData :
                                                            equipDatabase ? equipData :
                                                                selfCheckDatabase ? selfCheckData :
                                                                    null
                                                }
                                                pagination={{ pageSize: 6 }}
                                                className={styles.mynoiseClass}
                                                rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                            />
                                        </div>
                                        : null
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    handleClick = (e) => {
        console.log('click====', e);
        console.log('value=====', e.key);
        switch (e.key) {
            case 'conditionSearch':
                this.props.dispatch({
                    type: 'windowModal/ConditionSearchShow'
                })
                break;
            case 'allSearch':
                this.props.dispatch({
                    type: 'windowModal/allSearchShow'
                })
                break;
            case 'allDelete':
                this.props.dispatch({
                    type: 'windowModal/allDeleteShow'
                })
                break;
            case 'signalDelete':
                this.props.dispatch({
                    type: 'windowModal/signalDeleteShow'
                })
                break;
            default:
                break;
        }

    }

}
