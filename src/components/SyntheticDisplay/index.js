import React, { Component } from 'react'
import { Icon } from 'antd';

import styles from "./SyntheticDisplay.less";

import u78 from '../assets/u78.png';
import u81 from '../assets/u81.png';
import u84 from '../assets/u84.png';
import u87 from '../assets/u87.png';
// import GisIndex from '../../pages/Gis/GisIndex';

// import { connect } from 'dva';

// @connect(({ windowModal }) => ({ windowModal }))

export default class SyntheticDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐true显示

            OpenMap_Sign: false,//打开地图  点击背景改变，false不改变背景色
            OpenMap_MouseSign: false,//打开地图   移入移出背景改变，false不加背景色   
            SaveMap_Sign: false,// 保存地图
            SaveMap_MouseSign: false,// 保存地图  移入移出
            PrintMap_Sign: false,// 打印地图
            PrintMap_MouseSign: false,// 打印地图  移入移出
            PrintSetting_Sign: false,// 打印设置
            PrintSetting_MouseSign: false,// 打印设置  移入移出           
        }
    }

    // 地图控制
    // 点击选中  打开地图
    ClickOpenMap = (e) => {
        this.setState({
            OpenMap_Sign: true,
            SaveMap_Sign: false,
            PrintMap_Sign: false,
            PrintSetting_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseOpenMap = (e) => {
        this.setState({
            OpenMap_MouseSign: true,
        })
    }
    onMouseOutOpenMap = (e) => {
        this.setState({
            OpenMap_MouseSign: false,
        })
    }
    // 点击选中 保存地图
    ClickSaveMap = (e) => {
        this.setState({
            OpenMap_Sign: false,
            SaveMap_Sign: true,
            PrintMap_Sign: false,
            PrintSetting_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseSaveMap = (e) => {
        this.setState({
            SaveMap_MouseSign: true,
        })
    }
    onMouseOutSaveMap = (e) => {
        this.setState({
            SaveMap_MouseSign: false,
        })
    }
    //点击选中 打印地图
    ClickPrintMap = (e) => {
        this.setState({
            OpenMap_Sign: false,
            SaveMap_Sign: false,
            PrintMap_Sign: true,
            PrintSetting_Sign: false,
        });
    }
    //  鼠标移入 
    onMousePrintMap = (e) => {
        this.setState({
            PrintMap_MouseSign: true,
        })
    }
    onMouseOutPrintMap = (e) => {
        this.setState({
            PrintMap_MouseSign: false,
        })
    }
    // 点击选中 打印设置
    ClickPrintSetting = (e) => {
        this.setState({
            OpenMap_Sign: false,
            SaveMap_Sign: false,
            PrintMap_Sign: false,
            PrintSetting_Sign: true,
        });
    }
    //  鼠标移入 
    onMousePrintSetting = (e) => {
        this.setState({
            PrintSetting_MouseSign: true,
        })
    }
    onMouseOutPrintSetting = (e) => {
        this.setState({
            PrintSetting_MouseSign: false,
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

        let { OpenMap_Sign, OpenMap_MouseSign, SaveMap_Sign, SaveMap_MouseSign, 
            PrintMap_Sign, PrintMap_MouseSign,PrintSetting_Sign, PrintSetting_MouseSign } = this.state;
        return (
            <>

                <div className={styles.Menu} style={{ height: this.state.hiddenmenu ? '109px' : '30px' }}>
                    {/* 二级菜单 */}
                    <div style={{ float: 'left' }}>
                        {/* 二级菜单子项 */}

                        <div className={styles.AllMenuButton}>
                            {/* 地图控制 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 打开地图 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: OpenMap_Sign || OpenMap_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickOpenMap}
                                            onMouseEnter={this.onMouseOpenMap}
                                            onMouseLeave={this.onMouseOutOpenMap}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u78} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: OpenMap_Sign ? "#56AFFF" : "#BBC4DA" }}>打开地图</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 保存地图 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: SaveMap_Sign || SaveMap_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickSaveMap}
                                            onMouseEnter={this.onMouseSaveMap}
                                            onMouseLeave={this.onMouseOutSaveMap}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u81} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: SaveMap_Sign ? "#56AFFF" : "#BBC4DA" }}>保存地图</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 打印地图 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: PrintMap_Sign || PrintMap_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickPrintMap}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousePrintMap}
                                            onMouseLeave={this.onMouseOutPrintMap}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u84} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: PrintMap_Sign ? "#56AFFF" : "#BBC4DA" }}>打印地图</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 打印设置 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: PrintSetting_Sign || PrintSetting_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickPrintSetting}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousePrintSetting}
                                            onMouseLeave={this.onMouseOutPrintSetting}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u87} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: PrintSetting_Sign ? "#56AFFF" : "#BBC4DA" }}>打印设置</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>地图控制</span>
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
         
                {/* <div className={styles.CenterContent}>
                    <GisIndex style={{width:'975px'}}/>
                </div> */}
            </>
        )
    }
}