import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route,  Link } from 'react-router-dom'
import Window from '../components/Window';
import System from '../components/System';
import SyntheticDisplay from '../components/SyntheticDisplay';
import SparePart from '../components/SparePart';
import styles from './IndexPage.less';
import LayoutSide from '../components/Layoutside';
import Message from '../components/DockeAreaMessage';
import BottomArea from '../components/BottomArea';

// import { browserHistory } from 'react-router';
// import View from '../components/System/View';
// import * as app from '../index'
// import UploadTest from '../components/UploadTest';
// import dynamic from 'dva/dynamic';

export default class MennuRouter extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: null,
      CommitbgColor: '#2884d8',
      RadarbgColor: '#2884d8',
      TargetbgColor: '#2884d8',
      AllbgColor: '#2884d8',
    }
  }


  changeColor = (e) => {
    console.log("e.sparepartmodal.id=======",e.target.id)
    this.setState({
      backgroundColor: e.target.id
    })
  }

  render() {
    let { backgroundColor, CommitbgColor, RadarbgColor, TargetbgColor, AllbgColor } = this.state;
    console.log('bgcolor', backgroundColor)
    switch (backgroundColor) {
      case 'system':
        CommitbgColor = "#182445";
        break;
      case 'syntheticDisplay':
        RadarbgColor = '#182445';
        break;
      case 'sparepartmodal':
        TargetbgColor = '#182445';
        break;
      case 'window':
        AllbgColor = '#182445';
        break;
      default:
        var strmsg = window.location.href;
        var strmsgg = strmsg.substr(strmsg.indexOf('?') + 1, strmsg.length - strmsg.indexOf('?'));
        //获取所传参数的值
        var hrefid = strmsgg.substr(strmsgg.indexOf('=') + 1, strmsgg.length - strmsgg.indexOf('='));
        //转码，防止编码错误
        hrefid = decodeURIComponent(hrefid);
        console.log('hrefid', hrefid);
        if (hrefid === "1") {
          AllbgColor = '#182445';
        }
        else if (hrefid === "2") {
          AllbgColor = '#182445';
        }
        else if (hrefid === "3") {
          AllbgColor = '#182445';
        }
        else {
          const href=this.props.location.pathname;
           if(href==='/sparepartmodal'){
            TargetbgColor = '#182445';
           }else if(href==='/window'){
            AllbgColor = '#182445';
           }else if(href==='/syntheticDisplay'){
            RadarbgColor = '#182445';

           }else{
            CommitbgColor = "#182445";
           }
        }
        break;
    }

    return (
      <Fragment>
        {/* 工具栏 */}
        <BrowserRouter>
          <div style={{float:'left',width:'1280px',height:'1024px'}} id='spare'>
            {/* 导航栏 */}
            <div className={styles.MenuBar}>
              <div className={styles.MenuTitle}>
                装备备件管理服务软件
              </div>
              <div className={styles.menu}>
                <ul>
                  <Link to="/">
                    <li style={{ background: CommitbgColor }}>
                      <div  id='system' onClick={this.changeColor} style={{padding:'10px 0'}}>
                        系统设置
                      </div>
                    </li>
                  </Link>

                  <Link to="/syntheticDisplay">
                    <li style={{ background: RadarbgColor }}>
                      <div id="syntheticDisplay" onClick={this.changeColor}  style={{padding:'10px 0'}}>
                        综合显示
                      </div>
                    </li>
                  </Link>

                  <Link to="/sparepartmodal">
                    <li style={{ background: TargetbgColor }}>
                      <div  id="sparepartmodal" onClick={this.changeColor} style={{padding:'10px 0'}}>
                        备件管理
                      </div>

                    </li>
                  </Link>

                  <Link to="/window">
                    <li style={{ background: AllbgColor }}>
                      <div  id="window" onClick={this.changeColor}  style={{padding:'10px 0'}}>
                        窗口
                      </div>                    
                    </li>
                  </Link>

                </ul>
              </div>
            </div>

            <div className={styles.Content}>
              {/* 路由组建   中部内容区 */}
              {/* tmy 3.21为了方便测试，换了默认路由 */}
              <Route path="/" exact component={System} />
              <Route path="/system" component={System} />
              <Route path="/syntheticDisplay" component={SyntheticDisplay} />
              <Route path="/sparepartmodal" component={SparePart} />
              <Route path="/window" component={Window} />

              {/* 侧边栏 */}
              <LayoutSide />

              {/* 通信信息表格 */}
              <Message />
            </div>
          
            {/* 底部显示区 */}
            <BottomArea />

          </div>
        </BrowserRouter>
      </Fragment>
    )
  }
}
// const UserPageComponent = dynamic({
//   app,// dva实例 
//   models: () => [//models： 返回Promise， Promise返回 dva model
//     import('./models/users'),
//   ],
//   component: () => import('./routes/UserPage'),
// });
