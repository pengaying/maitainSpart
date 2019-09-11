import React, { Component } from 'react';
import Dialog from '../Dialog';
import { Form, Button, Select } from 'antd';
import styles from './PublicDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class ChoiceEquip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pnsign: null
    }
  }

  render() {
    const Option = Select.Option;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        // span: 8
      },
      wrapperCol: {
        span: 7
      },
    };

    return (
      <Dialog
        visible={this.props.visible}
        title='选择装备'
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closeWinodow}
      >
        <div className='popup_s_confirm_box'>
          <div style={{ width: '300px' }}>
            <div style={{ float: 'left', width: '100%' }}>
              {/* 产品型号列表 */}
              <Form className={styles.myBandForm}>
                <div className={styles.ChoisePNSelectDiv}>
                  <div style={{ float: 'right' }}>
                    <Form.Item  {...formItemLayout} label='所属整机:'>
                      {getFieldDecorator('brand', {
                        initialValue: '1',
                      })(
                        <Select style={{ width: '150px' }}>
                          <Option value='1'>所属整机</Option>
                          <Option value='2'>所属子系统</Option>
                          <Option value='3'>所属分机</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.ChoisePNSelectDiv}>
                  <div style={{ float: 'right' }}>
                    <Form.Item  {...formItemLayout} label='所属子系统:'>
                      {getFieldDecorator('name', {
                        initialValue: '1',
                      })(
                        <Select style={{ width: '150px' }}>
                          <Option value='1'>所属整机</Option>
                          <Option value='2'>所属子系统</Option>
                          <Option value='3'>所属分机</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div className={styles.ChoisePNSelectDiv}>
                  <div style={{ float: 'right' }}>
                    <Form.Item  {...formItemLayout} label='所属分机:'>
                      {getFieldDecorator('category', {
                        initialValue: '1',
                      })(
                        <Select style={{ width: '150px' }}>
                          <Option value='1'>所属整机</Option>
                          <Option value='2'>所属子系统</Option>
                          <Option value='3'>所属分机</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                    <Button type='primary'>重置</Button>
                  </div>
                  <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                    <Button onClick={this.ClickFilter} type='primary'>筛选</Button>
                  </div>
                </div>

              </Form>
            </div>
          </div>
        </div>
      </Dialog>
    )
  }


  ClickFilter = () => {
    // let { brand, category,model, name } = this.state;
    let values = this.props.form.getFieldsValue();
    console.log("values=====", values)
    // if (values.pn != null && values.pn !== undefined && values.pn !== '') {
    // this.props.dispatch({
    //   type: 'sparepartmodal/PNChoiceFilter',
    //   payload: values
    // })
    // }
  }
  ClickOk = () => {
    if (this.state.pnsign != null && this.state.pnsign.length !== 0) {
      this.props.dispatch({
        type: 'sparepartmodal/PNChoiceConfirm',
        payload: this.state.pnsign
      })
    }
  }

}


ChoiceEquip = Form.create({

  mapPropsToFields(props) {
    // console.log('props=====', props);
    // if (props.WaveData != null || props.WaveData !== undefined) {
    //     if (props.WaveData.length !== 0) {
    //         return {
    //             dopplerShift: Form.createFormField({
    //                 ...props,
    //                 value: props.WaveData.dopplerShift,
    //             }),
    //             frequency: Form.createFormField({
    //                 ...props,
    //                 value: props.WaveData.frequency,
    //             }),
    //         };
    //     }
    // }
  }

})(ChoiceEquip);
export default connect()(ChoiceEquip);

