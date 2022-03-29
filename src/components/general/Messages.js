import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Store } from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';
import { updateMessage } from "../../redux/actions/actGlobal";

class messages extends Component {

  componentDidUpdate({ message }) {
    let { message: messageNew, updateMessage } = this.props;
    if (messageNew.showMessage !== message.showMessage) {
      if (messageNew.showMessage) {
        document.getElementById('crear_message_app').click()
        updateMessage({
          showMessage: false,
          types: "none",
          title: "",
          time: 6000,
          onScreen: false
        });
      }
    }
  }

  obtenertitle = (types) => {
    const messages = {
      'success': 'Ok .!',
      'info': 'Oops .!',
      'warning': 'Cuidado.!',
      'danger': 'Oops.!',
    }
    return (messages[types])
  }

  render() {
    const { message } = this.props;
    let {
      types,
      title,
      time,
      onScreen,
    } = message;

    return (
      <button
        id="crear_message_app"
        className='oculto'
        onClick={() => {
          Store.addNotification({
            title: this.obtenertitle(types),
            message: `${title}`,
            type: types,                         // 'default', 'success', 'info', 'warning'
            insert: "top",                // where to position the notifications
            container: 'top-center',
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: time,
              onScreen,
              showIcon: true,
              pauseOnHover: false,
            },


          })
        }}
      />
    );
  }
}


const mapStateToProps = (state) => {
  let { message } = state.redGlobal;
  return {
    message
  }
};

const mapDispatchToProps = {
  updateMessage,
}

messages.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string.isRequired,
    types: PropTypes.oneOf(['success', 'error', 'info', 'warning', 'none']).isRequired,
    showMessage: PropTypes.bool.isRequired,
    time: PropTypes.number,
  }),
}


export default connect(mapStateToProps, mapDispatchToProps)(messages);

