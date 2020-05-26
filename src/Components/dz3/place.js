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
    },
    text: {
        fontSize: "20px"
    }
}
const Place = () => {
    return (
        <diV style={styles.div}>
            <h1>The most famous place in Cherkasy is "Hill of Fame".</h1>
            <p style={styles.text}>The famous attraction of Cherkasy is the Hill of Glory, which was erected in memory of the fallen residents of the city during the Second World War. The memorial commemorates the Circassians who died on the fronts and the soldiers who fell in the battles for Cherkasy.</p>
            <img src="./dz3/2.jpg" style={styles.photo} alt="photo" />
            <img src="./dz3/6.jpg" style={styles.photo} alt="photo" />
            <p style={styles.text}>In 1974, designers of the Cherkasy branch of the Dneprocivilpromstroy Institute were commissioned to create a memorial complex in honor of the living and dead heroes of World War II. The castle hill was chosen as the place for construction. At this place was the ancient Russian settlement and the remains of the Cherkasy fortress, as well as the Holy Trinity Church. All architectural and archaeological sites were completely destroyed in 1977 during the construction of the monument.In addition, they decided to expand <b>the hill towards the Dnieper by 28 m and raise by 10 m.</b> Construction work continued until the spring of 1977 and on May 9, Victory Day, the grand opening of the complex took place. The authors of the memorial project were sculptors G. N. Kalchenko - People's Artist of the Ukrainian SSR, M. Kuntsevich - co-author, Honored Art Worker of the Ukrainian SSR, and B. P. Nikitenko, architects A.F. Ivashchenko and O.S. Renkas. <b>The gypsum figure of the Motherland</b> was cast in the repair shop of the Azot production association. In the center of the huge memorial square are the graves of 5 Heroes of the Soviet Union: V. M. Molotkov, V. P. Podnevich, I. O. Onoprienko, F. F. Lazarev, S. A. Chalov.</p>
            <p style={styles.text}>Currently, the total height of the earthen hill is 10 m, the diameter of the base is 60 m. Almost a thousand soldiers are buried on the top of the hill. Terraces lined with granite blocks lead to the top of the hill. The bulk of the hill is surrounded by a memorial granite wall with the names of the inhabitants of the city who fell in battle. A wide panorama of the <b>Kremenchug reservoir</b> opens from the top. In 2009, Cherkashians in an innovative way (the first in the country) abandoned the “eternal” gas fire in the interests of an artificial flame that simulates real fire. From now on, the electric eternal flame in the hand of Mother Motherland will burn around the clock. </p>
        </diV>

    );
}

export default Place;