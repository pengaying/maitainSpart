
import React, { Component } from 'react';
import { Button, Table, Select, DatePicker } from 'antd';
import styles from './Storage.less';
import CheckSetting from './../../Dialog/SpareDialog/CheckPoint/CheckSetting';
import CheckDetail from './../../Dialog/SpareDialog/CheckPoint/CheckDetail';
import CheckAbstract from './../../Dialog/SpareDialog/CheckPoint/CheckAbstract';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CheckPointerState: false,//点击盘点显示弹窗的标志位 false隐藏
      ViewState: false,//点击盘点显示弹窗的标志位 false隐藏
      dateString: '',//  日期选择 
      CheckState: '',// 盘点状态选择

      Deleteid: null,// 盘点选择删除


    }
  }

  componentDidMount() {
    this.props.dispatch({//初始化表格数据
      type: 'sparepartmodal/CheckTableInit'
    })
  }

  render() {
    // const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    const columns = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '10%',
      },
      {
        title: '生成日期',
        dataIndex: 'creationdate', key: 'creationdate',
        width: '25%',
      },
      {
        title: '盘点人',
        width: '17%',
        dataIndex: 'inventory', key: 'inventory',
      }, {
        title: '盘点比例',
        width: '15%',
        dataIndex: 'Inventoryratio', key: 'Inventoryratio',
      }, {
        title: '盘点状态',
        width: '12%',
        dataIndex: 'Inventorystate', key: 'Inventorystate',
      }, {
        title: '详情',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <div style={{ display: 'inline-block' }}>
            <span style={{ color: '#2376c1', margin: '0 10px 0 0', cursor: 'pointer' }} onClick={() => this.handleClickLook(record)}>查看</span>
            <span style={{ color: '#e83c53', cursor: 'pointer' }} onClick={() => this.ClickDeleteCol(record.key)} >删除</span>
          </div>
        )
      }];

    let Tabledata = [];
    let tabledata = this.props.sparepartmodal.checkTableInitData;//盘点表格数据
    if (tabledata != null && tabledata.length !== 0) {
      for (let i = 0; i < tabledata.length; i++) {
        Tabledata.push({
          key: tabledata[i].id,
          creationdate: tabledata[i].time,
          inventory: tabledata[i].people,
          Inventoryratio: tabledata[i].proportion,
          Inventorystate: tabledata[i].state,
        });
      }
    }

    const rowSelection = {//选择复选框
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          Deleteid: selectedRowKeys
        })
      },
      // getCheckboxProps: record => ({
      //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
      //   name: record.name,
      // }),
    };
    const Option = Select.Option;
    return (
      <>
        <div className={styles.CenterContent}>
          <div className={styles.CenterContentTitle}>
            盘点
          </div>

          <div className={styles.tableContent}>
            <div className={styles.tableStyle}>

              <div style={{ textAlign: 'center', height: '32px', margin: '0 0 10px 0' }}>
                <div style={{ float: 'left', width: '15%' }}>
                  <Button onClick={this.ClickDelete} type="primary">删除</Button>
                </div>
                <div style={{ float: 'left', width: '75%' }}>
                  <div className={styles.Datepicker}>
                    <span style={{ marginRight: '10px' }}>日期选择:</span>
                    <DatePicker showTime onChange={this.onChange} />
                  </div>
                  <div className={styles.Datepicker}>
                    <span style={{ marginRight: '10px' }}>盘点状态:</span>
                    <Select onChange={this.changeCheckState} defaultValue='盘点完成' style={{ width: '50%' }}>
                      <Option value='草稿'>草稿</Option>
                      <Option value='盘点完成'>盘点完成</Option>
                    </Select>
                  </div>
                </div>
                <div style={{ float: 'right', margin: '0 10px 0 0' }}>
                  <Button onClick={this.ClickCheck} type="primary">盘点</Button>
                </div>
              </div>

              {/* 库存信息列表 */}
              <div className={styles.bodyCss_query}>
                <Table
                  bordered
                  columns={columns}
                  dataSource={Tabledata}
                  rowSelection={rowSelection}
                  pagination={{ pageSize: 11 }}
                  className={styles.mynoiseClassQuery}
                  scroll={{ x: 950 }}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>
            </div>
          </div>

        </div>

        {/* 盘点设置 */}
        {
          this.state.CheckPointerState ?
            <CheckSetting
              index={12}
              zIndex={12}
              changeIndex={this.changeIndex}
              closeWinodow={this.CloseCheck}
              visible={this.state.CheckPointerState}
            />
            : null
        }
        {/* 查看详情 */}
        {
          this.state.ViewState ?
            <CheckDetail
              index={12}
              zIndex={12}
              changeIndex={this.changeIndex}
              closeWinodow={this.handleCloseLook}
              visible={this.state.ViewState}
            />
            : null
        }
        {/* 盘点摘要 */}
        {
          this.props.sparepartmodal.CheckPointerAbstract ?
            <CheckAbstract
              DetailData={this.props.sparepartmodal.CheckPointerAbstractData}
              index={12}
              zIndex={12}
              changeIndex={this.changeIndex}
              closeWinodow={this.CloseCheckPointerAbstract}
              visible={this.props.sparepartmodal.CheckPointerAbstract}
            />
            : null
        }

      </>
    )
  }
  // 改变弹窗层级事件控制对话框层级
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

  // 点击盘点
  ClickCheck = () => {
    this.setState({
      CheckPointerState: true
    })
  }
  CloseCheck = () => {
    this.setState({
      CheckPointerState: false
    })
  }

  // 点击查看
  handleClickLook = (key) => {
    this.setState({
      ViewState: true
    })
    this.props.dispatch({
      type: 'sparepartmodal/ViewAsyncKey',
      payload: key
    });
  }
  handleCloseLook = () => {
    this.setState({
      ViewState: false
    })
  }
  // 关闭盘点摘要
  CloseCheckPointerAbstract = () => {
    this.props.dispatch({
      type: 'sparepartmodal/closeCheckPointerAbstract'
    })
  }

  // 点击删除(多行删除)
  ClickDelete = () => {
    let data = this.state.Deleteid;
    console.log('data=======', data)
    // console.log('param=======', typeof data[0]);
    if (data != null) {
      this.props.dispatch({
        type: 'sparepartmodal/DeleteCheckMulti',
        payload: data
      })
    }

  }

  // 表格中的单行删除
  ClickDeleteCol = (key) => {
    // let data = ;
    this.props.dispatch({
      type: 'sparepartmodal/DeleteCheckCol',
      payload: key
    })
  }


  // 日期选择 筛选表格
  onChange = (date, dateString) => {
    // console.log('date========', date, 'dateString========', dateString);
    let data = [{ time: dateString }];
    if (this.state.CheckState != '') {
      data[0].state = this.state.CheckState;
    }
    this.setState({
      dateString: dateString
    })
    console.log(data)
    // this.props.dispatch({ 
    // 筛选日期
    //   type: 'sparepartmodal/ChooiceCheckTable',
    //   payload: date
    // })
  }
  // 盘点状态下拉选择 筛选状态
  changeCheckState = (value) => {
    let data = [{ state: value }];
    if (this.state.dateString != '') {
      data[0].time = this.state.dateString;
    }
    this.setState({
      CheckState: value
    })
    console.log(data)
    // this.props.dispatch({ 
    // 筛选状态
    //   type: 'sparepartmodal/ChooiceCheckTable',
    //   payload: date
    // })
  }

}
