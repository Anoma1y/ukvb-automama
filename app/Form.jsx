import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Select from './components/Select';

const car_brand = [
    { id: 10, name: 'Audi', url: 'audi' },
    { id: 18, name: 'BMW', url: 'bmw' },
    { id: 21, name: 'Brilliance', url: 'brilliance' },
    { id: 25, name: 'Buick', url: 'buick' },
    { id: 28, name: 'Cadillac', url: 'cadillac' },
    { id: 34, name: 'Chery', url: 'chery' },
    { id: 35, name: 'Chevrolet', url: 'chevrolet' },
    { id: 36, name: 'Chrysler', url: 'chrysler' },
    { id: 37, name: 'Citroen', url: 'citroen' },
    { id: 42, name: 'Daewoo', url: 'daewoo' },
    { id: 47, name: 'Datsun', url: 'datsun' },
    { id: 51, name: 'Dodge', url: 'dodge' },
    { id: 52, name: 'DongFeng', url: 'dongfeng' },
    { id: 61, name: 'Fiat', url: 'fiat' },
    { id: 63, name: 'Ford', url: 'ford' },
    { id: 64, name: 'Foton', url: 'foton' },
    { id: 67, name: 'Geely', url: 'geely' },
    { id: 71, name: 'Great Wall', url: 'great-wall' },
    { id: 73, name: 'Haima', url: 'haima' },
    { id: 76, name: 'Honda', url: 'honda' },
    { id: 79, name: 'Hyundai', url: 'hyundai' },
    { id: 80, name: 'Infiniti', url: 'infiniti' },
    { id: 83, name: 'Iran Khodro', url: 'iran-khodro' },
    { id: 86, name: 'IVECO', url: 'iveco' },
    { id: 88, name: 'Jaguar', url: 'jaguar' },
    { id: 89, name: 'Jeep', url: 'jeep' },
    { id: 92, name: 'Kia', url: 'kia' },
    { id: 215, name: 'Lada', url: 'lada' },
    { id: 97, name: 'Land Rover', url: 'land-rover' },
    { id: 99, name: 'Lexus', url: 'lexus' },
    { id: 101, name: 'Lifan', url: 'lifan' },
    { id: 105, name: 'Luxgen', url: 'luxgen' },
    { id: 111, name: 'Maserati', url: 'maserati' },
    { id: 113, name: 'Mazda', url: 'mazda' },
    { id: 116, name: 'Mercedes-Benz', url: 'mercedes-benz' },
    { id: 122, name: 'MINI', url: 'mini' },
    { id: 123, name: 'Mitsubishi', url: 'mitsubishi' },
    { id: 127, name: 'Nissan', url: 'nissan' },
    { id: 130, name: 'Opel', url: 'opel' },
    { id: 135, name: 'Peugeot', url: 'peugeot' },
    { id: 139, name: 'Porsche', url: 'porsche' },
    { id: 147, name: 'Renault', url: 'renault' },
    { id: 157, name: 'SEAT', url: 'seat' },
    { id: 159, name: 'Skoda', url: 'skoda' },
    { id: 165, name: 'SsangYong', url: 'ssangyong' },
    { id: 166, name: 'Subaru', url: 'subaru' },
    { id: 167, name: 'Suzuki', url: 'suzuki' },
    { id: 10003741, name: 'T', url: 't' },
    { id: 176, name: 'Toyota', url: 'toyota' },
    { id: 184, name: 'Volkswagen', url: 'volkswagen' },
    { id: 185, name: 'Volvo', url: 'volvo' },
    { id: 186, name: 'Vortex', url: 'vortex' },
    { id: 216, name: 'ГАЗ', url: 'gaz' },
    { id: 217, name: 'ЗАЗ', url: 'zaz' },
    { id: 226, name: 'ТагАЗ', url: 'tagaz' },
    { id: 227, name: 'УАЗ', url: 'uaz' },
]

const car_body = [
    { id: 1, name: 'Внедорожник', url: 'offroad' },
    { id: 2, name: 'Грузо-пассажирский (комби)', url: 'combi' },
    { id: 3, name: 'Кабриолет', url: 'cabrio' },
    { id: 4, name: 'Компактвэн', url: 'compactvan' },
    { id: 5, name: 'Купе', url: 'coupe' },
    { id: 6, name: 'Лифтбэк', url: 'liftback' },
    { id: 7, name: 'Микроавтобус', url: 'minibus' },
    { id: 8, name: 'Минивэн', url: 'minivan' },
    { id: 9, name: 'Пикап', url: 'pickup' },
    { id: 10, name: 'Родстер', url: 'roadster' },
    { id: 11, name: 'Седан', url: 'sedan' },
    { id: 12, name: 'Универсал', url: 'wagon' },
    { id: 13, name: 'Фургон', url: 'caravan' },
    { id: 14, name: 'Хэтчбек', url: 'hatchback' },
]

const car_engine = [
    { id: 'gasoline', name: 'Бензиновый' },
    { id: 'hybrid', name: 'Гибридный' },
    { id: 'diesel', name: 'Дизельный' }
]

const car_year = [
    { id: 1998, name: '1998' },
    { id: 1999, name: '1999' },
    { id: 2000, name: '2000' },
    { id: 2001, name: '2001' },
    { id: 2002, name: '2002' },
    { id: 2003, name: '2003' },
    { id: 2004, name: '2004' },
    { id: 2005, name: '2005' },
    { id: 2006, name: '2006' },
    { id: 2007, name: '2007' },
    { id: 2008, name: '2008' },
    { id: 2009, name: '2009' },
    { id: 2010, name: '2010' },
    { id: 2011, name: '2011' },
    { id: 2012, name: '2012' },
    { id: 2013, name: '2013' },
    { id: 2014, name: '2014' },
    { id: 2015, name: '2015' },
    { id: 2016, name: '2016' },
    { id: 2017, name: '2017' },
    { id: 2018, name: '2018' },
    { id: 2019, name: '2019' },
]


export default class Form extends Component {
    state = {
        car: {
            brand_id: null,
            model_id: null,
            generation_id: null,
        },
        car_models: [],
        car_generation: []
    }
  
    handleBrandChange = (id) => {
        if (id === -1) {
            this.setState({
                car_generation: [],
                car_models: []
            })
            return;
        }

        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/filter/models?makeId=${id}`)}`;

        axios.get(url)
            .then((data) => {

                this.setState({
                    car_models: data.data.map((model) => ({
                        ...model,
                        name: model.title,
                    }))
                })
            })
            .catch((err) => console.log('err', err))
    }

    handleModelChange = (id) => {
        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/filter/generations?modelId=${id}`)}`;

        if (id === -1) {
            this.setState({
                car_generation: [],
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