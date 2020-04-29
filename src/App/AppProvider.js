import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { /* Default State - First Visit no data in local storage*/
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoStox', JSON.stringify({
            test: 'hello'
        }));
    }



    savedSettings(){
        let cryptoStoxData = JSON.parse(localStorage.getItem('cryptoStox'));
        if(!cryptoStoxData) {
            return {page: 'settings', firstVisit: true}
            }
        return {};
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