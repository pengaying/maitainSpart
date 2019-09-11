
export default {
  namespace: 'Model',

  state: {
    // name: 'Model',
    // routersign:'/'
  },

  effects: {

    *RouterTurn({ payload }, { call, put }) {  // eslint-disable-line
        let path =  payload.locationPathname;
        // console.log(path)
        if(path === '/window'){
          // yield put({type:'routerRefresh',payload:'/window'});
          // history.replace({ pathname: '/window'});
        }
        else  if(path === '/system'){
          // yield put({type:'routerRefresh',payload:'/system'});

          // history.push('/system');
        }
        else  if(path === '/syntheticDisplay'){
          // history.push('/syntheticDisplay');
        }
        else  if(path === '/sparepartmodal'){
          // history.push("/sparepartmodal")
          // routerRedux.push('/sparepartmodal');
          // yield put(routerRedux.push('/sparepartmodal'));
        }
    },
  },
  reducers: {
    routerRefresh(state,{payload}){
      // console.log("payload====",payload)
      return{
        ...state,
        routersign:payload
      }
    }

  },

  subscriptions: {
    setupHistory({dispatch, history}) {
      // history.listen((location) => {
        // console.log(location.pathname);
    //     dispatch({
    //       type: 'RouterTurn',
    //       payload: {
    //         locationPathname: location.pathname,
    //       },
    //     });
    //   })
    }



  }
}
// import { routerRedux} from 'dva/router'
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory()