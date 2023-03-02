import { Alert, Button, FormControl, Grid, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useFormik } from 'formik'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from './redux/store'
import { addVideo } from './redux/slice'
import borutoGif from '../assets/totoro.png'

export default function AddVideo() {
  const [isPopup, setIsPopup] = React.useState<boolean>(false)
  const videos = useSelector((state: RootState) => state.video.value)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      img: '',
      video: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addVideo({
          ...values,
          video: `https://www.youtube.com/embed/${values.video}`,
          img: `https://img.youtube.com/vi/${values.img}/maxresdefault.jpg`,
          id: videos.length + 1,
          gif: borutoGif,
          views: Math.round(Math.random() * 1000),
          star: Math.round(((Math.random() * 10) % 5) + 1),
        })
      )
      setIsPopup(true)
      setTimeout(() => {
        setIsPopup(false)
      }, 3000)
      resetForm()
    },
  })

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'name', headerName: 'Name', width: 220 },
    {
      field: 'img',
      headerName: 'Image',
      width: 160,
      renderCell: (params) => (
        <img src={params.value} style={{ height: '100%', padding: '10px 0' }} />
      ),
    },
    {
      field: 'video',
      headerName: 'Video url',
      width: 200,
      renderCell: (params) => (
        <NavLink
          to={`../watch/${params.row.id as number}`}
          className="text-des"
        >
          {params.value}
        </NavLink>
      ),
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 270,
      renderCell: (params) => <p className="text-des">{params.value}</p>,
    },
  ]

  const rows = videos

  return (
    <Grid container spacing={4} style={{ padding: '4rem 2rem' }}>
      <Grid item xs={4}>
        <FormControl
          className="form-control"
          component="form"
          onSubmit={formik.handleSubmit}
          style={{ padding: '1.3rem' }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Create New Video
          </h3>
          <TextField
            id="outlined-controlled"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            style={{ marginBottom: '20px' }}
            required={true}
          />
          <TextField
            id="outlined-controlled"
            label="Image"
            name="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            style={{ marginBottom: '20px' }}
            required={true}
          />
          <TextField
            id="outlined-controlled"
            label="Video url"
            name="video"
            value={formik.values.video}
            onChange={formik.handleChange}
            style={{ marginBottom: '20px' }}
            required={true}
          />
          <TextField
            id="outlined-controlled"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            style={{ marginBottom: '20px' }}
            required={true}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ width: '50%', margin: '0 auto' }}
            type="submit"
          >
            Create
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
          rowHeight={100}
          style={{ backgroundColor: 'white', padding: '0 15px' }}
        />
      </Grid>
      {isPopup && (
        <Alert severity="success" className="popup">
          Create new video successfully 🎉
        </Alert>
      )}
    </Grid>
  )
}
