import React from 'react';
import JsBarcode from 'jsbarcode';

export default class Barcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: 213456899, //由父组件传入用来生成条形码的字符串“barCode”
    };
  }

  componentWillReceiveProps({ value }) {
    // console.log('value', value);
    if (value != null) {
      this.toJsBarcode(value);
    }
  }
  toJsBarcode(value) {
    // 调用 JsBarcode方法生成条形码
    JsBarcode(this.barcode, value, {
      // JsBarcode(this.barcode, "1234567890", {this.state.value就是默认显示需要生成的二维码
      // text: "显示文案",//（设置显示的文本）
      format: "CODE39",//（选择要使用的条形码类型）
      displayValue: false,//是否在条形码下面显示文字  true显示   false不显示
      width: 1.5,//条形码之间间隔的宽度
      height: 100,//条形码的高度
      margin: 0,//设置条形码周围的空白边距
    });

    //     JsBarcode("#imgcode", "123", {
    //  format: "CODE39",//选择要使用的条形码类型
    //  width:3,//设置条之间的宽度
    //  height:100,//高度
    //  displayValue:true,//是否在条形码下方显示文字
    //  text:"456",//覆盖显示的文本
    //  fontOptions:"bold italic",//使文字加粗体或变斜体
    //  font:"fantasy",//设置文本的字体
    //  textAlign:"left",//设置文本的水平对齐方式
    //  textPosition:"top",//设置文本的垂直位置
    //  textMargin:5,//设置条形码和文本之间的间距
    //  fontSize:15,//设置文本的大小
    //  background:"#eee",//设置条形码的背景
    //  lineColor:"#2196f3",//设置条和文本的颜色。
    //  margin:15//设置条形码周围的空白边距
    // });
  }
  render() {
    return (
      <div className="barcode-box">
        <svg
          ref={(ref) => {
            this.barcode = ref;
          }}
        />
      </div>
    );
  }
}

// 条形码样式
// .barcode-box {
//     width: 100%;
//     position: relative;
//     svg {
//         position: absolute;
//         right: 0px;
//     }
// }