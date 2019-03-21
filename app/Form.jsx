import React, { Component, Fragment } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Select from './components/Select';
import Button from './components/Button';

const car_brand = [
    { id: '10', name: 'Audi', url: 'audi' },
    { id: '18', name: 'BMW', url: 'bmw' },
    { id: '21', name: 'Brilliance', url: 'brilliance' },
    { id: '25', name: 'Buick', url: 'buick' },
    { id: '28', name: 'Cadillac', url: 'cadillac' },
    { id: '34', name: 'Chery', url: 'chery' },
    { id: '35', name: 'Chevrolet', url: 'chevrolet' },
    { id: '36', name: 'Chrysler', url: 'chrysler' },
    { id: '37', name: 'Citroen', url: 'citroen' },
    { id: '42', name: 'Daewoo', url: 'daewoo' },
    { id: '47', name: 'Datsun', url: 'datsun' },
    { id: '51', name: 'Dodge', url: 'dodge' },
    { id: '52', name: 'DongFeng', url: 'dongfeng' },
    { id: '61', name: 'Fiat', url: 'fiat' },
    { id: '63', name: 'Ford', url: 'ford' },
    { id: '64', name: 'Foton', url: 'foton' },
    { id: '67', name: 'Geely', url: 'geely' },
    { id: '71', name: 'Great Wall', url: 'great-wall' },
    { id: '73', name: 'Haima', url: 'haima' },
    { id: '76', name: 'Honda', url: 'honda' },
    { id: '79', name: 'Hyundai', url: 'hyundai' },
    { id: '80', name: 'Infiniti', url: 'infiniti' },
    { id: '83', name: 'Iran Khodro', url: 'iran-khodro' },
    { id: '86', name: 'IVECO', url: 'iveco' },
    { id: '88', name: 'Jaguar', url: 'jaguar' },
    { id: '89', name: 'Jeep', url: 'jeep' },
    { id: '92', name: 'Kia', url: 'kia' },
    { id: '215', name: 'Lada', url: 'lada' },
    { id: '97', name: 'Land Rover', url: 'land-rover' },
    { id: '99', name: 'Lexus', url: 'lexus' },
    { id: '101', name: 'Lifan', url: 'lifan' },
    { id: '105', name: 'Luxgen', url: 'luxgen' },
    { id: '111', name: 'Maserati', url: 'maserati' },
    { id: '113', name: 'Mazda', url: 'mazda' },
    { id: '116', name: 'Mercedes-Benz', url: 'mercedes-benz' },
    { id: '122', name: 'MINI', url: 'mini' },
    { id: '123', name: 'Mitsubishi', url: 'mitsubishi' },
    { id: '127', name: 'Nissan', url: 'nissan' },
    { id: '130', name: 'Opel', url: 'opel' },
    { id: '135', name: 'Peugeot', url: 'peugeot' },
    { id: '139', name: 'Porsche', url: 'porsche' },
    { id: '147', name: 'Renault', url: 'renault' },
    { id: '157', name: 'SEAT', url: 'seat' },
    { id: '159', name: 'Skoda', url: 'skoda' },
    { id: '165', name: 'SsangYong', url: 'ssangyong' },
    { id: '166', name: 'Subaru', url: 'subaru' },
    { id: '167', name: 'Suzuki', url: 'suzuki' },
    { id: '10003741', name: 'T', url: 't' },
    { id: '176', name: 'Toyota', url: 'toyota' },
    { id: '184', name: 'Volkswagen', url: 'volkswagen' },
    { id: '185', name: 'Volvo', url: 'volvo' },
    { id: '186', name: 'Vortex', url: 'vortex' },
    { id: '216', name: 'ГАЗ', url: 'gaz' },
    { id: '217', name: 'ЗАЗ', url: 'zaz' },
    { id: '226', name: 'ТагАЗ', url: 'tagaz' },
    { id: '227', name: 'УАЗ', url: 'uaz' },
]

const car_body = [
    { id: '1', name: 'Внедорожник', url: 'offroad' },
    { id: '11', name: 'Грузо-пассажирский (комби)', url: 'combi' },
    { id: '3', name: 'Кабриолет', url: 'cabrio' },
    { id: '14', name: 'Компактвэн', url: 'compactvan' },
    { id: '2', name: 'Купе', url: 'coupe' },
    { id: '15', name: 'Лифтбэк', url: 'liftback' },
    { id: '6', name: 'Микроавтобус', url: 'minibus' },
    { id: '5', name: 'Минивэн', url: 'minivan' },
    { id: '7', name: 'Пикап', url: 'pickup' },
    { id: '4', name: 'Родстер', url: 'roadster' },
    { id: '8', name: 'Седан', url: 'sedan' },
    { id: '9', name: 'Универсал', url: 'wagon' },
    { id: '10', name: 'Фургон', url: 'caravan' },
    { id: '12', name: 'Хэтчбек', url: 'hatchback' },
]

