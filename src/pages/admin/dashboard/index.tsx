
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';
import { faker } from '@faker-js/faker';

const generateFakeData = (length = 10) => {
    return Array.from({ length }, () => faker.number.int({ min: 10, max: 100 }));
  };
  
  const Dashboard = () => {
    // Fake data
    const appointmentsData = generateFakeData(7);
    const revenueData = generateFakeData(7);
    const patientsData = generateFakeData(5);
  
    const lineChartOptions = {
      chart: {
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      colors: ['#1E90FF'],
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      stroke: {
        curve: 'smooth',
      },
    };
  
    const barChartOptions = {
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      colors: ['#FFA07A'],
      xaxis: {
        categories: ['General Checkup', 'Dentistry', 'Pediatrics', 'Orthopedics', 'Cardiology'],
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
    };
  
    return (
      <Box sx={{ padding: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Appointment Dashboard
        </Typography>
  
        <Grid container spacing={4}>
          {/* Appointments Overview */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Weekly Appointments
                </Typography>
                <Chart
                  options={lineChartOptions}
                  series={[{ name: 'Appointments', data: appointmentsData }]}
                  type="line"
                  height={300}
                />
              </CardContent>
            </Card>
          </Grid>
  
          {/* Revenue Overview */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Weekly Revenue
                </Typography>
                <Chart
                  options={lineChartOptions}
                  series={[{ name: 'Revenue', data: revenueData }]}
                  type="line"
                  height={300}
                />
              </CardContent>
            </Card>
          </Grid>
  
          {/* Patient Types Overview */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Appointments by Type
                </Typography>
                <Chart
                  options={barChartOptions}
                  series={[{ name: 'Patients', data: patientsData }]}
                  type="bar"
                  height={300}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Dashboard;
  