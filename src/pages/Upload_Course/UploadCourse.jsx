import React, { useState } from 'react';
import './UploadCourse.css';
import Footer from '../../components/Footer/Footer';

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
        alert('Course uploaded successfully!');
        console.log(course);
    };

    return (
        <div>
            <div className="upload-course-form">
                <h2>Upload Course</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Course Title" onChange={handleChange} required />
                    <textarea name="description" placeholder="Course Description" onChange={handleChange} required></textarea>
                    <input type="file" name="file" onChange={handleChange} required />
                    <button type="submit">Upload</button>
                </form>

                {/* <Footer/> */}
            </div>
            <Footer/>
        </div>
    );
}
