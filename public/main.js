document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    console.log(app)

    const db = firebase.firestore();

    const xaver = db.collection('users').doc('8xZFq6mbLhgcJpukrzYm');

    xaver.get()
            .then(doc => {

                const data = doc.data();
                document.write(data.name+ '<br>')
                document.write(data.occupation+ '<br>')
                document.write(data.compoundScore + '<br>')
            })

});

