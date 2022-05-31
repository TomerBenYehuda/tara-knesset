import React from 'react'

export default function AdminAddExcel() {
    return (
        <div className='exceladmin'>
            <h1>להוספת רשימה נא לבחור קובץ</h1>

            <p>להורדה קובץ לדוגמא הנה לחץ  <a href='https://keneset-api.herokuapp.com/admin/downloadExcel'>הורד</a></p>
            <br />
            <form action="https://keneset-api.herokuapp.com/admin/uploadfile" enctype="multipart/form-data" method="post">
                <input type="file" name="uploadfile" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' />
                <input type="submit" value="Upload Excel" />
            </form>
        </div>
    )
}
