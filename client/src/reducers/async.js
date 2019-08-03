import axios from "axios";
import { createReducer, createAction } from "redux-starter-kit";


export default function createHttpRedux(namespace, url, method, api = "https://dog.ceo/api/") {
  const started = createAction(`ASYNC/${namespace}:STARTED`);
  const succeeded = createAction(`ASYNC/${namespace}:SUCCEEDED`);
  const failed = createAction(`ASYNC/${namespace}:FAILED`);

  return {
    action: dispatch => (payload) => {
      dispatch(started(payload));
      return axios[method](api + url, payload).then(
        data => dispatch(succeeded(data.data)),
        error => dispatch(failed(error.response.data)),
      );
    },
    reducer: createReducer(
      {
        data: null,
        loading: false,
        error: false,
      },
      {
        [started]: (state) => {
          state.loading = true;
          state.error = false;
          state.data = null;
        },
        [succeeded]: (state, { payload }) => {
          state.data = payload;
          state.loading = false;
          state.error = false;
        },
        [failed]: (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        },
      },
    ),
  };
}