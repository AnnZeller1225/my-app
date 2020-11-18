import cloneDeep from "lodash/cloneDeep";
const initialState = {
  worklogList: {
    "12.02.2020": [
      {
        id: 1,
        title: "Team standup",
        info: "JRM_320",
        timeStart: "38520",
        timeStop: "45240",
        isLoad: false,
        isStarting: false,
        allTime: "3.00",
      },
      {
        id: 2,
        title: "Meeting with QA",
        info: "JRM_320",
        timeStart: "54220",
        timeStop: "55431",
        isLoad: false,
        isStarting: false,
        allTime: "1.30",
      },
    ],
    "14.02.2020": [
      {
        id: 3,
        title: "Have a lunch",
        info: "JRM_250",
        timeStart: "41540",
        timeStop: "43540",
        isLoad: false,
        isStarting: false,
        allTime: "3.00",
      },
      {
        id: 4,
        title: "Make an app",
        info: "JRM_500",
        timeStart: "63520",
        timeStop: "67431",
        isLoad: false,
        isStarting: false,
        allTime: "1.30",
      },
    ],
  },
  loading: false,
  error: null,
  modalIsOpen: false,
  activeWorklogs: [], // то, что отображается справа, активный ворклог
  favorites: [],
  showFavoriteList: false,
  timeCounter: 0, // наш новый таймер. попытка 40002
  statusModal: "add", // что делает модалка - добавляет новый, копирует старый или редактирует что есть
  editWorklog: [], // тут лежит объект который мы будем редактировать
  toolTip: {
    // importance: "low", // medium high
    // message: "Nothing to log. Please check issues assignment or description."
  },
  timelineList: {
    "12-02-2020": [
      // {
      //   id: 1,
      //   start: "28800", //7-9
      //   stop: "36000",
      //   status: "загружен"
      // },
      {
        id: 2,
        start: "36000", // 9-10
        stop: "39600",
        status: "загружен"
      },
      {
        id: 3,
        start: "47500",
        stop: "48500",
        status: "загружен"
      },
      {
        id: 4,
        start: "48500",
        stop: "54500",
        status: "загружен"
      },
      {
        id: 5,
        start: "64800",
        stop: "68400",
        status: "загружен"
      },
    ],
    // "15.02.2020": [
    //   {
    //     id: 3,
    //     start: "38520",
    //     stop: "39500",
    //     status: "загружен"
    //   },
    //   {
    //     id: 4,
    //     start: "38520",
    //     stop: "39500",
    //     status: "загружен"
    //   },
    // ],
  }
};
let id = 4; // ид для добавления новых ворклогов, точка отсчета
const updateCartItems = (arr, item, idx) => {
  if (idx === 0) {
    return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...arr, item];
  } else {
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  }
};

let updateNewWorklog = (worklog, item = {}, startedAt) => {
  const {
    id = worklog.id,
    info = worklog.info,
    title = worklog.title,
    timeStart = worklog.timeStart,
    timeStop = worklog.timeStop,
    allTime = worklog.allTime,
    timeNow = worklog.sec,
    isStarting = true,
  } = item;
  return {
    id,
    title,
    info,
    timeStart,
    timeStop,
    allTime,
    timeNow,
    isStarting,
  };
};

const updateOrder = (state, worklogId) => {
  const { worklogs, activeWorklogs } = state;
  const worklog = worklogs.find(({ id }) => id === worklogId);
  const itemIndex = activeWorklogs.findIndex(({ id }) => id === worklogId);
  const item = activeWorklogs[itemIndex];
  const newItem = updateNewWorklog(worklog, item);
  return {
    ...state,
    activeWorklogs: updateCartItems(activeWorklogs, newItem, itemIndex),
  };
};

