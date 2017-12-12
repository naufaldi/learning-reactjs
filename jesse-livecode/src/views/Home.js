import React, {Component} from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'

class Home extends Component {
    state={}
    render() {
        return(
          <div className='container'>
                <div className='row'>
                    <div className="col s12 m4">
                        <Card>
                            <CardTitle title='Card title' subtitle='Card subtitle' />
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet sed earum voluptas facilis? Vitae omnis architecto quis, officiis perspiciatis voluptates ipsum sunt?
                                Deserunt perferendis tenetur nostrum consectetur, minus reprehenderit!
                            </CardText>
                        </Card>
                    </div>
                    <div className="col s12 m4">
                        <Card>
                            <CardTitle title='Card Title' subtitle='Card subtitle' />
                            <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officia eum id repellendus blanditiis.
                            Repellendus, at, tempora tempore accusantium fugit recusandae velit, magnam dolorum veritatis 
                            aut explicabo magni. Animi, numquam!
                            </CardText>
                        </Card>
                    </div>
                    <div className="col s12 m4">
                    <Card>
                        <CardTitle title='Card Title' subtitle='Card subtitle' />
                        <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officia eum id repellendus blanditiis.
                        Repellendus, at, tempora tempore accusantium fugit recusandae velit, magnam dolorum veritatis 
                        aut explicabo magni. Animi, numquam!
                        </CardText>
                    </Card>
                </div>
                <div className='row'>
                <div className="col s12 m4">
                    <Card>
                        <CardTitle title='Card title' subtitle='Card subtitle' />
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet sed earum voluptas facilis? Vitae omnis architecto quis, officiis perspiciatis voluptates ipsum sunt?
                            Deserunt perferendis tenetur nostrum consectetur, minus reprehenderit!
                        </CardText>
                    </Card>
                </div>
                <div className="col s12 m4">
                    <Card>
                        <CardTitle title='Card Title' subtitle='Card subtitle' />
                        <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officia eum id repellendus blanditiis.
                        Repellendus, at, tempora tempore accusantium fugit recusandae velit, magnam dolorum veritatis 
                        aut explicabo magni. Animi, numquam!
                        </CardText>
                    </Card>
                </div>
                <div className="col s12 m4">
                <Card>
                    <CardTitle title='Card Title' subtitle='Card subtitle' />
                    <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officia eum id repellendus blanditiis.
                    Repellendus, at, tempora tempore accusantium fugit recusandae velit, magnam dolorum veritatis 
                    aut explicabo magni. Animi, numquam!
                    </CardText>
                </Card>
                </div>
                </div>
            </div>
          </div>
        )
    }
}

export default Home