import React, { Component, Fragment } from 'react';
import Draggable from "react-draggable";
import styles from "./index.less";
// import defaultLight from '../assets/grayLight.png'//灰灯
// import TabToggle from '../DockeAreaMessage/TabToggle';
import StateLight from './StateLight';
import ComondControl from './ComondControl';
import ScheduledTask from './ScheduledTask';
// import redLight from '../assets/redLight.png'//红灯  
// import greenLight from '../assets/greenLight.png'//绿灯 
import {Icon} from 'antd';
import { connect } from 'dva';

@connect(({ windowModal }) => ({ windowModal }))
export default class LayoutSide extends Component {
    constructor(props){
        super(props);
        this.state={
            value: "1",
            tab1sign: true,//判断TAb切换至那个选项卡
            tab1fontcolor: "#1fa7fe",

            tab2sign: false,
            tab2fontcolor: "#666666",
            tab3sign: false,
            tab3fontcolor: "#666666",

            Layoutside_sign:false,//侧边兰显隐状态  true隐藏，false显示
        }
    }

    // 装备状态点击选中
    ChangeTab1 = (e) => {
        this.setState({
            value: "1",
            tab1sign: true,
            tab2sign: false,
            tab3sign: false,

            tab1fontcolor: "#1fa7fe",
            tab2fontcolor: "#666666 ",
            tab3fontcolor: "#666666",
        });

        this.props.dispatch({
            type:'windowModal/ChooseEquipment'
        })
    }
    // 计划任务 点击选中
    ChangeTab2 = (e) => {
        this.setState({
            value: "2",
            tab1sign: false,
            tab2sign: true,
            tab3sign: false,

            tab1fontcolor: "#666666",
            tab2fontcolor: "#1fa7fe ",
            tab3fontcolor: "#666666",
        });
        this.props.dispatch({
            type:'windowModal/ChooseScheduledTask'
        })
    }
    // 指挥控制 点击选中
    ChangeTab3 = (e) => {
        this.setState({
            value: "3",
            tab1sign: false,
            tab3sign: true,
            tab2sign: false,

            tab1fontcolor: "#666666",
            tab3fontcolor: "#1fa7fe ",
            tab2fontcolor: "#666666",
        });
        this.props.dispatch({
            type:'windowModal/ChooseCommandControl'
        })
    }

    onMouseOver1 = (e) => {
        this.setState({
            tab1fontcolor: "#1fa7fe"
        })
    }
    onMouseOver2 = (e) => {
        this.setState({
            tab2fontcolor: "#1fa7fe"
        })
    }
    onMouseOver3 = (e) => {
        this.setState({
            tab3fontcolor: "#1fa7fe"
        })
    }

    // 鼠标移出菜单栏事件
    onMouseOut = (e) => {
        if (this.state.value === "1") {
            this.setState({
                tab1background: "#edf2f8",
                tab1fontcolor: "#1fa7fe",


                tab2background: "",
                tab2fontcolor: "#666666 ",

                tab3background: "",
                tab3fontcolor: "#666666",
            })
        }
        else if (this.state.value === "2") {
            this.setState({
                tab1background: "",
                tab1fontcolor: "#666666",

                tab2background: "#edf2f8",
                tab2fontcolor: "#1fa7fe",

                tab3background: "",
                tab3fontcolor: "#666666",
            })
        }

        else if (this.state.value === "3") {
            this.setState({
                tab1background: "",
                tab1fontcolor: "#666666",

                tab2background: "",
                tab2fontcolor: "#666666",

                tab3background: "#edf2f8",
                tab3fontcolor: "#1fa7fe",
            })
        }

        else {
            this.setState({
                tab1background: "",
                tab1fontcolor: "#666666",

                tab2background: "",
                tab2fontcolor: "#666666",

                tab3background: "",
                tab3fontcolor: "#666666",
            })
        }
    }
    CloseLayoutside = ()=>{
       this.props.dispatch({
           type:'windowModal/closeLayoutside'
       })
    }
    render() {
        return (
            <Fragment>
                {/* 系统状态显示区 */}
                <Draggable bounds="#spare">
                    <div className={styles.LayoutSide} 
                        hidden={!(this.props.windowModal.showEquipmentState || this.props.windowModal.showCommandControl||
                        this.props.windowModal.showScheduledTask)}
                    >
                        {/* 装备状态 */}
                        <div className={styles.LayoutSide_title}>
                            {
                                this.props.windowModal.showLayoutSide === 'EquipmentState' ? "装备状态":
                                this.props.windowModal.showLayoutSide === 'ScheduledTask' ? "计划任务":
                                this.props.windowModal.showLayoutSide === 'CommandControl' ? "指挥控制":
                                null
                            }
                            <div style={{float:'right',padding:'2px 10px 0 0'}}>
                                <span style={{cursor:'pointer'}} onClick={this.CloseLayoutside}><Icon type="close"  style={{ fontSize: '18px'}} /></span>
                            </div>
                        </div>
                            
                        <div className={styles.tabContent}>
                            <div style={{
                                display: this.props.windowModal.showLayoutSide === 'EquipmentState'? 'block' : 'none',
                            }}>
                                <StateLight />
                            </div>
                            <div style={{
                                display: this.props.windowModal.showLayoutSide === 'ScheduledTask'  ? 'block' : 'none',
                            }}>
                                <ScheduledTask />
                            </div>
                            <div style={{
                                display: this.props.windowModal.showLayoutSide === 'CommandControl' ? 'block' : 'none',
                            }}>
                                <ComondControl />
                            </div>
                        </div>
                        <div className={styles.bottom_toggle}>                            
                              <div className={styles.tab}>
                                <ul>
                                    {
                                        this.props.windowModal.showEquipmentState ?
                                        <li
                                            id="1"
                                            onClick={this.ChangeTab1}
                                            onMouseEnter={this.onMouseOver1}
                                            onMouseLeave={this.onMouseOut}
                                            style={{
                                                color: this.props.windowModal.showLayoutSide === 'EquipmentState' ? '#1fa7fe' :'#666666',
                                            }}
                                            className={this.props.windowModal.showLayoutSide === 'EquipmentState' ? styles.tabChooseBkColor :null}
                                        >
                                            装备状态
                                        </li>
                                        : null
                                    }
                                    {
                                        this.props.windowModal.showScheduledTask ?
                                        <li
                                            id="2"
                                            onClick={this.ChangeTab2}
                                            onMouseEnter={this.onMouseOver2}
                                            onMouseLeave={this.onMouseOut}
                                            style={{
                                                color: this.props.windowModal.showLayoutSide === 'ScheduledTask' ? '#1fa7fe' :'#666666',
                                            }}
                                            className={this.props.windowModal.showLayoutSide === 'ScheduledTask' ? styles.tabChooseBkColor :null}
                                        >
                                            计划任务
                                        </li>
                                        : null
                                    }
                                    {
                                        this.props.windowModal.showCommandControl ?
                                        <li
                                            id="3"
                                            onClick={this.ChangeTab3}
                                            onMouseEnter={this.onMouseOver3}
                                            onMouseLeave={this.onMouseOut}
                                            style={{
                                                color: this.props.windowModal.showLayoutSide === 'CommandControl' ? '#1fa7fe' :'#666666',
                                            }}
                                            className={this.props.windowModal.showLayoutSide === 'CommandControl' ? styles.tabChooseBkColor :null}
                                            >
                                            指挥控制
                                        </li>
                                        : null
                                    }
                                </ul>
                            </div>

                        </div>

                    </div>
                </Draggable>
            </Fragment>
        )
    }
}
