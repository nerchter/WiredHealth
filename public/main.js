document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    console.log(app)

    const db = firebase.firestore();

    const xaver = db.collection('users').doc('tLAFB0mF3dy958AKkHgV');

    xaver.get()
            .then(doc => {

                const data = doc.data();
                document.write(data.name+ '<br>')
                document.write(data.compundscore)
            })

});

