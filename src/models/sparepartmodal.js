import {
  InitPnManagementTableFetch, AddPnManagementTableFetch, PNChoiceFilterFetch,
  PNManagementViewFetch, SearchPNFetch, StorageDataFetch, OutStorageTableDataFetch,
  ChoosePNQueryFetch, ViewSpareDetailFetch, TableChooseSNFetch, OutStorageRecordFetch, ClickOutStorageFormFetch,
  CheckTableInitFetch, CheckSettingFetch, DeleteCheckMultiFetch, DeleteCheckColFetch, ViewAsyncKeyFetch,
  CheckPointerAbstractFetch, SapreApplyTableInitFetch, ChooiceApplyResultFetch, ClickApplyDetailFetch,
  DeleteApplyDetailFetch, WorkSummaryInitTableFetch, ArtificialSummarySaveFetch, ArtificialSummaryReportFetch,
  WorkSummaryViewFetch, WarningTableInitFetch, DeleteWarningMultiFetch, WarningViewDataFetch, WarningChooiceFetch,
  PeriodMaximumTableInitFetch, PeriodMaximumStatisticsFetch, ProductCycleInitTableFetch,
  TechnicalFileTableInitFetch, TechnicalFileAddFetch, TechnicalFileOpenFetch, TechnicalFileSearchFetch,
  StorageAreaTableInitFetch, StorageAreaCreatFetch, StorageAreaSearchFetch, ViewLogTableInitFetch, ViewLogChooiceFetch,
  ViewLogDetailOutFetch, ViewLogDetailInFetch, IndividualTableInitFetch, IndividualAddToolFetch, IndividualSearchFetch,
  IndividualLendFetch, IndividualViewFetch, IndividualDeleteFetch, IndividualModiFetch, ProductControlTableInitFetch,
  ProductControlAddFetch, ProductControlViewFetch, ProductControlModifyFetch, ProductControlDeleteFetch, ProductControlSearchFetch
} from '../services/services';//发起所有请求

