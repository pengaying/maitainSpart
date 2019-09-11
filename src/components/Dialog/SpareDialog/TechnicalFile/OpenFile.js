import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class OpenFile extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }
  render() {

    let data = this.props.sparepartmodal.FileDataSource != null ? 'http://' + this.props.sparepartmodal.FileDataSource[0] : 'null';
    console.log(data)

    return (
      <Dialog
        visible={this.props.visible}
        title='打开文件'
        index={this.props.index}
        zIndex={this.props.zIndex}
        changeIndex={this.props.changeIndex}
        close={this.props.closeWinodow}
      >
        <div className="popup_s_confirm_box">
          <div style={{ width: '700px', height: '500px' }}>

            <iframe src={data} width='100%' height='100%' frameBorder='0'></iframe>

          </div>
        </div>
      </Dialog>
    )
  }
}


