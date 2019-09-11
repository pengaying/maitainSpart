import React, { Component } from 'react';
import { Table } from 'antd';
import styles from './DockArea.less';

export default class DockArea extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const heightResize = 185;

        return (
            <div className={styles.bodyCss}>
                <Table
                    bordered
                    columns={this.props.defaultcolumn}
                    dataSource={this.props.tabledata}
                    pagination={false}
                    className={styles.mynoiseClass}
                    scroll={{ y: heightResize }}
                    rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}//奇偶行颜色交替变化
                />
            </div>
        )
    }

}
