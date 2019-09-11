import React, { Component } from 'react';
import { Link ,Route,Router} from 'react-router-dom';
import Window from '../components/Window';
import System from '../components/System';
import SyntheticDisplay from '../components/SyntheticDisplay';
import SparePart from '../components/SparePart';

import styles from './IndexPage.less';
import GisIndex from '../pages/Gis/GisIndex';
import LayoutSide from '../components/Layoutside';
import Message from '../components/DockeAreaMessage';
import BottomArea from '../components/BottomArea';
// import { connect } from 'dva';
// import { browserHistory } from 'react-router';
// import View from '../components/System/View';
// import * as app from '../index'
// import UploadTest from '../components/UploadTest';
// import dynamic from 'dva/dynamic';
// @connect(({ Modal }) => ({ Modal }))

export default class MSyntheticDisplay extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: null,
      SystembgColor: '#2884d8',
      SyntheticbgColor: '#2884d8',
      SparebgColor: '#2884d8',
      WindowbgColor: '#2884d8',
    }
  }
  // componentDidMount(){
  //   this.props.history.push('/')
  // }

  changeColor = (e) => {
    // console.log("e.sparepartmodal.id=======",e.target.id)
    this.setState({
      backgroundColor: e.target.id
    });
    // switch(e.target.id){
    //   case 'system':
    //       this.props.history.push('/system',)
    //     break;
    //   case 'syntheticDisplay':
    //       this.props.history.push('/system',)
    //     break;
    //   case 'sparepartmodal':
    //       this.props.history.push('/sparepartmodal',)
    //     break;
    //   case 'window':
    //       this.props.history.push('/window',)
    //     break;
    //     default:
    //       break;
    // }
  }

  render() {
    let { backgroundColor, SystembgColor, SyntheticbgColor, SparebgColor, WindowbgColor } = this.state;
    // console.log('bgcolor', backgroundColor)
    switch (backgroundColor) {
      case 'system':
        SystembgColor = "#182445";
        break;
      case 'syntheticDisplay':
        SyntheticbgColor = '#182445';
        break;
      case 'sparepartmodal':
        SparebgColor = '#182445';
        break;
      case 'window':
        WindowbgColor = '#182445';
        break;
        default:
          const href=window.location.pathname;
          // console.log('href', href);
          switch (href) {
            case '/msparepart':
                SparebgColor = '#182445';
                break;
            case '/mwindow':
                WindowbgColor = '#182445';
                // history.push('/window')
                break;
            case '/msyntheticDisplay':
                SyntheticbgColor = '#182445';
                // history.push('/syntheticDisplay')
                break;
            default:
                SystembgColor = "#182445";
                backgroundColor='system';
                break;   
          }
          break;
    }

    return (
        <div style={{float:'left',width:'1280px',height:'1024px'}} id='spare'>
            {/* 导航栏 */}
            <div className={styles.MenuBar}>
              <div className={styles.MenuTitle}>
                装备备件管理服务软件
              </div>
              <div className={styles.menu}>
                <ul>
                  <Link to="/">
                    <li style={{ background: SystembgColor }}>
                      <div  id='system' onClick={this.changeColor}>
                        系统设置
                      </div>
                    </li>
                  </Link>

                  <Link to="/msyntheticDisplay">
                    <li style={{ background: SyntheticbgColor }}>
                      <div id="syntheticDisplay" onClick={this.changeColor}>
                        综合显示
                      </div>
                    </li>
                  </Link>

                  <Link to="/msparepart">
                    <li style={{ background: SparebgColor }}>
                      <div  id="sparepartmodal" onClick={this.changeColor}>
                        备件管理
                      </div>
                    </li>
                  </Link>
                  
                  <Link to="/mwindow">
                    <li style={{ background: WindowbgColor }}>
                        <div  id="window" onClick={this.changeColor} >
                          窗口
                        </div> 
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className={styles.Content}>
                {/* <Route path="/" exact component={System} />
                <Route path="/system"   component={System} />
                <Route path="/syntheticDisplay"  component={SyntheticDisplay} />
                <Route path="/sparepartmodal"  component={SparePart} />
                <Route path="/window"  component={Window} />  */}
                <SyntheticDisplay />
               {/* 地图显示 */}            
                <div className={styles.CenterContent}>
                  <GisIndex style={{width:'975px',zIndex:'10'}}/>
                </div>
               
              
              {/* 侧边栏 */}
              <LayoutSide/>

              {/* 通信信息表格 */}
              <Message />
            </div>
          
            {/* 底部显示区 */}
            <BottomArea />

          </div>
    )
  }
}
