import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Table, Form } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
class StorageFormIn extends Component {
  constructor(props) {
    super();
    this.state = {

    }

  }
  render() {
    const { TextArea } = Input;

    const EColumns = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '7%',
      },
      {
        title: '所属分机名称',
        dataIndex: 'Extensionname', key: 'Extensionname',
        width: '19%',
      },
      {
        title: '所属分机型号',
        width: '13%',
        dataIndex: 'Extensiontype', key: 'Extensiontype',
      }, {
        title: '状态所属子系统名称',
        width: '19%',
        dataIndex: 'Subsystemname', key: 'Subsystemname',
      }, {
        title: '所属子系统型号',
        width: '13%',
        dataIndex: 'Subsystemmodel', key: 'Subsystemmodel',
      }, {
        title: '所属整机名称',
        width: '18%',
        dataIndex: 'Machinename', key: 'Machinename',
      }, {
        title: '所属整机型号',
        //   width: '18%',
        dataIndex: 'Machinemodel', key: 'Machinemodel',
      }
    ];


    let ETabledata = [];

    for (let i = 0; i < 10; i++) {
      ETabledata.push({
        key: i + 1,
        Extensionname: '信号处理分机',
        Extensiontype: 'S816-1',
        Subsystemname: '信号处理分系统',
        Subsystemmodel: 'S86-6',
        Machinemodel: 'S86',
        Machinename: '信号处理',
      });
    }

    // let sndata = this.props.sparepartmodal.ViewSnTableData;
    // if (sndata != null && sndata.length !== 0) {//获取到的SN列表值
    //     for (let i = 0; i < sndata.length; i++) {
    //         SNTabledata.push({
    //             key: i + 1,
    //             SprreSN: sndata[i].name,
    //             state: sndata[i].name,
    //         });
    //     }
    // }

    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
      },
      wrapperCol: {
        span: 7
      },
    };
    const formItemLayoutRemark = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
    };
    return (
      <Dialog
        visible={this.props.visible}
        title='入库表单'
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closeWinodow}
      >
        <div className="popup_s_confirm_box">
          <div style={{ width: '700px' }}>
            <Form className={styles.myBandForm}>
              <div className={styles.layoutContent}>

                <div className={styles.field}>
                  <div className={styles.fieldTitle}>基本信息</div>
                  <div className={styles.fieldContent}>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='流水单号'>
                          {getFieldDecorator('id', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <span style={{ marginRight: '10px' }}>被单类型:</span>
                        <Input value={'入库'} style={{ width: '200px' }} />
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='备件PN'>
                          {getFieldDecorator('pn', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='备件SN'>
                          {getFieldDecorator('sn', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='备件名称'>
                          {getFieldDecorator('name', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='备件状态'>
                          {getFieldDecorator('state', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='经手人:'>
                          {getFieldDecorator('people', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='存放位置:'>
                          {getFieldDecorator('location', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                    <div className={styles.contentPN}>
                      <div className={styles.InputStyle}>
                        <Form.Item  {...formItemLayout} label='生成日期:'>
                          {getFieldDecorator('time', {
                            initialValue: '',
                          })(
                            <Input style={{ width: '200px' }} />
                          )}
                        </Form.Item>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={styles.layoutContent}>
                <div className={styles.field}>
                  <div className={styles.fieldTitle}>所属装备列表</div>
                  <div className={styles.fieldContent}>
                    <div className={styles.bodyCss}>
                      <Table
                        bordered
                        columns={EColumns}
                        dataSource={ETabledata}
                        pagination={false}
                        className={styles.mynoiseClass}
                        scroll={{ y: 107 }}
                        rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.TextAreaContent}>
                <div className={styles.TextAreaStyle}>
                  <Form.Item  {...formItemLayoutRemark} label='故障原因:'>
                    {getFieldDecorator('reason', {
                      initialValue: '',
                    })(
                      <TextArea rows={7} />
                    )}
                  </Form.Item>
                </div>
              </div>

              <div className={styles.TextAreaContent}>
                <div className={styles.TextAreaStyle}>
                  <Form.Item  {...formItemLayoutRemark} label='说明:'>
                    {getFieldDecorator('remarks', {
                      initialValue: '',
                    })(
                      <TextArea rows={7} />
                    )}
                  </Form.Item>
                </div>
              </div>

            </Form>

            <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                <Button type="primary" onClick={this.ClickChoicePN}>备件补充</Button>
              </div>
              <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                <Button type="primary" onClick={this.ClickChoicePN}>确认</Button>
              </div>
            </div>

          </div>
        </div>
      </Dialog>
    )
  }

  TableClickMA = () => {
    this.props.dispatch({
      type: 'sparepartmodal/ClickMaintainApply'
    })
  }
  TableClickMR = () => {
    this.props.dispatch({
      type: 'sparepartmodal/ClickMaintainRercord'
    })
  }

  TableClickDR = () => {
    this.props.dispatch({
      type: 'sparepartmodal/ClickDetectionRecord'
    })
  }

  TableClickCC = () => {
    //     this.props.dispatch({
    //         type: 'sparepartmodal/ClickContain'
    //     })
  }

  // TableCloseCC = () => {
  //     this.props.dispatch({
  //         type: 'sparepartmodal/CloseContain'
  //     })
  // }



}


StorageFormIn = Form.create({

  mapPropsToFields(props) {
    // console.log('props=====', props);
    if (props.DetailView != null) {
      return {
        id: Form.createFormField({
          ...props,
          value: props.DetailView.id,
        }),
        pn: Form.createFormField({
          ...props,
          value: props.DetailView.pn,
        }),
        sn: Form.createFormField({
          ...props,
          value: props.DetailView.sn,
        }),
        name: Form.createFormField({
          ...props,
          value: props.DetailView.name,
        }),
        state: Form.createFormField({
          ...props,
          value: props.DetailView.state,
        }),
        people: Form.createFormField({
          ...props,
          value: props.DetailView.people,
        }),
        time: Form.createFormField({
          ...props,
          value: props.DetailView.time,
        }),
        reason: Form.createFormField({
          ...props,
          value: props.DetailView.reason,
        }),
        remarks: Form.createFormField({
          ...props,
          value: props.DetailView.remarks,
        }),
      };
    }
  }

})(StorageFormIn);
export default connect()(StorageFormIn);