const car_engine = [
    { id: 'gasoline', name: 'Бензиновый' },
    { id: 'hybrid', name: 'Гибридный' },
    { id: 'diesel', name: 'Дизельный' }
]

const car_year = [
    { id: '1998', name: '1998' },
    { id: '1999', name: '1999' },
    { id: '2000', name: '2000' },
    { id: '2001', name: '2001' },
    { id: '2002', name: '2002' },
    { id: '2003', name: '2003' },
    { id: '2004', name: '2004' },
    { id: '2005', name: '2005' },
    { id: '2006', name: '2006' },
    { id: '2007', name: '2007' },
    { id: '2008', name: '2008' },
    { id: '2009', name: '2009' },
    { id: '2010', name: '2010' },
    { id: '2011', name: '2011' },
    { id: '2012', name: '2012' },
    { id: '2013', name: '2013' },
    { id: '2014', name: '2014' },
    { id: '2015', name: '2015' },
    { id: '2016', name: '2016' },
    { id: '2017', name: '2017' },
    { id: '2018', name: '2018' },
    { id: '2019', name: '2019' },
]

const serializeParams = (obj) => {
    const str = [];
  
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (Array.isArray(obj[p])) {
          str.push(`${encodeURIComponent(p)}=${obj[p]}`);
          continue;
        }
  
        str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
      }
    }
  
    return str.join("&");
};

const removeEmpty = (obj) => {
    const modObj = { ...obj };
  
    Object.keys(modObj).forEach((key) =>
      modObj[key] === '-1' || modObj[key] === undefined || modObj[key] === null ? delete modObj[key] : modObj[key]
    );
  
    return modObj;
};

const declOfNum = (num, titles) => {  
    const cases = [2, 0, 1, 1, 1, 2];  
    
    return titles[(num%100 > 4 && num%100 < 20) ? 2 : cases[(num%10<5) ? num%10 : 5]];  
}

export default class Form extends Component {
    state = {
        car_id: {
            brand: null,
            model: null,
            generation: null,
            body: null,
            engine: null,
            year: null
        },
        isLoading: false,
        car_models: [],
        car_generation: [],
        searchResult: [],
        filterResult: {}
    }
  
    handlcChangeCarID = (key, val) => this.setState({ 
        car_id: {
            ...this.state.car_id,
            [key]: val
        }
    })

    handleBrandChange = (id) => {
        if (id === -1) {
            this.setState({
                car_generation: [],
                car_models: []
            })
            return;
        }
        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/filter/models?makeId=${id}`)}`;

        this.setState({ isLoading: true });
        axios.get(url)
            .then((data) => {

                this.setState({
                    car_id: {
                        generation: null,
                        model: null,
                        brand: id
                    },
                    isLoading: false,
                    car_generation: [],
                    car_models: data.data.map((model) => ({
                        ...model,
                        id: String(model.id),
                        name: model.title,
                    }))
                })
            })
            .catch(() => this.setState({ isLoading: false }))
    }

    handleModelChange = (id) => {
        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/filter/generations?modelId=${id}`)}`;

        if (id === -1) {
            this.setState({
                car_generation: [],
            })
            return;
        }

        this.setState({ isLoading: true });
        axios.get(url)
            .then((data) => {
                this.setState({
                    car_id: {
                        ...this.state.car_id,
                        generation: null,
                        model: id
                    },
                    isLoading: false,
                    car_generation: data.data.map((gen) => ({
                        ...gen,
                        id: String(gen.id),
                        name: gen.title
                    }))
                })
            })
            .catch(() => this.setState({ isLoading: false }))
    }