export default {
  namespace: 'sparepartmodal',

  state: {
    OutStorageState: false,// 出库记录  弹窗标志位  false隐藏
    MaintainApplyState: false,// 检测维修  弹窗标志位 false隐藏
    MaintainRercordState: false,// 维修记录  弹窗标志位 false隐藏
    DetectionRecordState: false,// 检测记录  弹窗标志位 false隐藏
    // ContainState: false,//  格号、柜号  弹窗标志位 false隐藏
    hiddenmenu: true,// 菜单区  显隐标志位 false隐藏

    CheckPointerAbstract: false,// 盘点摘要  弹窗标志位 false隐藏

    PnManagementTableData: null, //Pn管理数据
    PNManagementViewData: null, //Pn管理详情数据
    pnsign: null, //点击PN选择时所处那个功能项的标志
    FilterPNData: null,    //  选择PN   点击筛选出的表格数据
    choisePNData: null, //从PN选择表格中选取的单行pn信息  如名称  pn号
    PnAddEquipState: false,// 添加所属装备  弹窗标志位 false隐藏

    outStorageTableData: null, // 出库表格数据
    pnshowstate: false,// 查询弹窗的按钮选择PN控制 PN选择弹窗的显隐
    ViewTableDetailData: null, // 出库表格  点击查看数据  填充备件详情弹窗的基本信息
    ViewSnTableData: null, // 出库表格  点击查看数据 填充备件详情弹窗的sn表格信息
    ViewSnCountTableData: null, // 出库表格  点击选择SN数据 填充出库表单SN的弹窗数据    
    OutStorageTableData: null, //待出库列表表格数据
    snCount: null, //sn数量
    snCountkey: null, // 选择的SN行号
    outStorageRecordTableData: null, // 出库记录表格数据
    OutStorageFormData: null, // 出库表单数据表格数据

    checkTableInitData: null,     // 盘点 初始化表格数据
    checkTableColData: null,   // 存储单行的盘点数据带到盘点详情 
    checkTableViewData: null,   // 盘点 点击查看后盘点详情弹窗表格数据 
    CheckPointerAbstractData: null,    // 盘点 盘点分析摘要数据 

    ChooiceApplyTableData: null,    // 备件申请记录   初始化表格数据
    ApplyFormlData: null,    // 备件申请记录   查看数据 

    warningTableData: null,    // 库存预警  表格数据 
    warningViewData: null,    // 库存预警  查看数据
    ShowAddApplyState: false,// 备件申请表单控制显隐

    WorkSummaryData: null,    // 阶段总结  表格数据 
    workSummaryViewData: null,    // 阶段总结  查看数据 

    PeriodMaximumData: null,    // 周期-最多  表格数据 
    ProductCycleData: null,    // 产品-周期  表格数据 

    TechnicalFileData: null,    //技术文档  表格数据 
    FileDataSource: null,    //技术文档  文件数据源 

    StorageAreaData: null,    // 备件存放地  表格数据 

    ViewLogData: null,        // 查看日志  表格数据
    ViewLogOutData: null,        // 查看日志  出库数据
    ViewLogInData: null,        // 查看日志   入库数据

    IndividualManagementData: null,    // 个体管理  表格数据
    IndividualViewDataSource: null,    // 个体管理  查看数据

    ProductControlData: null,    // 产品管理  表格数据 
    ProductControlViewDataSource: null,    // 产品管理  查看数据 



  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    // 点击出库记录
    ClickOutStorageForm(state, { payload }) {
      return {
        ...state,
        OutStorageState: true
      };
    },
    // 关闭出库记录
    CloseOutStorageForm(state, { payload }) {
      return {
        ...state,
        OutStorageState: false
      };
    },
    // 点击  维修申请弹窗
    ClickMaintainApply(state, { payload }) {
      return {
        ...state,
        MaintainApplyState: true
      };
    },
    // 关闭  维修申请
    CloseMaintainApply(state, { payload }) {
      return {
        ...state,
        MaintainApplyState: false
      };
    },
    // 点击  维修记录 弹窗
    ClickMaintainRercord(state, { payload }) {
      return {
        ...state,
        MaintainRercordState: true
      };
    },
    // 关闭  维修申请
    CloseMaintainRercord(state, { payload }) {
      return {
        ...state,
        MaintainRercordState: false
      };
    },
    // 点击  维修记录 弹窗
    ClickDetectionRecord(state, { payload }) {
      return {
        ...state,
        DetectionRecordState: true
      };
    },
    // 关闭  维修申请
    CloseDetectionRecord(state, { payload }) {
      return {
        ...state,
        DetectionRecordState: false
      };
    },
    // // 点击  格号、柜号 弹窗
    // ClickContain(state, { payload }) {
    //   return {
    //     ...state,
    //     ContainState: true
    //   };
    // },
    // // 关闭  格号、柜号
    // CloseContain(state, { payload }) {
    //   return {
    //     ...state,
    //     ContainState: false
    //   };
    // },
    // // 点击 盘点摘要 弹窗
    clickCheckPointerAbstract(state, { payload }) {
      return {
        ...state,
        CheckPointerAbstract: true
      };
    },
    // 关闭  盘点摘要
    closeCheckPointerAbstract(state, { payload }) {
      return {
        ...state,
        CheckPointerAbstract: false
      };
    },


    // 初始化显示入库的表格数据
    StorageTableDataAsync(state, { payload }) {
      console.log("StorageTableDataAsync")
      return {
        ...state,
        // choisePNData: null,
      };
    },

    // PN管理 初始化显示PN管理的表格数据
    savePNManagementTable(state, { payload }) {
      console.log("初始化显示PN管理的表格数据===", payload)
      return {
        ...state,
        PnManagementTableData: payload
      };
    },
    // PN管理表格数据点击查看获取数据至详情表格弹窗
    PNManagementViewTableData(state, { payload }) {
      return {
        ...state,
        PNManagementViewData: payload
      };
    },
    ShowAddEquip(state, { payload }) {
      return {
        ...state,
        PnAddEquipState: true
      };
    },
    HideAddEquip(state, { payload }) {
      return {
        ...state,
        PnAddEquipState: false
      };
    },
    //存储点击pn选择的标志位  清除之前pn选择表格中的筛选以及选中数据
    savePNChoicesign(state, { payload }) {
      console.log("payload=====", payload)
      return {
        ...state,
        choisePNData: null,
        FilterPNData: null,
        pnsign: payload,
      };
    },
    //  选择PN   点击弹窗中的筛选，出现的表格数据
    PNChoiceFilterTableData(state, { payload }) {
      console.log("payload=====", payload)
      return {
        ...state,
        FilterPNData: payload
      };
    },
    //PN选择  点击确认 获取数据 将选中的PN号传入  PN号 input
    PNChoiceConfirm(state, { payload }) {
      console.log("payload=====", payload)
      return {
        ...state,
        choisePNData: payload,
      };
    },

    //关闭 PN选择 再将之前筛选出来表格中的PN置空
    ClosePNChoiceConfirm(state, { payload }) {
      return {
        ...state,
        FilterPNData: null,
        pnshowstate: false
      };
    },

    //查询与出库 初始化显示出库 库存信息表格数据
    saveOutStorageTableData(state, { payload }) {
      console.log("saveOutStorageTableData====", payload)
      return {
        ...state,
        outStorageTableData: payload,
      };
    },
    // 出库   点击查询弹窗中的PN选择
    saveQueryPNChoice(state, { payload }) {
      console.log("saveQueryPNChoice===payload====", payload)
      return {
        ...state,
        pnshowstate: true,
        choisePNData: null,
        FilterPNData: null,
        pnsign: payload,
      };
    },
    // 出库  点击表格查看填充基本信息
    saveViewTableCol(state, { payload }) {
      console.log("点击表格查看填充基本信息====", payload)
      return {
        ...state,
        ViewTableDetailData: payload,
      };
    },
    // 选择库存信息列表复选框填充待出库列表
    ClickQueryTable(state, { payload }) {
      console.log("选择库存信息列表复选框填充待出库列表====", payload);
      return {
        ...state,
        OutStorageTableData: payload,
      };
    },
    // 出库  点击表格查看 请求回报的  备件SN列表
    saveViewSNDetail(state, { payload }) {
      console.log("saveViewSNDetail====", payload)
      return {
        ...state,
        ViewSnTableData: payload,
      };
    },
    // 出库  点击表格查看 请求回报的  备件SN列表
    saveChooseSNTableData(state, { payload }) {
      console.log("saveChooseSNTableData====", payload)
      return {
        ...state,
        ViewSnCountTableData: payload,
      };
    },
    // 出库  点击备件SN列表显示的数量弹窗 改变待出库列表的数量
    SnCount(state, { payload }) {
      console.log("SnCount====", payload);
      return {
        ...state,
        snCount: payload,
      };
    },
    // 选择sn 选中哪行更改哪行的数据（将数量插入）
    TableChooseSNKey(state, { payload }) {
      console.log("TableChooseSNKey====", payload);
      return {
        ...state,
        snCountkey: payload,
      };
    },
    // 出库记录表格数据
    OutStorageRecordTableData(state, { payload }) {
      // console.log("OutStorageRecordTableData====", payload);
      return {
        ...state,
        outStorageRecordTableData: payload,
      };
    },
    // 出库表单数据
    OutStorageFormDataSource(state, { payload }) {
      // console.log("OutStorageFormDataSource====", payload);
      return {
        ...state,
        OutStorageFormData: payload,
      };
    },

    // 盘点 初始化表格请求 
    CheckTableInitData(state, { payload }) {
      // console.log("CheckTableInitData====", payload);
      return {
        ...state,
        checkTableInitData: payload,
      };
    },
    // 存储单行的盘点数据带到盘点详情填充盘点人盘点日期
    CheckTableColData(state, { payload }) {
      console.log("CheckTableColData====", payload);
      return {
        ...state,
        checkTableColData: payload
      };
    },
    // 盘点 点击查看后盘点详情弹窗表格数据
    CheckTableViewData(state, { payload }) {
      console.log("CheckTableViewData====", payload);
      return {
        ...state,
        checkTableViewData: payload,
      };
    },

    // 盘点 盘点分析摘要数据 
    CheckPointerAbstractCall(state, { payload }) {
      console.log("CheckPointerAbstractCall====", payload);
      return {
        ...state,
        CheckPointerAbstractData: payload,
      };
    },

    //  备件申请记录  
    // 表格数据
    ApplyTableInitData(state, { payload }) {
      // console.log("ApplyTableInitData====", payload);
      return {
        ...state,
        ChooiceApplyTableData: payload,
      };
    },
    //  查看 弹窗的表格数据
    ClickApplyDetailData(state, { payload }) {
      console.log("ClickApplyDetailData====", payload);
      return {
        ...state,
        ApplyFormlData: payload,
      };
    },

    // 库存预警
    // 库存预警详情  显示 备件申请表单
    ShowAddApply(state, { payload }) {
      return {
        ...state,
        ShowAddApplyState: true,
      };
    },
    // 库存预警详情  隐藏 备件申请表单
    HideAddApply(state, { payload }) {
      return {
        ...state,
        ShowAddApplyState: false,
      };
    },
    // 阶段总结
    // 表格数据
    WorkSummaryTableData(state, { payload }) {
      // console.log("WorkSummaryTableData====", payload);
      return {
        ...state,
        WorkSummaryData: payload,
      };
    },
    // 查看
    WorkSummaryViewData(state, { payload }) {
      // console.log("WorkSummaryViewData====", payload);
      return {
        ...state,
        workSummaryViewData: payload,
      };
    },

    // 库存预警
    // 表格数据
    WarningTableData(state, { payload }) {
      // console.log("WarningTableData====", payload);
      return {
        ...state,
        warningTableData: payload,
      };
    },
    // 表格数据
    WarningViewData(state, { payload }) {
      console.log("WarningTableData====", payload);
      return {
        ...state,
        warningViewData: payload,
      };
    },

    // 周期-最多
    // 表格数据 
    PeriodMaximumTableData(state, { payload }) {
      // console.log("PeriodMaximumTableData====", payload);
      return {
        ...state,
        PeriodMaximumData: payload,
      };
    },
    // 产品-周期 
    // 表格数据 
    ProductCycleTableData(state, { payload }) {
      // console.log("ProductCycleTableData====", payload);
      return {
        ...state,
        ProductCycleData: payload,
      };
    },
    // 技术文档  
    // 表格数据 
    TechnicalFileTableData(state, { payload }) {
      console.log("TechnicalFileTableData=======", payload);
      return {
        ...state,
        TechnicalFileData: payload,
      };
    },
    // 打开文件
    TechnicalFileOpenFile(state, { payload }) {
      console.log("TechnicalFileOpenFile=======", payload);
      return {
        ...state,
        FileDataSource: payload,
      };
    },

    // 备件存放地    
    // 表格数据 
    StorageAreaTableData(state, { payload }) {
      console.log("StorageAreaTableData=======", payload);
      return {
        ...state,
        StorageAreaData: payload,
      };
    },

    // 查看日志  
    // 表格数据 
    ViewLogTableData(state, { payload }) {
      console.log("ViewLogTableData=======", payload);
      return {
        ...state,
        ViewLogData: payload,
      };
    },
    // 出库数据 
    ViewLogDetailOutData(state, { payload }) {
      console.log("ViewLogDetailOutData=======", payload);
      return {
        ...state,
        ViewLogOutData: payload,
      };
    },
    // 入库数据 
    ViewLogDetailInData(state, { payload }) {
      console.log("ViewLogDetailInData=======", payload);
      return {
        ...state,
        ViewLogInData: payload,
      };
    },
    // 个体管理    
    // 表格数据 
    IndividualManagementTableData(state, { payload }) {
      console.log("IndividualManagementTableData=======", payload);
      return {
        ...state,
        IndividualManagementData: payload,
      };
    },
    // 查看数据 
    IndividualViewData(state, { payload }) {
      console.log("IndividualViewData=======", payload);
      return {
        ...state,
        IndividualViewDataSource: payload,
      };
    },

    // 产品管理  
    // 表格数据 
    ProductControlTableData(state, { payload }) {
      // console.log("ProductControlTableData=======", payload);
      return {
        ...state,
        ProductControlData: payload,
      };
    },
    // 查看
    ProductControlViewData(state, { payload }) {
      console.log("ProductControlViewData=======", payload);
      return {
        ...state,
        ProductControlViewDataSource: payload,
      };
    },






  },

  effects: {
    //入库 初始化显示表格
    // *StorageTableDataAsync({ payload }, { call, put }) {
    // yield call(StorageDataFetch, payload);
    // if (callData.data != null && callData.data.length !== 0) {
    //   yield put({ type: 'savePNManagementTable', payload: callData.data });
    // }
    // },
    // 入库请求
    *StorageData({ payload }, { call, put }) {
      yield call(StorageDataFetch, payload);
    },
    // 初始化显示Pn管理表格数据
    *InitPnManagementTable({ payload }, { call, put }) {
      const callData = yield call(InitPnManagementTableFetch);
      console.log('InitPnManagementTable====callData=====', callData)
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'savePNManagementTable', payload: callData.data });
      }
      else {
        yield put({ type: 'savePNManagementTable', payload: null });
      }
    },
    // 新增Pn管理表格数据
    *AddPnManagementTable({ payload }, { call, put }) {
      const callData = yield call(AddPnManagementTableFetch, payload);
      console.log('AddPnManagementTable====callData=====', callData);
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'savePNManagementTable', payload: callData.data });
      }
      else {
        yield put({ type: 'savePNManagementTable', payload: null });
      }
    },
    //点击 选择Pn  筛选数据
    *PNChoiceFilter({ payload }, { call, put }) {
      const callData = yield call(PNChoiceFilterFetch, payload);
      console.log('PNChoiceFilter====callData=====', callData);
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'PNChoiceFilterTableData', payload: callData.data });
      }
      else {
        yield put({ type: 'PNChoiceFilterTableData', payload: null });
      }
    },
    // 点击PN管理表格的查看
    *PNManagementView({ payload }, { call, put }) {
      const callData = yield call(PNManagementViewFetch, payload);
      console.log('PNManagementView====callData=====', callData);
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'PNManagementViewTableData', payload: callData.data });
      }
      else {
        yield put({ type: 'PNManagementViewTableData', payload: null });
      }
    },
    // pn管理中根据pn号进行搜索
    *SearchPN({ payload }, { call, put }) {
      const callData = yield call(SearchPNFetch, payload);
      console.log('PN搜索====callData=====', callData);
      if (callData.data != '') {
        yield put({ type: 'savePNManagementTable', payload: callData.data });
      }
      else {
        yield put({ type: 'savePNManagementTable', payload: null });
      }
    },

    // 初始化显示 查询与出库 表格
    *OutStorageTableDataAsync({ payload }, { call, put }) {
      const callData = yield call(OutStorageTableDataFetch);
      console.log('OutStorageTableDataAsync====callData=====', callData);
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'saveOutStorageTableData', payload: callData.data });
      }
      else {
        yield put({ type: 'saveOutStorageTableData', payload: null });
      }
    },
    //  查询与出库 点击查询弹窗中的筛选  表格中的数据
    *ChoosePNQuery({ payload }, { call, put }) {
      const callData = yield call(ChoosePNQueryFetch, payload);
      console.log('ChoosePNQuery====callData=====', callData);
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'saveOutStorageTableData', payload: callData.data });
      }
      else {
        yield put({ type: 'saveOutStorageTableData', payload: null });
      }
    },
    //  查询与出库 点击表格中的 查看
    *ViewSpareDetail({ payload }, { call, put }) {
      yield put({ type: 'saveViewTableCol', payload: payload });
      const callData = yield call(ViewSpareDetailFetch, payload.sparepartpn);
      console.log('ViewSpareDetail====callData=====', callData);
      if (callData.data != null && callData.data.length !== 0) {
        yield put({ type: 'saveViewSNDetail', payload: callData.data });
      }
      else {
        yield put({ type: 'saveViewSNDetail', payload: null });
      }
    },
    //  查询与出库 点击表格中的 选择SN
    *TableChooseSN({ payload }, { call, put }) {
      const callData = yield call(TableChooseSNFetch, payload);
      console.log('TableChooseSN====callData=====', callData);
      yield put({ type: 'saveChooseSNTableData', payload: callData.data });
    },
    //  出库记录表格数据
    *OutStorageRecordAsync({ payload }, { call, put }) {
      const callData = yield call(OutStorageRecordFetch);
      console.log('OutStorageRecord====callData=====', callData);
      yield put({ type: 'OutStorageRecordTableData', payload: callData.data });
    },
    // 点击出库历史记录弹窗中的详情  填充出库表单弹窗数据
    *ClickOutStorageFormAsync({ payload }, { call, put }) {
      yield put({ type: 'ClickOutStorageForm' });
      const callData = yield call(ClickOutStorageFormFetch, payload);
      console.log('填充出库表单数据====callData=====', callData);
      if (callData.data != '') {
        yield put({ type: 'OutStorageFormDataSource', payload: callData.data });
      }
      else {
        yield put({ type: 'OutStorageFormDataSource', payload: null });
      }
    },

    // 盘点
    // 盘点 初始化表格请求 
    *CheckTableInit({ payload }, { call, put }) {
      const callData = yield call(CheckTableInitFetch);
      console.log('CheckTableInit====callData=====', callData);
      yield put({ type: 'CheckTableInitData', payload: callData.data });
    },
    // 盘点 盘点设置
    *CheckSetting({ payload }, { call, put }) {
      const callData = yield call(CheckSettingFetch, payload);
      console.log('盘点设置====callData=====', callData);
      yield put({ type: 'CheckTableInitData', payload: callData.data });
    },
    // 盘点 查看表格 
    *ViewAsyncKey({ payload }, { call, put }) {
      yield put({ type: 'CheckTableColData', payload: payload });
      const callData = yield call(ViewAsyncKeyFetch, payload.key);
      console.log('ViewAsyncKey====callData=====', callData);
      yield put({ type: 'CheckTableViewData', payload: callData.data });
    },
    // 盘点 多行删除
    *DeleteCheckMulti({ payload }, { call, put }) {
      const callData = yield call(DeleteCheckMultiFetch, payload);
      console.log('DeleteCheckMulti====callData=====', callData);
      yield put({ type: 'CheckTableInitData', payload: callData.data });
    },
    // 盘点 单行删除 
    *DeleteCheckCol({ payload }, { call, put }) {
      const callData = yield call(DeleteCheckColFetch, payload);
      console.log('DeleteCheckCol====callData=====', callData);
      yield put({ type: 'CheckTableInitData', payload: callData.data });
    },
    // 盘点 盘点详情弹窗中的盘点摘要 
    *CCheckPointerAbstract({ payload }, { call, put }) {
      const callData = yield call(CheckPointerAbstractFetch, payload);
      console.log('CCheckPointerAbstract====callData=====', callData);
      yield put({ type: 'CheckPointerAbstractCall', payload: callData.data });
    },
    // 备件申请结果初始化表格
    *SapreApplyTableInit({ payload }, { call, put }) {
      const callData = yield call(SapreApplyTableInitFetch);
      console.log('备件申请结果初始化表格====callData=====', callData);
      yield put({ type: 'ApplyTableInitData', payload: callData.data });
    },
    // 筛选结果
    *ChooiceApplyResult({ payload }, { call, put }) {
      const callData = yield call(ChooiceApplyResultFetch, payload);
      console.log('筛选结果====callData=====', callData);
      yield put({ type: 'ApplyTableInitData', payload: callData.data });
    },
    // 详情
    *ClickApplyDetailAsync({ payload }, { call, put }) {
      const callData = yield call(ClickApplyDetailFetch, payload);
      console.log('详情====callData=====', callData);
      yield put({ type: 'ClickApplyDetailData', payload: callData.data });
    },
    // 删除
    *DeleteApplyDetailAsync({ payload }, { call, put }) {
      const callData = yield call(DeleteApplyDetailFetch, payload);
      console.log('删除操作后的数据====callData=====', callData);
      yield put({ type: 'ApplyTableInitData', payload: callData.data });
    },

    // 库存预警
    // 初始化显示表格数据
    *WarningTableInit({ payload }, { call, put }) {
      const callData = yield call(WarningTableInitFetch, payload);
      console.log('库存预警初始化显示表格数据====callData=====', callData);
      yield put({ type: 'WarningTableData', payload: callData.data });
    },
    // 筛选
    *WarningChooice({ payload }, { call, put }) {
      const callData = yield call(WarningChooiceFetch, payload);
      console.log('库存预警筛选数据====callData=====', callData);
      yield put({ type: 'WarningTableData', payload: callData.data });
    },
    // 删除
    *DeleteWarningMulti({ payload }, { call, put }) {
      const callData = yield call(DeleteWarningMultiFetch, payload);
      console.log('库存预警删除表格数据====callData=====', callData);
      yield put({ type: 'WarningTableData', payload: callData.data });
    },
    // 未读  和 查看功能
    *WarningViewDataAsync({ payload }, { call, put }) {
      const callData = yield call(WarningViewDataFetch, payload);
      console.log('库存预警未读和查看数据====callData=====', callData);
      yield put({ type: 'WarningViewData', payload: callData.data });
    },

    // 周期-最多
    // 初始化显示表格数据
    *PeriodMaximumTableInit({ payload }, { call, put }) {
      const callData = yield call(PeriodMaximumTableInitFetch, payload);
      console.log('周期-最多  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'PeriodMaximumTableData', payload: callData.data });
    },
    // 统计
    *PeriodMaximumStatistics({ payload }, { call, put }) {
      const callData = yield call(PeriodMaximumStatisticsFetch, payload);
      console.log('周期-最多 统计 数据====callData=====', callData);
      yield put({ type: 'WarningTableData', payload: callData.data });
    },

    // 产品-周期 
    // 初始化显示表格数据
    *ProductCycleInitTable({ payload }, { call, put }) {
      const callData = yield call(ProductCycleInitTableFetch, payload);
      console.log('产品-周期  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'ProductCycleTableData', payload: callData.data });
    },

    // 技术文档  
    // 初始化显示表格数据
    *TechnicalFileTableInit({ payload }, { call, put }) {
      const callData = yield call(TechnicalFileTableInitFetch);
      console.log('技术文档  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'TechnicalFileTableData', payload: callData.data });
    },
    // 添加
    *TechnicalFileAdd({ payload }, { call, put }) {
      const callData = yield call(TechnicalFileAddFetch, payload);
      console.log('添加  显示表格数据====callData=====', callData);
      yield put({ type: 'TechnicalFileTableData', payload: callData.data });
    },
    // 搜索
    *TechnicalFileSearch({ payload }, { call, put }) {
      const callData = yield call(TechnicalFileSearchFetch, payload);
      console.log('搜索  显示表格数据====callData=====', callData);
      yield put({ type: 'TechnicalFileTableData', payload: callData.data });
    },
    // 打开
    *TechnicalFileOpen({ payload }, { call, put }) {
      const callData = yield call(TechnicalFileOpenFetch, payload);
      console.log('打开  显示数据====callData=====', callData);
      yield put({ type: 'TechnicalFileOpenFile', payload: callData.data });
    },


    // 备件存放地  
    // 初始化显示表格数据
    *StorageAreaTableInit({ payload }, { call, put }) {
      const callData = yield call(StorageAreaTableInitFetch, payload);
      console.log('备件存放地  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'StorageAreaTableData', payload: callData.data });
    },
    // 新建
    *StorageAreaCreat({ payload }, { call, put }) {
      const callData = yield call(StorageAreaCreatFetch, payload);
      console.log('新建  数据====callData=====', callData);
      yield put({ type: 'StorageAreaTableData', payload: callData.data });
    },
    // 搜索
    *StorageAreaSearch({ payload }, { call, put }) {
      const callData = yield call(StorageAreaSearchFetch, payload);
      console.log('新建  数据====callData=====', callData);
      yield put({ type: 'StorageAreaTableData', payload: callData.data });
    },

    // 查看日志 
    // 初始化显示表格数据
    *ViewLogTableInit({ payload }, { call, put }) {
      const callData = yield call(ViewLogTableInitFetch, payload);
      console.log('查看日志  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'ViewLogTableData', payload: callData.data });
    },
    // 筛选
    *ViewLogChooice({ payload }, { call, put }) {
      const callData = yield call(ViewLogChooiceFetch, payload);
      console.log('筛选  表格数据====callData=====', callData);
      yield put({ type: 'ViewLogTableData', payload: callData.data });
    },
    // 详情  出库数据
    *ViewLogDetailOut({ payload }, { call, put }) {
      const callData = yield call(ViewLogDetailOutFetch, payload);
      console.log('详情出库数据  表格数据====callData=====', callData);
      if (callData.data != '') {
        // yield put({ type: 'ViewLogDetailOutData', payload: callData.data });
      }
      else {
        // yield put({ type: 'ViewLogDetailOutData', payload: null });
      }
    },

    // 详情  入库数据
    *ViewLogDetailIn({ payload }, { call, put }) {
      const callData = yield call(ViewLogDetailInFetch, payload);
      console.log('详情入库数据  表格数据====callData=====', callData);
      yield put({ type: 'ViewLogDetailInData', payload: callData.data });
    },

    // 个体管理  
    // 初始化显示表格数据
    *IndividualManagementTableInit({ payload }, { call, put }) {
      const callData = yield call(IndividualTableInitFetch, payload);
      console.log('个体管理  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'IndividualManagementTableData', payload: callData.data });
    },
    // 新建
    *IndividualAddTool({ payload }, { call, put }) {
      const callData = yield call(IndividualAddToolFetch, payload);
      console.log('新建  显示表格数据====callData=====', callData);
      yield put({ type: 'IndividualManagementTableData', payload: callData.data });
    },
    // 搜索
    *IndividualSearch({ payload }, { call, put }) {
      const callData = yield call(IndividualSearchFetch, payload);
      console.log('搜索  显示表格数据====callData=====', callData);
      yield put({ type: 'IndividualManagementTableData', payload: callData.data });
    },
    // 出借
    *IndividualLend({ payload }, { call, put }) {
      const callData = yield call(IndividualLendFetch, payload);
      console.log('出借  显示数据====callData=====', callData);
      yield put({ type: 'IndividualViewData', payload: callData.data });
    },
    // 详情 查看
    *IndividualView({ payload }, { call, put }) {
      const callData = yield call(IndividualViewFetch, payload);
      console.log('详情  显示数据====callData=====', callData);
      yield put({ type: 'IndividualViewData', payload: callData.data });
    },
    // 详情 修改
    *IndividualModify({ payload }, { call, put }) {
      const callData = yield call(IndividualModiFetch, payload);
      console.log('修改  显示数据====callData=====', callData);
      yield put({ type: 'IndividualManagementTableData', payload: callData.data });
    },
    // 删除 
    *IndividualDelete({ payload }, { call, put }) {
      const callData = yield call(IndividualDeleteFetch, payload);
      console.log('修改  显示数据====callData=====', callData);
      yield put({ type: 'IndividualManagementTableData', payload: callData.data });
    },


    // 产品管理 
    // 初始化显示表格数据
    *ProductControlTableInit({ payload }, { call, put }) {
      const callData = yield call(ProductControlTableInitFetch, payload);
      console.log('产品管理  初始化显示表格数据====callData=====', callData);
      yield put({ type: 'ProductControlTableData', payload: callData.data });
    },
    // 添加
    *ProductControlAdd({ payload }, { call, put }) {
      const callData = yield call(ProductControlAddFetch, payload);
      console.log('添加  显示表格数据====callData=====', callData);
      yield put({ type: 'ProductControlTableData', payload: callData.data });
    },
    // 查看
    *ProductControlView({ payload }, { call, put }) {
      const callData = yield call(ProductControlViewFetch, payload);
      console.log('查看  显示表格数据====callData=====', callData);
      yield put({ type: 'ProductControlViewData', payload: callData.data });
    },
    // 修改
    *ProductControlModify({ payload }, { call, put }) {
      const callData = yield call(ProductControlModifyFetch, payload);
      console.log('修改  显示表格数据====callData=====', callData);
      yield put({ type: 'ProductControlTableData', payload: callData.data });
    },
    // 删除
    *ProductControlDelete({ payload }, { call, put }) {
      const callData = yield call(ProductControlDeleteFetch, payload);
      console.log('删除  显示表格数据====callData=====', callData);
      yield put({ type: 'ProductControlTableData', payload: callData.data });
    },
    // 搜索
    *ProductControlSearch({ payload }, { call, put }) {
      const callData = yield call(ProductControlSearchFetch, payload);
      console.log('搜索  显示表格数据====callData=====', callData);
      yield put({ type: 'ProductControlTableData', payload: callData.data });
    },

    // 阶段总结
    // 初始化表格
    *WorkSummaryInitTable({ payload }, { call, put }) {
      const callData = yield call(WorkSummaryInitTableFetch);
      console.log('阶段总结初始化表格====callData=====', callData);
      yield put({ type: 'WorkSummaryTableData', payload: callData.data });
    },
    // 查看
    *WorkSummaryView({ payload }, { call, put }) {
      const callData = yield call(WorkSummaryViewFetch, payload);
      console.log('阶段总结表格查看====callData=====', callData);
      yield put({ type: 'WorkSummaryViewData', payload: callData.data });
    },
    // 存为草稿
    *ArtificialSummarySave({ payload }, { call, put }) {
      const callData = yield call(ArtificialSummarySaveFetch, payload);
      console.log('存为草稿====callData=====', callData);
      yield put({ type: 'WorkSummaryTableData', payload: callData.data });
    },
    // 上报
    *ArtificialSummaryReport({ payload }, { call, put }) {
      const callData = yield call(ArtificialSummaryReportFetch, payload);
      console.log('上报====callData=====', callData);
      yield put({ type: 'WorkSummaryTableData', payload: callData.data });
    },







  },


  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

};
