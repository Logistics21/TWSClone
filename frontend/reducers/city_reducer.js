import { RECEIVE_ALL_EVENTS, RECEIVE_NEW_EVENT, RECEIVE_UPDATED_EVENT,
         DELETE_EVENT, ADD_ATTENDEE, REMOVE_ATTENDEE
} from '../actions/events_actions';
import { RECEIVE_CITY } from '../actions/cities_actions';
import merge from 'lodash/merge';

const defaultState = {
  events: {},
  hosts: {}
}

const CityReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CITY:
      newState = merge({}, state, action.city);
      return newState;
    case RECEIVE_NEW_EVENT:
      newState = merge({}, state, { events: action.event });
      return newState;
    case RECEIVE_UPDATED_EVENT:
      newState = merge({}, state, { events: action.event });
      return newState;
    case DELETE_EVENT:
      delete newState['events'][action.id]
      return newState;
    case ADD_ATTENDEE:
      newState['events'][action.event_id].attendees.push(action.user.id);
      return newState;
    case REMOVE_ATTENDEE:
      let i = newState['events'][action.event_id].attendees.indexOf(action.user_id);
      newState['events'][action.event_id].attendees.splice(i, 1);
      return newState;
    default:
      return state;
  }
}

export default CityReducer;
