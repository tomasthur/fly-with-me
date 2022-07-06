import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../Helpers/useFetch';

const MyPilotsList = () => {

    const {data} = useFetch('http://localhost:8000/my_pilots');

    const navigate = useNavigate();

  return (
    <div className='inner-container'>
        {data.filter(data => data.owner === true).map(filter => (
            <div className="card-pilot" key={filter.id}>
                <div className="row">
                <h3>{filter.firstname}  {filter.lastname}</h3>
                </div>
                <h5>function: {filter.position}</h5>
                <h5>airplane type: {filter.airplane}</h5>
                <div className="row">
                    <button onClick={() => navigate(`/mypilots/${filter.id}`)}>Pilot Detail</button>
                    <button onClick={() => navigate('/main')}>Main Page</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MyPilotsList