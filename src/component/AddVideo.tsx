/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import * as Yup from 'yup'
import SendIcon from '@mui/icons-material/Send'
import { useFormik } from 'formik'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from './redux/store'
import { addVideo, deleteVideo, setInitialValue } from './redux/slice'
import DeleteIcon from '@mui/icons-material/Delete'
import { VideoAPI } from './VideoApi/VideoAPI'
import { getImage } from './helper/Utils'
import EditIcon from '@mui/icons-material/Edit'

const styleBox = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  textAlign: 'center',
}

export default function AddVideo() {
  const [isPopup, setIsPopup] = React.useState<boolean>(false)
  const [isPopup2, setIsPopup2] = React.useState<boolean>(false)
  const [update, setUpdate] = React.useState<number>(1)
  const [isEdit, setIsEdit] = React.useState<any>(null)
  const videos = useSelector((state: RootState) => state.video.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (videos.length === 0) {
      VideoAPI.getAll()
        .then((res) => {
          dispatch(setInitialValue(res.data))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [update])

  const finishEdit = (e: any) => {
    e.preventDefault()
    VideoAPI.editVideo(isEdit.id, isEdit).then(() => {
      setUpdate(update + 1)
      setIsEdit(null)
      setIsPopup2(true)
      setTimeout(() => {
        setIsPopup2(false)
      }, 3000)
    }).catch(err => { console.log(err) })
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      video: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {
      VideoAPI.createVideo(values)
        .then((res) => dispatch(addVideo(res.data)))
        .catch((err) => {
          console.log(err)
        })
      setIsPopup(true)
      setTimeout(() => {
        setIsPopup(false)
      }, 3000)
      resetForm()
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required.')
        .min(2, 'Must be 2 characters or more'),
      description: Yup.string()
        .required('Required.')
        .min(5, 'Description be 10 characters or more'),
      video: Yup.string()
        .required('Required.')
        .min(5, 'Video must be 10 characters or more'),
    }),
  })

  const [modal, setModal] = React.useState<string>('0')

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 270 },
    {
      field: 'img',
      headerName: 'Image',
      width: 160,
      renderCell: (params) => (
        <img
          src={getImage(params.row.video)}
          style={{ height: '90%', padding: '10px 0' }}
        />
      ),
    },
    {
      field: 'video',
      headerName: 'Video url',
      width: 120,
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
      width: 250,
      renderCell: (params) => <p className="text-des">{params.value}</p>,
    },
    {
      field: '',
      headerName: 'Action',
      width: 80,
      renderCell: (params) => (
        <div>
          <IconButton aria-label="edit" size="small" onClick={() => {
            setIsEdit(params.row)
          }}>
              {<EditIcon color="primary" fontSize='small' />}
          </IconButton>
          <IconButton aria-label="edit" size="small" onClick={() => {
            setModal(params.row.id)
          }}>
              {<DeleteIcon color="error" />}
          </IconButton>
        </div>
      ),
    },
  ]

  const rows = videos

  return (
    <Grid container spacing={4} style={{ padding: '6.3rem 2rem' }}>
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
          />
          {formik.errors.name && (
            <Typography variant="caption" color="red">
              {formik.errors.name}
            </Typography>
          )}
          <TextField
            id="outlined-controlled"
            label="Video url"
            name="video"
            value={formik.values.video}
            onChange={formik.handleChange}
            style={{ marginBottom: '20px' }}
          />
          {formik.errors.video && (
            <Typography variant="caption" color="red">
              {formik.errors.video}
            </Typography>
          )}
          <TextField
            id="outlined-controlled"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            style={{ marginBottom: '20px' }}
          />
          {formik.errors.description && (
            <Typography variant="caption" color="red">
              {formik.errors.description}
            </Typography>
          )}
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
          pageSize={3}
          rowsPerPageOptions={[3]}
          rowHeight={100}
          style={{ backgroundColor: 'white', padding: '0 15px' }}
        />
      </Grid>
      {isPopup && (
        <Alert
          severity="success"
          className="popup"
          style={{ position: 'absolute' }}
        >
          Create new video successfully 🎉
        </Alert>
      )}
      {isPopup2 && (
        <Alert
          severity="success"
          className="popup"
          style={{ position: 'absolute', right: '0' }}
        >
          Edit video successfully 🎉
        </Alert>
      )}
      <Modal
        open={modal !== '0'}
        onClose={() => {
          setModal('0')
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleBox}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure to delete this video.
          </Typography>
          <Button
            color="error"
            onClick={() => {
              dispatch(deleteVideo(modal))
              VideoAPI.deleteVideo(modal)
                .then(() => {})
                .catch(() => {})
              setModal('0')
            }}
          >
            Yes
          </Button>
        </Box>
      </Modal>

      {/* edit modal */}
      <Modal
        open={isEdit !== null}
        onClose={() => {
          setIsEdit(null)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormControl
          className="form-control"
          component="form"
          onSubmit={finishEdit}
          style={{ padding: '1.3rem', width: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Edit Information Video
          </h3>
          <TextField
            id="outlined-controlled"
            label="Name"
            name="name"
            value={isEdit?.name}
            onChange={(e) => { setIsEdit({ ...isEdit, name: e.target.value }) }}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            id="outlined-controlled"
            label="Video url"
            name="video"
            value={isEdit?.video}
            onChange={(e) => { setIsEdit({ ...isEdit, video: e.target.value }) }}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            id="outlined-controlled"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={isEdit?.description}
            onChange={(e) => { setIsEdit({ ...isEdit, description: e.target.value }) }}
            style={{ marginBottom: '20px' }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ width: '50%', margin: '0 auto' }}
            type="submit"
          >
            Save
          </Button>
        </FormControl>
      </Modal>
    </Grid>
  )
}
