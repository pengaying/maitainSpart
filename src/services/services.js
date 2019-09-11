import axios from 'axios';

export async function InitPnManagementTableFetch() { // 初始化显示PN管理的表格数据
  return axios({
    method: 'post',
    url: 'http://localhost:1003/papi/get',
    data: {
      "beginPage": 1,
      "pageSize": 10,
    }
  }).catch(error => console.log('error is', error));
}

export async function AddPnManagementTableFetch(param) { // 新增 PN管理的表格数据
  // console.log('param=======', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/papi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}

export async function PNChoiceFilterFetch(param) {//  PN管理的  选择PN
  let params = param;
  params.beginPage = 1;
  params.pageSize = 10;
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/papi/get',
    data: param
  }).catch(error => console.log('error is', error));
}

export async function PNManagementViewFetch(param) {// PN管理表格数据中的查看
  // console.log('param=======', param);
  return axios({
    method: 'get',
    url: 'http://localhost:1003/papi/getdetail',
    params: { 'pn': param }
  }).catch(error => console.log('error is', error));
}

export async function SearchPNFetch(param) {// PN管理表格数据中的搜索
  console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/papi/get',
    data: { 'pn': param }
  }).catch(error => console.log('error is', error));
}

export async function StorageDataFetch(param) {// 入库请求
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/spapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}

export async function OutStorageTableDataFetch() { // 初始化显示出库表格数据
  return axios({
    method: 'post',
    url: 'http://localhost:1003/papi/initi',
  }).catch(error => console.log('error is', error));
}

export async function ChoosePNQueryFetch(param) {     //  查询与出库 点击查询筛选出PN表格中的数据
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/papi/getPn',
    data: param
  }).catch(error => console.log('error is', error));
}

export async function ViewSpareDetailFetch(param) {   //  查询与出库 点击表格中的 查看获取备件SN列表
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/spapi/selectByPn',
    params: { 'pn': param }
  }).catch(error => console.log('error is', error));
}

export async function TableChooseSNFetch(param) {   //  查询与出库 点击表格中的 选择SN 获取弹窗数量列表
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/spapi/selectByPn',
    params: { 'pn': param }
  }).catch(error => console.log('error is', error));
}

export async function OutStorageRecordFetch() {   //  出库记录表格数据
  return axios({
    method: 'get',
    url: 'http://localhost:1003/orapi/get',
  }).catch(error => console.log('error is', error));
}

//  出库表单数据
export async function ClickOutStorageFormFetch(param) {
  console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/orapi/selectByKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}

// 盘点
export async function CheckTableInitFetch() {   //  盘点表格数据初始化请求
  return axios({
    method: 'get',
    url: 'http://localhost:1003/invenapi/getinit',
  }).catch(error => console.log('error is', error));
}
//  盘点设置
export async function CheckSettingFetch(param) {
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/invenapi/insert',
    params: param
  }).catch(error => console.log('error is', error));
}

export async function ViewAsyncKeyFetch(param) {   //  盘点表格数据查看
  // console.log('param=======', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/invenapi/selectdetail',
    params: { 'pid': param }
  }).catch(error => console.log('error is', error));
}

export async function DeleteCheckMultiFetch(param) {   //  盘点表格数据多行删除
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/invenapi/deleteBatch',
    data: param
  }).catch(error => console.log('error is', error));
}

export async function DeleteCheckColFetch(param) {   //  盘点表格数据单行删除
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/invenapi/delete',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}

export async function CheckPointerAbstractFetch(param) {   //  填充盘点摘要数据
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/invenapi/selectByIid',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}

// 备件申请记录
export async function SapreApplyTableInitFetch() {   //  初始化表格
  return axios({
    method: 'get',
    url: 'http://localhost:1003/apapi/getInit',
  }).catch(error => console.log('error is', error));
}
export async function ChooiceApplyResultFetch(param) {   //  备件申请记录  筛选
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/apapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}

export async function ClickApplyDetailFetch(param) {   //  备件申请记录  查看
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/apapi/selectDetailBy',
    params: { 'aid': param }
  }).catch(error => console.log('error is', error));
}

export async function DeleteApplyDetailFetch(param) {   //  备件申请记录  删除
  // console.log('param=======', param);
  return axios({
    method: 'post',
    url: 'http://localhost:1003/apapi/delete',
    params: { 'aid': param }
  }).catch(error => console.log('error is', error));
}

// 阶段总结
// 初始化表格
export async function WorkSummaryInitTableFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/suapi/selectBy',
  }).catch(error => console.log('error is', error));
}
// 详情
export async function WorkSummaryViewFetch(param) {
  // console.log('param========', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/suapi/select',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 存为草稿
export async function ArtificialSummarySaveFetch(param) {
  // console.log('param========', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/suapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}
// 上报
export async function ArtificialSummaryReportFetch(param) {
  // return axios({
  //   method: 'post',
  //   url: 'http://localhost:1003/suapi/insert',
  //   data: param
  // }).catch(error => console.log('error is', error));
}

//库存预警
// 初始化显示表格数据
export async function WarningTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/warnapi/getInit',
  }).catch(error => console.log('error is', error));
}

