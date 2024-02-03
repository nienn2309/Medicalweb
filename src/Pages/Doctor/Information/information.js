import { Grid, Segment, Header, Image } from 'semantic-ui-react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';

function DoctorDetails() {
    
  return (
    <div className='doctor-profile'>
        <Grid columns={2} stackable >
            <Grid.Column  stackable style={{textAlign: 'center', maxWidth: '20%', marginLeft: 'auto',  marginTop: '5%' }}>
            <Segment>
                <Image
                style={{ marginBottom: '25px' }}
                src="./image/cat1.png"
                className="centered"
                size="small"
                circular
                />
                <Grid.Row>
                    <b style={{ color: 'grey' }}>Full Name: </b>
                    <div>John Lennon</div>
                </Grid.Row>
                <Grid.Row>
                    <b style={{ color: 'grey' }}>IC: </b>
                    <div>12/4/1990</div>
                </Grid.Row>
                <Grid.Row>
                    <b style={{ color: 'grey' }}>Gender: </b>
                    <div>Male</div>
                </Grid.Row>
            </Segment>
            </Grid.Column>

            <Grid.Column style={{ maxWidth: '40%', marginRight: '10%', marginTop: '5%' }}>
            <Segment>
                <h2 style={{ textAlign: 'center' }}>Doctor's Full Details</h2>

                <Grid.Row style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Segment>
                    <Header as="h3" color='grey' style={{ marginBottom: '25px' }}>
                    PERSONAL DETAILS
                    </Header>
                    <Grid verticalAlign='middle'>
                    <Grid.Column verticalAlign='middle'>
                        <Grid.Row>
                        <b style={{ color: 'grey' }}>Phone</b>
                        <div>0291232131</div>
                        </Grid.Row>
                        <Grid.Row>
                        <b style={{ color: 'grey' }}>Birthdate</b>
                        <div>18/2/1989</div>
                        </Grid.Row>
                    </Grid.Column>
                    </Grid>
                </Segment>
                </Grid.Row>

                <Grid.Row style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Segment>
                    <Header
                    as="h3"
                    color='grey'
                    style={{ marginBottom: '25px' }}
                    >
                    EDUCATION DETAILS
                    </Header>
                    <Grid  verticalAlign='top'>
                    <Grid.Column>
                        <Grid.Row>
                        <b style={{ color: 'grey' }}>Highest Qualification</b>
                        <div>phD</div>
                        </Grid.Row>
                        <Grid.Row>
                        <b style={{ color: 'grey' }}>Major</b>
                        <div>Something</div>
                        </Grid.Row>
                    </Grid.Column>
                    </Grid>
                </Segment>
                </Grid.Row>
            </Segment>
            </Grid.Column>
            </Grid>
    </div>
    
  );
}

export default DoctorDetails;