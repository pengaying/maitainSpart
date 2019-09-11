
import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Table, Upload, message } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class AddTechnicalFile extends Component {
    constructor() {
        super();
        this.state = {
            filename: '',//文件名
            filesize: '',//文件大小
        }
    }
    //点击文件上传按钮
    handleChange = (info) => {
        console.log("info======", info)
        let arr = [];
        if (info.file.status !== 'uploading') {
        }
        if (info.file.status === 'done') {
            // this.setState({ uploadMsglength: info.file.response[0].length })
            this.setState({
                filename: info.file.name,
                filesize: info.file.size,
                // fileversion: info.file.name,
            })

            // if (info.file.response[0].length) {
            //     for (var i = 0; i < info.file.response[0].length; i++) {
            //         arr.push(
            //             {
            //                 key: i + 1,
            //                 name: info.file.response[0][i]
            //             }
            //         )
            //     }
            // }
            // this.setState({ dataSource: arr });
            // fodderdataSource.push({
            //     name: `${info.file.name}`,
            // });
            // message.success(`${info.file.name}上传成功`);
        }
        else if (info.file.status === 'error') {
            message.error(`${info.file.name}上传失败`);
        }
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key', key: 'key',
                width: '7%',
            },
            {
                title: '所属分机名称',
                dataIndex: 'Extensionname', key: 'Extensionname',
                width: '18.5%',
            },
            {
                title: '所属分机型号',
                width: '13.5%',
                dataIndex: 'Extensiontype', key: 'Extensiontype',
            }, {
                title: '所属子系统名称',
                width: '18%',
                dataIndex: 'Subsystemname', key: 'Subsystemname',
            }, {
                title: '所属子系统型号',
                width: '15%',
                dataIndex: 'Subsystemmodel', key: 'Subsystemmodel',
            }, {
                title: '所属整机名称',
                width: '15%',
                dataIndex: 'Machinename', key: 'Machinename',
            }, {
                title: '所属整机型号',
                dataIndex: 'Machinemodel', key: 'Machinemodel',
            }
        ];

        let Tabledata = [];
        for (let i = 0; i < 10; i++) {
            // Tabledata.push({
            //     key: i + 1,
            //     Extensionname: '信号处理分机',
            //     Extensiontype: 'S816-1',
            //     Subsystemname: '信号处理分系统',
            //     Subsystemmodel: 'S86-6',
            //     Machinemodel: 'S86',
            //     Machinename: '信号处理',
            // });
        }

        // const props = {
        //     name: 'file',
        //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        //     headers: {
        //         authorization: 'authorization-text',
        //     },
        //     onChange(info) {
        //         if (info.file.status !== 'uploading') {
        //             console.log(info.file, info.fileList);
        //         }
        //         if (info.file.status === 'done') {
        //             message.success(`${info.file.name} file uploaded successfully`);
        //         } else if (info.file.status === 'error') {
        //             message.error(`${info.file.name} file upload failed.`);
        //         }
        //     },
        // };

        //文件上传按钮的部分代码
        const props = {
            name: 'file',
            accept: '.pdf',
            action: 'http://localhost:1003/filapi/myTestUpload',
            headers: {
                authorization: 'authorization-text',
            },
            // multiple: false,
            showUploadList: false,
            onChange: this.handleChange,
        }

        return (
            <Dialog
                visible={this.props.visible}
                title='新建技术文档'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>
                                    <Upload {...props}>
                                        <Button type="primary" icon="plus">添加</Button>
                                    </Upload>
                                    {/* <Button type="primary" icon="plus">添加</Button>*/}

                                </span>
                                <Input style={{ width: '180px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>文件名:</span>
                                <Input value={this.state.filename} style={{ width: '180px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>文件大小:</span>
                                <Input value={this.state.filesize} style={{ width: '180px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div className={styles.InputStyle}>
                                <span style={{ marginRight: '10px' }}>版本:</span>
                                <Input style={{ width: '180px' }} />
                            </div>
                        </div>

                        <div className={styles.contentPN}>
                            <div style={{ float: 'left' }}>
                                <span style={{ marginRight: '10px' }}>所属装备:</span>
                                <Button type='primary'>添加</Button>
                            </div>
                        </div>


                        <div className={styles.table_content}>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    pagination={false}
                                    className={styles.mynoiseClass}
                                    scroll={{ x: 900, y: 107 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>


                        {/* 确认 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickOk}>确认</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    ClickOk = () => {
        console.log(this.state.filename, this.state.filesize)
        this.props.dispatch({
            type: 'sparepartmodal/TechnicalFileAdd',
            payload: {
                "name": this.state.filename,
                "size": this.state.filesize
            }
        })
    }
}
