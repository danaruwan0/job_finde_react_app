import React, { useState } from 'react';
import './UploadCourse.css';
import Footer from '../../components/Footer/Footer';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';
import Swal from 'sweetalert2';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


export default function UploadCourse() {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCourse({
      ...course,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display SweetAlert on successful submission
    Swal.fire({
      icon: 'success',
      title: 'Course Uploaded!',
      html: `<strong>Title:</strong> ${course.title}<br/><strong>Description:</strong> ${course.description}`,
      confirmButtonColor: '#8F3E97'
    });

    console.log('Course uploaded:', course);
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-course-form">
        <Text className="upload-course-text" text="Upload Course" />

        <form onSubmit={handleSubmit}>
          <Input
            className="inputField"
            type="text"
            name="title"
            placeholder="Course Title"
            onChange={handleChange}
            required
            id={"course-titel"}
          />

          <Textarea
            className="textareaField"
            name="description"
            placeholder="Course Description"
            onChange={handleChange}
            required
            id={"course-textareaField"}
          />

          <Input
            type="file"
            name="file"
            onChange={handleChange}
            className="chooseFile"
            required
            id={"course-file"}
          />

          {course.file && (
            <p className="file-preview">Selected File: {course.file.name}</p>
          )}

          <Button
            type="submit"
            text="Upload"
            className="uploadBtn"
            id={"course-submit-btn"}
          />
        </form>
      </div>

      <Footer />
    </div>
  );
}
