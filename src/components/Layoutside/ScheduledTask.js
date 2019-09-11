import React, { Component } from "react"
import { Tree, Input, Button } from "antd";
import styles from "./index.less";

export default class ScheduledTask extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }

    onSelect = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
      };
    
    render() {
        const { TreeNode } = Tree;

        return (
            <div  className={styles.treeNode}>
                <div style={{float:'left',margin:'10px 10px 0 10px',width:'93%'}}>
                    <div  style={{float:'left'}}>
                        <Input style={{width:'65%'}}/> <span style={{marginLeft:'10px'}}><Button type="primary">搜索</Button></span>
                    </div>
                    {/* <div style={{float:'right'}}>
                        
                    </div> */}
                </div>

                <div  style={{float:'left'}}>
                
                   <Tree 
                        showLine
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title="未处理" key="0-0">

                            <TreeNode title="维修任务" key="0-0-0" />
                            <TreeNode title="备件任务" key="0-0-1" />

                        </TreeNode>
                    
                        <TreeNode title="正在处理" key="0-1">
                            <TreeNode title="维修任务1" key="0-1-0" >
                                <TreeNode title="方案" key="0-1-0-0" >
                                    <TreeNode title="行动" key="0-1-0-0-0" />
                                    <TreeNode title="总结" key="0-1-0-0-1" />
                                </TreeNode>
                            </TreeNode>
                                    
                            <TreeNode title="备件任务" key="0-1-1" >
                                <TreeNode title="方案" key="0-1-1-0" >
                                    <TreeNode title="行动拟制" key="0-1-1-0-0" />
                                    <TreeNode title="总结拟制" key="0-1-1-0-1" />
                                </TreeNode>
                            </TreeNode>

                        </TreeNode>
                        
                        <TreeNode title="历史记录" key="0-2">
                            
                            <TreeNode title="任务1" key="0-2-0" >
                                <TreeNode title="方案" key="0-2-0-0" >
                                    <TreeNode title="行动" key="0-2-0-0-0" />
                                    <TreeNode title="总结" key="0-2-0-0-1" />
                                </TreeNode>
                            </TreeNode>

                            <TreeNode title="任务2" key="0-2-1" >
                                <TreeNode title="方案" key="0-2-1-0" >
                                    <TreeNode title="行动拟制" key="0-2-1-0-0" />
                                    <TreeNode title="总结拟制" key="0-2-1-0-2" />
                                </TreeNode>
                            </TreeNode>

                        </TreeNode>
                    
                    </Tree>
        
                </div>
                {/* <Demo /> */}
            </div>
        )
    }
}
// const { TreeNode } = Tree;

// class Demo extends React.Component {
//     state = {
//       treeData: [
//         {   title: '未处理', key: '0',
//             children:[
//                 {title: '维修任务', key: '0-0',
//                     schme:[
//                         {title: '方案', key: '0-0-1'},
//                         {title: '方案', key: '0-0-1'},
//                     ]
//                 } ,
//                 {title: '备件任务', key: '0-0'} ,
//             ]              
//         },
//         { 
//             title: '正在处理', key: '1',
//             children:[
//                 {title: '维修任务', key: '1-0'} ,
//                 {title: '备件任务', key: '1-1'} ,
//             ]     
//         },
//         { 
//             title: '历史记录', key: '2',
//             children:[
//                 {title: '维修任务', key: '2-0'} ,
//                 {title: '备件任务', key: '2-1'} ,
//             ]   
//         },
//       ],
//     };

//     // onLoadData = treeNode =>
//     //   new Promise(resolve => {
//     //     if (treeNode.props.children) {
//     //       resolve();
//     //       return;
//     //     }
//     //     setTimeout(() => {
//     //       treeNode.props.dataRef.children = [
//     //         { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
//     //         { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
//     //       ];
//     //       this.setState({
//     //         treeData: [...this.state.treeData],
//     //       });
//     //       resolve();
//     //     }, 1000);
//     //   });
  
//     // renderTreeNodes = data =>
//     //   data.map(item => {
//     //     if (item.children) {
//     //       return (
//     //         <TreeNode title={item.title} key={item.key} dataRef={item}>
//     //             {this.renderTreeNodes(item.children)}

//     //             <TreeNode title={item.title} key={item.key} dataRef={item}>
//     //                 {this.renderTreeNodes(item.children)}
//     //                 <TreeNode title={item.title} key={item.key} dataRef={item}>
//     //                     {this.renderTreeNodes(item.children)}
//     //                 </TreeNode>
//     //             </TreeNode>
                
//     //         </TreeNode>
//     //       );
//     //     }
//     //     return <TreeNode {...item} dataRef={item} />;
//     //   });
  
//     render() {
//       return (
//         <Tree>
//              { 
//                 this.state.treeData.map(item => {
//                     if (item.children) {
//                         return (
//                             <TreeNode title={item.title} key={item.key}>
//                                 {item.children.title}

//                                 <TreeNode title={item.title} key={item.key} dataRef={item}>
//                                     {item.children.title}
//                                     <TreeNode title={item.title} key={item.key} dataRef={item}>
//                                         {item.children.title}
//                                     </TreeNode>
//                                 </TreeNode>
                                
//                             </TreeNode>
//                         );
//                     }
//                     return <TreeNode {...item} dataRef={item} />;
//                 })
//             }
//         </Tree>

//       )

//     }
// }