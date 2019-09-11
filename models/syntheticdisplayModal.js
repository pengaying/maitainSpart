


export default {

  namespace: 'syntheticdisplayModal',

  state: {
    nowData:null,
    datalength:0,
    length:0,
    height:0,
    mark:'',
    a:1,
    b:1,
    c:1,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *ClickBtn({payload},{call,put}){
      console.log("payload",payload);
      yield put({type:'SendMsg',payload:payload})
    },
    *ClickClose1({payload},{call,put}){
      console.log("payload",payload);
      yield put({type:'close1',payload:payload})
    },
    *ClickClose2({payload},{call,put}){
      console.log("payload",payload);
      yield put({type:'close2',payload:payload})
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    SendMsg(state,{payload}){
      console.log("payload========",payload);
      return {
        ...state,
        nowData:payload.nowData,
        datalength:payload.datalength,
        length:payload.nowData.length,
        mark:true,
        a:payload.a,
        b:payload.b,
        c:payload.c,
        d:payload.d,
        e:payload.e,
        f:payload.f,
        g:payload.g,
        h:payload.h
      }
    },
    close1(state,{payload}){
      console.log("payload========",payload.mark);
      return {
        ...state,
        mark:'first'
      }
    },
    close2(state,{payload}){
      console.log("payload========",payload.mark);
      return {
        ...state,
        mark:'second'
      }
    },
  },

};
