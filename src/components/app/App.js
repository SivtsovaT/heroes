import React from "react";
import './app.scss';
import HeroesAddForm from "../heroesAddForm/HeroesAddForm";
import HeroesList from "../heroesList/HeroesList";
import HeroesFilters from "../heroesFilters/HeroesFilters";


const App = () => {
    return (
        <main className='app'>
            <div className='content'>
                <HeroesList/>
                <div className='content__interactive'>
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>

        </main>

    )
}

export default App;