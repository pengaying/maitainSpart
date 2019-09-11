
import React, { Component } from 'react';
import styles from "./index.less";
import defaultLight from '../assets/grayLight.png'//灰灯
// import redLight from '../assets/redLight.png'//红灯  
// import greenLight from '../assets/greenLight.png'//绿灯 
import { Icon } from 'antd';


export default class StateLight extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <>
                <div className={styles.field}>
                    <div className={styles.fieldTitle}>
                        状态
                    </div>
                    <div className={styles.fieldContent}>
                        <div className={styles.Button_Control_Seventeen}>
                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} onClick={this.ShowAirCondition} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>空调</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>油机</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>调平</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>UPS</div>
                            </div>

                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.span_section_top}>定位设备</div>
                            </div>

                        </div>
                    </div>
                </div>


                {
                    this.state.AirCondition ?
                        <AirConditionState close={this.HiddenAirCondition} />
                        :
                        null
                }

            </>
        )
    }


    ShowAirCondition = () => {
        this.setState({
            AirCondition: true
        })
    }
    HiddenAirCondition = () => {
        this.setState({
            AirCondition: false
        })
    }
}


class AirConditionState extends Component {
    constructor(props) {
        super(props);
        this.staet = {

        }
    }

    render() {
        return (
            <div style={{ float: 'left' }}>
                <div className={styles.LayoutSide_title}>
                    空调自检详细状态
                    <div style={{ float: 'right', padding: '2px 10px 0 0' }}>
                        <span style={{ cursor: 'pointer' }} onClick={this.props.close}><Icon type="close" style={{ fontSize: '18px' }} /></span>
                    </div>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldTitle}>
                        报警
                     </div>
                    <div className={styles.fieldContent}>
                        <div className={styles.Button_Control_Seventeen}>
                            <div className={styles.Button_Control_Seventeen}>
                                <div className={styles.ButtonImages_div}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>RT1室内温度传感器断开</span>
                                </div>
                                <div className={styles.ButtonImages_div}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>线控板和主控板通信失败</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>过热保护</span>
                                </div>
                                <br />
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>超温保护</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>压力保护</span>
                                </div>
                                <br />
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>冻结保护</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>电源故障</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldTitle}>
                        状态回报
                        </div>
                    <div className={styles.fieldContent}>
                        <div className={styles.Button_Control_Seventeen}>
                            <div className={styles.Button_Control_Seventeen}>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>设定模式:</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>运行模式:</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>设定风速:</span>
                                </div>
                                <br />
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>运行风速:</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldTitle}>
                        温度回报
                        </div>
                    <div className={styles.fieldContent}>
                        <div className={styles.Button_Control_Seventeen}>
                            <div className={styles.Button_Control_Seventeen}>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>环境温度:</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>排气温度:</span>
                                </div>
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>盘管温度:</span>
                                </div>
                                <br />
                                <div className={styles.ButtonImages5}>
                                    <img src={defaultLight} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>设定温度:</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}