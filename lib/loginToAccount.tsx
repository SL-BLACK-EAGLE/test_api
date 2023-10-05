

export default function LoginToAccount(email: string, password: string) {
    fetch('http://localhost/student_management_system/backend/includes/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),

    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            window.location.href = "/";
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}
