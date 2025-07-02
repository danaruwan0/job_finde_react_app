import './CategoryCard.css';
import { useState, useEffect } from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const categories = [
    { name: 'Healthcare', icon: <LocalHospitalIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '400+ Jobs' },
    { name: 'Education', icon: <SchoolIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '300+ Jobs' },
    { name: 'Engineering', icon: <EngineeringIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '450+ Jobs' },
    { name: 'Sales & Marketing', icon: <TrendingUpIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '350+ Jobs' },
    { name: 'Administration', icon: <BusinessCenterIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '250+ Jobs' },
    { name: 'Cleaning & Maintenance', icon: <CleaningServicesIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '150+ Jobs' },
    { name: 'Transport & Logistics', icon: <LocalShippingIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '200+ Jobs' },
    { name: 'Accounting & Finance', icon: <AccountBalanceIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '300+ Jobs' },
    { name: 'Information Technology', icon: <ComputerIcon className="category-icon" style={{ fontSize: 50, color: '#1976d2' }} />, jobs: '500+ Jobs' },
];

export default function CategoryCard() {
    const [showAll, setShowAll] = useState(false);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setVisibleCount(2); // Mobile
            } else if (width <= 1024) {
                setVisibleCount(2); // Tablet
            } else {
                setVisibleCount(6); //  Web/Desktop: Only show 6 by default
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const itemsToShow = showAll ? categories : categories.slice(0, visibleCount);

    return (
        <div>
            <div className="category-container">
                {itemsToShow.map((cat, index) => (
                    <div key={index} className="job-category-card">
                        {cat.icon}
                        <h3>{cat.name}</h3>
                        <p className='cat-jobs'>{cat.jobs}</p>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className="show-btn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Hide' : 'Show All Category'}
                </button>
            </div>
        </div>
    );
}