    handleSearch = () => {
        const { car_id } = this.state;

        const find_car_id = {
            brand: _.find(car_brand, { id: car_id.brand }),
            model: _.find(this.state.car_models, { id: car_id.model }),
        };
        let obj = {
            p1: find_car_id.brand.url,
            p2: find_car_id.model.url,
            yearFrom: car_id.year,
            yearTo: car_id.year
        }

        if (!car_id.body && !car_id.engine) { // не указан кузов и двигатель
            obj.generation = car_id.generation
        } else if (!car_id.body && car_id.engine) { // не указан кузов, указан двигатель
            obj.generation = car_id.generation;
            obj.p3 = car_id.engine
        } else if (car_id.body && !car_id.engine) { // указан кузов, не указан двигатель
            obj.generation = car_id.generation;
            obj.p3 = _.find(car_body, { id: car_id.body }).url
        } else { // указан кузов и двигатель
            obj.p3 = car_id.engine;
            obj.bodyType = car_id.body
        }

        const ser = serializeParams(removeEmpty(obj));

        const url = `https://carbucks.ru/carfilter.php?path=${encodeURIComponent(`/api/v2/auctions/search?${ser}`)}`;

        this.setState({ isLoading: true });
        axios.get(url)
        .then((data) => {
            this.setState({ 
                filterResult: data.data.filter,
                searchResult: data.data.searchResult.items,
                isLoading: false
            })
        })
        .catch(() => this.setState({ isLoading: false }))
    }    

    calculateAverageAmount = () => {
        const { searchResult } = this.state;
        const len = searchResult.length;
        const amount = len === 0 ? '' : searchResult.reduce((a,b) => {
            return a + b.buyNowPrice;
        }, 0);
        const averageAmount = amount / len

        return Number.isNaN(averageAmount) ? '' : Number(averageAmount).toFixed(0);
    }

    handleResetForm = () => {
        this.setState({
            car_id: {
                brand: null,
                model: null,
                generation: null,
                body: null,
                engine: null,
                year: null
            },
            isLoading: false,
            car_models: [],
            car_generation: [],
            searchResult: [],
            filterResult: {} 
        })
    }

    handleRequestButton = () => {
        const url = "https://carbucks.ru/online-zayavka-na-ocenku";

        const {
            filterResult: {
                make,
                model,
                generation
            },
            car_id
        } = this.state;

        if (!make || !model || !generation) {
            document.location.href = url;
            return;
        }

        const year = car_id.year ? car_id.year : '';

        const carName = `${make.text} ${model.text} (${generation.text})`;
        const queryUrl = `${url}/?text-73=${carName}&number-162=${year}`;

        document.location.href = queryUrl;
    }

    renderRuble = () => (
        <svg width="16" height="19" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17 6.47461C17 8.71094 16.2676 10.4248 14.8027 11.6162C13.3379 12.8076 11.2529 13.4033 8.54785 13.4033H6.32129V15.9717H9.5V18.916H6.32129V21.416H2.82031V18.8604H0V15.916H2.82031V13.4033H0V10.459H2.82031V0H8.9873C11.6631 0 13.665 0.546875 14.9932 1.64062C16.3311 2.73438 17 4.3457 17 6.47461ZM8.18164 10.459H6.32129V2.92969H8.75293C10.3447 2.92969 11.5166 3.23242 12.2686 3.83789C13.0205 4.44336 13.3965 5.36133 13.3965 6.5918C13.3965 7.91992 12.9766 8.89648 12.1367 9.52148C11.2969 10.1465 9.97852 10.459 8.18164 10.459Z" fill="#063B6D"/>
        </svg>
    )

    renderResult = () => {
        const { searchResult, filterResult } = this.state;
        
        if (!filterResult.make || !filterResult.model || !filterResult.generation) return <div></div>;

        if (searchResult.length === 0) return <div className={'evaluation-result'}>Не найдено</div>

        const averageAmount = this.calculateAverageAmount();

        if (averageAmount === '' || !averageAmount) return <div></div>;

        const {
            make,
            model,
            generation
        } = filterResult;

        const carName = `${make.text} ${model.text} (${generation.text})`;
        const res = new Intl.NumberFormat('ru-RU').format(String(averageAmount))
        
        return (
            <div className={'evaluation-result'}>
                <p>{carName}</p><span>{res} {this.renderRuble()}</span>
            </div>
        )
    }

