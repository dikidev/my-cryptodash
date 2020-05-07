import React from "react";
import _ from 'lodash';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { /* Default State - First Visit no data in local storage*/
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'CCN', 'DOGE' ],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

        fetchCoins = async () => {
            let coinList = (await cc.coinList()).Data;
            this.setState({coinList});
        }

        addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites});
        }
        }

        removeCoin = key => {
            let favorites = [...this.state.favorites];
            this.setState({favorites: _.pull(favorites, key)})
        }

        isInFavorites = key => _.includes(this.state.favorites, key)

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoStox', JSON.stringify({
            favorites: this.state.favorites
        }));
    }



    savedSettings(){
        let cryptoStoxData = JSON.parse(localStorage.getItem('cryptoStox'));
        if(!cryptoStoxData) {
            return {page: 'settings', firstVisit: true}
            }
        let {favorites} = cryptoStoxData;
        return {favorites};
        }


    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state}>
            {this.props.children}
            </AppContext.Provider>
        )
    }
}