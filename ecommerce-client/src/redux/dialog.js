export const TOGGLE_DIALOG_SHOWN = 'TOGGLE_DIALOG_SHOWN';

export function reducer(state = {}, action) {
  switch (action.type) {
    case TOGGLE_DIALOG_SHOWN: {
      return { ...state, dialogOpen: !Boolean(state.dialogOpen) };
    }
    default:
      return state;
  }
}

