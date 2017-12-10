import React, {Component} from 'react';
import ButtonAppBar from './components/ButtonAppBar'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem

/*

add you nav linke here..
isExact : if true will exact path
linkTo : the path you want to go
text: Title of the Nav Item
*/

const link = [
    { isExact: true, linkTo: '/', text: 'Home' },
    { isExact: false, linkTo: '/logos', text: 'Logos'},
    { isExact: false, linkTo: '/posters', text: 'Posters'},
    { isExact: false, linkTo: '/letterhead', text: 'Letterhead'},
    { isExact: false, linkTo: '/share-a-story', text: 'Share a Story'},
    { isExact: false, linkTo: '/service-request-form', text: 'Service Request Form'},
    { isExact: false, linkTo: ;, text: 'Tutorial'}
]

class SideNav extends Component {
    constructor (props){
        super(props)
        this.state = {
            open: false
        }
    }
    handleClose= () => this.setState({open:false})

    render(){
        return(
            <div>
                <ButtonAppBar/>
                {

                }
                <Drawer 
                open={this.state.open}
                docked={false}
                onRequestChange={open => this.setState({open})}
                >
                    { link.map((link,1) => {
                        return (
                            <SideBarItem isExact={link.isExact} linkTo={link.linkTo} primaryText={link.text} handleClose={this.handleClose}  key={}
                        )
                    })}               
                </Drawer>
            </div>
        )
    }
}

export default Sidenav