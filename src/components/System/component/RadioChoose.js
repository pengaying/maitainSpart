import React, { Component } from 'react';
import styles from "./systemPublic.less";
import { Radio, Form,  } from 'antd';
// import { connect } from 'dva';

// @connect(({ statecheck, CacheData }) => ({ statecheck, CacheData }))

export default class RadioChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioWorkValue: 0,//默认选择的工作模式
            sign: "0",//判断是否点击了工作模式按钮
            singlebkcolor: "#25345D",//工作模式默认背景色
        }
    }

    //工作模式单选按钮
    onMouseOver8 = (e) => {
        this.setState({
            singlebkcolor: "#141F3E",
            singlefontcolor: "#56AFFF"
        })
    }

    // 鼠标移出菜单栏事件
    onMouseOut = (e) => {
        this.setState({
            singlebkcolor: "#25345D",
            singlefontcolor: "#BBC4DA"
        })
    }

    //工作模式选择
    // onChangeWork = (e) => {
    //     axios({
    //         method: 'post',
    //         url: "http://localhost:6611/send/launchModeOperation",
    //         params: { inValue: e.target.value }
    //     }).catch(error => console.log('error is', error));
    // }

    // onClickWork = (e) => { // 判断收发间隔工作模式
    //     let sign=this.props.statecheck.RadiotateWork  != null && this.props.statecheck.RadiotateWork !== undefined && this.props.statecheck.RadiotateWork !== -1? Number(this.props.statecheck.RadiotateWork):null;
    //     if(Number(e.target.value) === sign){
    //         this.onChangeWork(e);
    //     }
    // }

    render() {
        const RadioGroup = Radio.Group;
        const { form } = this.props;
        const { getFieldDecorator } = form;

        return (
            <div className={styles.menuRadioButton}>
                    <Form onSubmit={this.handleSubmit} className={styles.myBandForm}>
                        <div className={styles.backcolor_radio}
                            style={{ background: this.state.singlebkcolor }}
                            onMouseEnter={this.onMouseOver8}
                            onMouseLeave={this.onMouseOut}
                        >
                            <Form.Item >
                                {getFieldDecorator('radioWorkControl', { initialValue: 0 })(
                                    <RadioGroup className={styles.myradioClass}  onChange={this.onChangeWork}>
                                        <div>
                                            <Radio
                                                value={0}
                                                defaultChecked
                                                style={{ color: this.props.form.getFieldValue("radioWorkControl") === 0 ? "#56AFFF" : "#BBC4DA" }}
                                                onClick={this.onClickWork}
                                            >
                                                自动
                                            </Radio>
                                        </div>

                                        <div style={{float:'left',margin:'10px 0 0 0'}}>
                                            <Radio
                                                value={1}
                                                onClick={this.onClickWork}
                                                style={{ color: this.props.form.getFieldValue("radioWorkControl") === 1 ? "#56AFFF" : "#BBC4DA" }}
                                            >
                                                人工
                                            </Radio>
                                        </div>
                                    </RadioGroup>
                                )}
                            </Form.Item>
                        </div>
                    </Form>
                </div>
        )
    }
}
RadioChoose = Form.create({

    mapPropsToFields(props) {
        // if (props.radioState != null && props.radioState !== undefined) {
        //     return {
        //         radioWorkControl: Form.createFormField({
        //             ...props,
        //             value: props.radioState != null && props.radioState !== undefined && props.radioState !== -1 ? Number(props.radioState) : 0,
        //         }),
        //     };
        // }
    }

})(RadioChoose);