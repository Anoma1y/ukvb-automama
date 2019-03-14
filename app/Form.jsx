import React, { Component } from 'react';
import axios from 'axios';
import Select from './components/Select';

const car_brand = [
    { id: 10, name: 'Audi' },
    { id: 18, name: 'BMW' },
    { id: 21, name: 'Brilliance' },
    { id: 25, name: 'Buick' },
    { id: 28, name: 'Cadillac' },
    { id: 34, name: 'Chery' },
    { id: 35, name: 'Chevrolet' },
    { id: 36, name: 'Chrysler' },
    { id: 37, name: 'Citroen' },
    { id: 42, name: 'Daewoo' },
    { id: 47, name: 'Datsun' },
    { id: 51, name: 'Dodge' },
    { id: 52, name: 'DongFeng' },
    { id: 61, name: 'Fiat' },
    { id: 63, name: 'Ford' },
    { id: 64, name: 'Foton' },
    { id: 67, name: 'Geely' },
    { id: 71, name: 'Great Wall' },
    { id: 73, name: 'Haima' },
    { id: 76, name: 'Honda' },
    { id: 79, name: 'Hyundai' },
    { id: 80, name: 'Infiniti' },
    { id: 83, name: 'Iran Khodro' },
    { id: 86, name: 'IVECO' },
    { id: 88, name: 'Jaguar' },
    { id: 89, name: 'Jeep' },
    { id: 92, name: 'Kia' },
    { id: 215, name: 'Lada' },
    { id: 97, name: 'Land Rover' },
    { id: 99, name: 'Lexus' },
    { id: 101, name: 'Lifan' },
    { id: 105, name: 'Luxgen' },
    { id: 111, name: 'Maserati' },
    { id: 113, name: 'Mazda' },
    { id: 116, name: 'Mercedes-Benz' },
    { id: 122, name: 'MINI' },
    { id: 123, name: 'Mitsubishi' },
    { id: 127, name: 'Nissan' },
    { id: 130, name: 'Opel' },
    { id: 135, name: 'Peugeot' },
    { id: 139, name: 'Porsche' },
    { id: 147, name: 'Renault' },
    { id: 157, name: 'SEAT' },
    { id: 159, name: 'Skoda' },
    { id: 165, name: 'SsangYong' },
    { id: 166, name: 'Subaru' },
    { id: 167, name: 'Suzuki' },
    { id: 10003741, name: 'T' },
    { id: 176, name: 'Toyota' },
    { id: 184, name: 'Volkswagen' },
    { id: 185, name: 'Volvo' },
    { id: 186, name: 'Vortex' },
    { id: 216, name: 'ГАЗ' },
    { id: 217, name: 'ЗАЗ' },
    { id: 226, name: 'ТагАЗ' },
    { id: 227, name: 'УАЗ' },
]

// const car_models = [
    // { id: 1, name: 'A1' },
    // { id: 2, name: 'A3' },
    // { id: 3, name: 'A4' },
// ]

// const car_generation = [
    // { id: 1, name: 'II (8P)' },
    // { id: 2, name: 'II (8P) Рестайлинг 1' },
    // { id: 3, name: 'II (8P) Рестайлинг 2' },
// ]

const car_body = [
    { id: 1, name: 'Внедорожник' },
    { id: 2, name: 'Грузо-пассажирский (комби)' },
    { id: 3, name: 'Кабриолет' },
]

const car_engine = [
    { id: 1, name: 'Бензиновый' },
    { id: 2, name: 'Гибридный' },
    { id: 3, name: 'Дизельный' }
]

const car_year = [
    { id: 1, name: '2001' },
    { id: 2, name: '2002' },
    { id: 3, name: '2003' },
    { id: 4, name: '2004' },
    { id: 5, name: '2005' },
    { id: 6, name: '2006' },
    { id: 7, name: '2007' },
    { id: 8, name: '2008' },
    { id: 9, name: '2009' },
    { id: 10, name: '2010' },
    { id: 11, name: '2011' },
    { id: 12, name: '2012' },
    { id: 13, name: '2013' },
    { id: 14, name: '2014' },
    { id: 15, name: '2015' },
    { id: 16, name: '2016' },
]


export default class Form extends Component {

    state = {
        car_models: [],
        car_generation: []
    }

    handleBrandChange = (id) => {
        if (id === -1) {
            this.setState({
                car_models: [],
                car_generation: []
            })
            return;
        }

        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/filter/models?makeId=${id}`)}`;

        axios.get(url)
            .then((data) => {

                this.setState({
                    car_models: data.data.map((model) => ({
                        id: model.id,
                        name: model.title
                    }))
                })
            })
            .catch((err) => console.log('err', err))
    }

    handleModelChange = (id) => {
        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/filter/generations?modelId=${id}`)}`;

        if (id === -1) {
            this.setState({
                car_models: [],
                car_generation: []
            })
            return;
        }

        axios.get(url)
            .then((data) => {
                this.setState({
                    car_generation: data.data.map((model) => ({
                        id: model.id,
                        name: model.title
                    }))
                })
            })
            .catch((err) => console.log('err', err))
    }

    render() {
        const { 
            car_models,
            car_generation
        } = this.state;

        return (
            <form>
                <div className={'row'}>
                    <div className={'col-xs-4'}>
                        <Select 
                            title={'Марка'}
                            options={car_brand}
                            onChange={this.handleBrandChange}
                    />
                    </div>
                    <div className={'col-xs-4'}>
                        <Select 
                            title={'Модель'}
                            options={car_models}
                            disabled={car_models.length === 0}
                            onChange={this.handleModelChange}
                    />
                    </div>
                    <div className={'col-xs-4'}>
                        <Select 
                            title={'Поколение'}
                            options={car_generation}
                            disabled={car_generation.length === 0}
                            onChange={(data) => console.log(data)}
                    />
                    </div>
                    <div className={'col-xs-4'}>
                        <Select 
                            title={'Кузов'}
                            options={car_body}
                            onChange={(data) => console.log(data)}
                    />
                    </div>
                    <div className={'col-xs-4'}>
                        <Select 
                            title={'Двигатель'}
                            options={car_engine}
                            onChange={(data) => console.log(data)}
                    />
                    </div>
                    <div className={'col-xs-4'}>
                        <Select 
                            title={'Год выпуска'}
                            options={car_year}
                            onChange={(data) => console.log(data)}
                    />
                    </div>
                </div>
                <div className="row">
                    <button onClick={() => console.log('find')}>Искать</button>
                </div>
            </form>
        )
    }
}