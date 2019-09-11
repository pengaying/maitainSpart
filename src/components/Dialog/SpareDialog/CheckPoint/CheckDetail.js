import React, { Component } from 'react';
import Dialog from '../../Dialog';
import { Button, Input, Table } from 'antd';
import styles from '../SpareDialog.less';
import { connect } from 'dva';

@connect(({ sparepartmodal }) => ({ sparepartmodal }))
export default class CheckDetail extends Component {
    constructor(props) {
        super();
        this.state = {

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
                title: '备件PN',
                dataIndex: 'sparePN', key: 'sparePN',
                width: '20%',
            },
            {
                title: '备件名称',
                width: '12%',
                dataIndex: 'spareName', key: 'spareName',
            }, {
                title: '备件型号',
                width: '15%',
                dataIndex: 'spareType', key: 'spareType',
            }, {
                title: '备件规格',
                width: '12%',
                dataIndex: 'spareStandard', key: 'spareStandard',
            }, {
                title: '备件数量',
                width: '10%',
                dataIndex: 'spareNum', key: 'spareNum',
            }
            , {
                title: '实际数量',
                width: '10%',
                dataIndex: 'actualNum', key: 'actualNum',
            }
            , {
                title: '备件存放位置',
                // width: '11%',
                dataIndex: 'apareLocation', key: 'apareLocation',
            }
        ];


        let Tabledata = [];
        let tablecoldata = this.props.sparepartmodal.checkTableColData; // 盘点查看表格单行数据
        let tabledata = this.props.sparepartmodal.checkTableViewData; // 盘点查看后的盘点详情弹窗表格数据
        if (tabledata != null && tabledata.length !== 0) {
            for (let i = 0; i < 10; i++) {
                Tabledata.push({
                    // key: i + 1,
                    sparePN: tabledata[i].pn,
                    spareName: tabledata[i].name,
                    spareType: tabledata[i].model,
                    spareStandard: tabledata[i].category,
                    spareNum: tabledata[i].count,
                    actualNum: tabledata[i].count,
                    apareLocation: tabledata[i].location,
                });
            }
        }
        return (
            <Dialog
                visible={this.props.visible}
                title='盘点详情'
                index={this.props.index}
                zIndex={this.props.zIndex}
                changeIndex={this.props.changeIndex}
                close={this.props.closeWinodow}
            >
                <div className="popup_s_confirm_box">
                    <div style={{ width: '700px' }}>

                        <div style={{ float: 'left', width: '100%', marginRight: '10px', lineHeight: '30px', textAlign: 'center' }}>
                            <div style={{ float: 'left', textAlign: 'left', margin: '0 0px 10px 12px' }}>
                                <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                    <Button type="primary">导入</Button>
                                </div>
                                <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                    <Button type="primary">导出</Button>
                                </div>
                            </div>

                            <div style={{ float: 'right' }}>
                                <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                    <Button type="primary">打印</Button>
                                </div>
                                <div style={{ display: 'inline-block', margin: '0px 10px 0 0' }}>
                                    <Button onClick={this.ClickCheckPointerAbstract} type="primary">盘点摘要</Button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.layoutContent}>
                            <div className={styles.field}>
                                <div className={styles.fieldTitle}>基本信息</div>
                                <div className={styles.fieldContent}>
                                    <div style={{ float: 'left', width: '100%' }}>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <span style={{ marginRight: '10px' }}>盘点人:</span>
                                                <Input
                                                    value={tablecoldata != null && tablecoldata.length !== 0 ? tablecoldata.inventory : ''}
                                                    style={{ width: '200px' }} />
                                            </div>
                                        </div>
                                        <div className={styles.contentPN}>
                                            <div className={styles.InputStyle}>
                                                <span style={{ marginRight: '10px' }}>盘点日期:</span>
                                                <Input
                                                    value={tablecoldata != null && tablecoldata.length !== 0 ? tablecoldata.creationdate : ''}
                                                    style={{ width: '200px' }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.table_content}>
                            <div className={styles.bodyCss}>
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={Tabledata}
                                    // rowSelection={rowSelection} 
                                    className={styles.mynoiseClass}
                                    pagination={{ pageSize: 8 }}
                                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                                />
                            </div>
                        </div>

                        {/* 提交 */}
                        <div style={{ float: 'left', textAlign: 'center', width: '100%' }}>
                            <div style={{ display: 'inline-block', margin: '10px 10px 0 0' }}>
                                <Button type="primary" onClick={this.ClickChoicePN}>提交</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }

    // 盘点摘要
    ClickCheckPointerAbstract = () => {
        let tabledata = this.props.sparepartmodal.checkTableColData; // 盘点查看后的盘点详情弹窗表格数据
        // console.log('tabledata===', tabledata)
        if (tabledata != null) {
            this.props.dispatch({
                type: 'sparepartmodal/CCheckPointerAbstract',
                payload: tabledata.key
            })
        }
        this.props.dispatch({
            type: 'sparepartmodal/clickCheckPointerAbstract',
        })
    }
}


