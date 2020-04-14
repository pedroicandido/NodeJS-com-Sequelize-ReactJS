import React from 'react';
import ItemForm from '../ItemForm';
import classes from './styles.css';
import {FaSignOutAlt} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';

const Dashboard = () => {

    const history = useHistory();
    const nome = localStorage.getItem('nome');

    const handleLogout = () =>{
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className={classes.Container}>
            <div className={classes.Toolbar}>
                <div className={classes.BemVindo}>
                    {` Bem vindo, ${nome} !`}
                </div>

                <button className={classes.btnLogout} onClick={handleLogout}>
                    <FaSignOutAlt size={18}/>
                    Logout
                </button>
                
            </div>
            <ItemForm/>            
        </div>
        
    );
}

export default Dashboard;