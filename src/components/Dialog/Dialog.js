import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import './Dialog.less';

const screenWidth = 1280;
const screenHeight = 1024;

function isEmpty(data) {
  if(data === '' || data === null || typeof(data) === 'undefined'){return true;}
  return false;
}


class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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

  UNSAFE_componentWillReceiveProps({visible}) {
    if (!isEmpty(visible)) {
      this.setState({visible: visible});
    }
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
    this.props.changeIndex(this.index);

    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});

    const {clientWidth,clientHeight} = this.refDom;
    this.setState({boundRight:screenWidth-clientWidth});
    this.setState({boundBottom:screenHeight-clientHeight});
  };

  close = (e) => {
    this.props.close(e);
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
             onClick={this.changeIndex.bind(this, index)}
             ref={this.divSize}
        >
          <strong className="ch_dialog_cursor">
            <div className="ch_dialog_title">{title}
              <div 
                  style={{
                    float: "right",
                    height: "16px",
                    width: "16px",
                    margin:'10px 6px 0px 0',
                    textAlign: "center",
                    lineHeight: "10px",
                    color: "#ffffff",
                    cursor: 'pointer'
                  }} 
                  onClick={this.close.bind(this, index)}
                >
                    <svg viewBox="64 64 896 896" data-icon="close" width="10px" height="10px" fill="currentColor" aria-hidden="true">
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                      </path>
                    </svg>
                </div> 

            </div>
          </strong>
          
            <div className="ch_dialog_content">
                {children}

            {/*
              <div style={{textAlign: 'center'}}>
              {children}
            </div>
            */} 
            
            </div>         
       
        </div>
      </Draggable>
    ):null;

    return dialog;

  }
}

Dialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  zIndex: PropTypes.number,
  index: PropTypes.number,
  close: PropTypes.func.isRequired,
};

export default Dialog;