    render() {
        const { 
            car_id,
            car_models,
            car_generation,
            searchResult,
            filterResult,
            isLoading
        } = this.state;

        return (
            <form action='#' onSubmit={(e) => e.preventDefault()}>
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-6 col-md-4'}>
                        <Select 
                            title={'Марка'}
                            value={car_id.brand}
                            options={car_brand}
                            required
                            onChange={this.handleBrandChange}
                            showAll={false}
                    />
                    </div>
                    <div className={'col-xs-12 col-sm-6 col-md-4'}>
                        <Select 
                            title={'Модель'}
                            options={car_models}
                            value={car_id.model}
                            disabled={car_models.length === 0}
                            required
                            onChange={this.handleModelChange}
                            showAll={false}
                    />
                    </div>
                    <div className={'col-xs-12 col-sm-6 col-md-4'}>
                        <Select 
                            title={'Поколение'}
                            options={car_generation}
                            value={car_id.generation}
                            disabled={car_generation.length === 0}
                            required
                            onChange={(id) => this.handlcChangeCarID('generation', id)}
                            showAll={false}
                    />
                    </div>
                    <div className={'col-xs-12 col-sm-6 col-md-4'}>
                        <Select 
                            title={'Кузов'}
                            options={car_body}
                            value={car_id.body}
                            onChange={(id) => this.handlcChangeCarID('body', id)}
                    />
                    </div>
                    <div className={'col-xs-12 col-sm-6 col-md-4'}>
                        <Select 
                            title={'Двигатель'}
                            options={car_engine}
                            value={car_id.engine}
                            onChange={(id) => this.handlcChangeCarID('engine', id)}
                    />
                    </div>
                    <div className={'col-xs-12 col-sm-6 col-md-4'}>
                        <Select 
                            title={'Год выпуска'}
                            options={car_year}
                            required
                            value={car_id.year}
                            onChange={(id) => this.handlcChangeCarID('year', id)}
                    />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3">
                        <Button 
                            disabled={Boolean(!car_id.brand || !car_id.model || !car_id.generation || !car_id.year || isLoading)} 
                            onClick={this.handleSearch}
                            fullWidth
                        >Оценить</Button>                            
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9">
                        <div className={'evaluation-inner'}>
                            {this.renderResult()}
                            <Button 
                                disabled={isLoading}
                                onClick={this.handleResetForm}
                                icon
                            >
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.54097 0C4.70169 0 0.699663 3.60474 0.0900678 8.26457C0.0728436 8.36934 0.0769581 8.47649 0.102167 8.57965C0.127375 8.68281 0.173162 8.77986 0.236805 8.86504C0.300448 8.95023 0.380647 9.02179 0.47263 9.07549C0.564614 9.12918 0.666503 9.16391 0.772238 9.1776C0.877973 9.19129 0.985394 9.18367 1.08811 9.15519C1.19083 9.1267 1.28674 9.07794 1.37015 9.0118C1.45356 8.94566 1.52275 8.8635 1.57362 8.77019C1.62449 8.67688 1.65599 8.57434 1.66625 8.46867C2.17454 4.58325 5.49284 1.58333 9.54097 1.58333C11.7409 1.58333 13.7156 2.47677 15.1531 3.91195L13.5164 5.54167L18.2869 6.33333L17.4918 1.58333L16.2759 2.79403C14.5505 1.07472 12.1721 0 9.54097 0ZM18.217 9.83089C18.02 9.82807 17.829 9.89816 17.681 10.0276C17.5329 10.157 17.4384 10.3365 17.4157 10.5313C16.9074 14.4168 13.5891 17.4167 9.54097 17.4167C7.13816 17.4167 5.00802 16.3481 3.54991 14.6737L4.77049 13.4583L0 12.6667L0.795081 17.4167L2.42407 15.7947C4.17041 17.7513 6.70735 19 9.54097 19C14.3803 19 18.3823 15.3953 18.9919 10.7354C19.008 10.6241 19.0001 10.5106 18.9687 10.4025C18.9373 10.2945 18.8831 10.1943 18.8098 10.1087C18.7365 10.0231 18.6457 9.95409 18.5435 9.90619C18.4412 9.85828 18.3299 9.83261 18.217 9.83089Z" fill="white"/>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
                
                {
                    (filterResult.make || filterResult.model || filterResult.generation) && (
                        <Fragment>
                            <div className="row">
                                <div className="col-xs-12 col-sm-10 col-md-9">
                                    <p className={'evaluation_info'}>
                                        {
                                            searchResult.length === 0  
                                                ? <span>К сожалению, введенных Вами данных недостаточно для предварительной оценки. Мы рады уточнить информацию по <a href="tel:+78123097500">телефону</a> и/или <a href="mailto:info@carbucks.ru">e-mail</a> </span>
                                                : <span>Вы можете узнать более точную стоимость оценки, связавшись с нами по <a href="tel:+78123097500">телефону</a> или </span>
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <Button 
                                    disabled={isLoading}
                                    onClick={this.handleRequestButton}
                                    fullWidth
                                    >
                                        {
                                            searchResult.length === 0 
                                                ? 'Оставить заявку' 
                                                : 'Оставив заявку на оценку'
                                            }
                                    </Button>
                                </div>
                            </div>
                        </Fragment>
                    )
                }

            </form>
        )
    }
}