const worklogsLoaded = (newworklogs) => {
  return {
    type: "FETCH_WORKLOGS_SUCCESS",
    payload: newworklogs,
  };
};
const worklogsRequested = () => {
  return {
    type: "FETCH_WORKLOGS_REQUEST",
  };
};

const worklogsError = (error) => {
  return {
    type: "FETCH_WORKLOGS_FAILURE",
    payload: error,
  };
};

export const worklogAddedToCart = (worklogId) => {
  return {
    type: "WORKLOG_ADDED_TO_CART",
    payload: worklogId,
  };
};

export const allworklogsRemovedFromCart = (worklogId) => {
  return {
    type: "ALL_WORKLOGS_REMOVED_FROM_CART",
    payload: worklogId,
  };
};
export const worklogRemoved = (worklogId,  data) => {
  return {
    type: "WORKLOG_REMOVED",
    payload: worklogId,
    data: data,
  };
};
export const worklogCopy = (worklogId,  data, worklogDate) => {
  return {
    type: "WORKLOG_COPY",
    payload: worklogId,
    data: data,
    nowDate: worklogDate,
  };
};
export const addNewWorklog = (name, title, planingTime, second, todayDate) => {
  return {
    type: "ADD_NEW_WL",
    name,
    title,
    planingTime,
    second,
    todayDate,
  };
};

export const worklogDownload = (worklogId) => {
  return {
    type: "WORKLOG_DOWNLOAD",
    payload: worklogId,
  };
};

export const worklogFavorite = (worklogId, data) => {
  return {
    type: "WORKLOG_FAVORITE",
    payload: worklogId,
    data: data
  };
};
export const showFavoritesWorklogs = () => {
  return {
    type: "SHOW_FAVORITE",
  };
};
export const showModal = () => {
  return {
    type: "SHOW_MODAL",
  };
};

export const stopWorklog = (worklogId) => {
  return {
    type: "STOP_WORKLOG",
    payload: worklogId,
  };
};

export const startTimerCounter = (sec) => {
  return {
    type: "START_TIMER_COUNTER",
    sec,
  };
}

export const edToEditWorklog = (
  worklogId,
   data,
 
) => {
  return {
    type: "ADD_TO_EDIT_WL",
    payload: worklogId,    
    data,
    worklogId,

  };
};
export const editingWorklog = (
  name,
  title,
  planingTime,
  favorite,
  second,
  sec,
  data,
) => {
  return {
    type: "EDITING_WL",
    name,
    title,
    planingTime,
    favorite,
    second,
    sec,
    data,

  };
};
// export const addNewWorklog = (name, title, planingTime, second, sec, data) => {
//   return {
//     type: "ADD_NEW_WL",
    // name,
    // title,
    // planingTime,
    // second,
    // sec,
    // data,
//   };
// };

function fetchworklogs(worklogstoreService, dispatch) {
  // будет полезно при подгрузке ворклогов с стороннего источника
  return () => {
    dispatch(worklogsRequested());
    worklogstoreService
      .getWorklogs()
      .then((data) => dispatch(worklogsLoaded(data)))
      .catch((err) => dispatch(worklogsError(err)));
  };
}

export { fetchworklogs };
