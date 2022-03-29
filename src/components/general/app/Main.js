import React, { Component } from 'react';
import { connect } from "react-redux";
import {CircularProgress,  Box, Grid, TextField, Card, CardContent, Typography,CardActions, Button,
  TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';
import multiplicacion from '../../../global/images/multiplicacion.jpg'; 
import { updateMessage } from "../../../redux/actions/actGlobal";
import {consulta, viewError} from '../../../global/js/funciones';
import moment from 'moment';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charging:false,
      numero1:'',
      numero2:'',
      result:[]
    }
  }

  async componentDidMount() {
    this.data()
  }


  async data(){

    let result = await this.listValores();
    if(result.length > 0){
      this.setState({result, charging:false})
    }else{
      this.setState({result:[]})
    }
   
  }
  
 
  
  onChange = ({ target }) => {
    let { value, name } = target;
    this.setState({
      [name]:value
    })
  }

  onSubmit = (e) => {
    let {numero1, numero2} = this.state;
    let {updateMessage} = this.props;
    let error = false;
    if (!numero1) { error = true; }
    if (!numero2) { error = true; }
    if (!error) {
        this.sendData();
    }else updateMessage({ title:'Por favor complete todos los campos obligatorios', types:'info', showMessage: true, time: 6000 })
   
    
  }
  reset(){
    this.setState({numero1:'', numero2:''})
  }

  sendData() {
    let {numero1, numero2 } = this.state
    let resultado=numero1*numero2;
    let data = {
      resultado:resultado
    }
    this.save(data, () => this.setState({ charging: false}));
    this.reset()
  }

  save(data){
    let {updateMessage} = this.props;
    return new Promise(resolve => {
      consulta(`api/multiplicacion/save`, data, "post", (error, estado, resp) => {
        let title = 'Ha ocurrido un error, contacte con el administrador.', types = 'error';
        if (!error) {
          if (estado === 200) { 
            types = 'success';
            title = resp.title;
            this.data()
          } else {
            types = 'info';
            title = resp.title ? resp.title : viewError(resp);
          }
        }
        updateMessage({ title, types, showMessage: true, time: 6000 });
        resolve(estado === 200 && !error ? resp : null);
        
      })
    })
  }
  onDelete = (e) => {
    this.delete();
  }

   delete(){
    let {updateMessage} = this.props;
    return new Promise(resolve => {
      consulta(`api/multiplicacion/delete`, '', "delete", (error, estado, resp) => {
        let title = 'Ha ocurrido un error, contacte con el administrador.', types = 'error';
        if (!error) {
          if (estado === 200) { 
            types = 'success';
            title = resp.title;
          } else {
            types = 'info';
            title = resp.title ? resp.title : viewError(resp);
          }
        }
        updateMessage({ title, types, showMessage: true, time: 6000 });
        resolve(estado === 200 && !error ? resp : null);
        this.data()
      })
    })
  }

  async listValores() {
    return new Promise(resolve => {
      consulta(`api/multiplicacion/list`, null, "get", (error, estado, resp) => {
          resolve(estado === 200 && !error ? resp : null);
      })
    })
  }


  table(){
    let { result}= this.state;
    if(result.length > 0){
    return(
      <Grid container direction={'row'} justifyContent={'center'} style={{ paddingTop: 90, maxWidth:'100%' }}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
              <Table  aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Resultado</TableCell>
                    <TableCell>Fecha Creacion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {result.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="lefth">{row.resultado}</TableCell>
                      <TableCell align="lefth">{moment(row.create_at).format('YYYY-MM-DD, h:mm a')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          </Grid>
    )
    }else{
      return(
        <Grid container direction={'row'} justifyContent={'center'} style={{ paddingTop: 90, maxWidth:'100%' }}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
                No hay registros
            </Typography>
          </Grid>
        </Grid>
      )
    }
  }


   form(){
    let { numero1, numero2}= this.state;
     return(
          <Grid container direction={'row'} justifyContent={'center'} style={{ paddingTop: 90, maxWidth:'100%' }}>
            <Grid item md={8} xs={12} >
              <Card style={{ maxWidth:'100%'}}>
                <Grid container direction={'row'} justifyContent={'center'}>
                  <img src={multiplicacion} alt="Imagen Multiplicacion..." style={{ width: "100%" }}/>
                </Grid>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Multiplicación de Números Grandes
                    </Typography>
                        <Grid item xs={12} >
                            <TextField
                              value={numero1}
                              required
                              type="number"
                              id="numero1"
                              name="numero1"
                              label="#1 Numero"
                              fullWidth
                              onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            value={numero2}
                            required
                            type="number"
                            id="numero2"
                            name="numero2"
                            label="#2 Numero"
                            fullWidth
                            onChange={this.onChange}
                          />
                        </Grid>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={this.onSubmit}>
                    Multiplicar
                  </Button>
                  <Button size="small" color="primary" onClick={this.onDelete}>
                    Limpiar Historico
                  </Button>
                </CardActions>
              </Card>
          </Grid>
          </Grid>
     )
   }

  render() {
    let {charging}= this.state;
     return (
      <>
      {!charging?<>
        <div style={{width:'40%', float:'left', marginLeft:'200px'}}>
          {this.form()}
        </div>
        <div style={{float:'right', width:'35%', marginRight:'200px'}}>
          {this.table()}
        </div>
        </>
        :
        <Box style={{'marginTop': '40%', 'marginLeft':'50%'}} sx={{ display: 'flex' }}>
          <CircularProgress size={50}/>
        </Box>
      }
      </>
     )
    
}
}


//CARGO FUNCIONES DEL MODULO
const mapDispatchToProps = {
  updateMessage,
 
}



export default connect('', mapDispatchToProps)(Main);

