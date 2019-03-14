import React, { Component } from 'react';
import Select from './components/Select';

const car_brand = [
    { id: 1, name: 'Audi' },
    { id: 2, name: 'BMW' },
    { id: 3, name: 'Brilliance' },
    { id: 4, name: 'Beuick' },
    { id: 5, name: 'Cadillac' },
    { id: 6, name: 'Chery' },
    { id: 7, name: 'Chevrolet' },
    { id: 8, name: 'Chrysler' },
]

const car_models = [
    { id: 1, name: 'A1' },
    { id: 2, name: 'A3' },
    { id: 3, name: 'A4' },
]

const car_generation = [
    { id: 1, name: 'II (8P)' },
    { id: 2, name: 'II (8P) Рестайлинг 1' },
    { id: 3, name: 'II (8P) Рестайлинг 2' },
]

const car_body = [
    { id: 1, name: 'Внедорожник)' },
    { id: 2, name: 'Грузо-пассажирский (комби)' },
    { id: 3, name: 'Кабриолет' },
]

const car_engine = [
    { id: 1, name: 'Бензиновый' },
    { id: 2, name: 'Гибридный' },
    { id: 3, name: 'Дизельный' }
]

export default class Form extends Component {

    render() {

        return (
            <form>
                <div className={'col col-4'}>
                    <Select 
                        title={'Марка'}
                        options={car_brand}
                        onChange={(data) => console.log(data)}
                   />
                </div>
                <div className={'col col-4'}>
                    <Select 
                        title={'Модель'}
                        options={car_models}
                        disabled={true}
                        onChange={(data) => console.log(data)}
                   />
                </div>
                <div className={'col col-4'}>
                    <Select 
                        title={'Поколение'}
                        options={car_generation}
                        disabled={true}
                        onChange={(data) => console.log(data)}
                   />
                </div>
                <div className={'col col-4'}>
                    <Select 
                        title={'Кузов'}
                        options={car_models}
                        onChange={(data) => console.log(data)}
                   />
                </div>
                <div className={'col col-4'}>
                    <Select 
                        title={'Двигатель'}
                        options={car_engine}
                        onChange={(data) => console.log(data)}
                   />
                </div>
            </form>
        )
    }
}