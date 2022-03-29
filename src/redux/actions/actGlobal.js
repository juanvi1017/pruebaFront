
const ACT_message = 'ACT_message';




const updateMessage = message => {
  return {
    type: ACT_message,
    message,
  }
};


module.exports = {
 
  ACT_message,
  updateMessage,
};
