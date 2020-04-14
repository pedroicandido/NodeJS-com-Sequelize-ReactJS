import React, {useState} from 'react';
import classes from './styles.css';
import axios from '../../services/api';
import {FiArrowRight} from 'react-icons/fi';
import {useHistory, NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';


export default function Login() {

    const history = useHistory();
    const[idLogin, setIdLogin] = useState('');
    const[error, setError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();  
        axios.post('/login', { idLogin })
        .then( res => {
            console.log(res.data);
            localStorage.setItem('nome', res.data.name);
            setError(false);
            history.push(`/user/${res.data.id}/itens`);
        })
        .catch( err => {
            setIdLogin('');
            setError(true);
        })
    }

  return (
    <Aux>
        <div className={classes.Container}>
            <div className={classes.LoginForm}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Log In</h1>
                        <input
                            required
                            onChange={e => setIdLogin(e.target.value)}
                            value={idLogin} 
                            placeholder="ID do usuário"/>
                            {error && <span>Usuário não encontrado.</span>}
                        <button className={classes.btnLogin} type="submit">Login</button>
                    </div>
                </form>
                <NavLink to="/register"><FiArrowRight size={24} color="black"/>Criar uma conta</NavLink>
            </div>
        </div>
    </Aux>
  );
}
