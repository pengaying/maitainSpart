import React, { Component } from 'react';
import { Icon, Checkbox } from 'antd';
import styles from "./Window.less";

import u167 from '../assets/u167.png';
import { connect } from 'dva';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();

@connect(({ windowModal }) => ({ windowModal }))
export default class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐true显示

            stateDisplay_Sign: false,// 状态显示区  点击背景改变，false不改变背景色
            stateDisplay_MouseSign: false,// 状态显示区  移入移出背景改变，false不加背景色   
            SyntheticDisplay_Sign: false,// 综合显示区
            SyntheticDisplay_MouseSign: false,// 综合显示区 移入移出背景改变，false不加背景色   
            ResetLayout_Sign: false,// 重置布局  点击背景改变，false不改变背景色
            ResetLayout_MouseSign: false,// 重置布局  移入移出背景改变，false不加背景色   

            showEquipmentState: true,// 装备状态 侧边栏显示  true显示  false关闭
            showCommandControl: false,//  侧边栏显示  true显示  false关闭
            showScheduledTask: false,// 装备状态 侧边栏显示  true显示  false关闭
        }
    }

    // 点击选中  状态显示区
    ClickStateDisplay = (e) => {
        this.setState({
            stateDisplay_Sign: true,
            SyntheticDisplay_Sign: false,
            ResetLayout_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseStateDisplay = (e) => {
        this.setState({
            stateDisplay_MouseSign: true,
        })
    }
    onMouseOutStateDisplay = (e) => {
        this.setState({
            stateDisplay_MouseSign: false,
        })
    }
    // 点击选中 综合显示区
    ClickSyntheticDisplay = (e) => {
        this.setState({
            stateDisplay_Sign: false,
            SyntheticDisplay_Sign: true,
            ResetLayout_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseSyntheticDisplay = (e) => {
        this.setState({
            SyntheticDisplay_MouseSign: true,
        })
    }
    onMouseOutSyntheticDisplay = (e) => {
        this.setState({
            SyntheticDisplay_MouseSign: false,
        })
    }
    // 点击选中 重置布局
    ClickResetLayout = (e) => {
        this.props.dispatch({
            type: 'windowModal/ResetLayout'
        })
    }
    //  鼠标移入 
    onMouseResetLayout = (e) => {
        this.setState({
            ResetLayout_MouseSign: true,
        })
    }
    onMouseOutResetLayout = (e) => {
        this.setState({
            ResetLayout_MouseSign: false,
        })
    }

    //点击菜单区二级菜单隐藏只显示子域内容
    hiddenMenuButton = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu
        })
        // this.props.dispatch({
        //     type: 'windowModal/HSMenu'
        // })
    }

    render() {
        let { windowModal } = this.props;
        let { stateDisplay_Sign, stateDisplay_MouseSign,
            SyntheticDisplay_Sign, SyntheticDisplay_MouseSign,
            ResetLayout_Sign, ResetLayout_MouseSign, } = this.state;
        return (
            <>
                <div className={styles.Menu} style={{ height: this.state.hiddenmenu ? '109px' : '30px' }}>
                    {/* 二级菜单 */}
                    <div style={{ float: 'left' }}>
                        {/* 二级菜单子项 */}

                        <div className={styles.AllMenuButton}>
                            {/* 状态显示区 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>

                                    <div className={styles.menuButton_Checkbox}>
                                        <div
                                            style={{ background: stateDisplay_Sign || stateDisplay_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor_Checkbox}
                                            onClick={this.ClickStateDisplay}
                                            onMouseEnter={this.onMouseStateDisplay}
                                            onMouseLeave={this.onMouseOutStateDisplay}
                                        >
                                            <div className={styles.CheckboxMenuTop}>
                                                <Checkbox
                                                    checked={this.props.windowModal.showEquipmentState}
                                                    onChange={this.ShowEquipmentState}
                                                    style={{
                                                        color: this.props.windowModal.showEquipmentState === true ? "#56AFFF" : "#BBC4DA",
                                                        height: '20px'
                                                    }}
                                                >
                                                    装备状态
                                                </Checkbox>
                                            </div>
                                            <div className={styles.CheckboxMenuCenter}>
                                                <Checkbox
                                                    checked={this.props.windowModal.showScheduledTask}
                                                    style={{
                                                        color: this.props.windowModal.showScheduledTask === true ? "#56AFFF" : "#BBC4DA",
                                                        height: '20px'
                                                    }}
                                                    onClick={this.ShowScheduledTask}
                                                >
                                                    计划任务
                                                    </Checkbox>
                                            </div>
                                            <div className={styles.CheckboxMenuBottom}>
                                                <Checkbox
                                                    checked={this.props.windowModal.showCommandControl}
                                                    style={{
                                                        color: this.props.windowModal.showCommandControl === true ? "#56AFFF" : "#BBC4DA",
                                                        height: '20px'
                                                    }}
                                                    onClick={this.ShowCommandControl}
                                                >
                                                    指挥控制
                                                    </Checkbox>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>状态显示区</span>
                                </div>
                            </div>

                            {/* 综合显示区 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>

                                    <div className={styles.menuButton_Checkbox}>
                                        <div
                                            style={{ background: SyntheticDisplay_Sign || SyntheticDisplay_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor_Checkbox}
                                            onClick={this.ClickSyntheticDisplay}
                                            onMouseEnter={this.onMouseSyntheticDisplay}
                                            onMouseLeave={this.onMouseOutSyntheticDisplay}
                                        >
                                            <div className={styles.CheckboxMenu_MessageTop}>
                                                <Checkbox
                                                    checked={this.props.windowModal.showReceiveMessage}
                                                    onChange={this.ShowReceiveMessage}
                                                    style={{
                                                        color: this.props.windowModal.showReceiveMessage === true ? "#56AFFF" : "#BBC4DA",
                                                        height: '20px'
                                                    }}
                                                >
                                                    收件箱
                                                </Checkbox>
                                            </div>
                                            <div className={styles.CheckboxMenu_MessageCenter}>
                                                <Checkbox
                                                    checked={this.props.windowModal.showSendMessage}
                                                    onChange={this.ShowSendMessage}
                                                    style={{
                                                        color: this.props.windowModal.showSendMessage === true ? "#56AFFF" : "#BBC4DA",
                                                        height: '20px'
                                                    }}
                                                >
                                                    发件箱
                                                </Checkbox>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>综合显示区</span>
                                </div>
                            </div>

                            {/* 重置布局 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: ResetLayout_Sign || ResetLayout_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickResetLayout}
                                            onMouseEnter={this.onMouseResetLayout}
                                            onMouseLeave={this.onMouseOutResetLayout}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u167} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: ResetLayout_Sign ? "#56AFFF" : "#BBC4DA" }}>重置布局</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>重置布局</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* 控制菜单项的显隐 */}
                    <div className={styles.childrenButton} style={{ color: "#909cb9", textAlign: 'right', padding: this.state.hiddenmenu ? '85px 10px 0 0' : '5px 10px 0 0', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                        <div onClick={this.hiddenMenuButton} >
                            {this.state.hiddenmenu ? <Icon type="shrink" />
                                : <Icon type="arrows-alt" />
                            }
                        </div>
                    </div>

                </div>

            </>
        )
    }

    ShowEquipmentState = () => {//通过菜单栏 装备状态 复选框的勾选状态来判断显示侧边栏
        this.props.dispatch({
            type: 'windowModal/showEquipmentState',
        });
    }
    ShowScheduledTask = () => {//通过菜单栏 计划任务 复选框的勾选状态来判断显示侧边栏
        this.props.dispatch({
            type: 'windowModal/showScheduledTask',
        });
    }
    ShowCommandControl = () => {//通过菜单栏 指挥控制 复选框的勾选状态来判断显示侧边栏
        this.props.dispatch({
            type: 'windowModal/showCommandControl',
        });
    }

    ShowSendMessage = () => {//停靠区侧边栏 收件箱显隐
        this.props.dispatch({
            type: 'windowModal/showSendMessage',
        });
    }
    ShowReceiveMessage = () => {//停靠区侧边栏 收件箱显隐
        this.props.dispatch({
            type: 'windowModal/showReceiveMessage',
        });
    }
}
