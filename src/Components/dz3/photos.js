import React from 'react';

const styles = {
    div: {
        margin: "0 auto",
        width: "1300px",

    },
    photo: {
        width: "600px",
        height: "400px",
        marginRight: "35px",
    }
}

const Photos = () => {
    return (
        <div style={styles.div}>
            <center><h1>Photo gallery</h1></center>
            <h2>Hill of Glory and valley of roses</h2>
            <img src="./dz3/2.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/6.jpg" style={styles.photo} alt="photo" />

            <h2>Cherkasy Regional Administration</h2>
            <img src="./dz3/5.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/3.jpg" style={styles.photo} alt="photo" />

            <h2>House of Shcherbina or Marriage OFFICE</h2>
            <img src="./dz3/12.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/10.jpg" style={styles.photo} alt="photo" />

            <h2>Temple "White Lotus"</h2>
            <img src="./dz3/7.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/14.jpg" style={styles.photo} alt="photo" />

            <h2>Victory park</h2>
            <img src="./dz3/13.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/11.jpg" style={styles.photo} alt="photo" />

            <h2>Dnieper</h2>
            <img src="./dz3/4.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/8.jpg" style={styles.photo} alt="photo" />

            <h2>Famous places</h2>
            <img src="./dz3/1.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/9.jpg" style={styles.photo} alt="photo" />

        </div>
    );
}

export default Photos;