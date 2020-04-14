import React from 'react';
import {Table} from 'react-bootstrap';
import {FaTrashAlt, FaEdit} from 'react-icons/fa';
import {format} from 'date-fns';
import classes from './styles.css';

export default function ItemList({itens, onDelete, onUpdate}) {

  let listaItens;

  if(!!itens.length){
    listaItens = (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th>Data de Inclusão</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </thead>
      <tbody>
        {itens.map( (item, index) => (
          <tr key={item.id} style={{textAlign:'center'}}>
            <td>{index+ 1}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.value}</td>
            <td>{item.amount}</td>
            <td>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</td>
            <td>
              <button 
                className={classes.btnExcluir}
                onClick={() => 
                onDelete(item.id)}>
                  <FaTrashAlt size={18} color="white"/>
              </button>
            </td>
            <td>
              <button className={classes.btnEditar}  onClick={() => onUpdate(item.id)}>
                <FaEdit size={18} color="black"/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    );
  }else{
    listaItens = <h1>Cadastre um item!</h1>
  }

  return (
    <>
    {listaItens}
    </>
  );
}
