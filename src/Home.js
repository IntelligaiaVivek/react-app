import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
class Home extends React.Component {
    render() {
        return (
            <>
                <div><h1 className="homePage">GET FREE IMAGES FOR HOME PAGE</h1></div>
                <Grid columns={3} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Image as='a'
                                size='medium' src='https://via.placeholder.com/600/92c952'  rounded/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image as='a'
                                size='medium' src='https://via.placeholder.com/600/d32776' rounded />
                        </Grid.Column>
                        <Grid.Column>
                            <Image as='a'
                                size='medium' src='https://via.placeholder.com/600/f66b97' rounded />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Image as='a'
                                size='medium' src='https://via.placeholder.com/600/56a8c2' rounded />
                        </Grid.Column>
                        <Grid.Column>
                            <Image as='a'
                                size='medium' src='https://via.placeholder.com/600/b0f7cc' rounded />
                        </Grid.Column>
                        <Grid.Column>
                            <Image as='a'
                                size='medium' src='https://via.placeholder.com/600/51aa97' rounded />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default Home;