import { connect } from 'react-redux';
import CityDetail from './city_detail';
import { fetchCity } from '../../actions/cities_actions';
import { updateUserCity } from '../../actions/session_actions';
import { attendEvent, leaveEvent, removeEvent, updateEvent } from '../../actions/events_actions';
import { selectAllEvents, selectAllUsers, selectAllHosts } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, city }, { match }) => {
  // debugger
  const cityId = match.params.id;
  const currentCity = city;
  const { currentUser } = session;

  return {
    currentUser,
    events: selectAllEvents(city.events),
    // users: selectAllUsers(city.users),
    hosts: selectAllHosts(city.hosts),
    cityId,
    city: currentCity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCity: (id) => dispatch(fetchCity(id)),
    updateUserCity: (user, city_id, city_name, city_code) => (
      dispatch(updateUserCity(user, city_id, city_name, city_code))
    ),
    attendEvent: (event, user) => dispatch(attendEvent(event, user)),
    leaveEvent: (event_id) => dispatch(leaveEvent(event_id)),
    removeEvent: (event_id) => dispatch(removeEvent(event_id)),
    updateEvent: (event_id) => dispatch(updateEvent(event_id)),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail));