const updateOrderWL = (state, worklogId) => {
  id++;
  const { worklogs, timeCounter } = state;
  const worklog = worklogs.find(({ id }) => id === worklogId);
  const newItem = {};
  let t = worklog.timeStart + timeCounter;
  newItem.id = id;
  newItem.info = worklog.info;
  newItem.title = worklog.title;
  newItem.timeStart = worklog.timeStart;
  newItem.timeStop = t; // мы его еще не знаем при старте ворклога
  newItem.allTime = timeCounter;
  newItem.isStarting = true;

  return {
    ...state,
    activeWorklogs: newItem,
  };
};
const deleteItem = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)]; // тут мы удаляем массив
};
const deleteWorklog = (state, worklogId, data) => {
  const { worklogList, favorites } = state;
  if (data) {
    const worklogIndex = worklogList[data].findIndex(
      ({ id }) => id === worklogId
    );
    let newWorklog = [
      ...worklogList[data].slice(0, worklogIndex),
      ...worklogList[data].slice(worklogIndex + 1),
    ]; //список оставшихся массивов

    let newWorklogList = worklogList;
    newWorklogList[data] = newWorklog;
    return {
      ...state,
      worklogList: { ...newWorklogList },
    };
  } else {
    const worklogIndex = favorites.findIndex(({ id }) => id === worklogId);
    return {
      ...state,
      favorites: deleteItem(favorites, worklogIndex),
    };
  }
};
const copyWorklog = (state, worklogId, data, nowDate) => {
  id++;
  const { worklogList, activeWorklogs } = state;
  const worklogIndex = worklogList[data].findIndex(
    ({ id }) => id === worklogId
  );
  const worklog = [worklogList[data][worklogIndex]]; // нашли копируемый wl
  let newWorklogList = cloneDeep(worklogList);
  let newWorklog = worklog;
  let seconds = nowDate.h * 60 * 60 + nowDate.min * 60;
  let dateToday = nowDate.d + "." + nowDate.m + "." + nowDate.y;
  const newIndex = newWorklog.findIndex(({ id }) => id === worklogId);

  newWorklog[newIndex].isStarting = true;
  newWorklog[newIndex].id = id;
  newWorklog[newIndex].timeStart = seconds;
  newWorklog[newIndex].timeStop = nowDate.h + "-" + nowDate.min; // тут число гетдэй

  if (newWorklogList[`${dateToday}`]) {
    newWorklogList[`${dateToday}`].push(worklog[0]);
  } else {
    newWorklogList[`${dateToday}`] = newWorklog;
  }

  let newActive = newWorklog;
  newActive[0].data = `${dateToday}`;

  if (activeWorklogs.id) {
    return {
      ...state,
    };
  } else {
    return {
      ...state,
      worklogList: newWorklogList,
      activeWorklogs: newActive[0],
      statusModal: "edit",
    };
  }
};

const worklogsDownload = (state, worklogId) => {
  const { worklogs } = state;
  const itemIndex = worklogs.findIndex(({ id }) => id === worklogId);
  const item = worklogs[itemIndex];
  return {
    ...state,
    worklogs: worklogs.map((worklog) => {
      if (worklog.id === item.id) {
        worklog.isLoad = true;
      }
      return worklog;
    }),
  };
};
const updateArr = (arr, item) => {
  return [...arr, item];
};

const addToFavorite = (state, worklogId, data) => {
  const { worklogList, favorites } = state;
  const worklogIndex = worklogList[data].findIndex(
    ({ id }) => id === worklogId
  );
  let newItem = worklogList[data][worklogIndex];
  newItem.favorite = true;
  console.log(newItem);
  return {
    ...state,
    favorites: updateArr(favorites, newItem),
  };
};

const addNewWl = (state, name, title, planingTime, seconds, todayDate) => {
  id++;
  const { worklogList, timeCounter } = state;
  // let newPlaningTime = planingTime.split(".");
  let newWorklogList = cloneDeep(worklogList);
  console.log(seconds);
  const worklog = {
    id: id,
    info: name,
    title: title,
    allTime: timeCounter,
    timeStart: seconds,
    timeStop: seconds + timeCounter,
    isStarting: true,
  };
  if (newWorklogList[`${todayDate}`]) {
    newWorklogList[`${todayDate}`].push({ ...worklog });
  } else {
    newWorklogList[`${todayDate}`] = [{ ...worklog }];
  }

  let newActive = [{ ...worklog }];
  newActive[0].data = `${todayDate}`;
  return {
    ...state,
    worklogList: newWorklogList,
    activeWorklogs: newActive[0],
  };
};
const addToEditWl = (state, worklogId, data) => {
  if (data) {
    const worklog = findWorklog(state, data, worklogId);
    worklog.data = data;
    return {
      ...state,
      editWorklog: [worklog],
      modalIsOpen: true,
      statusModal: "edit",
    };
  } else {
    const { favorites } = state;
    const worklogIndex = favorites.findIndex(({ id }) => id === worklogId);
    const worklog = favorites[worklogIndex];
    return {
      ...state,
      editWorklog: [worklog],
      modalIsOpen: true,
      statusModal: "edit",
    };
  }
};
const findWorklog = (state, data, worklogId) => {
  const { worklogList } = state;

  const worklogIndex = worklogList[data].findIndex(
    ({ id }) => id === worklogId
  );
  const worklog = worklogList[data][worklogIndex];
  // console.log(worklogIndex, worklog);
  return worklog;
};

