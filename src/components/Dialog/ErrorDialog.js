// import React, { Component } from 'react'
// import styles from './ErrorDialog.less';
// import { Button } from 'antd';
// import Draggable from 'react-draggable';
// import { connect } from 'dva';
// import language from '../locales/language';


// @connect( ({ CacheData, statecheck }) => ({ CacheData, statecheck }) )
// export default class ErrorDialog extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     onControlledDrag = (e, position) => {
//         const { x, y } = position;
//         this.setState({ controlledPosition: { x, y } });
//     }

//     onControlledDragStop = (e, position) => {
//         this.onControlledDrag(e, position);
//     }

//     adjustXPos = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const { controlledPosition } = this.state;
//         const { x, y } = controlledPosition;
//         this.setState({ controlledPosition: { x: x - 10, y } });
//     }

//     adjustYPos = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const { controlledPosition } = this.state;
//         const { x, y } = controlledPosition;
//         this.setState({ controlledPosition: { x, y: y - 10 } });
//     }

//     handleDrag = (e, ui) => {
//         const { deltaPosition } = this.state;
//         const { x, y } = deltaPosition;
//         this.setState({
//             deltaPosition: {
//                 x: x + ui.deltaX,
//                 y: y + ui.deltaY,
//             },
//         });
//     }

//     render() {
//         const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
//         return (
//             <div>
//                 <Draggable
//                     handle="strong"
//                     bounds="#root"
//                     {...dragHandlers}
//                 >
//                     <div hidden={this.props.showDialog}  className={styles.bodyclass} style={{ zIndex: this.props.CacheData.indexError }} >
//                         <strong>
//                             <div className={styles.popstyle}>
//                                 <div className={styles.bodyContent}>
//                                     {this.props.bodyContentFont}
//                                 </div>
//                                 <div className={styles.buttonstyle}>
//                                     <Button type="primary" onClick={this.props.ClickOkButton}>{language[`confirm${this.props.statecheck.getlanguages}`]}</Button>
//                                 </div>
//                             </div>
//                         </strong>

//                     </div>

//                 </Draggable>
//             </div>

//         )
//     }
// }
import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './ErrorDialog.less';
import { connect } from 'dva';
import language from '../locales/language';
const screenWidth = 1280;
const screenHeight = 1024;



function isEmpty(data) {
  if(data === '' || data === null || typeof(data) === 'undefined'){return true;}
  return false;
}

@connect( ({ CacheData, statecheck }) => ({ CacheData, statecheck }) )

class ErrorDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      controlledPosition: {
        x: 0, y: 0
      },
      boundRight:null,
      boundBottom:null,
      isOK:false,
    };
    this.index = "";
    this.divSize = ref => {this.refDom = ref};
  }


  componentDidMount() {

    let _count = 0;

    this.timer = setInterval(() => {
      if(_count > 0) {
        clearInterval(this.timer);
        return;
      }
      if(this.refDom) {
        const {clientWidth,clientHeight} = this.refDom;
        this.setState({
          controlledPosition: {
            x:Math.round(screenWidth/2-clientWidth/2),
            y:Math.round(screenHeight/2-clientHeight/2)
          },
          isOK:true
        });
        _count++;
      }
    },2);
  }

  componentWillUnmount() {

  }

  changeIndex = (e) => {
    this.props.changeIndex(e);
  };

  controlledPosition = (e, position) => {
    // this.props.changeIndex(this.index);

    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});

    const {clientWidth,clientHeight} = this.refDom;
    this.setState({boundRight:screenWidth-clientWidth});
    this.setState({boundBottom:screenHeight-clientHeight});
  };

  ClickOkButton = (e) => {
    this.props.ClickOkButton(e);
  };

  render() {

    const { title,children,zIndex,index } = this.props;
    const { controlledPosition,boundRight,boundBottom,isOK } = this.state;

    this.index = index;

    const dialog = this.props.visible?(
      <Draggable handle="strong"
                 position={controlledPosition}
                 onDrag={this.controlledPosition}
                 bounds={{top: 0, left: 0, right: boundRight, bottom: boundBottom}}
      >
        <div className="ch_dialog_box ch_dialog_no-cursor"
             style={{zIndex:zIndex,position:"absolute",opacity:isOK?1:0}}
            //  onClick={this.changeIndex.bind(this, index)}
             ref={this.divSize}
        >
          <strong className="ch_dialog_cursor">
              <div className={styles.ch_dialog_content}>
                <div className={styles.bodyclass}>
                    <div  className={styles.bodyContent}>
                        {this.props.bodyContentFont}
                    </div>
                    <div className={styles.buttonstyle}>
                        <Button type="primary" onClick={this.props.ClickOkButton}>{language[`confirm${this.props.statecheck.getlanguages}`]}</Button>
                    </div>
                </div>
              
              </div>

          </strong>  
        </div>
      </Draggable>
    ):null;

    return dialog;

  }
}

ErrorDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  zIndex: PropTypes.number,
  index: PropTypes.number,
  ClickOkButton: PropTypes.func.isRequired,
};

export default ErrorDialog;
