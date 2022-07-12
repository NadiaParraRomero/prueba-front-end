import React from 'react';

function Edit({username, saludar}){

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-tile'>Datos del componente padre.</h5>
                    <p className='card-text'>
                        {username}
                    </p>
                    <button onClick={() => {
                        saludar();
                    }}>saludar</button>
                </div>
            </div>
        </>
    )

}

export default Edit;