const editingWl = (state, title, name, planingTime, favorite) => {
  const { worklogList, editWorklog, favorites } = state;
  if (favorite) {
    return {
      ...state,
      statusModal: "add",
      favorites: favorites.map((worklog) => {
        console.log(worklog.id,editWorklog.id );
        if (worklog.id === editWorklog[0].id) {
          worklog.title = title;
          worklog.info = name;
          worklog.planingTime = planingTime;
        }
        return worklog;
      }),
      editWorklog: [],
    };
  } else {
    return {
      ...state,
      editWorklog: [],
      statusModal: "add",
      worklogList: {
        ...worklogList,
        [editWorklog[0].data]: worklogList[editWorklog[0].data].map(
          (worklog) => {
            if (worklog.id === editWorklog[0].id) {
              worklog.title = title ? title : worklog.title;
              worklog.info = name ? name : worklog.info;
            }
            return worklog;
          }
        ),
      },
    };
  }
};

const showFavorites = (state) => {
  const { favorites, showFavoriteList } = state;
  return {
    ...state,
    showFavoriteList: !showFavoriteList,
    favorites: favorites.map((item) => {
      return item;
    }),
  };
};
const showModal = (state) => {
  const { modalIsOpen } = state;
  return {
    ...state,
    modalIsOpen: !modalIsOpen,
  };
};

const stopWorklog = (state) => {
  const { worklogList, activeWorklogs, timeCounter } = state;
  worklogList[activeWorklogs.data].map((worklog) => {
    if (worklog.id === activeWorklogs.id) {
      worklog.allTime = timeCounter;
      worklog.timeStop = worklog.timeStart + timeCounter;
    }
    return worklog;
  });
  return {
    ...state,
    activeWorklogs: [],
    timeCounter: 0,
    statusModal: "edit",
    editWorklog: [{ ...activeWorklogs }],
  };
};

const getStartCounter = (state, sec) => {
  const { timeCounter } = state;
  let counter = timeCounter + 1; // тут я буду получать секунды
  console.log(" мы в старт каунтер ");
  return {
    ...state,
    timeCounter: counter,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WORKLOG_ADDED_TO_CART": // здесь идет отображение в ceuuent wl // работает клорректно
      return updateOrderWL(state, action.payload);

    // это нам не надо пока
    case "ALL_WORKLOGS_REMOVED_FROM_CART": // удалить все из избранных
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case "WORKLOG_REMOVED":
      return deleteWorklog(state, action.payload, action.data);

    case "WORKLOG_COPY":
      return copyWorklog(state, action.payload, action.data, action.nowDate);

    case "WORKLOG_DOWNLOAD": // не работает
      return worklogsDownload(state, action.payload);

    case "ADD_NEW_WL":
      return addNewWl(
        state,
        action.title,
        action.name,
        action.planingTime,
        action.second,
        action.todayDate
      );
    case "WORKLOG_FAVORITE":
      return addToFavorite(state, action.payload, action.data);
    case "SHOW_FAVORITE":
      return showFavorites(state); // отрисовка избранных
    case "SHOW_MODAL":
      return showModal(state);
    case "STOP_WORKLOG":
      return stopWorklog(state);
    case "START_TIMER_COUNTER":
      return getStartCounter(state, action.sec);
    case "ADD_TO_EDIT_WL":
      return addToEditWl(state, action.payload, action.data);
    case "EDITING_WL":
      return editingWl(
        state,
        action.name,
        action.title,
        action.planingTime,
        action.favorite,
        action.second,
        action.sec,
        action.data
      );

    default:
      return state;
  }
};
export default reducer;
