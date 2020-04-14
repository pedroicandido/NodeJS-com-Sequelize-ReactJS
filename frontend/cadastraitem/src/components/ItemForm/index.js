import React, {useState, useEffect} from 'react';
import axios from '../../services/api';
import {useParams} from 'react-router-dom';
import Itens from '../Items';
import classes from './Sidebar.css';


const DevForm = () => {

    const {userId} = useParams();
    const [idItem, setIdItem] = useState(null);
    const [itens, setItens] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [amount, setAmount] = useState('');

    const fetchItens = async () =>{
        const response = await axios.get(`/user/${userId}/itens`);
        setItens(response.data);
      }

    const handleDelete = async idItem => {
        const response = await axios.delete(`/user/${userId}/itens/${idItem}`);
        setItens(itens.filter( item =>  item.id !== idItem));
        setName('');
        setValue('');
        setAmount('');
        setDescription('')
        setIdItem(null);
    }

    const handleUpdate = async id => {
        const response = await axios.get(`/user/${userId}/itens/${id}`);
        const {name, description, value, amount} = response.data;
        setIdItem(id);
        setName(name);
        setDescription(description);
        setValue(value);
        setAmount(amount);
    }


   const handleSubmit = e => {
      e.preventDefault();
      if(idItem){

        axios.put(`/user/${userId}/itens/${idItem}`, {
            name,
            value,
            amount,
            description
        })
        .then(res => {
            setName('');
            setValue('');
            setAmount('');
            setDescription('')
            setIdItem(null);
            fetchItens();
        })
        .catch()

      }else{
        axios.post(`/user/${userId}/itens`, {
            name,
            value,
            amount,
            description
        })
        .then(res => {
            setItens([...itens, res.data]);
            setName('');
            setValue('');
            setAmount('');
            setDescription('');
        })
        .catch()
      }
  }

  useEffect( () => {
      fetchItens();
  }, []);

    return (
        <div className={classes.container}>
            <aside className={classes.box}>
        <form onSubmit={handleSubmit}>
            <div className={classes.inputBlock}>
                <label htmlFor="name">Nome do Item</label>
                <input 
                onChange={ e => setName(e.target.value)}
                value={name}
                name="name" 
                id="name" 
                required/>
            </div>

            <div className={classes.inputBlock}>
                <label htmlFor="valor">Valor</label>
                <input 
                    type="number"
                    onChange={ e => setValue(e.target.value)}
                    value={value}
                    id="valor" 
                    required/>
            </div>

            <div className={classes.inputBlock}>
                <label htmlFor="amount">Quantidade</label>
                <input
                    type="number" 
                    onChange={ e => setAmount(e.target.value)}
                    value={amount}
                    id="amount" 
                    required/>
            </div>

            <div className={classes.inputBlock}>
                <label htmlFor="description">Descrição</label>
                <textarea
                onChange={ e => setDescription(e.target.value)}
                value={description} 
                name="description" 
                id="description" 
                required/>
            </div>

            <button type="submit">Salvar</button>

            </form>
            </aside>

            <main className={classes.table}>
                <Itens 
                    onUpdate={handleUpdate}
                    itens={itens} 
                    onDelete={handleDelete}/>
            </main>
        </div>
        
    );
}

export default DevForm;