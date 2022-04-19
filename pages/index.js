import InfoCardBGRadius from "@/components/Card/InfoCardBGRadius";
import InfoCard from '@/components/Card/InfoCard';
import BaseLayout from "@/components/layout/BaseLayout";
import { Grid, Stack } from "@mui/material";

export default function Home() {
  return (
    <BaseLayout title='Home'>
      <h1>Home</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='pink' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='yellow' title='Suspect' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='blue' title='Kegiatan Kumpul' subtitle='Bersama' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='cyan' title='Event Sedang' subtitle='Berlangsung' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='green' title='Pelaksanaan' subtitle='Vaksinasi' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='red' title='Pelaksanaan' subtitle='Vaksinasi' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='purple' title='Pelaksanaan' subtitle='Vaksinasi' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='rose' title='Pelaksanaan' subtitle='Vaksinasi' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='lime' title='Pelaksanaan' subtitle='Vaksinasi' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCardBGRadius color='gray' title='Pelaksanaan' subtitle='Vaksinasi' total='10' ket='0% dari bulan lalu' />
        </Grid>
      </Grid>

      <h1>Home</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='slate' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='gray' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='red' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='orange' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='amber' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='yellow' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='green' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='blue' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='purple' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <InfoCard color='pink' title='Terkonfirmasi' subtitle='COVID-19' total='10' ket='0% dari bulan lalu' />
        </Grid>
      </Grid>
    </BaseLayout>
  )
}
