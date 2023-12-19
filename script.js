function openModal() {
    var modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();

    document.getElementById('notifyForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;

function openModal() {
        fetch('https://jks-bikes.onrender.com/api/submitFormData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName: fullName, email: email }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Form data submitted to server:', data);
                modal.hide();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}
