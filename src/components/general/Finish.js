import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';





const Finish = ({ message, width = "100%", marginTop = '20%', image, widthImg = "5%", marginBottom = '5%' }) => {
  return (
    <div className="text-center" style={{ width, marginBottom, textAlign:'center' }}>
      <img src={image} alt="Tareas Finalizada" style={{ width: widthImg, minWidth: "80px", marginTop }} />
      <Typography variant="subtitle1" color="textSecondary" component="p">
        {message}.
      </Typography>
    </div>
  );
}



//Props del componente
Finish.propTypes = {
  message: PropTypes.string.isRequired

}


export default Finish;
