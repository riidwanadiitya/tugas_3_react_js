import React, { Component } from 'react';

class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tentang: "Warung Nusantara adalah Resturant Yang Bernuansa Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
        }

    }
    render() {
        return ( 
            <div>
                <center>
                    <p>Tentang Kami</p>
                </center>
                <center>
                    <p>{this.state.tentang}</p>
                </center>
            </div>
         );
    }
}

export default MenuTentangKami;