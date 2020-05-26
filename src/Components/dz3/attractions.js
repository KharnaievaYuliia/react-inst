import React from 'react';

const styles = {
    div: {
        margin: "0 auto",
        width: "1300px",
    },
    flex: {
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
    },
    a: {
        padding: "10px"
    }
}
const Attractions = () => {
    return (
        <div style={styles.div}>
            <h1>The most popular places</h1>
            <div style={styles.flex}>
                <a href="./photos" style={styles.a}>Hill of Glory</a>
                <a href="./photos" style={styles.a}>Victory park</a>
                <a href="./photos" style={styles.a}>Cherkasy Regional Administration</a>
                <a href="./photos" style={styles.a}>House of Shcherbina or Marriage OFFICE</a>
                <a href="./photos" style={styles.a}>Temple "White Lotus"</a>
            </div>
        </div>
    );
}

export default Attractions;