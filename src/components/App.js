import React from 'react';
import axios from 'axios'
import SearchInput from './searchinput'
import ImageList from './imageList'

class App extends React.Component{

    state ={ images : [] }

    onSearchSubmit = async (entry) =>{
        const respons = await axios.get(`https://pixabay.com/api/?key=21417787-90322254a7e42b411d1f7e2f3&q=${entry}&image_type=photo`)
        console.log(respons.data.hits)
        this.setState({images:respons.data.hits})
        console.log(respons)
    }
    render(){
        return(
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                We have { this.state.images.length } images
                <ImageList images={this.state.images}/>
            </div>
            
        )
    }
}

export default App;