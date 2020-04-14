import React, {useState} from 'react';
import classes from './styles.css';
import axios from '../../services/api';
import {useHistory} from 'react-router-dom';

export default function Registro() {

    const history = useHistory();
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[error, setError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('/register', {
            name,
            email
        }).then( res => {
            alert(`O seu login é: ${res.data.idLogin}`);
            history.push('/');
        }).catch( err => setError(true));
    }

  return (
    <div className={classes.Container}>
        <div className={classes.Box}>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.InputGroup}>
                    <label htmlFor="name"><strong>Nome</strong></label>
                    <input
                        onChange={ e=> setName(e.target.value)}
                        value={name}
                        id="name"
                        type="text" 
                        required />
                </div>
                
                <div className={classes.InputGroup}>
                    <label><strong>Email</strong></label>
                    <input 
                        onChange={ e=> setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        required />
                </div>
                {error && <span className={classes.error}>Email já cadastrado.</span>}
                <button className={classes.btnRegistro} type="submit">Cadastrar</button>
            </form>
        </div>
    </div>    
  );
}
