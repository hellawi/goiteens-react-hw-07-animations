import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

function InfoAlert() {
  return (
    <div>
        <Alert severity="info" sx={{width: 700, marginTop: 10, marginLeft: 40, display: "flex", alignItems: "center"}}>
            <AlertTitle sx={{fontSize: 20, fontWeight: "bold"}}>Info</AlertTitle>
            <span style={{fontSize: 20}}>No contacts found!</span>
        </Alert>
    </div>
  )
}

export default InfoAlert