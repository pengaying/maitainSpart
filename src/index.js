import dva from 'dva';
import createHistory from "history/createBrowserHistory";
import createLoading from 'dva-loading';
import './index.less';
import { message } from 'antd';

// 1. Initialize
const app = dva({
  history: createHistory(),
  
  // onError(err) {
  //   message.error(err.message);
  // }

});
// 1. Initialize
// const app = dva();

// 2. Plugins
// app.use({});

// 3. Model

app.use(createLoading());


app.model(require('./models/Model').default);
// app.model(require('./models/systemModal').default);
// app.model(require('./models/sparepartmodal').default);
// app.model(require('./models/syntheticdisplayModal').default);
// app.model(require('./models/windowModal').default);


app.router(require('./router').default);

app.start('#root');

