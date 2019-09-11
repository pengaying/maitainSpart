import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from "./SparePart.less";

import u92 from '../assets/u92.svg';
import u95 from '../assets/u95.svg';
import u103 from '../assets/u103.svg';
import u130 from '../assets/u130.svg';
import u147 from '../assets/u147.svg';

import u134 from '../assets/u134.svg';
import u137 from '../assets/u137.svg';

import u99 from '../assets/u99.svg';
import u109 from '../assets/u109.svg';
import u112 from '../assets/u112.svg';
import u106 from '../assets/u106.svg';

import u127 from '../assets/u127.svg';
import u123 from '../assets/u123.svg';

import u117 from '../assets/u117.svg';

import u144 from '../assets/u144.svg';

import Storage from './component/Storage';
import Queryoutbound from './component/Queryoutbound';
import Check from './component/Check';
import SpareSupplementary from './component/SpareSupplementary';
import Warning from './component/Warning';
import PeriodMaximum from './component/PeriodMaximum';
import ProductCycle from './component/ProductCycle';
import PNManagement from './component/PNManagement';
import TechnicalFile from './component/TechnicalFile';
import StorageArea from './component/StorageArea';
import ViewLog from './component/ViewLog';
import ProductControl from './component/ProductControl';
import IndividualManagement from './component/IndividualManagement';
import WorkSummary from './component/WorkSummary';
import PrintBarcode from '../Dialog/PublicDialog/PrintBarcode';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))

export default class SparePart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenmenu: true,//控制所有二级菜单显隐true显示

            storage_Sign: false,// 备件管理入库点击背景改变，false不改变背景色
            storage_MouseSign: false,// 备件管理入库移入移出背景改变，false不加背景色   
            Queryoutbound_Sign: false,// 查询与出库
            Queryoutbound_MouseSign: false,// 查询与出库  移入移出
            check_Sign: true,// 盘点
            check_MouseSign: false,// 盘点  移入移出
            Supplementary_Sign: false,// 备件申请记录
            Supplementary_MouseSign: false,// 备件申请记录  移入移出
            warning_Sign: false,// 库存预警
            warning_MouseSign: false,// 库存预警  移入移出

            PeriodMaximum_Sign: false,// 消耗统计   周期-最多
            PeriodMaximum_MouseSign: false,// 周期-最多  移入移出
            productCycle_Sign: false,// 消耗统计   产品-周期
            productCycle_MouseSign: false,// 产品-周期  移入移出

            PN_Management_Sign: false,// 信息管理 PN管理点击背景改变，false不改变背景色
            PN_Management_MouseSign: false,// 信息管理 PN管理移入移出背景改变，false不加背景色   
            technicalFile_Sign: false,// 技术文档
            technicalFile_MouseSign: false,// 技术文档  移入移出
            StorageArea_Sign: false,// 备件存放地
            StorageArea_MouseSign: false,// 备件存放地  移入移出
            viewLog_Sign: false,// 查看日志
            viewLog_MouseSign: false,// 查看日志  移入移出

            productControl_Sign: false,// 工具管理  产品管理
            productControl_MouseSign: false,// 产品管理  移入移出
            IndividualManagement_Sign: false,// 个体管理
            IndividualManagement_MouseSign: false,// 个体管理  移入移出

            workSummary_Sign: false,// 阶段工作总结
            workSummary_MouseSign: false,// 阶段工作总结  移入移出

            PrintBarcode_Sign: false,// 打印条码
            PrintBarcode_MouseSign: false,// 打印条码  移入移出
        }
    }

    // 备件管理
    // 点击选中  入库
    ClickStorage = (e) => {
        this.setState({
            storage_Sign: true,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseStorage = (e) => {
        this.setState({
            storage_MouseSign: true,
        })
    }
    onMouseOutStorage = (e) => {
        this.setState({
            storage_MouseSign: false,
        })
    }
    // 点击选中 查询与出库
    ClickQueryoutbound = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: true,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseQueryoutbound = (e) => {
        this.setState({
            Queryoutbound_MouseSign: true,
        })
    }
    onMouseOutQueryoutbound = (e) => {
        this.setState({
            Queryoutbound_MouseSign: false,
        })
    }
    //点击选中 盘点
    ClickCheck = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: true,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseCheck = (e) => {
        this.setState({
            check_MouseSign: true,
        })
    }
    onMouseOutCheck = (e) => {
        this.setState({
            check_MouseSign: false,
        })
    }
    // 点击选中 备件申请记录
    ClickSupplementary = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: true,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseSupplementary = (e) => {
        this.setState({
            Supplementary_MouseSign: true,
        })
    }
    onMouseOutSupplementary = (e) => {
        this.setState({
            Supplementary_MouseSign: false,
        })
    }
    // 点击选中 库存预警
    ClickWarning = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: true,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,

            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseWarning = (e) => {
        this.setState({
            warning_MouseSign: true,
        })
    }
    onMouseOutWarning = (e) => {
        this.setState({
            warning_MouseSign: false,
        })
    }

    // 消耗统计
    // 点击选中 周期-最多
    ClickPeriodMaximum = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: true,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMousePeriodMaximum = (e) => {
        this.setState({
            PeriodMaximum_MouseSign: true,
        })
    }
    onMouseOutPeriodMaximum = (e) => {
        this.setState({
            PeriodMaximum_MouseSign: false,
        })
    }
    // 点击选中 产品-周期
    ClickproductCycle = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: true,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseproductCycle = (e) => {
        this.setState({
            productCycle_MouseSign: true,
        })
    }
    onMouseOutproductCycle = (e) => {
        this.setState({
            productCycle_MouseSign: false,
        })
    }

    // 信息管理
    // 点击选中 PN管理
    ClickPN_Management = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: true,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMousePN_Management = (e) => {
        this.setState({
            PN_Management_MouseSign: true,
        })
    }
    onMouseOutPN_Management = (e) => {
        this.setState({
            PN_Management_MouseSign: false,
        })
    }
    // 点击选中 技术文档
    ClickTechnicalFile = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: true,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseTechnicalFile = (e) => {
        this.setState({
            technicalFile_MouseSign: true,
        })
    }
    onMouseOutTechnicalFile = (e) => {
        this.setState({
            technicalFile_MouseSign: false,
        })
    }
    // 点击选中 备件存放地
    ClickStorageArea = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: true,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseStorageArea = (e) => {
        this.setState({
            StorageArea_MouseSign: true,
        })
    }
    onMouseOutStorageArea = (e) => {
        this.setState({
            StorageArea_MouseSign: false,
        })
    }
    // 点击选中 查看日志
    ClickviewLog = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: true,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseviewLog = (e) => {
        this.setState({
            viewLog_MouseSign: true,
        })
    }
    onMouseOutviewLog = (e) => {
        this.setState({
            viewLog_MouseSign: false,
        })
    }

    // 工具管理
    // 点击选中 产品管理
    ClickproductControl = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: true,
            IndividualManagement_Sign: false,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseproductControl = (e) => {
        this.setState({
            productControl_MouseSign: true,
        })
    }
    onMouseOutproductControl = (e) => {
        this.setState({
            productControl_MouseSign: false,
        })
    }
    // 点击选中 个体管理
    ClickIndividualManagement = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: true,
            workSummary_Sign: false,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseIndividualManagement = (e) => {
        this.setState({
            IndividualManagement_MouseSign: true,
        })
    }
    onMouseOutIndividualManagement = (e) => {
        this.setState({
            IndividualManagement_MouseSign: false,
        })
    }

    // 点击选中 阶段工作总结
    ClickworkSummary = (e) => {
        this.setState({
            storage_Sign: false,
            Queryoutbound_Sign: false,
            check_Sign: false,
            Supplementary_Sign: false,
            warning_Sign: false,

            PeriodMaximum_Sign: false,
            productCycle_Sign: false,

            PN_Management_Sign: false,
            technicalFile_Sign: false,
            StorageArea_Sign: false,
            viewLog_Sign: false,

            productControl_Sign: false,
            IndividualManagement_Sign: false,
            workSummary_Sign: true,
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMouseworkSummary = (e) => {
        this.setState({
            workSummary_MouseSign: true,
        })
    }
    onMouseOutworkSummary = (e) => {
        this.setState({
            workSummary_MouseSign: false,
        })
    }

    // 点击选中 打印条码
    ClickPrintBarcode = (e) => {
        this.setState({
            PrintBarcode_Sign: true,
        });
    }
    ClosePrintBarcode = (e) => {
        this.setState({
            PrintBarcode_Sign: false,
        });
    }
    //  鼠标移入 
    onMousePrintBarcode = (e) => {
        this.setState({
            PrintBarcode_MouseSign: true,
        })
    }
    onMouseOutPrintBarcode = (e) => {
        this.setState({
            PrintBarcode_MouseSign: false,
        })
    }


    //点击菜单区二级菜单隐藏只显示子域内容
    hiddenMenuButton = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu
        })
        // this.props.dispatch({
        //     type: 'statecheck/HSMenu'
        // })
    }

    render() {
        let { storage_Sign, storage_MouseSign, Queryoutbound_Sign, Queryoutbound_MouseSign, check_Sign, check_MouseSign,
            Supplementary_Sign, Supplementary_MouseSign, warning_Sign, warning_MouseSign, PeriodMaximum_Sign,
            PeriodMaximum_MouseSign, productCycle_Sign, productCycle_MouseSign, PN_Management_Sign, PN_Management_MouseSign,
            technicalFile_Sign, technicalFile_MouseSign, StorageArea_Sign, StorageArea_MouseSign, viewLog_Sign, viewLog_MouseSign,
            productControl_Sign, productControl_MouseSign, IndividualManagement_Sign, IndividualManagement_MouseSign, workSummary_Sign,
            workSummary_MouseSign, PrintBarcode_Sign, PrintBarcode_MouseSign } = this.state;
        return (
            <>
                <div className={styles.Menu} style={{ height: this.state.hiddenmenu ? '109px' : '30px' }}>
                    {/* 二级菜单 */}
                    <div style={{ float: 'left' }}>
                        {/* 二级菜单子项 */}

                        <div className={styles.AllMenuButton}>
                            {/* 备件管理 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 入库 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: storage_Sign || storage_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickStorage}
                                            onMouseEnter={this.onMouseStorage}
                                            onMouseLeave={this.onMouseOutStorage}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u92} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: storage_Sign ? "#56AFFF" : "#BBC4DA" }}>入库</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 查询与出库 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Queryoutbound_Sign || Queryoutbound_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickQueryoutbound}
                                            onMouseEnter={this.onMouseQueryoutbound}
                                            onMouseLeave={this.onMouseOutQueryoutbound}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u95} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Queryoutbound_Sign ? "#56AFFF" : "#BBC4DA" }}>查询与出库</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 盘点 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: check_Sign || check_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickCheck}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseCheck}
                                            onMouseLeave={this.onMouseOutCheck}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u103} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: check_Sign ? "#56AFFF" : "#BBC4DA" }}>盘点</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 备件申请记录 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: Supplementary_Sign || Supplementary_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickSupplementary}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseSupplementary}
                                            onMouseLeave={this.onMouseOutSupplementary}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u130} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: Supplementary_Sign ? "#56AFFF" : "#BBC4DA" }}>备件申请记录</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 库存预警 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: warning_Sign || warning_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickWarning}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseWarning}
                                            onMouseLeave={this.onMouseOutWarning}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u147} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: warning_Sign ? "#56AFFF" : "#BBC4DA" }}>库存预警</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>备件管理</span>
                                </div>
                            </div>

                            {/* 消耗统计 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 周期-最多 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: PeriodMaximum_Sign || PeriodMaximum_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickPeriodMaximum}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousePeriodMaximum}
                                            onMouseLeave={this.onMouseOutPeriodMaximum}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u134} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: PeriodMaximum_Sign ? "#56AFFF" : "#BBC4DA" }}>周期-最多</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 产品-周期 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: productCycle_Sign || productCycle_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickproductCycle}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseproductCycle}
                                            onMouseLeave={this.onMouseOutproductCycle}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u137} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: productCycle_Sign ? "#56AFFF" : "#BBC4DA" }}>产品-周期</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>消耗统计</span>
                                </div>
                            </div>

                            {/* 信息管理 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* PN管理 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: PN_Management_Sign || PN_Management_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickPN_Management}
                                            onMouseEnter={this.onMousePN_Management}
                                            onMouseLeave={this.onMouseOutPN_Management}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u99} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: PN_Management_Sign ? "#56AFFF" : "#BBC4DA" }}>PN管理</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 技术文档 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: technicalFile_Sign || technicalFile_MouseSign ? "#141F3E" : "#25345D" }}
                                            className={styles.backcolor}
                                            onClick={this.ClickTechnicalFile}
                                            onMouseEnter={this.onMouseTechnicalFile}
                                            onMouseLeave={this.onMouseOutTechnicalFile}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u109} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: technicalFile_Sign ? "#56AFFF" : "#BBC4DA" }}>技术文档</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 备件存放地 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: StorageArea_Sign || StorageArea_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickStorageArea}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseStorageArea}
                                            onMouseLeave={this.onMouseOutStorageArea}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u112} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: StorageArea_Sign ? "#56AFFF" : "#BBC4DA" }}>备件存放地</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 查看日志 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: viewLog_Sign || viewLog_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickviewLog}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseviewLog}
                                            onMouseLeave={this.onMouseOutviewLog}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u106} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: viewLog_Sign ? "#56AFFF" : "#BBC4DA" }}>查看日志</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>信息管理</span>
                                </div>
                            </div>

                            {/* 工具管理 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>

                                    {/* 个体管理 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: IndividualManagement_Sign || IndividualManagement_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickIndividualManagement}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseIndividualManagement}
                                            onMouseLeave={this.onMouseOutIndividualManagement}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u123} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: IndividualManagement_Sign ? "#56AFFF" : "#BBC4DA" }}>个体管理</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 产品管理 */}
                                    <div className={styles.menuButton}>
                                        <div
                                            style={{ background: productControl_Sign || productControl_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickproductControl}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseproductControl}
                                            onMouseLeave={this.onMouseOutproductControl}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u127} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: productControl_Sign ? "#56AFFF" : "#BBC4DA" }}>产品管理</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.childrenName} style={{ height: '30px' }}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>工具管理</span>
                                </div>
                            </div>

                            {/* 阶段工作总结 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 菜单按钮 */}
                                    <div className={styles.menuButton}>

                                        <div
                                            style={{ background: workSummary_Sign || workSummary_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickworkSummary}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMouseworkSummary}
                                            onMouseLeave={this.onMouseOutworkSummary}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u117} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: workSummary_Sign ? "#56AFFF" : "#BBC4DA" }}>阶段工作总结</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>工作汇报</span>
                                </div>
                            </div>

                            {/* 打印条码 */}
                            <div style={{ float: 'left', height: this.state.hiddenmenu ? '109px' : '30px' }}>
                                <div className={styles.singlemenu} hidden={!this.state.hiddenmenu}>
                                    {/* 菜单按钮 */}
                                    <div className={styles.menuButton}>

                                        <div
                                            style={{ background: PrintBarcode_Sign || PrintBarcode_MouseSign ? "#141F3E" : "#25345D" }}
                                            onClick={this.ClickPrintBarcode}
                                            className={styles.backcolor}
                                            onMouseEnter={this.onMousePrintBarcode}
                                            onMouseLeave={this.onMouseOutPrintBarcode}
                                        >
                                            <div style={{ cursor: 'pointer' }} >
                                                <img src={u144} style={{ height: "28px", width: "28px" }} alt="图片" />
                                            </div>
                                            <div className={styles.menuName}>
                                                <span style={{ cursor: 'pointer', color: PrintBarcode_Sign ? "#56AFFF" : "#BBC4DA" }}>打印条码</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.childrenName}>
                                    <span style={{ fontFamily: "微软雅黑", fontSize: "12px", color: "#909cb9" }}>小工具</span>
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

                {
                    storage_Sign ?
                        <Storage
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                        />
                        : null
                }
                {
                    Queryoutbound_Sign ?
                        <Queryoutbound
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                        /> : null
                }
                {
                    check_Sign ? <Check /> : null
                }
                {
                    Supplementary_Sign ? <SpareSupplementary /> : null
                }
                {
                    warning_Sign ?
                        <Warning
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                        />
                        : null
                }



                {
                    PeriodMaximum_Sign ? <PeriodMaximum /> : null
                }

                {
                    productCycle_Sign ?
                        <ProductCycle
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                        />
                        : null
                }


                {
                    PN_Management_Sign ?
                        <PNManagement
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                        />
                        : null
                }

                {
                    technicalFile_Sign ?
                        <TechnicalFile
                            choicePNDetail={this.props.sparepartmodal.choisePNData}
                            pnsign={this.props.sparepartmodal.pnsign}
                        />
                        : null
                }
                {
                    StorageArea_Sign ? <StorageArea /> : null
                }

                {
                    viewLog_Sign ? <ViewLog /> : null
                }


                {
                    productControl_Sign ? <ProductControl /> : null
                }

                {
                    IndividualManagement_Sign ? <IndividualManagement /> : null
                }


                {
                    workSummary_Sign ? <WorkSummary /> : null
                }
                {
                    PrintBarcode_Sign ?
                        <PrintBarcode
                            index={12}
                            zIndex={12}
                            changeIndex={this.changeIndex}
                            closeWinodow={this.ClosePrintBarcode}
                            visible={this.state.PrintBarcode_Sign}
                        />
                        : null
                }
            </>
        )
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
}
