import React, { useState } from 'react';
import './postJob.css';
import Footer from '../../components/Footer/Footer';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';
import Swal from 'sweetalert2';

export default function PostJob() {
    const [job, setJob] = useState({
        title: '',
        company: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Job Posted!',
            html: `<strong>Title:</strong> ${job.title}<br/><strong>Description:</strong> ${job.description}`,
            confirmButtonColor: '#8F3E97'
        });

        console.log(job);
    };

    return (
        <div>
            <div className="job-form-container">
                <Text className="form-title" text="Post a New Job" />
                <form onSubmit={handleSubmit} className='form-div'>
                    <Input
                        className="form-input"
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        onChange={handleChange}
                        required
                    />
                    <Input
                        className="form-input"
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        onChange={handleChange}
                        required
                    />
                    <Input
                        className="form-input"
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={handleChange}
                        required
                    />

                     <Input
                        className="form-input"
                        type="text"
                        name="salary"
                        placeholder="Salary"
                        onChange={handleChange}
                        required
                    />
                    <Textarea
                        className="form-textarea"
                        name="description"
                        placeholder="Job Description"
                        onChange={handleChange}
                        required
                    />

                   
                    
                    <Button
                        type="submit"
                        text="Post Job"
                        className="submit-button"
                        id={"postj-sumbit"}
                    />
                </form>
            </div>
            <Footer />
        </div>
    );
}