// 筛选
export async function WarningChooiceFetch(param) {
  // console.log('param========', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/warnapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}
// 删除
export async function DeleteWarningMultiFetch(param) {
  // console.log('param========', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/warnapi/deleteBatch',
    data: param
  }).catch(error => console.log('error is', error));
}

// 查看
export async function WarningViewDataFetch(param) {
  // console.log('param========', param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/warnapi/selectDetail',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}


// 周期-最多
// 初始化显示表格数据
export async function PeriodMaximumTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/staapi/getInit1',
  }).catch(error => console.log('error is', error));
}

// 统计
export async function PeriodMaximumStatisticsFetch(param) {
  console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/staapi/selectBy',
    params: param
  }).catch(error => console.log('error is', error));
}

// 产品-周期
// 初始化显示表格数据
export async function ProductCycleInitTableFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/staapi/getInit',
  }).catch(error => console.log('error is', error));
}

// 技术文档
// 初始化显示表格数据
export async function TechnicalFileTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/filapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 添加
export async function TechnicalFileAddFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/filapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}
// 删除
export async function TechnicalFileDeleteCache(param) {
  // console.log("param=====", param)
  axios({
    method: 'delete',
    url: 'http://localhost:1003/filapi/backMaterial',
  }).catch(error => console.log('error is', error));
}

// 搜索
export async function TechnicalFileSearchFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/staapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 打开
export async function TechnicalFileOpenFetch(param) {
  console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/filapi/getlocal',
    params: param
  }).catch(error => console.log('error is', error));
}

// 备件存放地 
// 初始化显示表格数据
export async function StorageAreaTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/locapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 新建
export async function StorageAreaCreatFetch(param) {
  console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/locapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}
// 搜索 
export async function StorageAreaSearchFetch(param) {
  console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/locapi/selectby',
    data: param
  }).catch(error => console.log('error is', error));
}

// 查看日志
// 初始化显示表格数据
export async function ViewLogTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/jourapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 筛选  显示表格数据
export async function ViewLogChooiceFetch(param) {
  console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/jourapi/selectBy',
    data: param
  }).catch(error => console.log('error is', error));
}
// 查看出库数据
export async function ViewLogDetailOutFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/jourapi/selectByKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 查看入库数据
export async function ViewLogDetailInFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/jourapi/selectInByKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}


// 个体管理
// 初始化显示表格数据
export async function IndividualTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/toolsapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 新建
export async function IndividualAddToolFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolsapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}
// 搜索
export async function IndividualSearchFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolsapi/selectBy',
    params: { 'pn': param }
  }).catch(error => console.log('error is', error));
}

// 出借
export async function IndividualLendFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolsapi/selectByKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 详情  查看
export async function IndividualViewFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolsapi/selectByKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 详情  修改
export async function IndividualModiFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolsapi/update',
    data: param
  }).catch(error => console.log('error is', error));
}
// 删除
export async function IndividualDeleteFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'delete',
    url: 'http://localhost:1003/toolsapi/deleteByKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}

// 产品管理
// 初始化显示表格数据
export async function ProductControlTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/toolapi/getInit',
  }).catch(error => console.log('error is', error));
}

// 新建
export async function ProductControlAddFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolapi/insert',
    data: param
  }).catch(error => console.log('error is', error));
}
// 查看
export async function ProductControlViewFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolapi/selectByPrimaryKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 修改
export async function ProductControlModifyFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolapi/updateByPrimaryKeySelective',
    data: param
  }).catch(error => console.log('error is', error));
}
// 删除
export async function ProductControlDeleteFetch(param) {
  console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolapi/deleteByPrimaryKey',
    params: { 'id': param }
  }).catch(error => console.log('error is', error));
}
// 搜索
export async function ProductControlSearchFetch(param) {
  // console.log("param=====", param)
  return axios({
    method: 'post',
    url: 'http://localhost:1003/toolapi/selectBy',
    data: { 'pn': param }
  }).catch(error => console.log('error is', error));
}









export async function stationChooseFetch() {
  // let urll;
  // if (typeof window.getUrl == 'function') {
  //   urll = window.getUrl() //根据主站遥控本控模式设置（全局函数）
  // } else {
  //   urll = 'http://192.168.1.1' //默认请求前缀（根据各模块实际地址）
  // }

  return axios({
    method: 'get',
    url: urll + "/tcr/setStations",
  }).catch(error => console.log('error is', error));
}




// 系统设置请求
// 确定
export async function SystemOk(param) {
  console.log('param=====', param)
  axios({
    method: 'post',
    url: 'http://localhost:1003/commandapi/sysSettings',
    params: param
  }).then(res => { console.log('32323232323=======', res) }).catch(error => console.log('error is', error));
}
// 收件箱
export async function receiveTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/iboxapi/selectAll',
  }).catch(error => console.log('error is', error));
}
// 发件箱
export async function sendTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/oboxapi/selectAll',
  }).catch(error => console.log('error is', error));
}
// 备品备件数据库
export async function spareTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/toolapi/getInit',
  }).catch(error => console.log('error is', error));
}
// 装备控制数据库
export async function equipTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/eqapi/selectAll',
  }).catch(error => console.log('error is', error));
}
// 自检数据库
export async function selfTableInitFetch() {
  return axios({
    method: 'get',
    url: 'http://localhost:1003/selfapi/selectAll',
  }).catch(error => console.log('error is', error));
}






