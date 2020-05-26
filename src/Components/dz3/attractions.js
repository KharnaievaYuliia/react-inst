import React from 'react';
import './dz3.css';

const styles = {
   
    flex: {
        display: "flex",
        flexDirection: "column",
    },
    a: {
        padding: "10px"
    }
}
const Attractions = () => {
    return (
        <div className="div">
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