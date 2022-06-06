import React from 'react'
import { Grid } from 'semantic-ui-react'
import Repo from '../Repo';

function ReposResults() {
    return (
        <Grid>
        <Grid.Row columns={3}>
            <Grid.Column>
                <Repo />
            </Grid.Column>
            <Grid.Column>
                <Repo />
            </Grid.Column>
            <Grid.Column>
                <Repo />
            </Grid.Column>
        </Grid.Row>

    </Grid>
)}

export default ReposResults;
