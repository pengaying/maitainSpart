import React, { Component } from 'react';
import { Icon, Input, Select } from 'antd';

import styles from "./System.less";

import u24 from '../assets/u24.png';
import u59 from '../assets/u59.png';
import u30 from '../assets/u30.png';
import u34 from '../assets/u34.png';
import u38 from '../assets/u38.png';

import RadioChoose from './component/RadioChoose';
import DeploySet from './component/DeploySet';
// import WorkState from './component/WorkState';
import TimeDisplay from './component/TimeDisplay';

import AboutDialog from '../Dialog/SystemDialog/AboutDialog';
import ExitDialog from '../Dialog/SystemDialog/ExitDialog';
import DataBaseDialog from '../Dialog/SystemDialog/DataBaseDialog';
import { SystemOk } from '../../services/services';//发起请求

import ConditionSearch from './../Dialog/SystemDialog/ConditionSearch';

import { connect } from 'dva';
@connect(({ systemModal }) => ({ systemModal }))
export default class System extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐  true显示

            confirm_Sign: false,// 确定
            confirm_MouseSign: false,// 确定  移入移出
            DataBase_Sign: false,// 数据库
            DataBase_MouseSign: false,// 数据库  移入移出
            Help_Sign: false,// 帮助
            Help_MouseSign: false,// 帮助  移入移出
            About_Sign: false,// 关于
            About_MouseSign: false,// 关于  移入移出
            Exit_Sign: false,// 退出 点击背景改变，false不改变背景色
            Exit_MouseSign: false,// 退出 移入移出背景改变，false不加背景色 


            LonValue: '',//经度
            LatValue: '',//纬度
            HeightValue: '',//高度
            WorkState: '1',//工作状态
            TechnologyState: '1',//技术状态
        }
    }

    //点击选中 确定
    ClickOkBtn = (e) => {
        this.setState({
            Exit_Sign: false,
            About_Sign: false,
            confirm_Sign: true,
            Help_Sign: false,
            DataBase_Sign: false,
        });

        let { LonValue, LatValue, HeightValue, TechnologyState, WorkState } = this.state;

        let values = {
            lon: LonValue,//经度
            lat: LatValue,//纬度
            height: HeightValue,//高度
            workState: WorkState,//工作状态
            technicalState: TechnologyState,//技术状态
        }
        SystemOk(values);
    }
    //  鼠标移入 
    onMouseOkBtn = (e) => {
        this.setState({
            confirm_MouseSign: true,
        })
    }
    onMouseOutOkBtn = (e) => {
        this.setState({
            confirm_MouseSign: false,
            confirm_Sign: false,
        })
    }

    // 点击选中 数据库
    ClickDataBase = (e) => {
        this.setState({
            Exit_Sign: false,
            About_Sign: false,
            confirm_Sign: false,
            Help_Sign: false,
            DataBase_Sign: true,
        });
    }
    //  鼠标移入 
    onMouseDataBase = (e) => {
        this.setState({
            DataBase_MouseSign: true,
        })
    }
    onMouseOutDataBase = (e) => {
        this.setState({
            DataBase_MouseSign: false,
        })
    }

    // 点击选中  帮助
    ClickHelp = (e) => {
        this.setState({
            Exit_Sign: false,
            About_Sign: false,
            confirm_Sign: false,
            Help_Sign: true,
            DataBase_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseHelp = (e) => {
        this.setState({
            Help_MouseSign: true,
        })
    }
    onMouseOutHelp = (e) => {
        this.setState({
            Help_MouseSign: false,
        })
    }
    // 点击选中 关于
    ClickAbout = (e) => {
        this.setState({
            Exit_Sign: false,
            About_Sign: true,
            confirm_Sign: false,
            Help_Sign: false,
            DataBase_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseAbout = (e) => {
        this.setState({
            About_MouseSign: true,
        })
    }
    onMouseOutAbout = (e) => {
        this.setState({
            About_MouseSign: false,
        })
    }

    closeWinodowDataBase = (e) => {
        this.setState({
            DataBase_Sign: false,
        })
    }

    // 关闭关于弹窗
    closeWinodowAbout = (e) => {
        this.setState({
            About_Sign: false,
        })
    }

    // 点击选中  退出
    ClickExit = (e) => {
        this.setState({
            Exit_Sign: true,
            About_Sign: false,
            confirm_Sign: false,
            Help_Sign: false,
            DataBase_Sign: false,
        });
    }
    // 关闭 退出 弹窗
    closeWinodowExit = (e) => {
        this.setState({
            Exit_Sign: false,
        })
    }

    //  鼠标移入 
    onMouseExit = (e) => {
        this.setState({
            Exit_MouseSign: true,
        })
    }
    onMouseOutExit = (e) => {
        this.setState({
            Exit_MouseSign: false,
        })
    }

    //点击菜单区二级菜单隐藏只显示子域内容
    hiddenMenuButton = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu
        })
        // this.props.dispatch({
        //     type: 'windowModal/HSMenu'
        // });
    }
    //改变弹窗层级事件//控制对话框层级
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


    render() {
        let { Exit_Sign, Exit_MouseSign, About_Sign, About_MouseSign, confirm_Sign, confirm_MouseSign,
            Help_Sign, Help_MouseSign, DataBase_Sign, DataBase_MouseSign } = this.state;
        const Option = Select.Option;

        return (
            <>
                <div className={styles.Menu} style={{ height: this.state.hiddenmenu ? '109px' : '30px' }}>
                    {/* 二级菜单 */}
                    <div style={{ float: 'left' }}>
                        {/* 二级菜单子项 */}

                        <div className={styles.AllMenuButton}>
                            {/* 位置信息 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 经度 */}
                                    <div className={styles.menuButton_Input}>
                                        <div
                                            className={styles.backcolor_input}
                                        // style={{ background: Exit_Sign || Exit_MouseSign ? "#141F3E" : "#25345D" }}
                                        // onClick={this.ClickHelp}
                                        // onMouseEnter={this.onMouseHelp}
                                        // onMouseLeave={this.onMouseOutHelp}
                                        >
                                            <div className={styles.InputMenuTop}>
                                                <span style={{ marginRight: '5px' }}>经度(°):</span>
                                                <Input placeholder="±180" value={this.state.LonValue}
                                                    name='LonValue' onChange={this.changeInput}
                                                    style={{ height: '20px', width: '100px' }} />
                                            </div>
                                            <div className={styles.InputMenuCenter}>
                                                <span style={{ marginRight: '5px' }}>纬度(°):</span>
                                                <Input placeholder="±90" value={this.state.LatValue}
                                                    name='LatValue' onChange={this.changeInput}
                                                    style={{ height: '20px', width: '100px' }} />
                                            </div>
                                            <div className={styles.InputMenuBottom}>
                                                <span style={{ marginRight: '5px' }}>高度(°):</span>
                                                <Input placeholder="±10000" value={this.state.HeightValue}
                                                    name='HeightValue' onChange={this.changeInput}
                                                    style={{ height: '20px', width: '100px' }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 分割线 */}
                                    <div className={styles.line_background}>
                                        <div className={styles.line}></div>
                                    </div>

                                    {/* 自动/人工 */}
                                    <RadioChoose />

                                    {/* 分割线 */}
                                    <div className={styles.line_background}>
                                        <div className={styles.line}></div>
                                    </div>

                                    {/* 确定 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: confirm_Sign || confirm_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickOkBtn}
                                            className={styles.backcolor_img}
                                            onMouseEnter={this.onMouseOkBtn}
                                            onMouseLeave={this.onMouseOutOkBtn}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u59} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: confirm_Sign ? "#56AFFF" : "#BBC4DA" }}>确定</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>位置信息</span>
                                </div>
                            </div>

                            {/* 部署信息 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    <DeploySet />
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>部署信息</span>
                                </div>
                            </div>


                            {/* 工作状态 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/*  <WorkState /> */}


                                    <div className={styles.Input_Two_Style_WorkState} style={{ textAlign: "right" }}>
                                        <div className={styles.Two_Input_TopWork}>
                                            <span>工作状态:</span>
                                            <Select onChange={this.ChangeWorkState} value={this.state.WorkState}>
                                                <Option value='1'>未就绪</Option>
                                                <Option value='2'>待命</Option>
                                                <Option value='3'>工作中</Option>
                                            </Select>
                                        </div>

                                        <div className={styles.Two_Input_Top}>
                                            <span>技术状态:</span>
                                            <Select onChange={this.ChangeTechnologyState} value={this.state.TechnologyState}>
                                                <Option value='1'>正常</Option>
                                                <Option value='2'>故障</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>工作状态</span>
                                </div>
                            </div>

                            {/* 时间显示 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    <TimeDisplay />
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>时间显示</span>
                                </div>
                            </div>

                            {/* 数据库 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 菜单按钮 */}
                                    <div className={styles.menuButton}>

                                        <div
                                            style={{ background: DataBase_Sign || DataBase_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickDataBase}
                                            className={styles.backcolor_img}
                                            onMouseEnter={this.onMouseDataBase}
                                            onMouseLeave={this.onMouseOutDataBase}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u24} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: DataBase_Sign ? "#56AFFF" : "#BBC4DA" }}>数据库</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>数据库</span>
                                </div>
                            </div>

                            {/* 系统 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 帮助 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Help_Sign || Help_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor_img}
                                            onClick={this.ClickHelp}
                                            onMouseEnter={this.onMouseHelp}
                                            onMouseLeave={this.onMouseOutHelp}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u30} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Help_Sign ? "#56AFFF" : "#BBC4DA" }}>帮助</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 关于 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: About_Sign || About_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor_img}
                                            onClick={this.ClickAbout}
                                            onMouseEnter={this.onMouseAbout}
                                            onMouseLeave={this.onMouseOutAbout}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u34} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: About_Sign ? "#56AFFF" : "#BBC4DA" }}>关于</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 退出 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Exit_Sign || Exit_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor_img}
                                            onClick={this.ClickExit}
                                            onMouseEnter={this.onMouseExit}
                                            onMouseLeave={this.onMouseOutExit}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u38} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Exit_Sign ? "#56AFFF" : "#BBC4DA" }}>退出</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>系统</span>
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

                {/* 数据库弹窗 */}
                {
                    DataBase_Sign ?
                        <DataBaseDialog
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.closeWinodowDataBase}
                            visible={DataBase_Sign}
                        />
                        : null
                }

                {
                    this.props.systemModal.conditionSearch ?
                        <ConditionSearch
                            // DetailData = {this.props.systemModal.CheckPointerAbstractData}
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.CloseCondition}
                            visible={this.props.systemModal.conditionSearch}
                        />
                        : null
                }
                {
                    // allSearch ?
                    //     <ConditionSearch
                    //         // DetailData={this.props.systemModal.CheckPointerAbstractData}
                    //         index={12}
                    //         zIndex={12}
                    //         changeIndex={this.changeIndex}
                    //         closeWinodow={this.CloseCheckPointerAbstract}
                    //         visible={this.props.systemModal.CheckPointerAbstract}
                    //     />
                    //     : null
                }
                {
                    // allDelete ?
                    //     <ConditionSearch
                    //         // DetailData={this.props.systemModal.CheckPointerAbstractData}
                    //         index={12}
                    //         zIndex={12}
                    //         changeIndex={this.changeIndex}
                    //         closeWinodow={this.CloseCheckPointerAbstract}
                    //         visible={this.props.systemModal.CheckPointerAbstract}
                    //     />
                    //     : null
                }
                {
                    // signalDelete ?
                    //     <ConditionSearch
                    //         // DetailData={this.props.systemModal.CheckPointerAbstractData}
                    //         index={12}
                    //         zIndex={12}
                    //         changeIndex={this.changeIndex}
                    //         closeWinodow={this.CloseCheckPointerAbstract}
                    //         visible={this.props.systemModal.CheckPointerAbstract}
                    //     />
                    //     : null
                }




                {/* 关于弹窗 */}
                {
                    About_Sign ?
                        <AboutDialog
                            index={11}
                            zIndex={11}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.closeWinodowAbout}
                            visible={About_Sign}
                        />
                        : null
                }
                {/* 退出弹窗 */}
                {
                    Exit_Sign ?
                        <ExitDialog
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.closeWinodowExit}
                            visible={Exit_Sign}
                        />
                        : null
                }
            </>
        )
    }

    // 获取经纬高的值
    changeInput = (e) => {
        switch (e.target.name) {
            case 'LonValue':
                this.setState({
                    LonValue: e.target.value
                });
                break;
            case 'LatValue':
                this.setState({
                    LatValue: e.target.value
                });
                break;
            case 'HeightValue':
                this.setState({
                    HeightValue: e.target.value
                });
                break;
            default:
                break;
        }
    }
    // 获取工作状态
    ChangeWorkState = (value) => {
        this.setState({
            WorkState: value
        })
    }
    // 获取技术状态
    ChangeTechnologyState = (value) => {
        this.setState({
            TechnologyState: value
        })
    }

    // 关闭条件检索
    CloseCondition = () => {
        this.props.dispatch({
            type: 'systemModal/ConditionSearchHide'
        })
    }

    // 关闭全部删除
    CloseSearch = () => {
        this.props.dispatch({
            type: 'systemModal/ConditionSearchShow'
        })
    }
}