import React from 'react'

export default function AdminAddExcel() {
    return (
        <div style={{"paddingTop": 150}}>
            <h1>hay</h1>
            <form action="https://keneset-api.herokuapp.com/admin/uploadfile" enctype="multipart/form-data" method="post">
                <input type="file" name="uploadfile" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' />
                <input type="submit" value="Upload Excel" />
            </form>
        </div>
    )
}
