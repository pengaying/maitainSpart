import React, { Component } from 'react'
import styles from './index.less';
import DockArea from './DockArea';
import { connect } from 'dva';

@connect(({ windowModal }) => ({ windowModal }))
export default class TabToggle extends Component {
    constructor() {
        super();
        this.state = {
            value: "1",
            noiseborderbottom: "3px solid #1F95FF",
            noisefontcolor: "#666666",
            cheatborderbottom: "",
            cheatfontcolor: "#666666",
        }
    }

    //  收件箱 点击选中
    ChangeTab1 = (e) => {
        this.setState({
            value: "1",
            noiseborderbottom: "3px solid #1F95FF",
            noisefontcolor: "#2884D8",
            cheatborderbottom: "",
            cheatfontcolor: "#666666",
        });
        this.props.dispatch({//选中 收件箱显示 
            type: 'windowModal/ChooseReceiveMessage'
        })
        this.props.dispatch({//初始化 收件箱 表格
            type: 'windowModal/receiveTableInit'
        })
    }
    //  发件箱 点击选中
    ChangeTab2 = (e) => {
        this.setState({
            value: "2",
            cheatborderbottom: "3px solid #1F95FF",
            cheatfontcolor: "#2884D8",
            noiseborderbottom: "",
            noisefontcolor: "#666666",
        });
        this.props.dispatch({//选中 发件箱显示 
            type: 'windowModal/ChooseSendMessage'
        })
        this.props.dispatch({//初始化 发件箱 表格
            type: 'windowModal/sendTableInit'
        })
    }

    onMouseOver1 = (e) => {
        this.setState({
            noisefontcolor: "#2884D8"
        })
    }
    onMouseOver2 = (e) => {
        this.setState({
            cheatfontcolor: "#2884D8"
        })
    }

    componentDidMount(){
        this.props.dispatch({//初始化 收件箱 表格
            type: 'windowModal/receiveTableInit'
        })
    }
    render() {
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

        return (
            <div>
                <div className={styles.tab}>
                    <ul>
                        {
                            this.props.windowModal.showReceiveMessage ?
                                <li
                                    id="1"
                                    onClick={this.ChangeTab1}
                                    onMouseEnter={this.onMouseOver1}
                                    onMouseLeave={this.onMouseOut}
                                    style={{
                                        color: this.props.windowModal.showDockerArea === 'ReceiveMessage' ? '#1fa7fe' : '#666666',
                                        borderBottom: this.props.windowModal.showDockerArea === 'ReceiveMessage' ? '3px solid #1F95FF' : '',
                                    }}
                                >
                                    收件箱
                            </li>
                                : null
                        }
                        {
                            this.props.windowModal.showSendMessage ?
                                <li
                                    id="2"
                                    onClick={this.ChangeTab2}
                                    onMouseEnter={this.onMouseOver2}
                                    onMouseLeave={this.onMouseOut}
                                    style={{
                                        color: this.props.windowModal.showDockerArea === 'SendMessage' ? '#1fa7fe' : '#666666',
                                        borderBottom: this.props.windowModal.showDockerArea === 'SendMessage' ? '3px solid #1F95FF' : '',
                                    }}
                                >
                                    发件箱
                        </li>
                                : null
                        }
                    </ul>
                </div>

                <div className={styles.tabContent}>

                    <div style={{ display: this.props.windowModal.showDockerArea === 'ReceiveMessage' ? 'block' : 'none', }}>
                        <div className={styles.jam_content_left} id="jamstyle">
                            <DockArea defaultcolumn={receiveColumn} tabledata={receiveData} />
                        </div>
                    </div>

                    <div style={{ display: this.props.windowModal.showDockerArea === 'SendMessage' ? 'block' : 'none', }}>
                        <div className={styles.jam_content_left} id="jamstyle">
                            <DockArea defaultcolumn={sendColumn} tabledata={sendData} />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
