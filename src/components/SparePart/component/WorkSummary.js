import React, { Component } from 'react'
import styles from './Storage.less';
import { Button, Table } from 'antd';
import SpareTaskSummary from './../../Dialog/SpareDialog/WorkSummary/SpareTaskSummary';
import ArtificialSummary from '../../Dialog/SpareDialog/WorkSummary/ArtificialSummary';

import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class WorkSummary extends Component {
  constructor(propps) {
    super(propps);
    this.state = {
      ReadState: false,
      ViewState: false

    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'sparepartmodal/WorkSummaryInitTable'
    })
  }
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'key', key: 'key',
        width: '6%',
      },
      {
        title: '总结编号',
        dataIndex: 'id', key: 'id',
        width: '12%',
      },
      {
        title: '周期',
        width: '13%',
        dataIndex: 'period', key: 'period',
      }, {
        title: '状态',
        width: '10%',
        dataIndex: 'state', key: 'state',
      }, {
        title: '成功百分比',
        width: '10%',
        dataIndex: 'success', key: 'success',
      }, {
        title: '失败百分比',
        width: '10%',
        dataIndex: 'defeat', key: 'defeat',
      }, {
        title: '拟制人',
        width: '12%',
        dataIndex: 'Artificial', key: 'Artificial',
      }, {
        title: '时间',
        width: '15%',
        dataIndex: 'time', key: 'time',
      }, {
        title: '详情',
        dataIndex: 'details', key: 'details',
        render: (text, record) => (
          <span style={{ color: '#2376c1', cursor: 'pointer' }} onClick={() => this.ClickLook(record.id)} >详情</span>
        )
      }];

    let Tabledata = [];
    let tabledata = this.props.sparepartmodal.WorkSummaryData;
    if (tabledata != null && tabledata.length !== 0) {
      for (let i = 0; i < tabledata.length; i++) {
        Tabledata.push({
          key: i + 1,
          id: tabledata[i].id,
          period: tabledata[i].time,
          state: tabledata[i].state,
          success: tabledata[i].sucessCount,
          defeat: tabledata[i].failCount,
          Artificial: tabledata[i].people,
          time: tabledata[i].time,
        });
      }
    }

    return (
      <>
        <div className={styles.CenterContent}>
          <div className={styles.CenterContentTitle}>
            阶段总结
        </div>

          <div className={styles.tableContent_delivery}>
            <div className={styles.tableStyle}>

              <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
                <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                  <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                    <Button onClick={this.ClickArtificial} type="primary" icon="plus">拟制</Button>
                  </div>
                </div>
              </div>

              <div className={styles.bodyCss_PN}>
                <Table
                  bordered
                  columns={columns}
                  dataSource={Tabledata}
                  className={styles.mynoiseClass}
                  pagination={{ pageSize: 10 }}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
              </div>

            </div>
          </div>


        </div>

        {/* 拟制 */}
        {
          this.state.ArtificialState ?
            <ArtificialSummary
              index={12}
              zIndex={12}
              changeIndex={this.changeIndex}
              closeWinodow={this.CloseArtificial}
              visible={this.state.ArtificialState}
            />
            : null
        }
        {/* 列表查看 */}
        {
          this.state.ViewState ?
            <SpareTaskSummary
              DetailViewData={this.props.sparepartmodal.workSummaryViewData}
              index={12}
              zIndex={12}
              changeIndex={this.changeIndex}
              closeWinodow={this.CloseLook}
              visible={this.state.ViewState}
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

  // 点击拟制
  ClickArtificial = () => {
    this.setState({
      ArtificialState: true
    })
  }
  CloseArtificial = () => {
    this.setState({
      ArtificialState: false
    })
  }

  // 点击详情查看
  ClickLook = (key) => {
    if (key !== '' && key != null && key !== undefined) {
      this.props.dispatch({
        type: 'sparepartmodal/WorkSummaryView',
        payload: key
      })
    }
    this.setState({
      ViewState: true
    });

  }
  CloseLook = () => {
    this.setState({
      ViewState: false
    })
  }


}
