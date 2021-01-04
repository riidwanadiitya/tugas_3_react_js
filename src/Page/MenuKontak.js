import React, { Component } from 'react';

class MenuKontak extends Component {
    constructor(props){
        super(props);
        this.state={
            alamat : "Jl.Swadaya IV, Pd. Rangon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
            kontak: "Kontak Kami : 081312345678"
        }
    }
    render() { 
        return ( 
            <div>
                <h3><center>{this.state.alamat}</center></h3>
                <h4><center>{this.state.kontak}</center></h4>
            </div>
         );
    }
}
 
export default MenuKontak ;