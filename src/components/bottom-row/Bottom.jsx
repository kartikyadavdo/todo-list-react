import { Grid,Card } from '@mui/material'

function Bottom() {
  return (
    <> <Grid container spacing={2}>
    <Grid item md={5} xs={12}>
      <Card style={{ height: 415 }}>Chart</Card>
    </Grid>
    <Grid item md={4} xs={12}>
      <Card style={{ height: 415 }}>List</Card>
    </Grid>
    <Grid item md={3} xs={12}>
      <Grid container spacing={2}>
        <Grid item md={12} xs={6}>
          <Card style={{ height: 200 }}> Time </Card>{" "}
        </Grid>
        <Grid item md={12} xs={6}>
          <Card style={{ height: 200 }}>Thought of the day</Card>{" "}
        </Grid>
      </Grid>
    </Grid>
  </Grid></>
  )
}

export default Bottom