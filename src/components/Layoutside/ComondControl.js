import React, { Component } from 'react'
import { Tree ,Icon, Button} from 'antd';
import styles from "./index.less";
import defaultLight from '../assets/grayLight.png'//灰灯
// import redLight from '../assets/redLight.png'//红灯  
// import greenLight from '../assets/greenLight.png'//绿灯 

export default class ComondControl extends Component {
    constructor(){
        super();
        this.state={
            superior:false,
            sibling:false

        }
    }

    onSelect = (selectedKeys, info) => {
        // console.log('selected', selectedKeys, info);
        console.log('selected===info====',info.node.props.title);
        let title = info.node.props.title;
        if(title === '侦察干扰设备维修车'){
            this.setState({
                superior:true,
                sibling:false
            })
        }
        else if(title === '团指挥所'){
            this.setState({
                superior:false,
                sibling:true
            })
        }      
    };
    render() {
        const { TreeNode } = Tree;

        return (
            <>
                <div  className={styles.treeNode}>
                    <Tree showIcon defaultExpandedKeys={['0-0-0','0-0-1']} onSelect={this.onSelect}>
                        {/* <TreeNode key="0-0"> */}

                            <TreeNode  title="直属上级" key="0-0-0">
                                <TreeNode icon={<img src={defaultLight} style={{ margin: '0 10px 0 0' }} />}  title="侦察干扰设备维修车" key="0-0-0-0" />
                            </TreeNode>

                            <TreeNode title="任务上级" key="0-0-1">
                                <TreeNode icon={<img src={defaultLight} style={{ margin: '0 10px 0 0' }} />}  title="团指挥所" key="0-0-1-0" />
                            </TreeNode>

                        {/* </TreeNode> */}
                    </Tree>
                </div>

                {
                    this.state.superior?
                    <Superior close={this.HiddenSuperior}/>
                    :
                    null
                }

                {
                    this.state.sibling?
                    <Sibling close={this.HiddenSibling}/>
                    :
                    null
                }
            </>
        )
    }


    HiddenSuperior = () =>{
        this.setState({
            superior:false
        })
    }
    HiddenSibling = () =>{
        this.setState({
            sibling:false
        })
    }
}


class  Superior extends Component{
    render(){
        return(
            <div style={{float:'left'}}>
                <div className={styles.LayoutSide_title}>
                    通信内容 - 上级
                    <div style={{float:'right',padding:'2px 10px 0 0'}}>
                        <span style={{cursor:'pointer'}} onClick={this.props.close}><Icon type="close"  style={{ fontSize: '18px'}} /></span>
                    </div>
                </div>
                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>在线询问</Button>
                        </span>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>装备位置</Button>
                        </span>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>装备状态</Button>
                        </span>
                    </div>
                </div>

                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>对时申请</Button>
                        </span>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>人员短失</Button>
                        </span>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>物资损耗</Button>
                        </span>
                    </div>
                </div>

                <div className={styles.LayoutSide_SContent}>
                    <div>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>装备损耗</Button>
                        </span>
                        <span  style={{margin:'0 10px'}}>
                            <Button type='primary'>任务状态</Button>
                        </span>
                    </div>
                </div>
                
           </div> 
        )
    }
}



class  Sibling extends Component{
    render(){
        return(
            <div style={{float:'left'}}>
            <div className={styles.LayoutSide_title}>
                通信内容 - 同级
                <div style={{float:'right',padding:'2px 10px 0 0'}}>
                    <span style={{cursor:'pointer'}} onClick={this.props.close}><Icon type="close"  style={{ fontSize: '18px'}} /></span>
                </div>
            </div>
            <div className={styles.LayoutSide_SContent}>
                <div>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>在线询问</Button>
                    </span>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>装备位置</Button>
                    </span>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>装备状态</Button>
                    </span>
                </div>
            </div>

            <div className={styles.LayoutSide_SContent}>
                <div>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>对时申请</Button>
                    </span>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>人员短失</Button>
                    </span>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>物资损耗</Button>
                    </span>
                </div>
            </div>

            <div className={styles.LayoutSide_SContent}>
                <div>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>装备损耗</Button>
                    </span>
                    <span  style={{margin:'0 10px'}}>
                        <Button type='primary'>任务状态</Button>
                    </span>
                </div>
            </div>
            
       </div> 
    )
    }
}