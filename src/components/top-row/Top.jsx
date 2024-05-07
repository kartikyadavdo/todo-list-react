import { Grid, Card } from "@mui/material";

const indicators = {
  completed: {
    name: "Completed",
    value: 0,
  },
  inProcess: {
    name: "In Process",
    value: 10,
  },
  cancelled: {
    name: "Cancelled",
    value: 20,
  },
  high: {
    name: "High",
    value: 30,
  },
  medium: {
    name: "Medium",
    value: 40,
  },
  low: {
    name: "Low",
    value: 50,
  },
};

function Top() {
  return (
    <>
      {" "}
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <Card style={{ height: 335 }}>Weather</Card>
        </Grid>
        <Grid item md={6} xs={12}>
         {/* adding the indicators of todo list to the loop array.map() */}
          <Grid container spacing={2}>
            {Object.keys(indicators).map((key, index) => {
              const data = indicators[key];

              return (
                <Grid item md={4} xs={6} key={index}>
                  <Card sx={{ height: 160 }}>{data.name}</Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item md={2} xs={12}>
          <Card style={{ height: 335 }}>Gauge Temperature</Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Top;
