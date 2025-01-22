import React from 'react';

function Home() {
    const styles = {
        body: {
            margin: 0, // Remove margens do body
            padding: 0, // Remove padding do body
            backgroundColor: 'black', // Garante que o fundo do body seja preto
            height: '100vh',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        heading: {
            color: 'white',
            textAlign: 'center',
        },
    };

    React.useEffect(() => {
        Object.assign(document.body.style, styles.body); // Aplica estilos ao body
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Patricia, Eu amo Você!</h1>
        </div>
    );
}

export default Home;
