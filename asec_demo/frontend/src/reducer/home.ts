type ReducerAction = {
    type: string;
    payload: any;
}

export const initialState = {
    pageArray: [],
    characters: [],
    dotIndex: 0,
    pageAmount: 1,
    fetchingEventList: [],
    isFetching: false,
    searchText: ''
};

const reducer = (state: any, action: ReducerAction) => {
    const { dotIndex, pages, characters, fetchingEvent, searchText } = action.payload;
    switch (action.type) {
      case 'UPDATE_CHARACTERS':
        return {
          ...state,
          characters,
        }
      case 'CHANGE_PAGE':
        if (!state.fetchingEventList.includes(fetchingEvent)) {
          return state
        }

        // Remove fetching event
        const removeIndex = state.fetchingEventList.indexOf(fetchingEvent);
        if (removeIndex > -1) {
          state.fetchingEventList.splice(removeIndex, 1);
        }
        return {
          ...state,
          dotIndex,
          characters,
          isFetching: state.fetchingEventList.length > 0,
        };
      case 'SET_PAGES':
        const pageArray = Array.from({length: (pages || 1)}, (_, index) => index + 1);
        return {
          ...state,
          pageArray,
      }
      case 'IS_FETCHING':
        if (state.fetchingEventList.includes(fetchingEvent)) {
          return state;
        }

        state.fetchingEventList.push(fetchingEvent);
        return {
          ...state,
          isFetching: state.fetchingEventList.length > 0,
        }
      case 'UPDATE_SEARCH_TEXT':
        return {
          ...state,
          searchText,
        }
      case 'UPDATE_SEARCH_RESULT':
        return {
          ...state,
          characters,
        }
      default:
        throw new Error(`不存在的 action type: ${action.type}`);
    }
};

export default reducer;
