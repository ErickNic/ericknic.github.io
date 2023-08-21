import {
    Route,
    Routes
  } from 'react-router-dom';
import Principal from '../pages/Principal';
import Portfolio from '../pages/Portfolio';
import Sobremi from '../pages/Sobremi';
import Conectemos from '../pages/Conectemos';
import clases from './main.module.css';
const Main = () =>{
    return(
        <main className={clases.main}>
            <Routes>
                <Route path='/' exact element={<Principal/>}/>
                <Route path='/porfolio' exact element={<Portfolio/>}/>
                <Route path='/sobremi' exact element={<Sobremi/>}/>
                <Route path='/conectemos' exact element={<Conectemos/>}/>
            </Routes>
        </main>
    );

}

export default Main