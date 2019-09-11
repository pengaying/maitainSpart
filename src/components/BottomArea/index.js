import React, { Component } from 'react'
import styles from './BottomArea.less'

export default class BottomArea extends Component {
    render() {
        return (
        <div className={styles.bottom_layout}>
            {/* 底部显示区 */}
            <span style={{marginLeft:'10px'}}>登陆用户：GLCH</span>
        </div>
        )
    }
}
