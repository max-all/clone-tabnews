import React from 'react';

function Home() {
    const styles = {
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: 'black',
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
        Object.assign(document.body.style, styles.body);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Patricia, Eu amo Você! S2</h1>
        </div>
    );
}

export default Home;
