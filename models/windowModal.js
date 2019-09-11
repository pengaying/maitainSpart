


export default {

    namespace: 'windowModal',
  
    state: {
      hiddenmenu: true,  //控制二级菜单显隐  为true显示
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
      *ClickCloseL({payload},{call,put}){
        console.log("payload",payload);
        yield put({type:'closeL',payload:payload})
      },
      *ClickCloseR({payload},{call,put}){
        console.log("payload",payload);
        yield put({type:'closeR',payload:payload})
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      closeL(state,{payload}){
        console.log("payload========",payload.mark);
        return {
          ...state,
          mark:payload.mark
        }
      },
      // close2(state,{payload}){
      //   console.log("payload========",payload.mark);
      //   return {
      //     ...state,
      //     mark:'second'
      //   }
      // },
      closeR(state,{payload}){
        console.log("payload========",payload.mark);
        return {
          ...state,
          mark:payload.mark
        }
      },
    },
  
  };
  