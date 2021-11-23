import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';

const Details = () => {
    let { petId } = useParams();
    const [pet, setPet] = useState({});


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        let petResult = await petService.getOne(petId);
        setPet(petResult);
    }, []);

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    <Link className="button" to="#">Edit</Link>
                    <Link className="button" to="#">Delete</Link>
                    <Link className="button" to="#">Like</Link>
                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
};


export default Details;